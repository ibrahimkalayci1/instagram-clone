import { useState } from "react";
import Header from "./components/header";
import Messages from "./components/messages";
import Reply from './components/reply';

export default function Chat() {

    const user= {
        name:"İbrahim Kalaycı",
        avatar: "https://pbs.twimg.com/profile_images/1365374048876847113/hst5gmS9_400x400.png"
    }

    const [messages, setMessages] = useState([
    
        {
     from:{

    id: "LlO2s0YTYYPQRrM6jzqjConcUyD2",
    name: "Anıl Turan",
    username: "turananil",
    avatar: "https://pbs.twimg.com/profile_images/1365374048876847113/hst5gmS9_400x400.png"                
     } ,
                message: "Merhaba"
        
     },
        
        {
            from:{

    id: "k4Lso53ymaWclq6RR7Rkmv7sFwQ2",
    name: "Özkan",
    username: "özkandemir",
    avatar: "https://pbs.twimg.com/profile_images/1808084123858472960/b1FfJstK_400x400.jpg"                
} ,
                message: "test"
        
            },
            {
                from:{
    
                    id: "k4Lso53ymaWclq6RR7Rkmv7sFwQ2",
                    name: "Özkan",
                    username: "özkandemir",
                    avatar: "https://pbs.twimg.com/profile_images/1808084123858472960/b1FfJstK_400x400.jpg"                
                   } ,
                    message: "deneme"
            
                },
                {
                    from:{

                id: "k4Lso53ymaWclq6RR7Rkmv7sFwQ2",
                name: "Özkan",
            username: "özkandemir",
            avatar: "https://pbs.twimg.com/profile_images/1808084123858472960/b1FfJstK_400x400.jpg"                
           } ,
            message: "nasıl gidiyor"

    },
    {
        from:{

                 id: "RK9ljD0bxCPSRI0NEzBuzUauPLO2",
                 name: "Anıl Turan",
             username: "turananil",
             avatar: "https://pbs.twimg.com/profile_images/1365374048876847113/hst5gmS9_400x400.png"                
            } ,
             message: "Merhaba"

     },
     {
        from:{

    id: "RK9ljD0bxCPSRI0NEzBuzUauPLO2", // benim id RK9ljD0bxCPSRI0NEzBuzUauPLO2
     name: "Anıl Turan",
     username: "turananil",
     avatar: "https://pbs.twimg.com/profile_images/1365374048876847113/hst5gmS9_400x400.png"                
     } ,
     message: "teşekkürler proje yapıyorum teşekkürler proje yapıyorumghghghghffffffffffffffffffffffffffffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr "
        
    },
    {
        from:{

    id: "RK9ljD0bxCPSRI0NEzBuzUauPLO2", // benim id RK9ljD0bxCPSRI0NEzBuzUauPLO2
     name: "Anıl Turan",
     username: "turananil",
     avatar: "https://pbs.twimg.com/profile_images/1365374048876847113/hst5gmS9_400x400.png"                
     } ,
     message: "teşekkürler proje yapıyorum teşekkürler proje yapıyorumghghghghffffffffffffffffffffffffffffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr "
        
    }, {
        from:{

    id: "RK9ljD0bxCPSRI0NEzBuzUauPLO2", // benim id RK9ljD0bxCPSRI0NEzBuzUauPLO2
     name: "Anıl Turan",
     username: "turananil",
     avatar: "https://pbs.twimg.com/profile_images/1365374048876847113/hst5gmS9_400x400.png"                
     } ,
     message: "teşekkürler proje yapıyorum teşekkürler proje yapıyorumghghghghffffffffffffffffffffffffffffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr "
        
    }, 
    {
        from:{

    id: "RK9ljD0bxCPSRI0NEzBuzUauPLO2", // benim id RK9ljD0bxCPSRI0NEzBuzUauPLO2
     name: "Anıl Turan",
     username: "turananil",
     avatar: "https://pbs.twimg.com/profile_images/1365374048876847113/hst5gmS9_400x400.png"                
     } ,
     message: "teşekkürler proje yapıyorum teşekkürler proje yapıyorumghghghghffffffffffffffffffffffffffffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr "
        
    }
                     
        
    ] )
    
    return (
        <div className="flex-1" >
            <Header user={user} />
    <Messages messages={messages}/>                       
            <Reply  setMessages={setMessages} />
        </div>
    )
}