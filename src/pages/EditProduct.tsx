import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../common/api/api'
import { ICreateProduct } from '../interface/ICreateProduct'

const EditProduct = () => {
   const [products, setProducts] = useState<ICreateProduct>({
        title:"",
        stock:0,
    })
    const { id } = useParams()

    const navigate = useNavigate()

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setProducts({
            ...products,
            [e.target.name]: e.target.value
        })
    }

    const updateStore =  async(e:React.SyntheticEvent, id:number | string) =>{
        e.preventDefault()
        await api.put(`/products/${id}`,
        {
          title:products.title,
          stock:products.stock,
        }
  
        )
        navigate('/')
    }
    useEffect(()=>{
      const getProductById = async(id?:number | string)=>{
          try {
         await api.get(`/products/${id}`)
        .then(res => {
          //    debugger
              setProducts(res.data.title)
              setProducts(res.data.stock)

           })
        } catch (error) {
            console.log(error)
        }
      }
      getProductById()
    })
  return (
    <div className='flex flex-col'>
        EditProduct
        <hr />

      <form onSubmit={(e)=>updateStore} action="" className='flex flex-col p-3 text-slate-900'>
        <input type="text" className='p-3 mb-4 focus:outline-none' placeholder='title' name='title' onChange={(e)=>onChangeHandler(e)} />
        <input type="text" className='p-3 mb-4 focus:outline-none' placeholder='stock' name='stock' onChange={(e)=>onChangeHandler(e)} />
        <button className='p-3 bg-green-300'>
            Save
        </button>
      </form>
    </div>
  )
}

export default EditProduct