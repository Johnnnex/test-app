import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useData } from "@/context/DataContext";

const DashboardNav = () => {
    const {pathname, asPath} = useRouter()
    const {mode, uData} = useData()
    const [navState, setNavState] = useState(true)
	const navLinks = [
		{ 
            key: 1, 
            title: "Events", 
            svgRender: ()=> {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M11.6667 9.16666H6.66671M8.33337 12.5H6.66671M13.3334 5.83332H6.66671M16.6667 5.66666V14.3333C16.6667 15.7335 16.6667 16.4335 16.3942 16.9683C16.1545 17.4387 15.7721 17.8212 15.3017 18.0608C14.7669 18.3333 14.0668 18.3333 12.6667 18.3333H7.33337C5.93324 18.3333 5.23318 18.3333 4.6984 18.0608C4.22799 17.8212 3.84554 17.4387 3.60586 16.9683C3.33337 16.4335 3.33337 15.7335 3.33337 14.3333V5.66666C3.33337 4.26653 3.33337 3.56646 3.60586 3.03168C3.84554 2.56128 4.22799 2.17882 4.6984 1.93914C5.23318 1.66666 5.93324 1.66666 7.33337 1.66666H12.6667C14.0668 1.66666 14.7669 1.66666 15.3017 1.93914C15.7721 2.17882 16.1545 2.56128 16.3942 3.03168C16.6667 3.56646 16.6667 4.26653 16.6667 5.66666Z" stroke={asPath == "/dashboard/events" ? "#32D583" : "#828282" } strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )
            }, 
            path: "/dashboard/events" 
        },
		{ 
            key: 2, 
            title: "Pipeline", 
            svgRender: ()=> {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.49996 14.1667H5.83329C3.53211 14.1667 1.66663 12.3012 1.66663 10C1.66663 7.69881 3.53211 5.83333 5.83329 5.83333H7.49996M6.66663 10L15 10M13.1481 14.1667H14.1666C16.4678 14.1667 18.3333 12.3012 18.3333 10C18.3333 7.69881 16.4678 5.83333 14.1666 5.83333H13.1481C12.7901 5.83333 12.5 6.12351 12.5 6.48148V13.5185C12.5 13.8765 12.7901 14.1667 13.1481 14.1667Z" stroke={asPath == "/dashboard/pipeline" ? "#32D583" : "#828282" } strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )
            },
            path: "/dashboard/pipeline" 
        },
		{ 
            key: 3, 
            title: "Source", 
            svgRender: ()=> {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15.8333 9L10 9.5M10 9.5L10.8333 4M10 9.5L17 2.5M8.33333 4.1665H6.5C5.09987 4.1665 4.3998 4.1665 3.86502 4.43899C3.39462 4.67867 3.01217 5.06112 2.77248 5.53153C2.5 6.06631 2.5 6.76637 2.5 8.1665V13.4998C2.5 14.9 2.5 15.6 2.77248 16.1348C3.01217 16.6052 3.39462 16.9877 3.86502 17.2274C4.3998 17.4998 5.09987 17.4998 6.5 17.4998H11.8333C13.2335 17.4998 13.9335 17.4998 14.4683 17.2274C14.9387 16.9877 15.3212 16.6052 15.5608 16.1348C15.8333 15.6 15.8333 14.9 15.8333 13.4998V11.6665" stroke={asPath == "/dashboard/source" ? "#32D583" : "#828282" } strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )
            },
            path: "/dashboard/source" 
        },
		{ 
            key: 4, 
            title: "Destination",
            svgRender: ()=> {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15.8333 9L10 9.5M10 9.5L10.8333 4M10 9.5L17 2.5M8.33333 4.1665H6.5C5.09987 4.1665 4.3998 4.1665 3.86502 4.43899C3.39462 4.67867 3.01217 5.06112 2.77248 5.53153C2.5 6.06631 2.5 6.76637 2.5 8.1665V13.4998C2.5 14.9 2.5 15.6 2.77248 16.1348C3.01217 16.6052 3.39462 16.9877 3.86502 17.2274C4.3998 17.4998 5.09987 17.4998 6.5 17.4998H11.8333C13.2335 17.4998 13.9335 17.4998 14.4683 17.2274C14.9387 16.9877 15.3212 16.6052 15.5608 16.1348C15.8333 15.6 15.8333 14.9 15.8333 13.4998V11.6665" stroke={asPath == "/dashboard/destination" ? "#32D583" : "#828282" }  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )
            }, 
            path: "/dashboard/destination" 
        },
		{ 
            key: 5, 
            title: "Transformations",
            svgRender: ()=> {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15.8333 5.83333V14.1667M4.16667 5.83333V14.1667M14.1667 4.16667L5.83333 4.16667M14.1667 15.8333H5.83333M3.83333 5.83333H4.5C4.96671 5.83333 5.20007 5.83333 5.37833 5.74251C5.53513 5.66261 5.66261 5.53513 5.74251 5.37833C5.83333 5.20007 5.83333 4.96671 5.83333 4.5V3.83333C5.83333 3.36662 5.83333 3.13327 5.74251 2.95501C5.66261 2.79821 5.53513 2.67072 5.37833 2.59083C5.20007 2.5 4.96671 2.5 4.5 2.5H3.83333C3.36662 2.5 3.13327 2.5 2.95501 2.59083C2.79821 2.67072 2.67072 2.79821 2.59083 2.95501C2.5 3.13327 2.5 3.36662 2.5 3.83333V4.5C2.5 4.96671 2.5 5.20007 2.59083 5.37833C2.67072 5.53513 2.79821 5.66261 2.95501 5.74251C3.13327 5.83333 3.36662 5.83333 3.83333 5.83333ZM3.83333 17.5H4.5C4.96671 17.5 5.20007 17.5 5.37833 17.4092C5.53513 17.3293 5.66261 17.2018 5.74251 17.045C5.83333 16.8667 5.83333 16.6334 5.83333 16.1667V15.5C5.83333 15.0333 5.83333 14.7999 5.74251 14.6217C5.66261 14.4649 5.53513 14.3374 5.37833 14.2575C5.20007 14.1667 4.96671 14.1667 4.5 14.1667H3.83333C3.36662 14.1667 3.13327 14.1667 2.95501 14.2575C2.79821 14.3374 2.67072 14.4649 2.59083 14.6217C2.5 14.7999 2.5 15.0333 2.5 15.5V16.1667C2.5 16.6334 2.5 16.8667 2.59083 17.045C2.67072 17.2018 2.79821 17.3293 2.95501 17.4092C3.13327 17.5 3.36662 17.5 3.83333 17.5ZM15.5 5.83333H16.1667C16.6334 5.83333 16.8667 5.83333 17.045 5.74251C17.2018 5.66261 17.3293 5.53513 17.4092 5.37833C17.5 5.20007 17.5 4.96671 17.5 4.5V3.83333C17.5 3.36662 17.5 3.13327 17.4092 2.95501C17.3293 2.79821 17.2018 2.67072 17.045 2.59083C16.8667 2.5 16.6334 2.5 16.1667 2.5H15.5C15.0333 2.5 14.7999 2.5 14.6217 2.59083C14.4649 2.67072 14.3374 2.79821 14.2575 2.95501C14.1667 3.13327 14.1667 3.36662 14.1667 3.83333V4.5C14.1667 4.96671 14.1667 5.20007 14.2575 5.37833C14.3374 5.53513 14.4649 5.66261 14.6217 5.74251C14.7999 5.83333 15.0333 5.83333 15.5 5.83333ZM15.5 17.5H16.1667C16.6334 17.5 16.8667 17.5 17.045 17.4092C17.2018 17.3293 17.3293 17.2018 17.4092 17.045C17.5 16.8667 17.5 16.6334 17.5 16.1667V15.5C17.5 15.0333 17.5 14.7999 17.4092 14.6217C17.3293 14.4649 17.2018 14.3374 17.045 14.2575C16.8667 14.1667 16.6334 14.1667 16.1667 14.1667H15.5C15.0333 14.1667 14.7999 14.1667 14.6217 14.2575C14.4649 14.3374 14.3374 14.4649 14.2575 14.6217C14.1667 14.7999 14.1667 15.0333 14.1667 15.5V16.1667C14.1667 16.6334 14.1667 16.8667 14.2575 17.045C14.3374 17.2018 14.4649 17.3293 14.6217 17.4092C14.7999 17.5 15.0333 17.5 15.5 17.5Z" stroke={asPath == "/dashboard" ? "#32D583" : "#828282" } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )
            }, 
            path: "/dashboard" 
        },
	]
    const links = navLinks.map(({path, key, title, svgRender}) => (
        <Link key={key} href={path}>
            <li className={`${pathname === path || asPath === path ? "activeLink" : ""} flex font-Inter rounded-[8px] transition-[.4s] hover:bg-[#ECFDF3] text-[14px] font-[400] mb-[16px] p-[6px] items-center gap-[12px]`}>
                {svgRender()}{title}
            </li>
        </Link>
	))
    const removeNav = () => {
        setNavState(true)
    }
    const showNav = () => {
        setNavState(false)
    }
  return (
    <>
        <header className="fixed top-0 md:left-[20%] md:w-[80%] w-full h-[73px] border-b flex justify-between md:justify-end items-center border-[#E6E7EC] bg-white pr-[40px]">
            <div className="flex-1 md:hidden">
                <button onClick={showNav}>
                    <svg width="50px" height="50px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM17.5 13.25C17.9142 13.25 18.25 12.9142 18.25 12.5C18.25 12.0858 17.9142 11.75 17.5 11.75V13.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM12.5 17.25C12.9142 17.25 13.25 16.9142 13.25 16.5C13.25 16.0858 12.9142 15.75 12.5 15.75V17.25ZM5.5 9.25H19.5V7.75H5.5V9.25ZM5.5 13.25H17.5V11.75H5.5V13.25ZM5.5 17.25H12.5V15.75H5.5V17.25Z" fill="#000000"/>
                    </svg>
                </button>
            </div>
            <div className="flex items-center gap-[6px]">
                <Image src="/images/pfp.png" alt="pfp-img" height={1} width={50}/>
                <div className="h-full flex flex-col justify-between">
                    <b className="text-[#101828] font-[600] font-manrope text-[14px]">Sigflow</b>
                    <small className="font-[400] text-[14px] text-[#828282] font-manrope">{uData && uData?.data?.user?.first_name} {uData && uData?.data?.user?.last_name}</small>
                </div>
            </div>
        </header>
        <aside className={`fixed left-0 bg-white ${navState ? "translate-x-[-100%] md:translate-x-0" : "translate-x-0"} transition-[.4s] top-0 z-[2] md:bg-[#FAFAFA66] md:w-[20%] pt-[45px] px-[30px] h-[100vh]`}>
            <div className="flex justify-between items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="91" height="26" viewBox="0 0 91 26" fill="none">
                    <path d="M7.12765 19.9681C6.309 19.9681 5.52593 19.8524 4.77846 19.6211C4.03099 19.3897 3.34581 19.0427 2.72292 18.58C2.10003 18.1172 1.55723 17.5566 1.09451 16.8981C0.63179 16.2219 0.266953 15.4388 0 14.549L3.39031 13.2142C3.63946 14.1752 4.07549 14.9761 4.69838 15.6168C5.32127 16.2397 6.13993 16.5511 7.15435 16.5511C7.52808 16.5511 7.88402 16.5066 8.22216 16.4176C8.5781 16.3108 8.88955 16.1685 9.1565 15.9905C9.44125 15.7947 9.66371 15.5545 9.82388 15.2697C9.98405 14.985 10.0641 14.6557 10.0641 14.282C10.0641 13.9261 10.0019 13.6057 9.87727 13.321C9.75269 13.0362 9.53913 12.7693 9.23658 12.5201C8.95183 12.271 8.5692 12.0307 8.08869 11.7993C7.62597 11.568 7.04757 11.3277 6.35349 11.0786L5.17889 10.6514C4.66278 10.4735 4.13778 10.2332 3.60387 9.93066C3.08776 9.62812 2.61614 9.26328 2.18902 8.83615C1.76189 8.40903 1.40595 7.91072 1.1212 7.34122C0.854251 6.75392 0.720774 6.09543 0.720774 5.36576C0.720774 4.61829 0.863149 3.92421 1.1479 3.28353C1.45045 2.62504 1.86867 2.05554 2.40258 1.57502C2.95428 1.07671 3.60387 0.694079 4.35134 0.427126C5.1166 0.142375 5.96196 0 6.88739 0C7.84843 0 8.67598 0.133477 9.37006 0.400431C10.0819 0.649588 10.6781 0.97883 11.1586 1.38816C11.657 1.77969 12.0574 2.21571 12.3599 2.69623C12.6625 3.17674 12.8849 3.63057 13.0273 4.05769L9.85058 5.39246C9.67261 4.85855 9.34337 4.37804 8.86285 3.95091C8.40013 3.52378 7.75944 3.31022 6.94079 3.31022C6.15772 3.31022 5.50814 3.49709 4.99203 3.87082C4.47592 4.22676 4.21786 4.69838 4.21786 5.28568C4.21786 5.85518 4.46702 6.34459 4.96533 6.75392C5.46364 7.14545 6.25561 7.52808 7.34122 7.90182L8.54251 8.30225C9.30777 8.5692 10.0019 8.88065 10.6247 9.23658C11.2654 9.57473 11.8082 9.98405 12.2532 10.4646C12.7159 10.9451 13.0629 11.4968 13.2943 12.1197C13.5434 12.7248 13.668 13.4278 13.668 14.2286C13.668 15.2252 13.4633 16.0884 13.054 16.8181C12.6625 17.5299 12.1553 18.1172 11.5324 18.58C10.9095 19.0427 10.2065 19.3897 9.42345 19.6211C8.64039 19.8524 7.87512 19.9681 7.12765 19.9681Z" fill="#32D583"/>
                    <path d="M18.158 4.5649C17.8555 4.5649 17.5618 4.51151 17.2771 4.40473C17.0101 4.28015 16.7699 4.11998 16.5563 3.92421C16.3606 3.71065 16.2004 3.47039 16.0758 3.20344C15.969 2.93649 15.9156 2.64284 15.9156 2.32249C15.9156 2.00215 15.969 1.7085 16.0758 1.44155C16.2004 1.1746 16.3606 0.943236 16.5563 0.747469C16.7699 0.533907 17.0101 0.373735 17.2771 0.266953C17.5618 0.142375 17.8555 0.0800866 18.158 0.0800866C18.7809 0.0800866 19.3148 0.302547 19.7598 0.747469C20.2047 1.1746 20.4271 1.6996 20.4271 2.32249C20.4271 2.94539 20.2047 3.47929 19.7598 3.92421C19.3148 4.35134 18.7809 4.5649 18.158 4.5649ZM16.4228 19.541V6.46027H19.9199V19.541H16.4228Z" fill="#32D583"/>
                    <path d="M29.0205 25.7343C28.0951 25.7343 27.2675 25.6097 26.5379 25.3606C25.826 25.1292 25.2031 24.8178 24.6692 24.4262C24.1353 24.0525 23.6904 23.6343 23.3344 23.1715C22.9785 22.7088 22.7204 22.2461 22.5603 21.7834L25.8972 20.4486C26.1463 21.1427 26.5557 21.6766 27.1252 22.0503C27.6947 22.4419 28.3265 22.6376 29.0205 22.6376C30.1239 22.6376 30.996 22.2906 31.6367 21.5965C32.2774 20.9202 32.5977 19.9681 32.5977 18.7401V17.8325H32.3841C31.9748 18.402 31.432 18.8558 30.7557 19.1939C30.0972 19.5143 29.3142 19.6745 28.4065 19.6745C27.6235 19.6745 26.8582 19.5143 26.1107 19.1939C25.3811 18.8736 24.7315 18.4198 24.162 17.8325C23.5925 17.2274 23.1298 16.5066 22.7738 15.6702C22.4179 14.8337 22.2399 13.8994 22.2399 12.8671C22.2399 11.8349 22.4179 10.9006 22.7738 10.0641C23.1298 9.20989 23.5925 8.48912 24.162 7.90182C24.7315 7.29672 25.3811 6.834 26.1107 6.51366C26.8582 6.19332 27.6235 6.03314 28.4065 6.03314C29.3142 6.03314 30.0972 6.20222 30.7557 6.54036C31.432 6.8607 31.9748 7.30562 32.3841 7.87512H32.5977V6.46027H35.9346V18.6066C35.9346 19.7101 35.7656 20.6978 35.4274 21.5698C35.0893 22.4597 34.6177 23.2071 34.0126 23.8122C33.4075 24.4351 32.6778 24.9067 31.8235 25.2271C30.9871 25.5652 30.0528 25.7343 29.0205 25.7343ZM29.154 16.5244C29.5811 16.5244 29.9994 16.4443 30.4087 16.2842C30.8358 16.124 31.2096 15.8926 31.5299 15.5901C31.8502 15.2697 32.1083 14.8871 32.3041 14.4422C32.4998 13.9795 32.5977 13.4544 32.5977 12.8671C32.5977 12.2799 32.4998 11.7548 32.3041 11.2921C32.1083 10.8294 31.8502 10.4468 31.5299 10.1442C31.2096 9.82388 30.8358 9.58362 30.4087 9.42345C29.9994 9.26328 29.5811 9.18319 29.154 9.18319C28.7269 9.18319 28.3087 9.26328 27.8993 9.42345C27.49 9.58362 27.1252 9.82388 26.8048 10.1442C26.4845 10.4646 26.2264 10.8561 26.0307 11.3188C25.8349 11.7637 25.737 12.2799 25.737 12.8671C25.737 13.4544 25.8349 13.9795 26.0307 14.4422C26.2264 14.8871 26.4845 15.2697 26.8048 15.5901C27.1252 15.8926 27.49 16.124 27.8993 16.2842C28.3087 16.4443 28.7269 16.5244 29.154 16.5244Z" fill="#32D583"/>
                    <path d="M49.0749 19.8524V3.86192H45.9783C45.4088 3.86192 44.9549 4.03989 44.6168 4.39582C44.2965 4.73396 44.1363 5.23228 44.1363 5.89076V6.77171H47.2063V8.26665V9.76159H44.1363V19.8524H40.6392V9.76159H38.29V6.77171H40.6392V5.94415C40.6392 4.21785 41.093 2.90088 42.0007 1.99324C42.9083 1.0856 44.2253 0.631782 45.9516 0.631782H52.572V19.8524H49.0749Z" fill="#32D583"/>
                    <path d="M61.4028 6.03314C62.4172 6.03314 63.3427 6.21111 64.1791 6.56705C65.0334 6.90519 65.763 7.38571 66.3681 8.0086C66.991 8.61369 67.4715 9.34337 67.8097 10.1976C68.1656 11.0519 68.3436 11.9862 68.3436 13.0006C68.3436 14.015 68.1656 14.9494 67.8097 15.8036C67.4715 16.6579 66.991 17.3965 66.3681 18.0193C65.763 18.6244 65.0334 19.105 64.1791 19.4609C63.3427 19.799 62.4172 19.9681 61.4028 19.9681C60.3884 19.9681 59.454 19.799 58.5998 19.4609C57.7633 19.105 57.0337 18.6244 56.4108 18.0193C55.8057 17.3965 55.3252 16.6579 54.9692 15.8036C54.6311 14.9494 54.462 14.015 54.462 13.0006C54.462 11.9862 54.6311 11.0519 54.9692 10.1976C55.3252 9.34337 55.8057 8.61369 56.4108 8.0086C57.0337 7.38571 57.7633 6.90519 58.5998 6.56705C59.454 6.21111 60.3884 6.03314 61.4028 6.03314ZM61.4028 16.738C61.8477 16.738 62.2748 16.6579 62.6842 16.4977C63.1113 16.3197 63.485 16.0706 63.8054 15.7502C64.1257 15.4299 64.3749 15.0384 64.5528 14.5757C64.7486 14.1129 64.8465 13.5879 64.8465 13.0006C64.8465 12.4133 64.7486 11.8883 64.5528 11.4256C64.3749 10.9629 64.1257 10.5714 63.8054 10.251C63.485 9.93066 63.1113 9.69041 62.6842 9.53023C62.2748 9.35226 61.8477 9.26328 61.4028 9.26328C60.9401 9.26328 60.5041 9.35226 60.0947 9.53023C59.6854 9.69041 59.3206 9.93066 59.0002 10.251C58.6799 10.5714 58.4218 10.9629 58.2261 11.4256C58.0481 11.8883 57.9591 12.4133 57.9591 13.0006C57.9591 13.5879 58.0481 14.1129 58.2261 14.5757C58.4218 15.0384 58.6799 15.4299 59.0002 15.7502C59.3206 16.0706 59.6854 16.3197 60.0947 16.4977C60.5041 16.6579 60.9401 16.738 61.4028 16.738Z" fill="#32D583"/>
                    <path d="M68.9417 6.46027H72.8659L75.0283 14.6557H75.2151L77.8046 6.46027H81.4084L84.0246 14.6557H84.2115L86.3471 6.46027H90.2179L86.0267 19.541H82.2627L79.6466 11.2921H79.4597L76.8436 19.541H73.1329L68.9417 6.46027Z" fill="#32D583"/>
                </svg>
                <button onClick={removeNav} className="md:hidden">
                    <Image src="/images/close.svg" alt="close" height={1} width={20}/>
                </button>
            </div>
            <div className="mt-[26px]">
                <button className="button-small-bl font-manrope text-[#101828] text-[14px] font-[600]">
                    Sigflow
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M4.375 9.375L7.5 12.5L10.625 9.375M4.375 5.625L7.5 2.5L10.625 5.625" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <nav className="mt-[20px]">
                <ul className=" border-b border-[ECFDF3]">
                    {links}
                </ul>
            </nav>
            <section className="pt-[30px] pl-[10px]">
                <div className="">
                    <button className="flex text-[#828282] hover:text-[#32D583] transition-[.4s] font-Inter font-[400] gap-[12px] items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M16.6667 17.5C16.6667 16.337 16.6667 15.7555 16.5232 15.2824C16.2 14.217 15.3663 13.3834 14.301 13.0602C13.8278 12.9167 13.2463 12.9167 12.0834 12.9167H7.91671C6.75374 12.9167 6.17225 12.9167 5.69909 13.0602C4.63375 13.3834 3.80007 14.217 3.47691 15.2824C3.33337 15.7555 3.33337 16.337 3.33337 17.5M13.75 6.25C13.75 8.32107 12.0711 10 10 10C7.92897 10 6.25004 8.32107 6.25004 6.25C6.25004 4.17893 7.92897 2.5 10 2.5C12.0711 2.5 13.75 4.17893 13.75 6.25Z" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Account
                    </button>
                </div>
                <div className="mt-[18px]">
                    <button className="flex text-[#828282] hover:text-[#32D583] transition-[.4s]  font-Inter font-[400] gap-[12px] items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clipPath="url(#clip0_1_426)">
                                <path d="M9.99996 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 9.99996 7.5C8.61925 7.5 7.49996 8.61929 7.49996 10C7.49996 11.3807 8.61925 12.5 9.99996 12.5Z" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.606 12.2727C15.5052 12.5012 15.4751 12.7547 15.5197 13.0004C15.5642 13.2462 15.6814 13.473 15.856 13.6515L15.9015 13.697C16.0423 13.8377 16.1541 14.0048 16.2304 14.1887C16.3066 14.3727 16.3458 14.5698 16.3458 14.7689C16.3458 14.9681 16.3066 15.1652 16.2304 15.3492C16.1541 15.5331 16.0423 15.7002 15.9015 15.8409C15.7608 15.9818 15.5937 16.0935 15.4097 16.1698C15.2258 16.246 15.0286 16.2853 14.8295 16.2853C14.6304 16.2853 14.4332 16.246 14.2493 16.1698C14.0654 16.0935 13.8983 15.9818 13.7575 15.8409L13.7121 15.7955C13.5335 15.6208 13.3068 15.5036 13.061 15.4591C12.8153 15.4145 12.5618 15.4446 12.3333 15.5455C12.1092 15.6415 11.9181 15.8009 11.7835 16.0042C11.6489 16.2074 11.5767 16.4456 11.5757 16.6894V16.8182C11.5757 17.22 11.4161 17.6054 11.1319 17.8896C10.8478 18.1737 10.4624 18.3333 10.0606 18.3333C9.65872 18.3333 9.27334 18.1737 8.98919 17.8896C8.70505 17.6054 8.54541 17.22 8.54541 16.8182V16.75C8.53955 16.4992 8.45838 16.2561 8.31247 16.052C8.16655 15.848 7.96264 15.6926 7.72723 15.6061C7.49874 15.5052 7.24527 15.4751 6.99951 15.5197C6.75376 15.5643 6.52699 15.6814 6.34844 15.8561L6.30299 15.9015C6.16227 16.0424 5.99517 16.1541 5.81123 16.2304C5.6273 16.3066 5.43013 16.3459 5.23102 16.3459C5.03191 16.3459 4.83474 16.3066 4.65081 16.2304C4.46687 16.1541 4.29977 16.0424 4.15905 15.9015C4.01818 15.7608 3.90642 15.5937 3.83017 15.4098C3.75392 15.2258 3.71468 15.0287 3.71468 14.8295C3.71468 14.6304 3.75392 14.4333 3.83017 14.2493C3.90642 14.0654 4.01818 13.8983 4.15905 13.7576L4.2045 13.7121C4.37915 13.5336 4.49631 13.3068 4.54087 13.0611C4.58543 12.8153 4.55535 12.5618 4.4545 12.3333C4.35847 12.1093 4.19902 11.9182 3.99577 11.7836C3.79252 11.649 3.55434 11.5767 3.31057 11.5758H3.18178C2.77993 11.5758 2.39455 11.4161 2.1104 11.132C1.82626 10.8478 1.66663 10.4624 1.66663 10.0606C1.66663 9.65876 1.82626 9.27338 2.1104 8.98923C2.39455 8.70509 2.77993 8.54545 3.18178 8.54545H3.24996C3.50071 8.53959 3.7439 8.45842 3.94791 8.31251C4.15192 8.16659 4.30732 7.96268 4.3939 7.72727C4.49474 7.49878 4.52483 7.24531 4.48027 6.99955C4.43571 6.7538 4.31855 6.52703 4.1439 6.34849L4.09844 6.30303C3.95757 6.16231 3.84581 5.99521 3.76957 5.81127C3.69332 5.62734 3.65407 5.43018 3.65407 5.23106C3.65407 5.03195 3.69332 4.83479 3.76957 4.65085C3.84581 4.46691 3.95757 4.29981 4.09844 4.15909C4.23916 4.01822 4.40627 3.90646 4.5902 3.83021C4.77414 3.75396 4.9713 3.71472 5.17041 3.71472C5.36953 3.71472 5.56669 3.75396 5.75063 3.83021C5.93456 3.90646 6.10167 4.01822 6.24238 4.15909L6.28784 4.20455C6.46638 4.37919 6.69315 4.49635 6.93891 4.54091C7.18466 4.58547 7.43813 4.55539 7.66663 4.45455H7.72723C7.9513 4.35851 8.1424 4.19906 8.277 3.99581C8.4116 3.79256 8.48384 3.55438 8.48481 3.31061V3.18182C8.48481 2.77998 8.64444 2.39459 8.92859 2.11044C9.21273 1.8263 9.59812 1.66667 9.99996 1.66667C10.4018 1.66667 10.7872 1.8263 11.0713 2.11044C11.3555 2.39459 11.5151 2.77998 11.5151 3.18182V3.25C11.5161 3.49378 11.5883 3.73195 11.7229 3.9352C11.8575 4.13845 12.0486 4.29791 12.2727 4.39394C12.5012 4.49478 12.7547 4.52487 13.0004 4.48031C13.2462 4.43575 13.4729 4.31859 13.6515 4.14394L13.6969 4.09849C13.8376 3.95761 14.0048 3.84586 14.1887 3.76961C14.3726 3.69336 14.5698 3.65411 14.7689 3.65411C14.968 3.65411 15.1652 3.69336 15.3491 3.76961C15.533 3.84586 15.7002 3.95761 15.8409 4.09849C15.9817 4.2392 16.0935 4.40631 16.1697 4.59024C16.246 4.77418 16.2852 4.97134 16.2852 5.17046C16.2852 5.36957 16.246 5.56673 16.1697 5.75067C16.0935 5.9346 15.9817 6.10171 15.8409 6.24242L15.7954 6.28788C15.6208 6.46642 15.5036 6.69319 15.459 6.93895C15.4145 7.1847 15.4446 7.43817 15.5454 7.66667V7.72727C15.6414 7.95134 15.8009 8.14244 16.0042 8.27704C16.2074 8.41164 16.4456 8.48388 16.6894 8.48485H16.8181C17.22 8.48485 17.6054 8.64448 17.8895 8.92863C18.1737 9.21277 18.3333 9.59816 18.3333 10C18.3333 10.4018 18.1737 10.7872 17.8895 11.0714C17.6054 11.3555 17.22 11.5152 16.8181 11.5152H16.75C16.5062 11.5161 16.268 11.5884 16.0648 11.723C15.8615 11.8576 15.7021 12.0487 15.606 12.2727Z" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_426">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        Settings
                    </button>
                </div>
            </section>
            <section className="absolute md:bottom-[5px] bottom-[10px]">
                <div className="">
                    <button className="flex items-center text-[#32D583] hover:text-[#828282] transition-[.4s] font-manrope font-[600] text-[14px] gap-[12px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9.99996 17.5L9.91658 17.3749C9.33771 16.5066 9.04828 16.0725 8.66588 15.7582C8.32734 15.4799 7.93726 15.2712 7.51796 15.1438C7.04434 15 6.52255 15 5.47898 15H4.33329C3.39987 15 2.93316 15 2.57664 14.8183C2.26304 14.6586 2.00807 14.4036 1.84828 14.09C1.66663 13.7335 1.66663 13.2668 1.66663 12.3333V5.16667C1.66663 4.23325 1.66663 3.76654 1.84828 3.41002C2.00807 3.09641 2.26304 2.84144 2.57664 2.68166C2.93316 2.5 3.39987 2.5 4.33329 2.5H4.66663C6.53347 2.5 7.46689 2.5 8.17993 2.86331C8.80713 3.18289 9.31707 3.69282 9.63665 4.32003C9.99996 5.03307 9.99996 5.96649 9.99996 7.83333M9.99996 17.5V7.83333M9.99996 17.5L10.0833 17.3749C10.6622 16.5066 10.9516 16.0725 11.334 15.7582C11.6726 15.4799 12.0627 15.2712 12.482 15.1438C12.9556 15 13.4774 15 14.5209 15H15.6666C16.6 15 17.0668 15 17.4233 14.8183C17.7369 14.6586 17.9918 14.4036 18.1516 14.09C18.3333 13.7335 18.3333 13.2668 18.3333 12.3333V5.16667C18.3333 4.23325 18.3333 3.76654 18.1516 3.41002C17.9918 3.09641 17.7369 2.84144 17.4233 2.68166C17.0668 2.5 16.6 2.5 15.6666 2.5H15.3333C13.4665 2.5 12.533 2.5 11.82 2.86331C11.1928 3.18289 10.6828 3.69282 10.3633 4.32003C9.99996 5.03307 9.99996 5.96649 9.99996 7.83333" stroke="#32D583" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Help
                    </button>
                </div>
                <div className="mt-[18px]">
                    <button className="flex items-center text-[#32D583] font-manrope hover:text-[#828282] transition-[.4s] font-[600] text-[14px] gap-[12px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9.99996 17.5L9.91658 17.3749C9.33771 16.5066 9.04828 16.0725 8.66588 15.7582C8.32734 15.4799 7.93726 15.2712 7.51796 15.1438C7.04434 15 6.52255 15 5.47898 15H4.33329C3.39987 15 2.93316 15 2.57664 14.8183C2.26304 14.6586 2.00807 14.4036 1.84828 14.09C1.66663 13.7335 1.66663 13.2668 1.66663 12.3333V5.16667C1.66663 4.23325 1.66663 3.76654 1.84828 3.41002C2.00807 3.09641 2.26304 2.84144 2.57664 2.68166C2.93316 2.5 3.39987 2.5 4.33329 2.5H4.66663C6.53347 2.5 7.46689 2.5 8.17993 2.86331C8.80713 3.18289 9.31707 3.69282 9.63665 4.32003C9.99996 5.03307 9.99996 5.96649 9.99996 7.83333M9.99996 17.5V7.83333M9.99996 17.5L10.0833 17.3749C10.6622 16.5066 10.9516 16.0725 11.334 15.7582C11.6726 15.4799 12.0627 15.2712 12.482 15.1438C12.9556 15 13.4774 15 14.5209 15H15.6666C16.6 15 17.0668 15 17.4233 14.8183C17.7369 14.6586 17.9918 14.4036 18.1516 14.09C18.3333 13.7335 18.3333 13.2668 18.3333 12.3333V5.16667C18.3333 4.23325 18.3333 3.76654 18.1516 3.41002C17.9918 3.09641 17.7369 2.84144 17.4233 2.68166C17.0668 2.5 16.6 2.5 15.6666 2.5H15.3333C13.4665 2.5 12.533 2.5 11.82 2.86331C11.1928 3.18289 10.6828 3.69282 10.3633 4.32003C9.99996 5.03307 9.99996 5.96649 9.99996 7.83333" stroke="#32D583" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Documentation
                    </button>
                </div>
            </section>
        </aside>
    </>
  )
}

export default DashboardNav
