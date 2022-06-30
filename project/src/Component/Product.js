import React, { useState, useEffect } from 'react'

import { getAllProducts } from '../Helper/apiHelper'
import { Link } from 'react-router-dom'

const Product = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    // console.log("CALLED MLTIPLE TIME");
    await getAllProducts().then(data => {
      console.log(data);
      setProducts(data)
    })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {
        //  products == undefined ? <p>No product found</p> :
        products.map((item) => {
          console.log(item);
          return (
            <div>
              <Link to={`/productdescription/${item._id}`} style={{ textDecoration: 'none' }}>
              <div class="card" style={{ width: "18rem", margin: "50px", textDecoration:'none' }} >

                <div class="card-body">
                  <img class="card-img-top" src={`data:image/png;base64,${item.image.data}`} />
                  <h5 class="card-title">{item.name}</h5>
                  {/* <p class="card-text">{item.description}</p> */}
                  <p class="card-text">{item.price}</p>
                  <div >
                    <i class="fa-solid fa-trash"></i>
                    <i className="far fa-edit mx-2" ></i>
                  </div>
                  {/* <a href="#" class="btn btn-primary">Add to cart</a> */}
                </div>
              </div>
              </Link>
            </div>
          )
        }

        )
      }
    </div>
  )
}



export default Product