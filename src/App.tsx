import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from "styled-components"
import Header from './Component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Client from './pages/Client/Client'
import ProductsDetail from './pages/ProductsDetail/ProductsDetail'
import Admins from './Admin/Admin'
import Dashboard from './Admin/Dashboard'
import CreatProducts from './Admin/CreatProducts'
import { TypeProducts } from './type/products'
import { creat, edit, list, remove } from './api/products'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'
import UpdateProducts from './Admin/UpdateProducts'


function App() {
  const [Products, setProducts] = useState<TypeProducts[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data)
    }
    getProducts();
  }, [])
  const OnRemove=async(id:any)=>{
    try {
      const Confirm = confirm("are you sure to delete ?")
      if(Confirm){
        const {data} = await remove(id)
        setProducts(Products.filter(item=> item.id !== id))
        if(data){
         alert("Xóa sản phẩm thành công")
        }
      }

    } catch (error) {
      alert("Xóa sản phẩm thất bại")
    }
  }
  // add products
  const OnAdd=async(products:TypeProducts)=>{
    try {
      const {data} = await creat(products)
      setProducts([...Products,data])
      if(data){
       alert("Thêm mới sản phẩm thành công")
      }

    } catch (error) {
      alert("Thêm mới sản phẩm thất bại")
    }
  }
  // edit products
  const OnEdit=async(products:TypeProducts)=>{
    try {
      const {data} = await edit(products)
      setProducts(Products.map((item) => item.id == data.id ? data:item))
      if(data){
       alert("Sửa sản phẩm thành công")
      }

    } catch (error) {
      alert("Sửa sản phẩm thất bại")
    }
  }
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Client />}>
          <Route index element={<Home />} />
          <Route path='/productsdetail' element={<ProductsDetail />} />
        </Route>
        <Route path='/admin' element={<Admins />}>
          <Route index element={<Dashboard products={Products} onRemove={OnRemove}/>} />
          <Route path='/admin/creat' element={<CreatProducts onAdd={OnAdd}/>} />
          <Route path='/admin/product/edit/:id' element={<UpdateProducts onEdit={OnEdit}/>}/>
        </Route>

      </Routes>
      <ToastContainer />
    </div>
  )
}
const Container = styled.div`
    text-align: center;
`
const Headers = styled.div`
  background-color: red !important;
`
export default App
