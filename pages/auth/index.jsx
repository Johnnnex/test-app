import React, { useEffect, useState } from 'react'
import HeadComp from '@/layout/HeadComp'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Oval } from 'react-loader-spinner'
import { useRouter } from 'next/router';
import { useData } from "@/context/DataContext";

const Index = () => {
  const [inputField, setInputField] = useState({email: "", password: ""})
  const [passVisibility, setPassVisibility] = useState(false)
  const [err, setErrStates] = useState({ email: false, password: false, neterr: false})
  const [formState, setFormState] = useState(null)
  const {setMode, mode, uData, setUdata} = useData()
  const {push} = useRouter()
   
  
  const changeInput = (e) => {
    const { target } = e
    setInputField({
      ...inputField,
      [target.name] : target.value
    })
  }
  const submitData = async(e) => {
    e.preventDefault()
    setFormState("loading")
    if (inputField.email == null || inputField.email == "") {
      setErrStates({ email: true })
      setTimeout(() => setErrStates({ email: false }), 1000)
      setFormState(null)
      return
    }
    if (inputField.password == null || inputField.password == "") {
      setErrStates({ password: true })
      setTimeout(() => setErrStates({ password: false }), 1000)
      setFormState(null)
      return
    }

  const apiUrl = 'https://sig-staging-api-a4c37da3d933.herokuapp.com/auth/login'

  const requestData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputField),
  }

  try {
    const response = await fetch(apiUrl, requestData);

    if (response.ok) {
      const data = await response.json();
      toast.success('Login successful', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      setUdata(data)
      setMode(true)
      setFormState(null)
      setTimeout(() => push("/dashboard"), 1000)
    } 
    else {
      const data = await response.json();
      toast.error(data.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setFormState(null)
      return
    }
  }
  catch (error) {
    setErrStates({ neterr: true })
    setTimeout(() => setErrStates({ neterr: false }), 5000)
    setFormState(null);
  }

  }
  useEffect (() => {
    if (mode) {
      push("/dashboard")
    }
  }, [])
  return (
    <>
      <HeadComp title="Sigflow || Sign-In" />
      <main className="bg-signin pt-[90px]">
        <form onSubmit={submitData} className="mb-[10px] md:max-w-[420px] w-[94%] md:w-[50%] mx-auto border border-[#E6E7EC] p-[30px] rounded-[8px] bg-white">
          <h1 className="font-manrope mb-[8px] text-[#101828] text-[24px] font-[500] text-center">Welcome back!</h1>
          <p className="font-manrope text-[#828282] text-center mb-[20px] font-[400] text-[14px]">Sign in to access your account</p>
          <section className="mb-[12px]">
            <p className="mb-[7px] leading-[20px]">
              <label htmlFor="email" className="text-[#101828] text-[12px] font-manrope font-[400]">Email</label>
            </p>
            <input type="email" name="email" value={inputField.email} onChange={changeInput} id="email" className="input-generic font-monrope" placeholder="Input your email" />
            {err.email && <p className="text-red-500 font-manrope text-[11px]">Input a valid email adress!</p>}
          </section>
          <section className="mb-[7px]">
            <p className="mb-[7px] leading-[20px]">
              <label htmlFor="password" className="text-[#101828] text-[12px] font-manrope font-[400]">Password</label>
            </p>
            <div className="h-fit relative">
              <input type={passVisibility ? "text" : "password"} autoComplete='off' value={inputField.password} onChange={changeInput} name="password" id="password" placeholder="Input your password" className="input-generic font-monrope" />
              <button type='button' onClick={() => setPassVisibility(!passVisibility)} className="absolute right-[14px] top-[14px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91791 1.81477 9.81382C1.84654 9.67523 1.90328 9.58538 2.01677 9.40568C2.95461 7.9207 5.74617 4.16666 10.0003 4.16666C14.2545 4.16666 17.0461 7.9207 17.9839 9.40568C18.0974 9.58538 18.1541 9.67523 18.1859 9.81382C18.2098 9.91791 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z" stroke={passVisibility ? "#32D583" : "#667085"} strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.5 10.0003 7.5C8.61962 7.5 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z" stroke={passVisibility ? "#32D583" : "#667085"} strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            {err.password && <p className="text-red-500 font-manrope text-[11px]">Please input something here!</p>}
          </section>
          <a href="#" className="font-[500] hover:underline text-[#32D583] text-[12px] font-manrope leading-[20px]">Forgot Password?</a>
          <div className="mt-[32px] mb-[20px]">
            <button type='submit' disabled={formState == "loading" && true} className="font-manrope text-[14px] font-[600] text-white button-generic">
              {formState == "loading" ? 
                <div className="mx-auto w-fit">
                  <Oval
                    height="20"
                    width="30"
                    radius="9"
                    color="white"
                    ariaLabel="loading"
                    wrapperStyle
                  />
                </div> :
                "Sign In"
            }
            </button>
            {err.neterr && <p className="text-red-500 font-manrope text-[13px] text-center">Network error!, please check your connection</p>}
          </div>
          <p className="text-center mb-[20px]">OR</p>
          <section className="flex gap-[22px] justify-center">
            <button type='button' className="button-small flex gap-[8px] items-center font-monrope text-[13px] font-[400] text-[#101828]">
              Sign in with Github
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C8.265 2 2 8.265 2 16C2 22.195 6.0075 27.4275 11.5725 29.2825C12.2725 29.405 12.535 28.985 12.535 28.6175C12.535 28.285 12.5175 27.1825 12.5175 26.01C9 26.6575 8.09 25.1525 7.81 24.365C7.6525 23.9625 6.97 22.72 6.375 22.3875C5.885 22.125 5.185 21.4775 6.3575 21.46C7.46 21.4425 8.2475 22.475 8.51 22.895C9.77 25.0125 11.7825 24.4175 12.5875 24.05C12.71 23.14 13.0775 22.5275 13.48 22.1775C10.365 21.8275 7.11 20.62 7.11 15.265C7.11 13.7425 7.6525 12.4825 8.545 11.5025C8.405 11.1525 7.915 9.7175 8.685 7.7925C8.685 7.7925 9.8575 7.425 12.535 9.2275C13.655 8.9125 14.845 8.755 16.035 8.755C17.225 8.755 18.415 8.9125 19.535 9.2275C22.2125 7.4075 23.385 7.7925 23.385 7.7925C24.155 9.7175 23.665 11.1525 23.525 11.5025C24.4175 12.4825 24.96 13.725 24.96 15.265C24.96 20.6375 21.6875 21.8275 18.5725 22.1775C19.08 22.615 19.5175 23.455 19.5175 24.7675C19.5175 26.64 19.5 28.145 19.5 28.6175C19.5 28.985 19.7625 29.4225 20.4625 29.2825C23.2418 28.3443 25.6568 26.5581 27.3677 24.1753C29.0786 21.7926 29.9993 18.9334 30 16C30 8.265 23.735 2 16 2Z" fill="black"/>
              </svg>
            </button>
            <button type='button' className="button-small flex gap-[8px] items-center font-monrope text-[13px] font-[400] text-[#101828]">
              Sign in with Google
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"/>
                <path d="M16.2863 30C20.1434 30 23.3814 28.7555 25.7466 26.6089L21.2386 23.1865C20.0323 24.011 18.4132 24.5865 16.2863 24.5865C12.5086 24.5865 9.30225 22.1444 8.15929 18.7688L7.99176 18.7827L3.58208 22.1272L3.52441 22.2843C5.87359 26.8577 10.699 30 16.2863 30Z" fill="#34A853"/>
                <path d="M8.16013 18.7689C7.85855 17.8978 7.68401 16.9644 7.68401 16C7.68401 15.0355 7.85855 14.1022 8.14426 13.2311L8.13627 13.0455L3.67132 9.64736L3.52524 9.71546C2.55703 11.6133 2.00146 13.7444 2.00146 16C2.00146 18.2555 2.55703 20.3866 3.52524 22.2844L8.16013 18.7689Z" fill="#FBBC05"/>
                <path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335"/>
              </svg>
            </button>
          </section>
          <section className="mt-[22px] w-fit mx-auto">
            <button type='button' className="button-small flex gap-[8px] items-center font-monrope text-[13px] font-[400] text-[#101828]">
              Sign in with SSO
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                <path d="M23.1667 11.9999C23.1666 11.3175 22.9063 10.6351 22.3856 10.1144C21.8649 9.59368 21.1825 9.33333 20.5 9.33333M20.5 20C24.9183 20 28.5 16.4183 28.5 12C28.5 7.58172 24.9183 4 20.5 4C16.0817 4 12.5 7.58172 12.5 12C12.5 12.3649 12.5244 12.7241 12.5717 13.076C12.6496 13.6549 12.6885 13.9443 12.6623 14.1275C12.635 14.3182 12.6003 14.421 12.5063 14.5892C12.416 14.7507 12.2569 14.9097 11.9388 15.2278L5.12484 22.0418C4.89424 22.2724 4.77894 22.3877 4.69648 22.5223C4.62337 22.6416 4.5695 22.7716 4.53684 22.9077C4.5 23.0611 4.5 23.2242 4.5 23.5503V25.8667C4.5 26.6134 4.5 26.9868 4.64532 27.272C4.77316 27.5229 4.97713 27.7268 5.22801 27.8547C5.51323 28 5.8866 28 6.63333 28H9.83333V25.3333H12.5V22.6667H15.1667L17.2722 20.5612C17.5903 20.2431 17.7493 20.084 17.9108 19.9937C18.079 19.8997 18.1818 19.865 18.3725 19.8377C18.5557 19.8115 18.8451 19.8504 19.424 19.9283C19.7759 19.9756 20.1351 20 20.5 20Z" stroke="#32D583" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </section>
        </form>
        <p className="font-manrope text-center text-[12px] text-[#101828] font-[400]">
          Don&apos;t have an account? &nbsp;
          <a href="#" className="text-[#12B76A] hover:underline">Sign Up</a>
        </p>
      </main>
      <ToastContainer />
    </>
  )
}

export default Index
