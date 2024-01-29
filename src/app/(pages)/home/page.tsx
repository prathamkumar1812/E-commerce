"use client";
import Card from '@/components/Card'
import Link from 'next/link';
import React from 'react'

function page() {
    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
        .then((res) => res.json())
        .then((json) => setProducts(json)).catch((err) => console.log(err))
    }, [])
  return (
    <div>
        <h1>Products Details</h1>
        {
            products.map((product) => {
                return(
                    <Link href={`/products/${product.id}`} key={product.id}>
                        <Card product={product} />
                    </Link>
                
                )
            })
        }
    </div>
  )
}

export default page