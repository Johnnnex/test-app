import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate'
import { useData } from "@/context/DataContext";
import HeadComp from '@/layout/HeadComp';

const Transformation = () => {
    const {mode, uData} = useData()
    const {push} = useRouter()
    const itemsPerPage= 9
    const [items,setItems]= useState([])
    const [modal, setModal] = useState({one:false, two:false, three:false, four: false})
    useEffect(()=> {
        if(!mode) {
            push("/")
        }
    }, [mode])

    const heading=[
        "Name",
        "Creation Date",
        "Status"
    ]
    const [itemOffset, setItemOffset] = useState(0)
    const endOffset = itemOffset + itemsPerPage
    const currentItems = items.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(items.length / itemsPerPage)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length
        setItemOffset(newOffset)
    }
    
  return (
    <>
        <HeadComp title="Sigflow || Transformations" />
        <main className="md:ml-[20%] w-[90%] md:w-[80%] mx-auto pt-[73px] pr-[40px]">
            <section className="my-[30px] justify-between items-center flex">
                <h1 className=" font-manrope text-[20px] font-[600] text-[#101828]">Transformation</h1>
                <div className="flex gap-[12px] items-center">
                    <button className="px-[14px] py-[8px] bg-[#32D583] transition-[.4s] rounded-[8px] font-manrope text-[14px] font-[700] text-white hover:bg-[#2e7b54]">Create a new Transformation</button>
                    <button className="px-[14px] py-[8px] bg-[#32D583] transition-[.4s] rounded-[8px] font-manrope text-[14px] font-[700] text-white hover:bg-[#2e7b54]">Filters</button>
                </div>
            </section>
            <div className="flex justify-end relative">
                <input type="text" className="outline-none font-manrope focus:border-[#32D583] hover:bg-[#00000010] transition-[.4s] pl-[14px] pr-[40px] py-[10px] w-[292px] border-[#E6E7EC] border rounded-[8px] font-monrope" placeholder='Search Transformation'/>
                <button className="absolute top-[30%] right-[14px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z" stroke="#32D583" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <section className="mt-[24px] overflow-auto max-h-[55vh] border p-[20px] border-[#E6E7EC] rounded-[8px]">
                <table className=''>
                    <thead className="">
                    <tr>
                        {heading.map(head=>{
                        return(
                            <th align='left' className="text-[#828282] text-[12px] font-[500] font-manrope" key={head}>
                            <div className="w-[20.6vw] h-[4rem]">
                                {head}
                            </div>
                            </th>
                        )})}
                    </tr>
                    </thead>
                    <tbody className="text-[#34373F] font-manrope text-[12px] font-[400]">
                        <tr className="pb-[7px] border-b">
                            <td className="pb-[1rem]">Gotham Asylum</td>
                            <td className="pb-[1rem]">10th Aug, 2023</td>
                            <td className="pb-[1rem]">
                                <button className="bg-[#ECFDF3] px-[10px] rounded-[4px] py-[1px] text-[#32D583] font-manrope text-[10px] font-[500]">Paused</button>
                            </td>
                            <td className="pb-[1rem]">
                                <div className="relative">
                                    <button onClick={() => setModal({...modal, one: !modal.one})} className='hover:bg-[#00000010] rounded-[4px] py-[2px] px-[4px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 9.99999C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.99999 4.99999C10.4602 4.99999 10.8333 4.6269 10.8333 4.16666C10.8333 3.70642 10.4602 3.33333 9.99999 3.33333C9.53975 3.33333 9.16666 3.70642 9.16666 4.16666C9.16666 4.6269 9.53975 4.99999 9.99999 4.99999Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.99999 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 9.99999 15C9.53975 15 9.16666 15.3731 9.16666 15.8333C9.16666 16.2936 9.53975 16.6667 9.99999 16.6667Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                    <div className={`w-fit bx-shadw ${modal.one ? "scale-100" : "scale-0"} transition-[.4s] bg-white absolute right-[10px] z-[1] rounded-[4px] p-[8px]`}>
                                        <button className="flex gap-[12px] px-[10px] py-[6px] hover:bg-[#00000020] w-full text-[#34373F] text-[11px] font-[400] font-manrope transition-[.4s] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M1.8109 6.88631C1.73713 6.7695 1.70025 6.7111 1.6796 6.62102C1.66409 6.55335 1.66409 6.44665 1.6796 6.37898C1.70025 6.2889 1.73713 6.2305 1.8109 6.1137C2.42049 5.14846 4.23501 2.70833 7.00022 2.70833C9.76543 2.70833 11.5799 5.14846 12.1895 6.1137C12.2633 6.2305 12.3002 6.2889 12.3208 6.37898C12.3363 6.44665 12.3363 6.55335 12.3208 6.62102C12.3002 6.7111 12.2633 6.7695 12.1895 6.88631C11.5799 7.85155 9.76543 10.2917 7.00022 10.2917C4.23501 10.2917 2.4205 7.85155 1.8109 6.88631Z" stroke="#828282" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7.00022 8.125C7.89768 8.125 8.62522 7.39746 8.62522 6.5C8.62522 5.60254 7.89768 4.875 7.00022 4.875C6.10276 4.875 5.37522 5.60254 5.37522 6.5C5.37522 7.39746 6.10276 8.125 7.00022 8.125Z" stroke="#828282" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            View&nbsp;Transformation
                                        </button>
                                        <button className="flex gap-[12px] px-[10px] py-[6px] hover:bg-[#00000020] w-full text-[#34373F] text-[11px] font-[400] font-manrope transition-[.4s] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M2.66668 4.33149C2.57784 4.3292 2.51333 4.32405 2.45533 4.31252C2.02558 4.22704 1.68964 3.8911 1.60416 3.46135C1.58334 3.3567 1.58334 3.23085 1.58334 2.97917C1.58334 2.72748 1.58334 2.60163 1.60416 2.49699C1.68964 2.06724 2.02558 1.7313 2.45533 1.64582C2.55998 1.625 2.68582 1.625 2.93751 1.625H11.0625C11.3142 1.625 11.44 1.625 11.5447 1.64582C11.9744 1.7313 12.3104 2.06724 12.3959 2.49699C12.4167 2.60163 12.4167 2.72748 12.4167 2.97917C12.4167 3.23085 12.4167 3.3567 12.3959 3.46135C12.3104 3.8911 11.9744 4.22704 11.5447 4.31252C11.4867 4.32405 11.4222 4.3292 11.3333 4.33149M5.91668 7.04167H8.08334M2.66668 4.33333H11.3333V8.775C11.3333 9.68509 11.3333 10.1401 11.1562 10.4877C11.0004 10.7935 10.7518 11.0421 10.4461 11.1979C10.0985 11.375 9.64343 11.375 8.73334 11.375H5.26668C4.35659 11.375 3.90155 11.375 3.55394 11.1979C3.24818 11.0421 2.99959 10.7935 2.84379 10.4877C2.66668 10.1401 2.66668 9.68509 2.66668 8.775V4.33333Z" stroke="#828282" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Archive&nbsp;Transformation
                                        </button>
                                        <button className="flex gap-[12px] px-[10px] py-[6px] hover:bg-[#00000020] w-full text-[#AF202D] text-[11px] font-[400] font-manrope transition-[.4s] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M9.16667 3.25V2.81667C9.16667 2.20995 9.16667 1.90658 9.04859 1.67485C8.94473 1.471 8.779 1.30527 8.57516 1.20141C8.34342 1.08334 8.04006 1.08334 7.43333 1.08334H6.56667C5.95994 1.08334 5.65658 1.08334 5.42484 1.20141C5.221 1.30527 5.05527 1.471 4.95141 1.67485C4.83333 1.90658 4.83333 2.20995 4.83333 2.81667V3.25M5.91667 6.22917V8.9375M8.08333 6.22917V8.9375M2.125 3.25H11.875M10.7917 3.25V9.31667C10.7917 10.2268 10.7917 10.6818 10.6146 11.0294C10.4588 11.3352 10.2102 11.5838 9.9044 11.7396C9.5568 11.9167 9.10175 11.9167 8.19167 11.9167H5.80833C4.89825 11.9167 4.44321 11.9167 4.0956 11.7396C3.78984 11.5838 3.54124 11.3352 3.38545 11.0294C3.20833 10.6818 3.20833 10.2268 3.20833 9.31667V3.25" stroke="#AF202D" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-[1rem]">Gotham Asylum</td>
                            <td className="py-[1rem]">10th Aug, 2023</td>
                            <td className="py-[1rem]">
                                <button className="bg-[#E0E0E0] px-[10px] rounded-[4px] py-[1px] text-[#FFFFFF] font-manrope text-[10px] font-[500]">Archived</button>
                            </td>
                            <td className="py-[1rem]">
                                <div className="relative">
                                    <button onClick={() => setModal({...modal, two: !modal.two})} className='hover:bg-[#00000010] rounded-[4px] py-[2px] px-[4px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 9.99999C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.99999 4.99999C10.4602 4.99999 10.8333 4.6269 10.8333 4.16666C10.8333 3.70642 10.4602 3.33333 9.99999 3.33333C9.53975 3.33333 9.16666 3.70642 9.16666 4.16666C9.16666 4.6269 9.53975 4.99999 9.99999 4.99999Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.99999 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 9.99999 15C9.53975 15 9.16666 15.3731 9.16666 15.8333C9.16666 16.2936 9.53975 16.6667 9.99999 16.6667Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                    <div className={`w-fit bx-shadw ${modal.two ? "scale-100" : "scale-0"} transition-[.4s] bg-white z-[1] absolute right-[10px] rounded-[4px] p-[8px]`}>
                                        <button className="flex gap-[12px] px-[10px] py-[6px] hover:bg-[#00000020] w-full text-[#34373F] text-[11px] font-[400] font-manrope transition-[.4s] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M1.8109 6.88631C1.73713 6.7695 1.70025 6.7111 1.6796 6.62102C1.66409 6.55335 1.66409 6.44665 1.6796 6.37898C1.70025 6.2889 1.73713 6.2305 1.8109 6.1137C2.42049 5.14846 4.23501 2.70833 7.00022 2.70833C9.76543 2.70833 11.5799 5.14846 12.1895 6.1137C12.2633 6.2305 12.3002 6.2889 12.3208 6.37898C12.3363 6.44665 12.3363 6.55335 12.3208 6.62102C12.3002 6.7111 12.2633 6.7695 12.1895 6.88631C11.5799 7.85155 9.76543 10.2917 7.00022 10.2917C4.23501 10.2917 2.4205 7.85155 1.8109 6.88631Z" stroke="#828282" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7.00022 8.125C7.89768 8.125 8.62522 7.39746 8.62522 6.5C8.62522 5.60254 7.89768 4.875 7.00022 4.875C6.10276 4.875 5.37522 5.60254 5.37522 6.5C5.37522 7.39746 6.10276 8.125 7.00022 8.125Z" stroke="#828282" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            View&nbsp;Transformation
                                        </button>
                                        <button className="flex gap-[12px] px-[10px] py-[6px] hover:bg-[#00000020] w-full text-[#34373F] text-[11px] font-[400] font-manrope transition-[.4s] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M2.66668 4.33149C2.57784 4.3292 2.51333 4.32405 2.45533 4.31252C2.02558 4.22704 1.68964 3.8911 1.60416 3.46135C1.58334 3.3567 1.58334 3.23085 1.58334 2.97917C1.58334 2.72748 1.58334 2.60163 1.60416 2.49699C1.68964 2.06724 2.02558 1.7313 2.45533 1.64582C2.55998 1.625 2.68582 1.625 2.93751 1.625H11.0625C11.3142 1.625 11.44 1.625 11.5447 1.64582C11.9744 1.7313 12.3104 2.06724 12.3959 2.49699C12.4167 2.60163 12.4167 2.72748 12.4167 2.97917C12.4167 3.23085 12.4167 3.3567 12.3959 3.46135C12.3104 3.8911 11.9744 4.22704 11.5447 4.31252C11.4867 4.32405 11.4222 4.3292 11.3333 4.33149M5.91668 7.04167H8.08334M2.66668 4.33333H11.3333V8.775C11.3333 9.68509 11.3333 10.1401 11.1562 10.4877C11.0004 10.7935 10.7518 11.0421 10.4461 11.1979C10.0985 11.375 9.64343 11.375 8.73334 11.375H5.26668C4.35659 11.375 3.90155 11.375 3.55394 11.1979C3.24818 11.0421 2.99959 10.7935 2.84379 10.4877C2.66668 10.1401 2.66668 9.68509 2.66668 8.775V4.33333Z" stroke="#828282" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Archive&nbsp;Transformation
                                        </button>
                                        <button className="flex gap-[12px] px-[10px] py-[6px] hover:bg-[#00000020] w-full text-[#AF202D] text-[11px] font-[400] font-manrope transition-[.4s] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M9.16667 3.25V2.81667C9.16667 2.20995 9.16667 1.90658 9.04859 1.67485C8.94473 1.471 8.779 1.30527 8.57516 1.20141C8.34342 1.08334 8.04006 1.08334 7.43333 1.08334H6.56667C5.95994 1.08334 5.65658 1.08334 5.42484 1.20141C5.221 1.30527 5.05527 1.471 4.95141 1.67485C4.83333 1.90658 4.83333 2.20995 4.83333 2.81667V3.25M5.91667 6.22917V8.9375M8.08333 6.22917V8.9375M2.125 3.25H11.875M10.7917 3.25V9.31667C10.7917 10.2268 10.7917 10.6818 10.6146 11.0294C10.4588 11.3352 10.2102 11.5838 9.9044 11.7396C9.5568 11.9167 9.10175 11.9167 8.19167 11.9167H5.80833C4.89825 11.9167 4.44321 11.9167 4.0956 11.7396C3.78984 11.5838 3.54124 11.3352 3.38545 11.0294C3.20833 10.6818 3.20833 10.2268 3.20833 9.31667V3.25" stroke="#AF202D" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-[1rem]">Gotham Asylum</td>
                            <td className="py-[1rem]">10th Aug, 2023</td>
                            <td className="py-[1rem]">
                                <button className="bg-[#ECFDF3] px-[10px] rounded-[4px] py-[1px] text-[#32D583] font-manrope text-[10px] font-[500]">Paused</button>
                            </td>
                            <td className="py-[1rem]">
                                <div className="relative">
                                    <button onClick={() => setModal({...modal, three: !modal.three})} className='hover:bg-[#00000010] rounded-[4px] py-[2px] px-[4px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 9.99999C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.99999 4.99999C10.4602 4.99999 10.8333 4.6269 10.8333 4.16666C10.8333 3.70642 10.4602 3.33333 9.99999 3.33333C9.53975 3.33333 9.16666 3.70642 9.16666 4.16666C9.16666 4.6269 9.53975 4.99999 9.99999 4.99999Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.99999 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 9.99999 15C9.53975 15 9.16666 15.3731 9.16666 15.8333C9.16666 16.2936 9.53975 16.6667 9.99999 16.6667Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                    <div className={`w-fit bx-shadw ${modal.three ? "scale-100" : "scale-0"} transition-[.4s] bg-white z-[1] absolute right-[10px] rounded-[4px] p-[8px]`}>
                                        <button className="flex gap-[12px] px-[10px] py-[6px] hover:bg-[#00000020] w-full text-[#34373F] text-[11px] font-[400] font-manrope transition-[.4s] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M1.8109 6.88631C1.73713 6.7695 1.70025 6.7111 1.6796 6.62102C1.66409 6.55335 1.66409 6.44665 1.6796 6.37898C1.70025 6.2889 1.73713 6.2305 1.8109 6.1137C2.42049 5.14846 4.23501 2.70833 7.00022 2.70833C9.76543 2.70833 11.5799 5.14846 12.1895 6.1137C12.2633 6.2305 12.3002 6.2889 12.3208 6.37898C12.3363 6.44665 12.3363 6.55335 12.3208 6.62102C12.3002 6.7111 12.2633 6.7695 12.1895 6.88631C11.5799 7.85155 9.76543 10.2917 7.00022 10.2917C4.23501 10.2917 2.4205 7.85155 1.8109 6.88631Z" stroke="#828282" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7.00022 8.125C7.89768 8.125 8.62522 7.39746 8.62522 6.5C8.62522 5.60254 7.89768 4.875 7.00022 4.875C6.10276 4.875 5.37522 5.60254 5.37522 6.5C5.37522 7.39746 6.10276 8.125 7.00022 8.125Z" stroke="#828282" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            View&nbsp;Transformation
                                        </button>
                                        <button className="flex gap-[12px] px-[10px] py-[6px] hover:bg-[#00000020] w-full text-[#34373F] text-[11px] font-[400] font-manrope transition-[.4s] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M2.66668 4.33149C2.57784 4.3292 2.51333 4.32405 2.45533 4.31252C2.02558 4.22704 1.68964 3.8911 1.60416 3.46135C1.58334 3.3567 1.58334 3.23085 1.58334 2.97917C1.58334 2.72748 1.58334 2.60163 1.60416 2.49699C1.68964 2.06724 2.02558 1.7313 2.45533 1.64582C2.55998 1.625 2.68582 1.625 2.93751 1.625H11.0625C11.3142 1.625 11.44 1.625 11.5447 1.64582C11.9744 1.7313 12.3104 2.06724 12.3959 2.49699C12.4167 2.60163 12.4167 2.72748 12.4167 2.97917C12.4167 3.23085 12.4167 3.3567 12.3959 3.46135C12.3104 3.8911 11.9744 4.22704 11.5447 4.31252C11.4867 4.32405 11.4222 4.3292 11.3333 4.33149M5.91668 7.04167H8.08334M2.66668 4.33333H11.3333V8.775C11.3333 9.68509 11.3333 10.1401 11.1562 10.4877C11.0004 10.7935 10.7518 11.0421 10.4461 11.1979C10.0985 11.375 9.64343 11.375 8.73334 11.375H5.26668C4.35659 11.375 3.90155 11.375 3.55394 11.1979C3.24818 11.0421 2.99959 10.7935 2.84379 10.4877C2.66668 10.1401 2.66668 9.68509 2.66668 8.775V4.33333Z" stroke="#828282" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Archive&nbsp;Transformation
                                        </button>
                                        <button className="flex gap-[12px] px-[10px] py-[6px] hover:bg-[#00000020] w-full text-[#AF202D] text-[11px] font-[400] font-manrope transition-[.4s] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M9.16667 3.25V2.81667C9.16667 2.20995 9.16667 1.90658 9.04859 1.67485C8.94473 1.471 8.779 1.30527 8.57516 1.20141C8.34342 1.08334 8.04006 1.08334 7.43333 1.08334H6.56667C5.95994 1.08334 5.65658 1.08334 5.42484 1.20141C5.221 1.30527 5.05527 1.471 4.95141 1.67485C4.83333 1.90658 4.83333 2.20995 4.83333 2.81667V3.25M5.91667 6.22917V8.9375M8.08333 6.22917V8.9375M2.125 3.25H11.875M10.7917 3.25V9.31667C10.7917 10.2268 10.7917 10.6818 10.6146 11.0294C10.4588 11.3352 10.2102 11.5838 9.9044 11.7396C9.5568 11.9167 9.10175 11.9167 8.19167 11.9167H5.80833C4.89825 11.9167 4.44321 11.9167 4.0956 11.7396C3.78984 11.5838 3.54124 11.3352 3.38545 11.0294C3.20833 10.6818 3.20833 10.2268 3.20833 9.31667V3.25" stroke="#AF202D" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-[1rem]">Gotham Asylum</td>
                            <td className="py-[1rem]">10th Aug, 2023</td>
                            <td className="py-[1rem]">
                                <button className="bg-[#E0E0E0] px-[10px] rounded-[4px] py-[1px] text-[#FFFFFF] font-manrope text-[10px] font-[500]">Archived</button>
                            </td>
                            <td className="py-[1rem]">
                                <div className="relative">
                                    <button onClick={() => setModal({...modal, four: !modal.four})} className='hover:bg-[#00000010] rounded-[4px] py-[2px] px-[4px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 9.99999C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.99999 4.99999C10.4602 4.99999 10.8333 4.6269 10.8333 4.16666C10.8333 3.70642 10.4602 3.33333 9.99999 3.33333C9.53975 3.33333 9.16666 3.70642 9.16666 4.16666C9.16666 4.6269 9.53975 4.99999 9.99999 4.99999Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.99999 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 9.99999 15C9.53975 15 9.16666 15.3731 9.16666 15.8333C9.16666 16.2936 9.53975 16.6667 9.99999 16.6667Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                    <div className={`w-fit bx-shadw ${modal.four ? "scale-100" : "scale-0"} transition-[.4s] bg-white z-[1] absolute right-[10px] rounded-[4px] p-[8px]`}>
                                        <button className="flex gap-[12px] px-[10px] py-[6px] hover:bg-[#00000020] w-full text-[#34373F] text-[11px] font-[400] font-manrope transition-[.4s] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M1.8109 6.88631C1.73713 6.7695 1.70025 6.7111 1.6796 6.62102C1.66409 6.55335 1.66409 6.44665 1.6796 6.37898C1.70025 6.2889 1.73713 6.2305 1.8109 6.1137C2.42049 5.14846 4.23501 2.70833 7.00022 2.70833C9.76543 2.70833 11.5799 5.14846 12.1895 6.1137C12.2633 6.2305 12.3002 6.2889 12.3208 6.37898C12.3363 6.44665 12.3363 6.55335 12.3208 6.62102C12.3002 6.7111 12.2633 6.7695 12.1895 6.88631C11.5799 7.85155 9.76543 10.2917 7.00022 10.2917C4.23501 10.2917 2.4205 7.85155 1.8109 6.88631Z" stroke="#828282" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7.00022 8.125C7.89768 8.125 8.62522 7.39746 8.62522 6.5C8.62522 5.60254 7.89768 4.875 7.00022 4.875C6.10276 4.875 5.37522 5.60254 5.37522 6.5C5.37522 7.39746 6.10276 8.125 7.00022 8.125Z" stroke="#828282" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            View&nbsp;Transformation
                                        </button>
                                        <button className="flex gap-[12px] px-[10px] py-[6px] hover:bg-[#00000020] w-full text-[#34373F] text-[11px] font-[400] font-manrope transition-[.4s] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M2.66668 4.33149C2.57784 4.3292 2.51333 4.32405 2.45533 4.31252C2.02558 4.22704 1.68964 3.8911 1.60416 3.46135C1.58334 3.3567 1.58334 3.23085 1.58334 2.97917C1.58334 2.72748 1.58334 2.60163 1.60416 2.49699C1.68964 2.06724 2.02558 1.7313 2.45533 1.64582C2.55998 1.625 2.68582 1.625 2.93751 1.625H11.0625C11.3142 1.625 11.44 1.625 11.5447 1.64582C11.9744 1.7313 12.3104 2.06724 12.3959 2.49699C12.4167 2.60163 12.4167 2.72748 12.4167 2.97917C12.4167 3.23085 12.4167 3.3567 12.3959 3.46135C12.3104 3.8911 11.9744 4.22704 11.5447 4.31252C11.4867 4.32405 11.4222 4.3292 11.3333 4.33149M5.91668 7.04167H8.08334M2.66668 4.33333H11.3333V8.775C11.3333 9.68509 11.3333 10.1401 11.1562 10.4877C11.0004 10.7935 10.7518 11.0421 10.4461 11.1979C10.0985 11.375 9.64343 11.375 8.73334 11.375H5.26668C4.35659 11.375 3.90155 11.375 3.55394 11.1979C3.24818 11.0421 2.99959 10.7935 2.84379 10.4877C2.66668 10.1401 2.66668 9.68509 2.66668 8.775V4.33333Z" stroke="#828282" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Archive&nbsp;Transformation
                                        </button>
                                        <button className="flex gap-[12px] px-[10px] py-[6px] hover:bg-[#00000020] w-full text-[#AF202D] text-[11px] font-[400] font-manrope transition-[.4s] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M9.16667 3.25V2.81667C9.16667 2.20995 9.16667 1.90658 9.04859 1.67485C8.94473 1.471 8.779 1.30527 8.57516 1.20141C8.34342 1.08334 8.04006 1.08334 7.43333 1.08334H6.56667C5.95994 1.08334 5.65658 1.08334 5.42484 1.20141C5.221 1.30527 5.05527 1.471 4.95141 1.67485C4.83333 1.90658 4.83333 2.20995 4.83333 2.81667V3.25M5.91667 6.22917V8.9375M8.08333 6.22917V8.9375M2.125 3.25H11.875M10.7917 3.25V9.31667C10.7917 10.2268 10.7917 10.6818 10.6146 11.0294C10.4588 11.3352 10.2102 11.5838 9.9044 11.7396C9.5568 11.9167 9.10175 11.9167 8.19167 11.9167H5.80833C4.89825 11.9167 4.44321 11.9167 4.0956 11.7396C3.78984 11.5838 3.54124 11.3352 3.38545 11.0294C3.20833 10.6818 3.20833 10.2268 3.20833 9.31667V3.25" stroke="#AF202D" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <div className="absolute flex gap-[6px] bottom-[10px]">
                <button className="px-[12px] py-[6px] rounded-[5px] bg-[#32D583] font-manrope text-[12px] font-[500] text-white transition-[.4s] hover:text-[#e9dada] hover:bg-[#58e19c]">5</button>
                <button className="px-[12px] py-[6px] rounded-[5px] bg-[#F5F5F5] font-manrope text-[12px] font-[500] text-[#828282] transition-[.4s] hover:text-white hover:bg-[#00000045]">10</button>
                <button className="px-[12px] py-[6px] rounded-[5px] bg-[#F5F5F5] font-manrope text-[12px] font-[500] text-[#828282] transition-[.4s] hover:text-white hover:bg-[#00000045]">15</button>
            </div>
        </main>

    </>
  )
}

export default Transformation
