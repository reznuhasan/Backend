import axios from "axios"

export const allProductAPI=()=>{
    return axios.get('http://localhost:3000/products')
}