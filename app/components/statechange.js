import {useState} from 'react'

const usechangeState = (value)=>{
    const [ch,setch] = useState()

    const changech=(value)=>{
         setch(value=> value + 1);
    }
    changech(value)
    console.log('from state',ch);
    return ch;
}

export default usechangeState;