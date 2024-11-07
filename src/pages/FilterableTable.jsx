import SearchBar from '../components/SearchBar';
import ProductTable from '../components/ProductTable';
import { useState, useEffect } from 'react';
import {getInventory} from '../utilities/controllers.mjs'


function FilterableTable (){
    const [inventory, setInventory] = useState (null)
    const [formData, setFormData] = useState({
        searchParams: '',
        inStock: false
    })

    async function getData(){
        let res = await getInventory();
        let newRes = res.sort((a, b) => a.category.localeCompare(b.category)) //sort categories so they don't repeat
        setInventory(newRes)
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <>
            <SearchBar formData = {formData} setFormData ={setFormData}/>
            {inventory? <ProductTable produce = {inventory} searchParams={formData.searchParams} inStock = {formData.inStock} setInventory= {setInventory}/>: <h3>Loading...</h3>}
        </>
        
    )
}

export default FilterableTable