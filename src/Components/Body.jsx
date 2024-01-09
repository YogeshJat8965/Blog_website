import React, { useContext } from "react";
import { useEffect } from "react";
import AppContextProvider, { AppContext } from "../Context/AppContext";
import Loader from "../Loader";
import BlogDetails from "./BlogDetails";

export default function Body() {

    const { posts, loading} = useContext(AppContext);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (

        <div className="flex flex-col p-10 pt-[110px]">
            {loading ? (
                <div className="min-h-[80vh] w-full flex justify-center items-center">
                    <p className="text-center font-bold text-3xl">Loading</p>
                </div>
            ) : posts.length === 0 ? (
                <div className="min-h-[80vh] w-full flex justify-center items-center">
                    <p className="text-center font-bold text-3xl">No Blogs Found !</p>
                </div>
            ) : (
                posts.map((post) => (
                    <BlogDetails key={post.id} post={post} className="flex  flex-col gap-0 text-cyan-300 " />
                ))
            )}
        </div>

    );

};