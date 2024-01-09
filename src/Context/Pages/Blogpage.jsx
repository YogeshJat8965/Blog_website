import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { baseUrl } from "../baseUrl";
import { baseUrl } from "../../baseUrl";
import Header from "../../Components/Header";
import { AppContext } from "../AppContext";
import BlogDetails from "../../Components/BlogDetails";


export default function Blogpage() {

    const [blog, setBlog] = useState(null);
    const [relatedblog, setRelatedblog] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const { loading, setloading } = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);
    
    async function fetchRelatedBlogs() {
        const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
        setloading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedblog(data.relatedBlogs);
        } catch (err) {
            console.log(err);
            setBlog(null);
            setRelatedblog([]);
        }
        setloading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname]);

    return (

        <div className="flex justify-center items-center mt-[162px] ">
            <Header />
            
            <div className="absolute top-[106px] left-[515px] mb-[55px] border border-black rounded-md p-1 px-3 text-[16px] z-1 " >
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
            <div >
                {loading ? (
                    <p>Loading...</p>
                ) : blog ? (
                    <div >
                        <BlogDetails post={blog} />
                        <h2>Releated Blogs</h2>
                        {relatedblog.map((post) => (
                            <div key={post.id} >
                                <BlogDetails post={post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No Blog Found</p>
                )}
            </div>
        </div>

    );

}