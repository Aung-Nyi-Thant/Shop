import {API_URL} from "../../setting/API";
import axios from "../../setting/our_axios";

const API = API_URL+"/payMent" 
export function getallPayMents (){
    return axios.get(API)
}