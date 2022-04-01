import { title } from 'process'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../common/api/api'
import { ICreateProduct } from '../interface/ICreateProduct'
import { IProduct } from '../interface/IProduct'

const CreateProduct:React.FC = () => {
    const [products, setProducts] = useState<ICreateProduct>({
        title:"",
        stock:0,
    })

    const navigate = useNavigate()

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setProducts({
            ...products,
            [e.target.name]: e.target.value
        })
    }

    const createStore =  async(e:React.SyntheticEvent) =>{
        e.preventDefault()
        await api.post('/products',
        {
          title:products.title,
          stock:products.stock,
        }
  
        )
        navigate('/')
    }
    
  return (
    <div className='flex justify-center m-5 items-center mt-10 p-3 bg-sky-400 text-slate-900'>
        <h1 className='text-xl text-center font-extrabold'>Create</h1>
      <hr />
      <form onSubmit={(e)=>createStore(e)} action="" className='flex flex-col p-3 text-slate-900'>
        <input type="text" className='p-3 mb-4 focus:outline-none' placeholder='title' name='title' onChange={(e)=>onChangeHandler(e)} />
        <input type="text" className='p-3 mb-4 focus:outline-none' placeholder='stock' name='stock' onChange={(e)=>onChangeHandler(e)} />
        <button className='p-3 bg-green-300'>
            Save
        </button>
      </form>
    </div>
  )
}

export default CreateProduct