import {useState, useContext, createContext } from 'react'
const DataContext=createContext({})
const {Provider}= DataContext

const DataGet=({children})=>{
    const [mode, setMode] = useState(false)
    const [uData, setUdata] = useState(null)
    return (
        <Provider value={{setMode, mode, uData, setUdata}}>
            {children}
        </Provider>
    )
}

const useData=()=>useContext(DataContext)
export {useData,DataGet}