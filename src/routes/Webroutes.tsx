import Products from "../pages/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditProduct from "../pages/EditProduct";
import { ReactElement } from "react";
import CreateProduct from "../pages/CreateProduct";


const WebRoutes = () => {
  return (

    <Router>
        <Routes>
           <Route path="/" element={ <Products/> }/>
           <Route path="/edit" element={ <EditProduct/> }/>
           <Route path="/create" element={ <CreateProduct/> }/>
        </Routes>
    </Router>
    
  )
}

export default WebRoutes;
