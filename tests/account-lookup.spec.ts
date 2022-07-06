import { address2sql, PluginCode, AccountAddress } from '../src'

test('Convert account address to account default', async () => {
  const addr2sql = (addr: string, options: Record<string, string>) => address2sql(addr as AccountAddress, {
    defaultCurrency: 'EUR',
    plugin: 'SomeImport' as PluginCode,
    strict: true,
    ...options
  })

  expect(addr2sql('debt.currency.EUR', {})).toBe(
    "(data->>'tax' = 'OTHER_CREDITORS') AND (data->>'plugin' = 'SomeImport') AND (data->>'currency' = 'EUR' OR data->>'currency' IS NULL)"
  )
  expect(addr2sql('debt.currency.SEK', {})).toBe(
    "(data->>'tax' = 'OTHER_CREDITORS') AND (data->>'currency' = 'SEK') AND (data->>'plugin' = 'SomeImport')"
  )
  expect(addr2sql('debt.currency.USD', {})).toBe(
    "(data->>'tax' = 'OTHER_CREDITORS') AND (data->>'currency' = 'USD') AND (data->>'plugin' = 'SomeImport')"
  )
  expect(addr2sql('deposit.currency.EUR', {})).toBe(
    "(data->>'tax' = 'CASH') AND (data->>'plugin' = 'SomeImport') AND (data->>'currency' = 'EUR' OR data->>'currency' IS NULL)"
  )
  expect(addr2sql('deposit.external.EUR', {})).toBe(
    "(data->>'tax' = 'CASH') AND (data->>'plugin' != 'SomeImport') AND (data->>'currency' = 'EUR' OR data->>'currency' IS NULL)"
  )
  expect(addr2sql('distribution.currency.EUR', {})).toBe(
    null
  )
  expect(addr2sql('distribution.statement.LISTED_DIVIDEND', {})).toBe(
    null
  )
  expect(addr2sql('dividend.currency.EUR', {})).toBe(
    "(data->>'tax' = 'DIVIDEND') AND (data->>'plugin' = 'SomeImport') AND (data->>'currency' = 'EUR' OR data->>'currency' IS NULL)"
  )
  expect(addr2sql('dividend.currency.SEK', {})).toBe(
    "(data->>'tax' = 'DIVIDEND') AND (data->>'currency' = 'SEK') AND (data->>'plugin' = 'SomeImport')"
  )
  expect(addr2sql('dividend.currency.USD', {})).toBe(
    "(data->>'tax' = 'DIVIDEND') AND (data->>'currency' = 'USD') AND (data->>'plugin' = 'SomeImport')"
  )
  expect(addr2sql('expense.currency.EUR', {})).toBe(
    "(data->>'tax' = 'CASH') AND (data->>'plugin' = 'SomeImport') AND (data->>'currency' = 'EUR' OR data->>'currency' IS NULL)"
  )
  expect(addr2sql('expense.statement.ADMIN', {})).toBe(
    "(data->>'tax' = 'ADMIN') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.BANKING_FEE', {})).toBe(
    "(data->>'tax' = 'BANKING_FEE') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.EQUIPMENT', {})).toBe(
    "(data->>'tax' = 'EQUIPMENT') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.FURNITURE', {})).toBe(
    "(data->>'tax' = 'FURNITURE') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.HARDWARE', {})).toBe(
    "(data->>'tax' = 'HARDWARE') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.INFORMATION', {})).toBe(
    "(data->>'tax' = 'INFORMATION') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.INTEREST_EXPENSE', {})).toBe(
    "(data->>'tax' = 'INTEREST_EXPENSE') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.INTERNET', {})).toBe(
    "(data->>'tax' = 'INTERNET') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.MEETINGS', {})).toBe(
    "(data->>'tax' = 'MEETINGS') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.NEEDS_MANUAL_INSPECTION', {})).toBe(
    "(data->>'tax' = 'NEEDS_MANUAL_INSPECTION') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.PHONE', {})).toBe(
    "(data->>'tax' = 'PHONE') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.POSTAGE', {})).toBe(
    "(data->>'tax' = 'POSTAGE') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.SOFTWARE', {})).toBe(
    "(data->>'tax' = 'SOFTWARE') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.STOCK_BROKER_SERVICE_FEE', {})).toBe(
    "(data->>'tax' = 'STOCK_BROKER_SERVICE_FEE') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.TICKET', {})).toBe(
    "(data->>'tax' = 'TICKET') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('expense.statement.TRADE_LOSS_STOCK', {})).toBe(
    "(data->>'tax' = 'TRADE_LOSS_STOCK') AND (type = 'EXPENSE')"
  )
  expect(addr2sql('fee.currency.EUR', {})).toBe(
    "(data->>'tax' = 'CASH') AND (data->>'plugin' = 'SomeImport') AND (data->>'currency' = 'EUR' OR data->>'currency' IS NULL)"
  )
  expect(addr2sql('forex.currency.EUR', {})).toBe(
    "(data->>'tax' = 'CASH') AND (data->>'plugin' = 'SomeImport') AND (data->>'currency' = 'EUR' OR data->>'currency' IS NULL)"
  )
  expect(addr2sql('forex.currency.SEK', {})).toBe(
    "(data->>'tax' = 'CASH') AND (data->>'currency' = 'SEK') AND (data->>'plugin' = 'SomeImport')"
  )
  expect(addr2sql('forex.currency.USD', {})).toBe(
    "(data->>'tax' = 'CASH') AND (data->>'currency' = 'USD') AND (data->>'plugin' = 'SomeImport')"
  )
  expect(addr2sql('income.currency.EUR', {})).toBe(
    "(data->>'tax' = 'CASH') AND (data->>'plugin' = 'SomeImport') AND (data->>'currency' = 'EUR' OR data->>'currency' IS NULL)"
  )
  expect(addr2sql('income.statement.FINLAND_SALES', {})).toBe(
    "(data->>'tax' = 'FINLAND_SALES') AND (type = 'REVENUE')"
  )
  expect(addr2sql('income.statement.LISTED_DIVIDEND', {})).toBe(
    "(data->>'tax' = 'LISTED_DIVIDEND') AND (type = 'REVENUE')"
  )
  expect(addr2sql('income.statement.TRADE_PROFIT_STOCK', {})).toBe(
    "(data->>'tax' = 'TRADE_PROFIT_STOCK') AND (type = 'REVENUE')"
  )
  expect(addr2sql('investment.currency.EUR', {})).toBe(
    null
  )
  expect(addr2sql('investment.statement.NREQ', {})).toBe(
    "(data->>'tax' = 'NREQ') AND (data->>'plugin' = 'SomeImport') AND (type = 'EQUITY')"
  )
  expect(addr2sql('tax.currency.EUR', {})).toBe(
    null
  )
  expect(addr2sql('tax.statement.CORPORATE_TAX', {})).toBe(
    "(data->>'tax' = 'CORPORATE_TAX') AND (type = 'LIABILITY' OR type = 'ASSET')"
  )
  expect(addr2sql('tax.statement.NEEDS_MANUAL_INSPECTION', {})).toBe(
    "(data->>'tax' = 'NEEDS_MANUAL_INSPECTION') AND (type = 'LIABILITY' OR type = 'ASSET')"
  )
  expect(addr2sql('tax.statement.PENALTY_OF_DELAY', {})).toBe(
    "(data->>'tax' = 'PENALTY_OF_DELAY') AND (type = 'LIABILITY' OR type = 'ASSET')"
  )
  expect(addr2sql('tax.statement.TAX_AT_SOURCE', {})).toBe(
    "(data->>'tax' = 'TAX_AT_SOURCE') AND (type = 'LIABILITY' OR type = 'ASSET')"
  )
  expect(addr2sql('tax.statement.VAT_DELAYED_PAYABLE', {})).toBe(
    "(data->>'tax' = 'VAT_DELAYED_PAYABLE') AND (type = 'LIABILITY' OR type = 'ASSET')"
  )
  expect(addr2sql('tax.statement.VAT_FROM_PURCHASES', {})).toBe(
    "(data->>'tax' = 'VAT_FROM_PURCHASES') AND (type = 'LIABILITY' OR type = 'ASSET')"
  )
  expect(addr2sql('tax.statement.VAT_FROM_SALES', {})).toBe(
    "(data->>'tax' = 'VAT_FROM_SALES') AND (type = 'LIABILITY' OR type = 'ASSET')"
  )
  expect(addr2sql('tax.statement.VAT_RECEIVABLE', {})).toBe(
    "(data->>'tax' = 'VAT_RECEIVABLE') AND (type = 'LIABILITY' OR type = 'ASSET')"
  )
  expect(addr2sql('tax.statement.WITHHOLDING_TAX', {})).toBe(
    "(data->>'tax' = 'WITHHOLDING_TAX') AND (type = 'LIABILITY' OR type = 'ASSET')"
  )
  expect(addr2sql('trade.currency.EUR', {})).toBe(
    "(data->>'tax' = 'CASH') AND (data->>'plugin' = 'SomeImport') AND (data->>'currency' = 'EUR' OR data->>'currency' IS NULL) AND (type = 'ASSET')"
  )
  expect(addr2sql('trade.currency.USD', {})).toBe(
    "(data->>'tax' = 'CASH') AND (data->>'currency' = 'USD') AND (data->>'plugin' = 'SomeImport') AND (type = 'ASSET')"
  )
  expect(addr2sql('trade.stock.*', {})).toBe(
    "(data->>'tax' = 'CURRENT_PUBLIC_STOCK_SHARES') AND (data->>'plugin' = 'SomeImport') AND (type = 'ASSET')"
  )
  expect(addr2sql('trade.crypto.*', {})).toBe(
    "(data->>'tax' = 'CURRENT_CRYPTOCURRENCIES') AND (data->>'plugin' = 'SomeImport') AND (type = 'ASSET')"
  )
  expect(addr2sql('transfer.currency.EUR', {})).toBe(
    "(data->>'tax' = 'CASH') AND (data->>'plugin' = 'SomeImport') AND (data->>'currency' = 'EUR' OR data->>'currency' IS NULL) AND (type = 'ASSET')"
  )
  expect(addr2sql('transfer.external.Coinbase', {})).toBe(
    null
  )
  expect(addr2sql('transfer.external.Lynx', {})).toBe(
    null
  )
  expect(addr2sql('transfer.external.PayPal', {})).toBe(
    null
  )
  expect(addr2sql('transfer.external.NEEDS_MANUAL_INSPECTION', {})).toBe(
    "(data->>'tax' = 'NEEDS_MANUAL_INSPECTION')"
  )
  expect(addr2sql('withdrawal.currency.EUR', {})).toBe(
    "(data->>'tax' = 'CASH') AND (data->>'plugin' = 'SomeImport') AND (data->>'currency' = 'EUR' OR data->>'currency' IS NULL)"
  )
})
