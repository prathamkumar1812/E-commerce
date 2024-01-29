import Image from "next/image"
export type product = {
    id: number
    name: string
    price: number
    image: string
    description: string
    
}
function Card({product}: {product: product}) {
  return (
    <div>
    <Image 
        src={product.image}
        alt="Your Image Description"
        width={270}
        height={400}
      />
    <div>{product.name}</div>
    <p>{product.description}</p>
    <div>{product.price}</div>
    </div>
  )
}

export default Card