import { useState, SetStateAction, Dispatch, useEffect} from "react";

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
]



export function useSaveTheme<T>(key:string, initialState: T):Response<T>{
  const [storage, setStorage] = useState(()=>{
    const localStorageValue = localStorage.getItem(key)

    if(localStorageValue){
      return JSON.parse(localStorageValue)
    }else{
      return initialState
    }
  })



  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(storage))
  }, [key, storage])

  return [storage, setStorage]

}