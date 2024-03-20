import * as Crypto from 'expo-crypto';


export const newExpense = (attrs) => {
  const expense = {
    amount: attrs.amount || 'Ammount',
    date: attrs.date || 'Expense Date',
    id: Crypto.randomUUID(),
  };

  return expense;
};