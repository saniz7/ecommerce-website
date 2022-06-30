import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getSingleProducts } from '../Helper/apiHelper'
import { useLocation } from 'react-router-dom'
const Productdescription = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    console.log(id);
    const [product, setProduct] = useState({})
    const getProduct = async () => {
        try {
            await getSingleProducts(id).then(data => {
                console.log(data);
                setProduct(data)
            }) 
    }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
       
        getProduct();
    }, [id])
    return (
        <div>
            {product.name}<br/>
            {product.description}
        </div>
    )
}

export default Productdescription