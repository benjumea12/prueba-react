import axios from "axios"
import { VarEnv } from "./config"
import { TUser } from "../types/app.types";


export const GetUSer = ():Promise<TUser> => axios.get(`${VarEnv.VITE_API_URL}/api`).then((res) => res.data.results[0])

export const GetUSerNationality = (country: string, pageIndex: number):Promise<Array<TUser>> => axios.get(`${VarEnv.VITE_API_URL}/api/?results=${pageIndex*10}&nat=${country}`).then((res) => res.data.results)
