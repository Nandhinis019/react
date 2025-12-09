import React from 'react'
import {products } from "../utils/api"
import {Link} from "react-router-dom";
export default function Products() {
  return (
    <div>
        <h2>Products</h2>
        {products.map(p => (
                <div key={p._id} >
                    <img src={p.image} alt={p.name} width="150"/>
                    <h3>{p.name}</h3>
                    <p>Rs.{p.price}</p>
                    <Link to={`/product/${p._id}`}>View</Link>
                    <p>{p.description}</p>
                    </div>
            ))}
    </div>
  )
}







