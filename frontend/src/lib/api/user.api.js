import { axiosInstance } from "../axios";


export const  checkUser = async()=>{
    try {
        const res = await axiosInstance.get("/auth/checkAuth")
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const  login = async(loginData)=>{
    const res = await axiosInstance.post("/auth/login", loginData)
    return res.data
}
export const  signUp = async(signUpData)=>{
    const res = await axiosInstance.post("/auth/signUp", signUpData)
    return res.data
}
export const  logout = async()=>{
    const res = await axiosInstance.post("/auth/logout")
    return res.data
}
export const  updateUser = async(updateUserData)=>{
    const res = await axiosInstance.put("/auth/updateUser", updateUserData)
    return res.data
}
export const  deleteUser = async()=>{
    const res = await axiosInstance.delete("/auth/deleteUser")
    return res.data
}
export const  getUser = async(userData)=>{
    const res = await axiosInstance.post("/auth/getUser", userData)
    return res.data
}
export const  getUsers = async()=>{
    const res = await axiosInstance.get("/auth/getUsers")
    return res.data
}