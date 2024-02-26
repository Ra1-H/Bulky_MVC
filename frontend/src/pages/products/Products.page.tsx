import React, { useEffect, useState } from "react";
import "./products.scss";
import { Iproduct } from "../../types/global.typing";
import axios from "axios";
import { baseUrl } from "../../constants/url.constant";
import { Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import moment from "moment";
import { useNavigate,useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Iproduct[]>([]);

  const location=useLocation();
  const redirect=useNavigate();


  const redirectToEditPage=(id:string)=>{redirect(`/products/edit/${id}`)}
  const redirectToDeletePage=(id:string)=>{redirect(`/products/delete/${id}`)}

  console.log(location);

  const fetchProductsList = async () => {
    try {
      const response = await axios.get<Iproduct[]>(baseUrl);
      setProducts(response.data);
      if(location?.state){
        Swal.fire({
            icon:"success",
            title:location?.state?.message
        });
        redirect(location.pathname,{replace:true}); //to re-empty the state.or else it will show an alert message when we refresh even if we haven't actually added a product
      }
    } catch (error) {
      alert("An Eroor Happened");
    }
  };

  useEffect(() => {
    fetchProductsList();
  }, []);

//   console.log(products);
  return (
    <div className="products">
      <h1>Products List</h1>
      {
        products.length===0?(<h1>No Products</h1>):(
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Brand</th>
                            <th>Creation Time</th>
                            <th>Update Time</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product=>(
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.brand}</td>
                                    <td>{moment(product.createdAt).fromNow()}</td>
                                    <td>{moment(product.updatedAt).fromNow()}</td>
                                    <td>
                                        <Button variant="outlined" color="warning" sx={{mx:3}} onClick={()=> redirectToEditPage(product.id)}><Edit/></Button>
                                        <Button variant="outlined" color="error"  onClick={()=> redirectToDeletePage(product.id)}><Delete/></Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )

      }
    </div>
  );
};

export default Products;
