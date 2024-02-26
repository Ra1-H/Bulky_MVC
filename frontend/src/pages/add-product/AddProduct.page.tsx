import React from "react";
import "./add-product.scss";
import { TextField, Button } from "@mui/material";
import { Iproduct } from "../../types/global.typing";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../constants/url.constant";


const AddProduct: React.FC = () => {
  const [product, setProduct] = React.useState<Partial<Iproduct>>({
    title: "",
    brand: "",
  });

  
  const redirect=useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };


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
      .post(baseUrl, data)
      .then((response) => redirect("/products",{state:{message:"Product Created Successfully"}}))
      .catch((error) => alert("Error"));
  };
  const handleBackBtnClick = () => {
    redirect("/products");
  };

  return (
    <div className="add-product">
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
  );
};

export default AddProduct;
