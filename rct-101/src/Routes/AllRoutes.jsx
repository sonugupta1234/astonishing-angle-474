import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Homepage"
import HolidaySearch from "../Pages/HolidaySearch";


function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Search" element={<HolidaySearch />} />
        </Routes>
    )
}

export default AllRoutes;