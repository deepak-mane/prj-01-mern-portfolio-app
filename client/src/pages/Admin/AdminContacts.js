import React from 'react'
import { Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, HideLoading } from '../../redux/rootSlice'
import axios from 'axios'
import { message } from 'antd'

function AdminContacts() {
    const dispatch = useDispatch()
    const { portfolioData } = useSelector(state => state.root)

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            const response = await axios.post("/api/v1/portfolio/update-contact", {
                ...values,
                _id: portfolioData.contacts._id,
            })
            dispatch(HideLoading())
            if(response.data.success){
                message.success(response.data.message)
            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(HideLoading())
            message.error(error.message)
        }
    }

    return (
        <div className='container'>
            <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.contacts || {}}>
                <Form.Item name='name' label='Full Name'>
                    <input type='text' placeholder='Enter Full Name' />
                </Form.Item>
                <Form.Item name='gender' label='Gender'>
                    <input type='text' placeholder='Enter Gender' />
                </Form.Item>
                <Form.Item name='age' label='Age'>
                    <input type='text' placeholder='Enter Age' />
                </Form.Item>
                <Form.Item name='email' label='Email'>
                    <input  placeholder='Enter Email' />
                </Form.Item>
                <Form.Item name='mobile' label='Mobile'>
                    <input  placeholder='Enter Mobile' />
                </Form.Item>
                <Form.Item name='address' label='Country Name'>
                    <input  placeholder='Enter Country Name' />
                </Form.Item>
                <div className="flex justify-end w-full">
                    <button type='submit' className="px-10 py-5 bg-primary text-white font-semibold rounded-2xl">SAVE</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminContacts
