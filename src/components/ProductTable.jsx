import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

function ProductTable ({produce, searchParams, inStock, setInventory}){
//Array to store table rows
let rows = [];
let cat = null;
produce.forEach((element) => {
    //if name is not what we are searching for
    if (element.name.toLowerCase().indexOf(searchParams.toLowerCase()) == -1) return
    //if item not in stock
    if (!element.stocked && inStock) return
    //finds new cat and make header row
    if (cat != element.category){
        cat = element.category //this is dependent on data being organized by category. there is risk of repeated categories if data is not sorted.
        rows.push(<ProductCategoryRow category = {element.category}/>)
    }

    rows.push(<ProductRow product = {element} produce ={produce} setInventory= {setInventory}/>)
});
    return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
    )
}

export default ProductTable