import { useEffect } from 'react';
import {useLocalStorage} from './useLocalStorage'

export function useDarkMode(key,initialValue){

    const[darkMode,setDarkMode] = useLocalStorage(key,initialValue)

     const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
        console.log('toggle clicked in useDarkMode', darkMode)
     
    };
    
    let page = document.querySelector('body')
    useEffect(()=>{
        if(darkMode){
            page.classList.add('dark-mode')

        }else{
            page.classList.remove('dark-mode')
        }

    },[darkMode])

    return [darkMode,toggleMode]

}