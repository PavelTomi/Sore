import React, { useEffect } from 'react'
import {  useNavigate,useParams } from "react-router-dom";
import { useGetProductQuery} from "../../features/api/apiSlice"
import { ROUTES } from '../../utils/routes';
import Product from './Product';
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedProduct } from '../../features/products/productsSlice';
 
const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); 
const navigate = useNavigate();
const { list, related } = useSelector (({products}) => products);

  const { date, isLoading, isFetching , isSuccess}= useGetProductQuery({id});

useEffect(() => {
  if(!isFetching && !isLoading && !isSuccess) {
     navigate(ROUTES.HOME)
  }
}, [isLoading, isFetching, isSuccess, navigate]);
  

useEffect(() => {
  if (!date || !list.lenght) return;

  dispatch(getRelatedProduct(date.category.id));
}, [date, dispatch, list.lenght]);

  return !date ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product {...date} />
      <Products products={related} amount={5} title="Related products" />
    </>
  );
}

export default SingleProduct 