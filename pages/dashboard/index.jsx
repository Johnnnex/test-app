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
        <main className="ml-[20%] pt-[73px] pr-[40px]">
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
                        <path d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z" stroke="#32D583" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <section className="mt-[24px] border p-[20px] border-[#E6E7EC] rounded-[8px]">
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
                            <td>Gotham Asylum</td>
                            <td>10th Aug, 2023</td>
                            <td>
                                <button className="bg-[#ECFDF3] px-[10px] rounded-[4px] py-[1px] text-[#32D583] font-manrope text-[10px] font-[500]">Paused</button>
                            </td>
                            <td>
                                <div className="relative">
                                    <button className='hover:bg-[#00000010] rounded-[4px] py-[2px] px-[4px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 9.99999C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.99999 4.99999C10.4602 4.99999 10.8333 4.6269 10.8333 4.16666C10.8333 3.70642 10.4602 3.33333 9.99999 3.33333C9.53975 3.33333 9.16666 3.70642 9.16666 4.16666C9.16666 4.6269 9.53975 4.99999 9.99999 4.99999Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.99999 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 9.99999 15C9.53975 15 9.16666 15.3731 9.16666 15.8333C9.16666 16.2936 9.53975 16.6667 9.99999 16.6667Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <ReactPaginate
                activeClassName={'pagination-active'}
                containerClassName={'pagination'}
                breakLabel="..."
                nextLabel= ">>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<<"
                renderOnZeroPageCount={null}
            />
        </main>

    </>
  )
}

export default Transformation
