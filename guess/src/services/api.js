import axiosInstance from "./instance";

async function getAllCategories() {
    const res = await axiosInstance.get("/categories/all")
    return res.data
}

 async function getAllProducts(catId){
    const res = await axiosInstance.get(`/products/all?categoryId=${catId}`)
    // const res = await axiosInstance.get(`/products/all?categoryId=${catId}&limit=${5}`)
    return res.data
}

export {getAllCategories, getAllProducts}