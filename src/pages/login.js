import { useEffect, useRef, useState } from "react";
import Input from "components/Input";
import {AiFillFacebook} from "react-icons/ai" 

 export default function Login() {

    const ref= useRef()
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const enable = username && password
    
    useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
    total = images.length,
    current = 0
    
    const imageSlider = () => {
    
    images[(current > 0 ? current : total) - 1].classList.add("opacity-0")
    images[current].classList.remove("opacity-0")
    current = current == total - 1 ? 0 :current + 1; 
    } 
      
    
    imageSlider()
    let interval = setInterval(imageSlider, 3000)
      return () =>{
        clearInterval(interval)
      }  
    
    }, [ref] )
    
      return (
      <div className=" h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center" >
    
     <div className=" hidden md:block w-[350px] h-[538px]  relative " >
      <img className=" w-full h-full"  src="home-phones-2x.png"   alt="" />
      
      <div className=" w-[200px] h-[470px] absolute top-[16px] left-[110px]" ref={ref} >
      <img className="w-full h-full  absolute top-0 left-0 opacity-0 duration-1000 ease-linear transition-opacity "   src="screenshot1.png"      alt="" />
      <img className="w-full h-full  absolute top-0 left-0 opacity-0 duration-1000 ease-linear transition-opacity "   src="screenshot2-2x.png"   alt="" />
      <img className="w-full h-full  absolute top-0 left-0 opacity-0 duration-1000 ease-linear transition-opacity "   src="screenshot3-2x.png"   alt="" />
      <img className="w-full h-full  absolute top-0 left-0 opacity-0 duration-1000 ease-linear transition-opacity "   src="screenshot4-2x.png"   alt="" />
    
      </div>
    </div>
    
    
    
       <div className=" w-[350px] grid gap-y-3 " >
        <div className=" bg-white border px-[40px] pt-10 pb-6 ">
          
          <a href="#" className=" flex justify-center mb-8 " >
          <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" />
    
          </a>
          
          
          <form className=" grid gap-y-1.5" >
            <Input  type="text" value={username} onChange={e => setUsername(e.target.value)} label="Phone number, username" />
            <Input   type="password"  value={password} onChange={e => setPassword(e.target.value)} label="Password"/>
    
            <button type="submit" disabled={!enable} className=" h-[30px]  mt-1 rounded bg-[#0095f6] font-semibold text-white text-sm disabled:opacity-50 " >Log In</button>
          
          <div className="flex items-center my-2.5 mb-3.5" >
            <div className="h-px bg-gray-300 flex-1"/>
            <span className="px-4 text-[13px] text-gray-500 font-semibold" >OR</span>
            <div className="h-px bg-gray-300 flex-1"/>
          </div>
        <a href="#" className="flex justify-center  mb-2.5 items-center gap-x-2 text-sm font-semibold text-facebook " >
        <AiFillFacebook size={20} />
        Log in with Facebook
        </a>
    
        <a href="#" className="text-xs flex items-center justify-center text-link"  >
        Forgot password
        </a>
          </form>
        </div>
    
    <div className=" bg-white border p-4 text-sm text-center">
      Don't have an account?  <a href="#"  className="font-semibold text-brand" >Sign up</a> 
    </div>
    
    </div>
    </div>
      );
    }
    
    
    
    // https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot1-2x.png?__d=www
    // https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot2-2x.png?__d=www
    // https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot3-2x.png?__d=www
    // https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot4-2x.png?__d=www