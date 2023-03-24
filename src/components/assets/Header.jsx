import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return <header className="flex justify-evenly pt-6 bg-zinc-900 bg-[length:100%_300px]"  >
        <link href='https://fonts.googleapis.com/css?family=Expletus Sans' rel='stylesheet'></link>
        <img src="/Logo.png" width={"200px"} />
        <Link to={"/"} className="text-xl ... text-blue-500/100">Home</Link>
        <Link to={"/About"} className="text-xl ... text-blue-500/100">About</Link>
        <Link to={"/News"} className="text-xl ... text-blue-500/100">News</Link>
        <Link to={"/Events"} className="text-xl ... text-blue-500/100">Events</Link>
        <Link to={"/Clubs"} className="text-xl ... text-blue-500/100">Clubs</Link>
        <Link to={"/Content"} className="text-xl ... text-blue-500/100">Contents</Link>
        <Link to={"/"} className="text-xl ... text-blue-500/100">Contact Us</Link>
        <Link to={"/Login"} className="text-xl ... text-blue-500/100"><img src="/DarkAccount.png" width={"21.82px"} height={"24.85"} ></img></Link>
        <img src="/Search.png" width={"23.38px"} height={"23x.62"} ></img>
        <p className="text-xl ... text-blue-500/100" >English</p>
        <img src="/DropDown.png" width={"20px"} height={"10px"} />
    </header>
}