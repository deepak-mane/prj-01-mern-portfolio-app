import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, HideLoading } from '../../redux/rootSlice'
import axios from 'axios'
import { message } from 'antd'

function Login() {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        username: '',
        password: ''
    })


    const login = async () => {
        try {
            dispatch(ShowLoading())
            const response = await axios.post(
                '/api/v1/portfolio/admin-login',
                user
            )
            dispatch(HideLoading())
            if (response.data.success) {
                message.success(response.data.message)
                localStorage.setItem('token', JSON.stringify(response.data))
                window.location.href = '/admin'
            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(HideLoading())
            message.error(error.message)
        }
    }
    return (
        <div className='flex justify-center items-center h-screen bg-primary'>
            <div className='w-96 flex gap-5 p-5 shadow border border-dray-500 flex-col bg-white'>
                <h1 className='text-2xl flex justify-center'>
                    Portfolio - Admin Login
                </h1>
                <hr />
                <input
                    type='text'
                    value={user.username}
                    onChange={e =>
                        setUser({ ...user, username: e.target.value })
                    }
                    placeholder='Username'
                />
                <input
                    type='password'
                    value={user.password}
                    onChange={e =>
                        setUser({ ...user, password: e.target.value })
                    }
                    placeholder='Password'
                />
                <button
                    onClick={login}
                    className='bg-primary text-white p-2  rounded-md text-xl font-semibold'
                >
                    LOGIN
                </button>
            </div>
        </div>
    )
}

export default Login
