import { Children, createContext, useEffect, useState } from "react"
import { getAllCategories, getAllProducts } from "../services/api"

export const DATA = createContext(null)
function DataContext({children}) {
    const [category, setCategory] = useState(null)
    const[ product, setProduct] = useState(null)
    useEffect(() =>{
        getAllCategories().then((res) => setCategory(res))
        getAllProducts().then((res) => setProduct(res))
    },[])

    console.log(product);
    
  return (
    <div>
        <DATA.Provider value={{category, product}}>
            {children}
        </DATA.Provider>
    </div>
  )
}

export default DataContext