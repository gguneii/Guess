import axiosInstance from "./instance";

async function getAllCategories() {
    const res = await axiosInstance.get("/categories/all")
    return res.data
}
// async function getAllDetails() {
//     const res = await axiosInstance.get("/details")
//     return res.data
// }
// async function getAllGifts(){
//     const res = await axiosInstance.get("/gift")
//     return res.data
// }

// export {getAllMenus, getAllDetails , getAllGifts}
export {getAllCategories}