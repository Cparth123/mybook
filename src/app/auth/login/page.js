"use client"
import axios from 'axios';
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';

function Page() {

    const usernameref = useRef(null);
    const passwordref = useRef(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', { username, password });
            setToken(response.data.token);
            toast('Login successful');
        } catch (error) {
            console.error(error);
            toast('Login failed');
        }
    };

    const hadlingsubmit = () => {

    }
    return (
        <div className=' bg-[#ead6d6] dark:bg-[#3f2727] min-h-[100vh] flex justify-center pt-5 sm:pt-0 sm:items-center'>
            <div className='w-full mx-3 sm:w-[500px] p-[24px]  customshadow dark:shadow-customshadow mt-5 rounded-lg sm:mx-auto'>
                <form onSubmit={handleSubmit}>
                    <h6>usename:-</h6>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} required placeholder='Enter   username' onKeyDown={(e) => e.key == 'Enter' && amountref.current.focus()} className='w-full mt-2 focus:outline-none bg-transparent shadow-lightmodeclick dark:shadow-buttonclick p-[5px_10px] rounded-md' type='text' />
                    <h6 className='mt-5'>password:-</h6>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Enter   password' className='w-full mt-2 focus:outline-none bg-transparent shadow-lightmodeclick  dark:shadow-buttonclick p-[5px_10px] rounded-md' />
                    <p className='mt-2 text-end text-red-400'>forget password ?</p>
                    <button type="submit" className='min-h-[50px] shadow-customshadow dark:shadow-customshadow w-full px-10 mt-5 rounded-lg text-white font-bold active:shadow-lightmodeclick dark:active:shadow-buttonclick'>
                        login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Page