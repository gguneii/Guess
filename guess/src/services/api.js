import axiosInstance from "./instance";

async function getAllCategories() {
    const res = await axiosInstance.get("/categories/all")
    return res.data
}

 async function getAllProducts(){
    const res = await axiosInstance.get("/products/all")
    return res.data
}

export {getAllCategories, getAllProducts}