import { useState } from "react";
import {createProduce} from '../utilities/controllers.mjs';
import { useNavigate } from "react-router-dom";

function UpdateForm(){
    const nav = useNavigate()
    const [formData, setFormData] = useState({
        name:'',
        price:'',
        stocked: false,
        category:'Vegetables'
    })

    function handleClick(e){
        nav('/') //navigate back to home page
    }
    function handleChange(e) {
        if (e.target.name == 'stocked'){
            setFormData({
                ...formData,
            stocked: !formData.stocked
        });
        } else {
            setFormData({
                ...formData,
            [e.target.name]: e.target.value
        });
        }
    }
    async function handleSubmit(e){
        try {
            e.preventDefault()
            let res = await createProduce(formData)
            nav('/') ////navigate back to home page
        } catch (error) {
            console.error(error)
        }
    } //needs async because going to DB

    return(
        <>
        <h2>Update Produce</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input onChange={handleChange} type="text" name="name"/>
            </label><br/>
            <label>
                Price: <input onChange={handleChange} type="number" name="price"/>
            </label><br/>
            <label>
                In Stock: <input onChange={handleChange} type="checkbox" name="stocked"/>
            </label><br/>
            <label>
                Category:{' '}
                <select onChange={handleChange} name="category" type='text'>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                </select>
            </label><br/>
            <input type="submit"/>
        </form>
        <button onClick={handleClick}>Close Form</button>
        </>
    )
}

export default UpdateForm