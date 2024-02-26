import React from 'react'
import Navbar from './Components/navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from "./pages/home/Home.page"
import Products from './pages/products/Products.page'
import AddProduct from './pages/add-product/AddProduct.page'
import EditProduct from './pages/edit-product/EdiitProduct.page'
import DeleteProduct from './pages/delete-product/DeleteProduct.page'



const App:React.FC = () => {
  return (
    <div>
    {/* navbar */}

    <Navbar/>

    {/* Wrapper */}

    <div className='wrapper'>
      {/* routes */}
      <Routes>
        <Route path="/"  element={<Home/>}/>

        <Route path="/products">
          <Route index element={<Products/>}/>
          <Route path="add" element={<AddProduct/>}/>
          <Route path="delete/:id" element={<DeleteProduct/>}/>
          <Route path="edit/:id" element={<EditProduct/>}/>

        </Route>

        
      </Routes>
    </div>

    </div>
  )
}

export default App