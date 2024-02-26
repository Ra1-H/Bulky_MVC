import React from 'react';
import "./edit-product.scss";
import { Button, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../constants/url.constant';
import { Iproduct } from '../../types/global.typing';

const EditProduct:React.FC = () => {
    const [product, setProduct] = React.useState<Partial<Iproduct>>({
        title: "",
        brand: "",
      });

      const {id}=useParams();

      const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
          ...product,
          [e.target.name]: e.target.value,
        });
      };

      const redirect=useNavigate();

      React.useEffect(()=>{
        axios.get(`${baseUrl}/${id}`).then(response=>setProduct({
            title:response.data.title,
            brand:response.data.brand,
        }))
      },[])

      const handleSaveBtnClick = () => {
        if (product.title === "" || product.brand === "") {
          alert("Enter Values");
          return;
        }
        const data: Partial<Iproduct> = {
          brand: product.brand,
          title: product.title,
        };
    
        axios
          .put(`${baseUrl}/${id}`, data)
          .then((response) => redirect("/products",{state:{message:"Product Updated Successfully"}}))
          .catch((error) => alert("Error"));
      };
      const handleBackBtnClick = () => {
        redirect("/products");
      };


  return (
    <div className="edit-product">
    <h2>Add New Product</h2>
    <TextField
      autoComplete="off"
      label="Brand"
      variant="outlined"
      value={product.brand}
      name="brand"
      onChange={changeHandler}
    />
    <TextField
      autoComplete="off"
      label="Title"
      variant="outlined"
      value={product.title}
      name="title"
      onChange={changeHandler}
    />
    <div>
      <Button variant="outlined" color="primary" onClick={handleSaveBtnClick}>
        Save
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleBackBtnClick}>
        Back
      </Button>
    </div>
  </div>
  )
}

export default EditProduct