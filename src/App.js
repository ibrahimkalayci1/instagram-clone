import Loader from "components/Loader";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import routes from "routes";

function App() {

// console.log( /^[a-z0-9\.\_]+$/i.test(`hello_deneme`)
// )

const user = useSelector(state => state.auth.user )
const showRoutes = useRoutes(routes)


 if (user == null) {
    return <Loader />
 }



return (
    <>
    {/* <pre>{JSON.stringify(user, null,2)}</pre> */}
<Toaster position="top-right" />  
{showRoutes}
 </>
    
)
}

export default App;