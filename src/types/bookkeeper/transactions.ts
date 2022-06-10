import { ID, SegmentId } from "interactive-elements"
import { AccountNumber } from "."
import { AddtionalTransferInfo, Asset, AssetRates, StockValueData } from ".."

/**
 * Additional optional information like stock changes or conversion rates used for a transaction line.
 */
export type TransactionLineData = {
  stock?: {
    change: Record<Asset, StockValueData>
  }
  rates?: AssetRates
}

/**
 * A single line of transaction.
 */
export type TransactionLine = {
  id?: ID
  account: AccountNumber,
  amount: number,
  description: string,
  data?: AddtionalTransferInfo
}

/**
 * If transaction is a result of an import, then this type describes if it has been created.
 */
export type ImportExecutionResult = 'not done' | 'created' | 'duplicate' | 'ignored'

/**
 * A transaction data.
 */
export type Transaction = {
  id?: ID
  date: Date,
  segmentId?: SegmentId
  entries: TransactionLine[]
  executionResult?: ImportExecutionResult
}

/**
 * Sort transactions so that their entries are sorted by account number and transactions by their date.
 * @param txs
 * @returns
 */
export function sortTransactions(txs: Transaction[]) {
  for (const tx of txs) {
    tx.entries = tx.entries.sort((a, b) => a.account === b.account ? 0 : (a.account < b.account ? -1 : 1))
  }
  return txs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}
