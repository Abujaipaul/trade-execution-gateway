import {useState, useRef, useEffect} from 'react'
import { AccountContext } from './accountcontext'
import {useContext} from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Otp(){
   const [codeOtp, setCodeOtp] = useState(new Array(4).fill(""))
   const [timer, setTimer] = useState(30)

   

   const {deductBalance, walletBalance} = useContext(AccountContext)
   const location = useLocation()
   const {price} = location.state

   const navigate = useNavigate()

     console.log(price)


   const inputRef = useRef([])
   const timerRef = useRef(0)

    function handleChange(el, index){
        const value = el.target.value

        if(isNaN(value)){
            return
        }
       
        const copiedOtp = [...codeOtp]
        copiedOtp[index] = value
        setCodeOtp(copiedOtp)
        //move automatically to the next box
        if(value && index < 3 ){
            inputRef.current[index + 1].focus()
        }
    }

     useEffect(() => {
         inputRef.current[0].focus()

        function startTime(){
            setTimer((prev) => {
                if(prev < 1){
                    return 0
                }else{
                    return prev - 1
                }
            })
        }
        
        timerRef.current = setInterval(
         startTime, 1000
        )

        return () => clearInterval(timerRef.current)
     },[])


        //  function handleBuy(){
        //     if(codeOtp){
        //      deductBalance(price)
        //      alert(`Trade Executed! New Balance: ₦${walletBalance}`)
        //     }
        // }
        //  handleBuy()

        
     useEffect(() => {

        const finalOtp = codeOtp.join("")

        if(finalOtp.length === 4 && timer > 1){
            deductBalance(price)
            alert(`Trade Executed! Balance deducted : ₦${price}`)
            navigate("/")
        }
     }, [codeOtp])

   


    
    return(

        <>
         <div className="otp-box">
            {
            codeOtp.map((num, index) => (
                <input type="tel" key={index} ref={(el) => inputRef.current[index] = el} maxLength={1} value={num} onChange={(el) => handleChange(el, index)}/>
            ))
          }      
         </div>

         <br />
           <div className='timer-div'>
              {
               <p>You can send another Otp-code after {timer} seconds <span style={{color: 'blue', fontWeight : "bolder"}}>CLICK HERE</span></p>
              }
           </div>
          
        </>
    )
}