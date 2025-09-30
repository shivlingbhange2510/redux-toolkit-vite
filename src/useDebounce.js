import {useState, useEffect} from 'react'
export const useDebounce =({inputSting, delay})=>{
    const [value, setValue]= useState(inputSting);

            useEffect(()=>{
                const timerId = setTimeout(()=>{
                        setValue(inputSting)
                }, delay);
                return ()=>clearTimeout(timerId)
            },[inputSting, delay])

        return value
}
