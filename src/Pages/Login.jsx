import { TextField } from '@mui/material'
import React, { useState } from 'react'
import google from '../images/Google.png'
import apple from '../images/Apple.png'
import facebook from '../images/Facebook.png'
import email from '../images/email.png'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function Login() {
    const navigate=useNavigate()
    const [validemail,setValidemail]=useState(true)
    // const [validPassword,setValidpassword]=useState(true)
    const [user,setUser]=useState({
        email:"",password:""
    })

    const validation=(e)=>{
        if(e.target.value.endsWith("@gmail.com")){
            setValidemail(true)
            setUser({...user,email:e.target.value})
        }else{
            setValidemail(false)
        }
    }
    const loginUser=(e)=>{
        e.preventDefault()
        const {email,password}=user
        if(!email||!password){
            toast.warning('please fill the form completely')
        }else{
            toast.success('logined successfully')
            navigate('/dashboard')
        }
    }


    return (
        <div className='flex justify-center'>
            <div className='md:mt-20 mt-36 md:w-[384px] md:h-[463px]'>
                <h1 className='font-extrabold text-4xl '>Welcome to LMS</h1>
                <p className='mt-2 text-gray-500 text-lg'>Your step to flexiblity begins here</p>
                <div className='mt-10'>
                    <TextField type='email' onChange={(e)=>validation(e)} className='w-[360px] h-[40px] mb-10' id="filled-basic" label="Email address" variant="filled" error={validemail===false} helperText={validemail===false?"Incorrect Email":""}/>

                </div>
                <div className='md:mt-10 mt-4'>
                    <TextField type='password' onChange={(e)=>setUser({...user,password:e.target.value})} className='w-[360px] h-[40px] mb-6' id="filled-basic" label="Password" variant="filled"/>

                </div>
                <p className='md:mt-5 mt-3 text-gray-500 text-md'>Forgot Your Password? <a href="" className='text-blue-600 underline'>Click here</a></p>
                <button onClick={(e)=>loginUser(e)} className='w-[360px] h-[40px] md:mt-5 mt-3 rounded button1 text-white'disabled={validemail===false}>Continue</button>

                <div className='mt-6 flex'>
                    <hr className='w-[118px] mt-2' />
                    <p className='text-gray-500 text-sm pl-2 pr-2'>OR LOGIN WITH</p>
                    <hr className='w-[118px] border mt-2 pl-2' />

                </div>

                <div className='flex mt-5'>
                    <div className='cursor-pointer w-[80px] h-[49px] border rounded-xl flex justify-center p-2 '>
                        <img src={google} alt="" />
                    </div>
                    <div className='cursor-pointer w-[80px] h-[49px] border rounded-xl flex justify-center p-2 ml-3'>
                        <img src={apple} alt="" />
                    </div>
                    <div className='cursor-pointer w-[80px] h-[49px] border rounded-xl flex justify-center p-2 ml-3'>
                        <img src={facebook} alt="" />
                    </div>
                    <div className='cursor-pointer w-[80px] h-[49px] border rounded-xl flex justify-center p-2 ml-3'>
                        <img src={email} alt="" />
                    </div>

                </div>

            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                theme="colored"
            />

        </div>
    )
}

export default Login