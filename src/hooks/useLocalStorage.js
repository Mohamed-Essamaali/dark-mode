import {useState} from 'react'

export function useLocalStorage(key,initialValues){

    const[storedValue,setStoredValue]=useState(()=>{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item):initialValues;
    })
    const setValue = value=>{
        //save state
        setStoredValue(value);
        //save to local storage
        window.localStorage.setItem(key,JSON.stringify(value))
    }


    return[storedValue,setValue]
}

