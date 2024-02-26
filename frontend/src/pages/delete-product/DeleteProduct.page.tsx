import React from 'react';
import "./delete-product.scss";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../constants/url.constant';
import { Iproduct } from '../../types/global.typing';
import { Button } from '@mui/material';


const DeleteProduct = () => {


      const {id}=useParams();

      const redirect=useNavigate();

      const handleDeleteBtnClick = () => {
        axios
          .delete(`${baseUrl}/${id}`)
          .then((response) => redirect("/products",{state:{message:"Product Deleted Successfully"}}))
          .catch((error) => alert("Error"));
      };


      const handleBackBtnClick = () => {
        redirect("/products");
      };


  return (
    <div className='delete-product'>
        <h2>DeleteProduct</h2>
        <h4>Are you sure you want to delete this product?</h4>
        <div>
      <Button variant="outlined" color="error" onClick={handleDeleteBtnClick}>
        Yes
      </Button>
      <Button variant="outlined" color="primary" onClick={handleBackBtnClick}>
        Cancel
      </Button>
    </div>
    </div>
  )
}

export default DeleteProduct