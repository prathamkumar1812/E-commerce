"use client";
import { product } from '@/components/Card';
import React from 'react'
import Image from 'next/image'


function page({params}:{params:{productId:string}}) {
  const [product, setProduct] = React.useState<any>({});
   React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
    .then((res) => res.json())
    .then((json) => setProduct(json)).catch((err) => console.log(err))
   }, [])
  return (
    <div className='text' >
      <Image src={product.image} alt={product.title} width={300} height={500} />
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <div>{product.price}</div>
      </div>

    </div>
  )
}

export default page