import {AccountContext} from "./accountcontext"
import { useContext, useState, useRef, useEffect} from "react"
import { useNavigate} from 'react-router'


export default function Portfolio (){
     const {walletBalance, userName} = useContext(AccountContext)
     const [price, setPrice] = useState(141)

     const navigate = useNavigate() 

     const previousPrice = useRef("")
     let intervalId = null

     const transformPrice = new Intl.NumberFormat("EN-Ng", {
        style : 'currency',
        currency : "NGN"
     }).format(price)

     const transformWalletBalance = new Intl.NumberFormat("EN-NG", {
        style : 'currency',
        currency : "NGN"
     }).format(walletBalance)

    //  const transformPreviousPrice = new Intl.NumberFormat("EN-NG", {
    //     style : 'currency',
    //     currency : "NGN"
    //  }).format(previousPrice.current)

     
      useEffect(() => {
         function runPrice(){
            const randomNumber = Math.floor(Math.random() * 10000) + 45000
            setPrice((prev) => {
                if(prev){
                    return randomNumber
                }
            })
            previousPrice.current = price
         }

         intervalId = setInterval(runPrice, 2000)

         return () => clearInterval(intervalId)


      },[price]) 

      function handleNavigate(){
         navigate('/otp', {state : {price : price}})
      }
      
     
    return (
        <>
      <div className='main'>
             <div className="id-details">
             <div>
             <p>UserName : <span >{userName}</span> </p>
             </div>
             <div>
             <p>WalletBalance : <span>{transformWalletBalance}</span>  </p>
             </div>
             </div>

       <div className="stock-details">
        <p>StockName : <span style={{color: 'orange'}}>GTCO</span> </p>
        <br />
        <p>StockPrice : {transformPrice} </p>
        <br />
          {
          price > previousPrice.current && <p>🟢 Trending Up</p>
        }
        {
          price < previousPrice.current && <p>🔴 Trending Down</p>
        }
        {
           price === previousPrice.current && <p>⚪ Holding Steady</p>
        }
       </div>


       <div className='button-div'>
        <button onClick={handleNavigate}>Execute Trade</button>
       </div>
    </div>
        </>
    )
}