import React from "react";
import Header from "../../Components/Header";
import Body from "../../Components/Body";
import Footer from "../../Components/Footer";

export default function Homepage() {

    return (

        <div className=" w-full h-full flex flex-col justify-center items-center  ">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>

    );

}