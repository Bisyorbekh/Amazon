import React, { useState, useEffect} from 'react'
import "./Deliver.css"
import {firestore} from "../../server/index"
import firebase from 'firebase'

function Deliver() {
    const [data, setData] = useState([])
    useEffect(()=>{
        firestore.collection("products").onSnapshot(pro=>{
            setData(
                pro.docs.map(item=>({
                    id: item.id,
                    product: item.data()
                }))
            )
        })
    }, [])
    const delateProduct = (id)=>{
        if(window.confirm("Are you sure?")){
            firebase
                .firestore()
                .collection("products")
                .doc(id)
                .delete()
        }
    }
  return (
    <div className='deliver_con'>
        <h2>Deliver</h2>
        <div className="deliver_wrapper">
            {
                data?.map(({id, product})=> <div key={id} className="deliver_item">
                    <img src={product.url} alt=""/>
                    <h2>{product.name}</h2>
                    <h3>{product.price}</h3>
                    <button onClick={()=> delateProduct(id)}>Delate</button>
                </div>)
            }
        </div>
    </div>
  )
}

export default Deliver