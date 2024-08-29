import { createContext, useState } from "react";

export const GlobalTransactionContext = createContext([]);

export const GlobalTransactionContextProvider = ({children}) => {
    const [transaction, setTransaction] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [balance, setBalance] = useState(0);

    return (
        <GlobalTransactionContext.Provider value={{transaction, setTransaction, totalIncome, setTotalIncome, totalExpense, setTotalExpense, balance, setBalance}}>
            {children}
        </GlobalTransactionContext.Provider>
    )

}

