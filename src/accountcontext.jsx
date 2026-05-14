import {createContext, useState}  from "react"

export const AccountContext = createContext()

export default function AccountProvider({children}){
    const userName = "Abujai Paul"
    const [walletBalance, setWalletBalance] = useState(2500000)

    function deductBalance(amount){
        setWalletBalance((prev) => prev - amount)
    }

    return(
        <AccountContext.Provider value={{walletBalance, userName, deductBalance}} >
           {children}
        </AccountContext.Provider>
    )

}

