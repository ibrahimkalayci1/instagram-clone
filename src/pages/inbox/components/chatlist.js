import { NavLink } from "react-router-dom"

export default function ChatList() {


const chats = [
    {
        id: 1,
        user: {
            avatar: "https://instagram.fyei4-1.fna.fbcdn.net/v/t51.2885-19/154785116_2736227976628551_4531047926895029645_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fyei4-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=32LNkgVbEEsQ7kNvgGpROqB&_nc_gid=d0d2a432faed4ffd85df27a33b44e210&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYDCy-uXo7d9Kl9csSTa3Qy3OkXWoX4pULHHlcQSvlYnPg&oe=67A255A3&_nc_sid=7a9f4b",
            name: "John Doe"
        },
        lastMessage: "selam irahim"
    },
    {
        id: 2,
        user: {
            avatar: "https://instagram.fyei4-1.fna.fbcdn.net/v/t51.2885-19/154785116_2736227976628551_4531047926895029645_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fyei4-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=32LNkgVbEEsQ7kNvgGpROqB&_nc_gid=d0d2a432faed4ffd85df27a33b44e210&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYDCy-uXo7d9Kl9csSTa3Qy3OkXWoX4pULHHlcQSvlYnPg&oe=67A255A3&_nc_sid=7a9f4b",
            name: "John Doe"
        },
        lastMessage: "selam irahim"
    },
    {
        id: 3,
        user: {
            avatar: "https://instagram.fyei4-1.fna.fbcdn.net/v/t51.2885-19/154785116_2736227976628551_4531047926895029645_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fyei4-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=32LNkgVbEEsQ7kNvgGpROqB&_nc_gid=d0d2a432faed4ffd85df27a33b44e210&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYDCy-uXo7d9Kl9csSTa3Qy3OkXWoX4pULHHlcQSvlYnPg&oe=67A255A3&_nc_sid=7a9f4b",
            name: "John Doe"
        },
        lastMessage: "selam irahim"
    }
]




    return (
        <div className="h-[calc(100%-60px)] overflow-auto py-3 px-5" >
        <header className=" flex items-center justify-between" >
            <h6>Messages</h6>
            <button className="text-brand text-sm font-semibold" > 16 request</button>
        </header>
        
        {chats.map(chat => (
            <NavLink  
            key={chat.id} 
            to="/inbox" 
            >
            
            <img  src={chat.user.avatar} className="w-14 h-14 rounded-full" alt=""  />
            <div>
                <h6>{chat.user.name}</h6>
            <p>
                {chat.lastMessage}
                </p>
            </div>
            
            </NavLink>
        ) )}
        </div>
    )
}