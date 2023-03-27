import React from "react";
import { Header } from "../components/assets/Header";
import { Footer } from "../components/assets/Footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "black" }}>
        <link
          href="https://fonts.googleapis.com/css2?family=Expletus+Sans&display=swap"
          rel="stylesheet"
        />
        <p
          style={{
            fontFamily: "Sansation Regular",
            fontSize: "80px",
            paddingLeft: "100px",
            paddingTop: "50px",
            color: "yellow",
          }}
          className="font-bold ... text-amber-400"
        >
          СОВЕТ
        </p>
        <div style={{ paddingLeft: "100px" }}>
          <p
            style={{
              fontFamily: "Sansation Regular",
              fontSize: "80px",
              color: "yellow",
            }}
            className="font-bold ... text-amber-400"
          >
            СТАРШЕКЛАССНИКОВ
          </p>
          <p
            className="font-semibold ... text-cyan text-3xl"
            style={{ fontFamily: "Sansation Regular" }}
          >
            Монгол-Оросын сургуулийн
          </p>
          <p
            className="font-semibold ... text-cyan text-3xl"
            style={{ fontFamily: "Sansation Regular" }}
          >
            Сурагчдын зөвлөл
          </p>
        </div>
        <div
          className="flex flex-row-reverse"
          style={{ flexDirection: "row-reverse" }}
        >
          <img src="/Rectangle4201.png"></img>
        </div>
        <div>
          <p
            className="text-xl text-white font-bold"
            style={{
              width: "460px",
              color: "black",
              fontFamily: "Sansation Regular",
              paddingTop: "100px",
              paddingLeft: "50px",
              position: "absolute",
            }}
          >
            2012 оноос эхлэн сургуулийн орчныг илүү аюулгvй ээлтэй болгох
            зорилтын дагуу багш сурагчдын холбоог бататган тасралтгvйгээр vйл
            ажиллагаагаа явуулж байгаа бөгөөд 2022-2023 оны хичээлийн жилд
            10-12-р ангийн 24 гишvvд 3 хороо болон захиргаанд хуваагдан ажиллаж
            байна.
            <button
              style={{ position: "absolute", paddingTop: "50px" }}
              className="font-bold text-3xl"
            >
              Дэлгэрэнгvй
            </button>
          </p>
          <img src="/Rectangle1.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
