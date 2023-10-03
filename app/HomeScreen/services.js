import axios from 'axios';


export const getData = async (url,cred)=>{
    let rsdata;
    return await axios.post(url,cred).then((resp)=> rsdata = resp.data)
}