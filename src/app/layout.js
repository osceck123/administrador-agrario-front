'use client'
import "./globals.css";
import Navbar from "@/components/NavBar/NavBar";
import { useEffect, useState } from "react";





export default function RootLayout({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
   const token =  localStorage.getItem('token')
    if(token != null){
      setIsLoggedIn(true)
    }
  },[])


  return (
    <html lang="es">
      <body
     
      >
        <Navbar isLoggedIn={isLoggedIn}/>
        {children}
      </body>
    </html>
  );
}
