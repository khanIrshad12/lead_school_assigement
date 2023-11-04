'use client'
import FormData  from "@/components/FormData";
import { useEffect,useState } from "react"

 const Provider=()=>{
    const [isMounted, setIsMounted] = useState(false)
    useEffect(()=>{
        setIsMounted(true)
    },[]);
    if(!isMounted){
        return null
    }
    return(
        <div>
            <FormData/>
        </div>
    )
}
export default Provider