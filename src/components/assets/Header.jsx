import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="flex flex-row justify-evenly bg-black">
      <link
        href="https://fonts.googleapis.com/css2?family=Expletus+Sans&display=swap"
        rel="stylesheet"
      />
      <img src="/SOVET.png" width={"110px"} />
      <Link
        to={"/"}
        className="text-xl ... text-cyan"
        style={{ fontFamily: "" }}
      >
        Home
      </Link>
      <Link to={"/About"} className="text-xl ... text-cyan">
        About
      </Link>
      <Link to={"/News"} className="text-xl ... text-cyan">
        News
      </Link>
      <Link to={"/Events"} className="text-xl ... text-cyan">
        Events
      </Link>
      <Link to={"/Clubs"} className="text-xl ... text-cyan">
        Clubs
      </Link>
      <Link to={"/Content"} className="text-xl ... text-cyan">
        Contents
      </Link>
      <Link to={"/"} className="text-xl ... text-cyan">
        Contact Us
      </Link>
      <div className="flex gap-3">
        <Link to={"/Login"} className="text-xl ... text-cyan align-baseline">
          <img src="/User_alt.png" />
        </Link>
        <img src="Search.png" />
      </div>

      <div className="text-xl ... text-cyan flex align-baseline">
        <div>English</div>
        <img src="Group35.png" className="sd" />
      </div>
    </header>
  );
};
