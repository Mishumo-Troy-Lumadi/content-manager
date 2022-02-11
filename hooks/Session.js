import { useEffect, useState } from "react"

export const useSession =(key,value)=>{
    const [v, setValue] = useState(null)

    useEffect(()=>{

        if(window){
            if(value){
                sessionStorage.setItem(key,value)
            }
            setValue(sessionStorage.getItem(key));
        }
    },[key,value])

    return v
}
