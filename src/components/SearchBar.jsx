function SearchBar ({formData, setFormData}){
    function handleChange(e){ //set up to handle change for both input types
        if (e.target.name == 'inStock'){ //handle change function triggered by checkbox
            setFormData({...formData,
                'inStock': !formData.inStock}) //change inStock from false to true
        } else ( //handle change function triggered by text input
            setFormData({...formData,
                [e.target.name]: e.target.value}) //update search params property with typed value
        )
    }
    return (
    <form>
        <input onChange={handleChange} type="text" placeholder='Search...' name='searchParams'/> <br />
        <label> 
            <input onChange={handleChange} type="checkbox" name='inStock'/> Only show products in stock
        </label>
        
    </form>
    )
}

export default SearchBar