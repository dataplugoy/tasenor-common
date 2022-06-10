import { ExpenseSink, IncomeSource, Knowledge, LinkedTree, VATRange } from "../src"

const expense: LinkedTree<ExpenseSink> = {
  "root": "EXPENSE",
  "children": {
    "EXPENSE": [
      "EQUIPMENT",
      "TRAVEL",
      "ADMIN"
    ],
    "EQUIPMENT": [
      "MACHINERY",
      "FURNITURE",
      "COMPUTING"
    ],
    "COMPUTING": [
      "HARDWARE"
    ],
    "HARDWARE": [
      "COMPUTER",
      "COMPUTER_ACCESSORIES"
    ],
    "COMPUTER": [
      "DESKTOP",
      "LAPTOP"
    ],
    "COMPUTER_ACCESSORIES": [
      "PRINTER"
    ],
    "TRAVEL": [
      "TICKET"
    ],
    "TICKET": [
      "BUS_TICKET",
      "TRAIN_TICKET",
      "PLANE_TICKET"
    ],
    "ADMIN": [
      "ADMIN_OTHER"
    ],
    "ADMIN_OTHER": [
      "BOOK"
    ]
  },
  "parents": {
    "EXPENSE": undefined,
    "EQUIPMENT": "EXPENSE",
    "MACHINERY": "EQUIPMENT",
    "FURNITURE": "EQUIPMENT",
    "COMPUTING": "EQUIPMENT",
    "HARDWARE": "COMPUTING",
    "COMPUTER": "HARDWARE",
    "DESKTOP": "COMPUTER",
    "LAPTOP": "COMPUTER",
    "COMPUTER_ACCESSORIES": "HARDWARE",
    "PRINTER": "COMPUTER_ACCESSORIES",
    "TRAVEL": "EXPENSE",
    "TICKET": "TRAVEL",
    "BUS_TICKET": "TICKET",
    "TRAIN_TICKET": "TICKET",
    "PLANE_TICKET": "TICKET",
    "ADMIN": "EXPENSE",
    "ADMIN_OTHER": "ADMIN",
    "BOOK": "ADMIN_OTHER"
  }
}

const income: LinkedTree<IncomeSource> = {
  "root": "INCOME",
  "children": {
    "INCOME": [
      "INVEST",
      "SALES"
    ],
    "INVEST": [
    ],
    "DIVIDEND": [
      "LISTED_DIVIDEND",
      "NON_LISTED_DIVIDEND"
    ],
    "INTEREST": [
      "P2P_INTEREST"
    ],
    "SALES": [
    ]
  },
  "parents": {
    "INCOME": undefined,
    "INVEST": "INCOME",
    "LISTED_DIVIDEND": "DIVIDEND",
    "P2P_INTEREST": "INTEREST",
    "SALES": "INCOME",
  }
}

const vat: VATRange[] = [
  {
    "from": "2013-01-01",
    "to": null,
    "percentage": {
      "INCOME": 24,
      "INVEST": 0,
      "EXPENSE": 24,
      "BOOK": 10,
      "PRINTER": 24
    }
  }
]

test('Knowledge: VAT', () => {
  const K = new Knowledge({
    expense,
    income,
    taxTypes: [],
    vat
  })

  expect(K.isIncome('SALES')).toBe(true)
  expect(K.isIncome('BOOK')).toBe(false)
  expect(K.isExpense('SALES')).toBe(false)
  expect(K.isExpense('BOOK')).toBe(true)

  expect(K.vat('INCOME' as IncomeSource, '2010-01-01')).toBe(null)
  expect(K.vat('ZXCVBN' as IncomeSource, '2013-01-01')).toBe(null)
  expect(K.vat('INCOME' as IncomeSource, '2013-01-01')).toBe(24)

  expect(K.vat('EXPENSE' as ExpenseSink, '2010-01-01')).toBe(null)
  expect(K.vat('ZXCVBN' as ExpenseSink, '2013-01-01')).toBe(null)
  expect(K.vat('EXPENSE' as ExpenseSink, '2013-01-01')).toBe(24)
  expect(K.vat('COMPUTER' as ExpenseSink, '2013-01-01')).toBe(24)
})

test('Knowledge: Trees', () => {
  const K = new Knowledge({
    expense,
    income,
    taxTypes: [],
    vat
  })

  expect(K.vatTable('2020-01-01')).toStrictEqual([
    { id: 'INCOME', name: 'income-INCOME', level: 0, value: 24 },
    { id: 'INVEST', name: 'income-INVEST', level: 1, value: 0 },
    { id: 'EXPENSE', name: 'expense-EXPENSE', level: 0, value: 24 },
    { id: 'ADMIN', name: 'expense-ADMIN', level: 1, value: 24 },
    { id: 'ADMIN_OTHER', name: 'expense-ADMIN_OTHER', level: 2, value: 24 },
    { id: 'BOOK', name: 'expense-BOOK', level: 3, value: 10 },
    { id: 'EQUIPMENT', name: 'expense-EQUIPMENT', level: 1, value: 24 },
    { id: 'COMPUTING', name: 'expense-COMPUTING', level: 2, value: 24 },
    { id: 'HARDWARE', name: 'expense-HARDWARE', level: 3, value: 24 },
    { id: 'COMPUTER_ACCESSORIES', name: 'expense-COMPUTER_ACCESSORIES', level: 4, value: 24 },
    { id: 'PRINTER', name: 'expense-PRINTER', level: 5, value: 24 }
  ])
 })
