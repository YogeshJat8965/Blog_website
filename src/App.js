import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import { AppContext } from './Context/AppContext';
import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import Homepage from './Context/Pages/Homepage';
import Blogpage from './Context/Pages/Blogpage';
import Tagpage from './Context/Pages/Tagpage';
import Categorypage from './Context/Pages/Categorypage';


export default function App() {

  const { fetchData } = useContext(AppContext);

  const location = useLocation();
  const [searchparam,setSearchParam ] = useSearchParams();  // searchparam ki jgh apne accorgind bhi name assign kr skte h

  useEffect( () => {

    const page = searchparam.get("page") ?? 1;  // current url m page search krega

    if( location.pathname.includes("tags") ){
      // means tag wala page show krna h
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchData(Number(page),tag);
    }
    else if (location.pathname.includes("categories") ){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchData(Number(page),null,category);
    }
    else{
      fetchData(Number(page));
    }

  },[location.pathname,location.search]
  );

  
  // console.log(posts);

  return (

    <Routes>
      <Route path='/' element={<Homepage></Homepage>} > </Route>
      <Route path='/blog/:blogId' element={<Blogpage></Blogpage>} > </Route>
      <Route path='/tags/:tag' element={<Tagpage></Tagpage>} >  </Route>
      <Route path='/categories/:category' element={<Categorypage></Categorypage>} > </Route>
    </Routes>


  );
}

