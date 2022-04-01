import axios from 'axios'
import { debug } from 'console'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import api from '../common/api/api'
import { IProduct } from '../interface/IProduct'

const Products: React.FC = () => {
    const [products, setProducts] = useState < IProduct[] > ([])
    const fetchProduct = async () => {
        try {
            await api.get('/products')
                .then(res => {
                    //    debugger
                    setProducts(res.data)
                })
        } catch (error) {
            console.log(error)
        }
    }
    const deleteProduct = async(id:number | string )=>{
        try {
            await api.delete(`/products/${id}`)
            fetchProduct()
        } catch (error) {
          console.log(error)  
        }
    }


    useEffect(() => {
        fetchProduct()
        console.log(products);

    }, [])

    return (
        <div className='flex justify-center items-center flex-col'>
            <NavLink to={'/create'} className={'text-xl  bg-sky-400 p-3 mt-3 rounded-md'}>
                Create Product
            </NavLink>
            {products.length > 0 && products.map((product: IProduct, index: number) => {
                return (
                    <div key={index} className="text-3xl m-5
                     bg-green-400  shadow-2xl shadow-green-700 rounded-lg p-3">
                        <h1>{product.id}</h1>
                        <h1>{product.title}</h1>
                        <h1>{product.stock}</h1>
                        <button onClick={()=>deleteProduct(product.id) } className='bg-red-600 ml-10 p-3 rounded-lg'>Delete</button>
                        <NavLink to={`/edit/${product.id}`} className='bg-yellow-400 ml-10 p-3 rounded-lg'>Edit</NavLink>

                    </div>
                )
            })}
        </div>
    )
}

export default Products