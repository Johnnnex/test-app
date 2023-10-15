import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useData } from "@/context/DataContext";
import HeadComp from '@/layout/HeadComp';

const Transformation = () => {
    const {mode, uData} = useData()
    const {push} = useRouter()
    useEffect(()=> {
        if(!mode) {
            push("/")
        }
    }, [mode])
  return (
    <>
        <HeadComp title="Sigflow || Transformations" />
    </>
  )
}

export default Transformation
