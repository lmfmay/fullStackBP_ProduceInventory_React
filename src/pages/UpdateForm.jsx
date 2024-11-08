import { useState, useEffect } from "react"; //add useEffect so data for one can render on pg
import {updateProduce, findOneProduce} from '../utilities/controllers.mjs';
import { useNavigate, useParams } from "react-router-dom";

function UpdateForm(){
    const nav = useNavigate();
    const {id} = useParams(); //id here has to match the route path in the front-end App.jsx

    const [formData, setFormData] = useState(null)

    useEffect(()=>{
        async function getData(){
            let data = await findOneProduce(id)
            let num = data.price.split('') //get rid of dollar sign in formData
            num.shift()
            data.price = Number(num)
            setFormData(data);
        }
        getData()
    },[])

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
            let res = await updateProduce(id, formData)
            nav('/') ////navigate back to home page
        } catch (error) {
            console.error(error)
        }
    } //needs async because going to DB

    return(
        <>
        <h2>Update Produce</h2>
        
        {formData ? <form onSubmit={handleSubmit}>
            <label>
                Name: <input onChange={handleChange} value={formData.name} type="text" name="name"/>
            </label><br/>
            <label>
                Price: <input onChange={handleChange} value={formData.price} type="number" name="price"/>
            </label><br/>
            <label>
                In Stock: <input onChange={handleChange} checked={formData.stocked} type="checkbox" name="stocked"/>
            </label><br/>
            <label>
                Category:{' '}
                <select onChange={handleChange} value={formData.category} name="category" type='text'>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                </select>
            </label><br/>
            <input type="submit"/>
        </form> : <h2>Loading...</h2>}
        <button onClick={handleClick}>Close Form</button>
        </>
    )
}

export default UpdateForm