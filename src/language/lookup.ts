import { warning } from "../logging"
import { AccountAddress, AccountType, Asset, AssetCode, Currency, ExpenseSink, IncomeSource, PluginCode, TaxType } from "../types"

/**
 * A condition description to match accunts.
 */
export interface AccountLookupCondition {
  tax: Asset | TaxType | AssetCode
  currency?: Currency
  plugin?: PluginCode
  type?: AccountType | AccountType[]
}

/**
 * Additional information for looking up an account.
 */
export interface AccountLookupOption {
  defaultCurrency: Currency,
  plugin: PluginCode,
  strict?: boolean
}

/**
 * Convert address lookup to condition.
 * @param addr
 * @param options
 * @returns
 */
export function conditions(addr: AccountAddress, options: AccountLookupOption): AccountLookupCondition | null {
  const [reason, type, asset] = addr.split('.')

  if (reason === 'debt') {
    if (type === 'currency') {
      // TODO: Or more general creditor instead?
      return { tax: 'OTHER_CREDITORS', currency: asset as Currency, plugin: options.plugin }
    }
  }

  if (reason === 'deposit') {
    if (type === 'currency') {
      return { tax: 'CASH', currency: asset as Currency, plugin: options.plugin }
    }
    if (type === 'external') {
      return null
    }
  }

  if (reason === 'distribution') {
    return null
  }

  if (reason === 'dividend') {
    if (type === 'currency') {
      // TODO: How to handle different sub-types of dividend?
      // Maybe we return options from tightest to more general. Then use first match.
      // Or even directly resolve parenthoods here and return list of SQL in order of preference.
      // If more than one match. show them as first in account dropdown.
      return { tax: 'DIVIDEND', currency: asset as Currency, plugin: options.plugin }
    }
  }

  if (reason === 'expense') {
    if (type === 'currency') {
      // TODO: Is there any change that we could handle this?
      return null
    }
    if (type === 'statement') {
      return { type: AccountType.EXPENSE, tax: asset as ExpenseSink, plugin: options.plugin }
    }
  }

  if (reason === 'fee') {
    if (type === 'currency') {
      return null
    }
  }

  if (reason === 'forex') {
    if (type === 'currency') {
      return { tax: 'CASH', currency: asset as Currency, plugin: options.plugin }
    }
  }

  if (reason === 'income') {
    if (type === 'currency') {
      // TODO: Is there any change that we could handle this?
      return null
    }
    if (type === 'statement') {
      return { type: AccountType.REVENUE, tax: asset as IncomeSource, plugin: options.plugin }
    }
  }

  if (reason === 'investment') {
    if (type === 'currency') {
      return null
    }
    if (type === 'statement') {
      return { type: AccountType.EQUITY, tax: asset as Currency, plugin: options.plugin }
    }
  }

  if (reason === 'tax') {
    if (type === 'currency') {
      return null
    }
    if (type === 'statement') {
      return { type: [AccountType.LIABILITY, AccountType.ASSET], tax: asset as TaxType }
    }
  }

  if (reason === 'trade') {
    if (type === 'currency') {
      return { type: AccountType.ASSET, tax: 'CASH', currency: asset as Currency, plugin: options.plugin }
    }
    if (type === 'stock') {
      return { type: AccountType.ASSET, tax: 'CURRENT_PUBLIC_STOCK_SHARES', currency: asset as Currency, plugin: options.plugin }
    }
    if (type === 'crypto') {
      return { type: AccountType.ASSET, tax: 'CURRENT_CRYPTOCURRENCIES', currency: asset as Currency, plugin: options.plugin }
    }
  }

  if (reason === 'transfer') {
    if (type === 'currency') {
      return { type: AccountType.ASSET, tax: 'CASH', currency: asset as Currency, plugin: options.plugin }
    }
    if (type === 'external') {
      if (asset === 'NEEDS_MANUAL_INSPECTION') {
        return { tax: asset }
      }
      return null
    }
  }

  if (reason === 'withdrawal') {
    if (type === 'currency') {
      return { tax: 'CASH', currency: asset as Currency, plugin: options.plugin }
    }
  }

  const message = `No SQL conversion known for account address '${addr}'.`
  if (options.strict) {
    throw new Error(message)
  }
  warning(message)
  return null
}

/**
 * Create SQL expression matching the accounts according to lookup parameters.
 *
 * @param addr
 * @param options
 * @returns
 */
export function address2sql(addr: AccountAddress, options: AccountLookupOption): string | null {
  const cond = conditions(addr, options)
  if (cond === null) {
    return null
  }

  const addSql: string[] = []
  if (cond.currency === options.defaultCurrency) {
    addSql.push(`(data->>'currency' = '${cond.currency}' OR data->>'currency' IS NULL)`)
    delete cond.currency
  }

  if (cond.type) {
    if (typeof cond.type === 'string') {
      addSql.push(`(type = '${cond.type}')`)
    } else {
      addSql.push('(' + cond.type.map(t => `type = '${t}'`).join(' OR ') + ')')
    }
    delete cond.type
  }

  const sql = Object.keys(cond).map(key => `(data->>'${key}' = '${cond[key]}')`)

  return [...sql, ...addSql].join(' AND ')
}
