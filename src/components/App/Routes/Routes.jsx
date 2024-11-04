import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../../../utils/routes";

import Home from "../../Home/Home.jsx";
import SingleProduct from "../../Products/SingleProduct";
import Profile from "../../Profile/Profile.jsx";
import SingleCategory from "../../Categories/SingleCategory.jsx";
import Cart from "../../Cart/Cart.jsx";

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
        <Route path={ROUTES.CART} element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
