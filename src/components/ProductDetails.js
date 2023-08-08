import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const {productId} = useParams()

    const[productDetails, setProductDetails] = useState({})

    useEffect(() => {
        const fetchProductDetails =  async () => {
            
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${productId}`)

                const data = await res.json()

                setProductDetails(data)
            } catch (error) {
                console.log(`error in fetching: ${error}`);
            }
        }
        fetchProductDetails()
    }, [productId])

    return (
        <div>
            <img src={productDetails.image} alt={productDetails.title} /> 
            <h4>{productDetails.title}</h4>
            <p>{productDetails.price}</p>
            <p>{productDetails.description}</p>
        </div>
    )
}

export default ProductDetails