import React from 'react'
import "./home.scss";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import pets from "../../assets/images/pets.png";

const Home = () => {

  const redirect=useNavigate();

  return (
    <div className='home'>
      <h1>Welcome to Pet Store</h1>
      <Button variant='outlined' color='primary' onClick={()=>redirect("/products")}>
        Products List
      </Button>
      <img src={pets} alt="pets"/>
    </div>
  )
}

export default Home