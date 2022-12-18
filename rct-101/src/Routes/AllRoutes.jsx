import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Homepage"
import HolidaySearch from "../Pages/HolidaySearch";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import Checkout from "../Pages/Checkout";


function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<HolidaySearch />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    )
}

export default AllRoutes;