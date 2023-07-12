import axios from "axios"


export const ProductAPI=()=>{
    return axios.get(`http://localhost:3000/products`)
}