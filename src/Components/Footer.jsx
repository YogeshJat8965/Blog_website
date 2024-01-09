import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { click } from "@testing-library/user-event/dist/click";

export default function Footer() {

    const { page, totalPage, handlePageChange } = useContext(AppContext);


    return (

        <div className=" w-full bg-white justify-center gap-[400px] items-center border border-gray shadow-lg text-3xl p-4 flex fixed bottom-0 " >

            <div className="flex max-w-[800px] w-11/12 justify-between" >
                <div className=" max-w-[200px] w-11/12 " >
                    {
                        page === 1 ?
                            <button onClick={() => handlePageChange(page + 1)} className="border border-black rounded-md px-2 text-[16px] " >Next</button> :
                            page === totalPage ?
                                <button onClick={() => handlePageChange(page - 1)} className="border border-black rounded-md px-2 text-[16px]" >Previous</button> :
                                <div><button onClick={() => handlePageChange(page - 1)} className="border border-black rounded-md px-2 text-[16px]  " >Previous</button><button onClick={() => handlePageChange(page + 1)} className="border border-black rounded-md px-2 mx-4 text-[16px] " >Next</button></div>
                    }
                </div>

                <div className="text-[16px]" >
                    Page {page} of {totalPage}
                </div>
            </div>

        </div>

    );

}