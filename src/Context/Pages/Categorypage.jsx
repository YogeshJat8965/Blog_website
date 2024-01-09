import React from "react";
import Header from "../../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Body from "../../Components/Body";
import Footer from "../../Components/Footer";

export default function Categorypage() {

    const location = useLocation();

    const navigate = useNavigate();
    const category = location.pathname.split("/").at(-1);

    return (

        <div className="flex justify-center items-center mt-[100px] ">

            <Header></Header>

            <div>

                <button onClick={() => navigate(-1)} className="absolute top-[106px] left-[515px] mb-[55px] border border-black rounded-md p-1 px-3 text-[16px] z-[10] " >Back</button>
                <h2 className=" z-[-10] text-lg font-semibold  absolute top-[166px] left-[516px] " >
                    Blogs On <span>
                        {category}</span>
                </h2>

                <Body></Body>


            </div>
                <Footer></Footer>

        </div>

    );

}