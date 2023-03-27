import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className="flex flex-row justify-between rounded-t-lg bg-white"
      style={{ padding: "100px" }}
    >
      <div>
        <link
          href="https://allfont.net/allfont.css?fonts=sansation-bold"
          rel="stylesheet"
          type="text/css"
        />
        <p
          className="text-3xl  ... font-bold"
          style={{ fontFamily: "Sansation Regular", paddingBottom: "20px" }}
        >
          Совет Старшеклассников
        </p>
        <p
          className="text-xl ... font-bold"
          style={{ fontFamily: "Sansation Regular", paddingBottom: "40px" }}
        >
          Бидэнтэй холбогдох:
        </p>
        <div
          className="flex flex-row"
          style={{ gap: "40px", paddingBottom: "40px" }}
        >
          <Link to={"https://www.facebook.com/sovet.mrjs"}>
            <img src="/Combined-Shape.png" />
          </Link>
          <Link to={"https://www.instagram.com/sovet.mrjs/"}>
            <img src="/Exclude.png" />
          </Link>
          <img src="/path3.png" />
        </div>
        <div className="font-bold font-xl pb-5">
          <link
            href="//db.onlinewebfonts.com/c/a95ede42168248621cd7c0bcc5e9dd6c?family=Sansation"
            rel="stylesheet"
            type="text/css"
          />
          <p className="text-xl">Email:sovet.mrjs@gmail.com</p>
          <p className="text-xl">Instagram:sovet.mrjs</p>
          <p className="text-xl">Facebook:Совет Старшеклассников МОХС:</p>
        </div>
      </div>
      <div className="grid gap-7" style={{ gap: "30px" }}>
        <link
          href="https://allfont.net/allfont.css?fonts=sansation-regular"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Expletus+Sans&display=swap"
          rel="stylesheet"
        />
        <p
          style={{ fontFamily: "Sansation Regular" }}
          className="text-2xl font-bold"
        >
          Хуудаснууд:
        </p>
        <Link to={"/Content"}>
          <p className="text-xl font-bold">Contents</p>
        </Link>
        <Link to={""}>
          <p className="text-xl font-bold">Links</p>
        </Link>
        <Link to={"/Clubs"}>
          <p className="text-xl font-bold">Clubs</p>
        </Link>
        <Link to={"/About"}>
          <p className="text-xl font-bold">About us</p>
        </Link>
        <p className="text-xl font-bold">Feed back</p>
      </div>
    </footer>
  );
};
