import React from "react";
import Header from "../../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Body from "../../Components/Body";
import Footer from "../../Components/Footer";
// import Homepage from "./Homepage";


export default function Tagpage(){

    const location = useLocation();

    const navigation = useNavigate();
    const tag = location.pathname.split("/").at(-1);
    
    return (

        <div className="flex justify-center items-center mt-[100px] ">

            <Header></Header>

            <div>

                <button onClick={ () => navigation(-1) } className="absolute top-[106px] left-[515px] mb-[55px] border border-black rounded-md p-1 px-3 text-[16px] z-[1] " >Back</button>
                <h2 className=" text-lg font-semibold  absolute top-[166px] left-[516px] z-[-10]"  >
                    Blogs Tagged <span>#{tag}</span>
                </h2>

            </div>

            <Body></Body>

            <Footer></Footer>

        </div>

    );

}