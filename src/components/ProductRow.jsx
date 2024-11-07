import { deleteProduce } from "../utilities/controllers.mjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductRow ({product,produce,setInventory}){
    const nav = useNavigate()
    let inStock = product.stocked ? "white" : "red";

    async function handleDelete(){
        let res = await deleteProduce(product._id)
        if (res) {
            let copy = produce.filter((el)=>el._id !== product._id);
            setInventory(copy)
        }
    }

    function handleClick(){
        nav(`/updateProduce/${product._id}`)
    }

    return (
        <tr>
            <td style={{color:inStock}}>
                {product.name}
            </td>
            <td>
                {product.price}
            </td>
            <td><button onClick={handleClick}>Edit</button></td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}

export default ProductRow