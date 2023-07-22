import axios from "axios"
import { VarEnv } from "./config"
import { TUser } from "../types/app.types"

export const GetUSer = async ():Promise<TUser> => {
    const url = `${VarEnv.VITE_API_URL}/api`
    return axios.get(url).then((res) => res.data.results[0])
}

export const GetUSerNationality = async (country: string, pageIndex: number):Promise<Array<TUser>> => {
    const url = `${VarEnv.VITE_API_URL}/api/??page=${pageIndex}&results=5&nat=${country}`
    return axios.get(url).then((res) => res.data.results)
}
