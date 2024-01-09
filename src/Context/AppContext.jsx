import React, { useEffect, useState } from "react";
import { createContext } from "react";
import App from "../App";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

//1 creation 
export const AppContext = createContext();

export default function AppContextProvider({ children }) {

    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalPage, settotalPage] = useState(null);
    const [posts, setposts] = useState([]);
    const navigate = useNavigate();


    async function fetchData(page=1, tag=null,category ) {

        setloading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        try {
            const output = await fetch(url);
            const data = await output.json();
            setpage(data.page);
            settotalPage(data.totalPages);
            setposts(data.posts)
            console.log(data);

        }
        catch (error) {
            console.log("You have an Error");
            setposts([])
            settotalPage(null)
        }
        setloading(false);

    };

    // function nextHandler(){
    //     // Navigate( {search: `?page=${page}`} )
    //     setpage(page+1); 
    //     fetchData(page+1);
    // }
    // function previousHandler(){
    //     // Navigate( {search: `?page=${page}`} )
    //     setpage(page-1);
    //     fetchData(page-1); 
    // }

    const handlePageChange = (page) => {
        navigate({search : `?page=${page}`});
        setpage(page);
    
      };


    const value = {
        loading,
        setloading,
        page,
        setpage,
        totalPage,
        settotalPage,
        posts,
        setposts,
        fetchData,
        handlePageChange,
    };

    // 2 context porvider

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}


