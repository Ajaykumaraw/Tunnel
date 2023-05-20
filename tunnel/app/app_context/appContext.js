import {createContext, useContext} from 'react';

const menuContext = createContext();

export default function useMenucontext(){
    return useContext(menuContext);
}
