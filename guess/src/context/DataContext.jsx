import { createContext, useEffect, useState } from "react"
import { getAllCategories, getAllProducts } from "../services/api"

export const DATA = createContext(null)
function DataContext({children}) {
    const [category, setCategory] = useState(null)
    useEffect(() =>{
        getAllCategories().then((res) => setCategory(res))
        // getAllProducts().then((res) => setProduct(res))
    },[])

    
  return (
    <div>
        <DATA.Provider value={{category}}>
            {children}
        </DATA.Provider>
    </div>
  )
}

export default DataContext