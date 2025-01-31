import Icon from "components/Icon";
import { useState } from "react";
import TextAreaAutosize from "react-textarea-autosize"
export default function Reply({setMessages}) {
 
    const [message, setMessage] = useState("")
    const sendMessage =  (e) => {
        e.preventDefault()

        setMessages(messages => [
            ...messages,
            {
                from:{
        
            id: "RK9ljD0bxCPSRI0NEzBuzUauPLO2", // benim id RK9ljD0bxCPSRI0NEzBuzUauPLO2
             name: "Anıl Turan",
             username: "turananil",
             avatar: "https://pbs.twimg.com/profile_images/1365374048876847113/hst5gmS9_400x400.png"                
             } ,
             message
                
            },
        ] )
            setMessage("")

    }
 
    
    
    return (
        <footer className="h-[84px]  flex items-center justify-center px-6" >
        <form  onSubmit={sendMessage} className="h-[44px]   border rounded-full flex items-center w-full pl-[11px] pr-[8px]">
        
        <button type="button" className=" w-[40px] h-[42px] flex items-center justify-center" >
            <Icon name="emoji" size="24" />
        </button>

        <input value={message}  onChange={e => setMessage(e.target.value)} 
        className="flex-1 outline-none min-h-[40px] py-4 
        placeholder:text-gray-500 
        focus:placeholder:text-gray-300 text-sm px-[9px]" placeholder="Message" >  
        </input>
        
        {!message && (
            <>
            
            <button type="button" className=" w-[40px] h-[42px] flex items-center justify-center" >
            <Icon name="picture" size="24" />
        </button>
        
        <button  type="button" className=" w-[40px] h-[42px] flex items-center justify-center" >
            <Icon name="heart" size="24" />
        </button>
            
            </>
        )}

        {message && <button  type="submit" className="text-brand font-semibold text-sm px-3" >Send</button>}
        
        
        </form>
        </footer>
    )
}