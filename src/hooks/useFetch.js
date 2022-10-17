import { useEffect, useState } from "react";
import React from 'react'

export default function useFetch(url, options) {
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
      ( async ()=> {
        try {
            const res = await fetch(url, options);
            const json = await res.json();
            setResult(json);
            setLoading(false);//para spinner mientras busca


        }catch(err){
            setError(err)
            setLoading(false)
        }
      })
    
    }, [options, url])
    
  return {loading, result, error}
}
