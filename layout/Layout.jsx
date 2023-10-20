import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { useData } from "@/context/DataContext";
import DashboardNav from './DashboardNav';

const Layout = ({children}) => {
  const {mode} = useData()
  return (
    <>
        <DashboardNav /> 
        {children}
        <Footer />
    </>
  )
}

export default Layout
