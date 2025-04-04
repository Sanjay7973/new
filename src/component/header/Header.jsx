import { Typography } from "@mui/material"
import FullWidthTabs from "./TabPanel"
import PrimarySearchAppBar from "./TopMenu"
import { useEffect, useState } from "react"

const Header = () => {
    const [changeNavbar,setChangeNavBar] = useState(false)

    useEffect(()=>{
        let scrool = window.screenY
        if(scrool>50){
            setChangeNavBar(true)
        }else{
            setChangeNavBar(false)
        }
    })
    return (
        <div className="">
<div class="w-full relative p-4 pb-0 overflow-hidden">
            {/* <!-- Image --> */}
            <div>
            <img className="w-full rounded-xl h-[383px] object-cover" src="https://t3.ftcdn.net/jpg/03/10/46/56/360_F_310465670_Wy4QCEfxYU2ziHjbeZsNAumKhaZzZS1w.jpg" alt="" />
            {/* <div class="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-25"></div> */}
            </div>
         
            {/* <!-- Navigation bar over the image --> */}
            <nav class="absolute bottom-6 w-full ">
                {/* // tabs part  */}
                <ul class="flex justify-center space-x-8 p-2">
                    <FullWidthTabs />
                </ul>
            </nav>
            {/* //  center taxt  */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold mt-2">
                <Typography variant="h2" className="tracking-wide text-sky-100" >Relait Investor Center</Typography>
            </div>
            {/* // topmenu part  */}
            <div className="w-full absolute top-0 text-white text-2xl font-bold mt-2">
                <PrimarySearchAppBar/>
            </div>
        </div>
       
        </div>
        



    )
}

export default Header
