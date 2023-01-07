import { useTransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useTransactionsContext()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.entry += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }
      return acc
    },
    { entry: 0, outcome: 0, total: 0 },
  )

  return summary
}
