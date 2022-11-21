import { useEffect, useState } from "react";

export function useLocal<T>(key: string, initialValue: T | (() => T)) {
  const [value,setValue] = useState<T>(()=>{
    const jsonValue = localStorage.getItem(key)
     if (jsonValue != null) return JSON.parse(jsonValue)
     if (typeof initialValue === "function") return (initialValue as () => T)
     return initialValue
  })
  useEffect(() => {
    
  },[key,value])
}