import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";
import { fetchCategoriesAsync } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      dispatch(fetchCategoriesAsync());
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
