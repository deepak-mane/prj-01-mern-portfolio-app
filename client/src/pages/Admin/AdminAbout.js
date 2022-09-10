import React from 'react'
import { Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, HideLoading } from '../../redux/rootSlice'
import axios from 'axios'
import { message } from 'antd'

function AdminAbout() {
    const dispatch = useDispatch()
    const { portfolioData } = useSelector(state => state.root)


    const onFinish = async values => {
        try {
            const tempSkills = values.skills.split(',')
            values.skills = tempSkills
            dispatch(ShowLoading())
            const response = await axios.post(
                '/api/v1/portfolio/update-about',
                {
                    ...values,
                    _id: portfolioData.about._id
                }
            )
            dispatch(HideLoading())
            if (response.data.success) {
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
            <Form
                onFinish={onFinish}
                layout='vertical'
                initialValues={{
                    ...portfolioData.about,
                    skills: portfolioData.about.skills.join(' , ')
                } || {}}
            >
                <Form.Item name='lottieURL' label='Lottie URL'>
                    <input type='text' placeholder='Enter URL' />
                </Form.Item>
                <Form.Item name='description1' label='Description1'>
                    <textarea placeholder='Enter Description1' />
                </Form.Item>
                <Form.Item name='description2' label='Description2'>
                    <textarea placeholder='Enter Description2' />
                </Form.Item>
                <Form.Item
                    name='skills'
                    label='Skills (Comma separated values)'
                >
                    <textarea placeholder='Enter Skills (Comma separated values)' />
                </Form.Item>
                <div className='flex justify-end w-full'>
                    <button
                        type='submit'
                        className='px-10 py-5 bg-primary text-white font-semibold rounded-2xl'
                    >
                        SAVE
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default AdminAbout
