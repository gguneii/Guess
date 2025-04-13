import { Children, createContext, useEffect, useState } from "react"
import { getAllCategories } from "../services/api"

export const DATA = createContext(null)
function DataContext({children}) {
    const [category, setCategory] = useState(null)
    useEffect(() =>{
        getAllCategories().then((res) => setCategory(res))
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