import React from 'react'
import { Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
    ShowLoading,
    HideLoading,
    ReloadData
} from '../../redux/rootSlice'
import axios from 'axios'
import { message } from 'antd'
import { useState } from 'react'
import Modal from 'antd/lib/modal/Modal'

const AdminCourses = () => {
    const dispatch = useDispatch()
    const { portfolioData } = useSelector(state => state.root)
    const { courses } = portfolioData
    const [showAddEditModal, setShowAddEditModal] = useState(false)
    const [selectedItemForEdit, setSelectedItemForEdit] =
        useState(null)

    const onDelete = async item => {
        try {
            dispatch(ShowLoading())
            const response = await axios.post(
                '/api/v1/portfolio/delete-course',
                {
                    _id: item._id
                }
            )
            dispatch(HideLoading())
            if (response.data.success) {
                message.success(response.data.message)
                setShowAddEditModal(false)
                dispatch(HideLoading)
                dispatch(ReloadData(true))
            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(HideLoading())
            message.error(error.message)
        }
    }
    const onFinish = async values => {
        try {
            dispatch(ShowLoading())
            let response
            if (selectedItemForEdit) {
                dispatch(ShowLoading())
                response = await axios.post(
                    '/api/v1/portfolio/update-course',
                    values
                )
            } else {
                response = await axios.post(
                    '/api/v1/portfolio/add-course',
                    values
                )
            }

            dispatch(HideLoading())
            if (response.data.success) {
                message.success(response.data.message)
                setShowAddEditModal(false)
                dispatch(HideLoading)
                dispatch(ReloadData(true))
            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(HideLoading())
            message.error(error.message)
        }
    }
    return (
        <div>
            <div className='flex justify-end m-2'>
                <button
                    onClick={() => {
                        setShowAddEditModal(true)
                    }}
                    className='bg-primary text-white px-5 py-2 rounded-md'
                >
                    ADD COURSE
                </button>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1'>
                {courses.map(course => (
                    <div className='shadow border p-5 border-gray-400 rounded-md'>
                        <h1 className='text-secondary text-xl font-bold'>
                            {course.title}
                        </h1>
                        <hr />
                        <img
                            src={course.image}
                            alt={course.name}
                            className='h-60 w-80'
                        />
                        <h1 className='text-primary text-sm font-semibold'>
                            Description : {course.description}
                        </h1>
                        <h1 className='text-primary text-sm font-semibold'>
                            Github Link : {course.link}
                        </h1>

                        <div className='flex justify-end gap-5'>
                            <buttom
                                className='bg-secondary text-white px-8 py-2 rounded-md'
                                onClick={() => {
                                    onDelete(course)
                                }}
                            >
                                DELETE
                            </buttom>
                            <buttom
                                className='bg-tertiary text-white px-8 py-2 rounded-md'
                                onClick={() => {
                                    setSelectedItemForEdit(course)
                                    setShowAddEditModal(true)
                                }}
                            >
                                EDIT
                            </buttom>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                // To clear all values in Modal on Closing
                destroyOnClose={true}
                onCancel={() => setShowAddEditModal(false)}
                footer={null}
                visible={showAddEditModal}
                title={
                    selectedItemForEdit ? 'EDIT COURSE' : 'ADD COURSE'
                }
            >
                <Form
                    layout='vertical'
                    onFinish={onFinish}
                    initialValues={selectedItemForEdit || {}}
                >
                    <Form.Item name='title' label='Title'>
                        <input type='text' placeholder='Title' />
                    </Form.Item>
                    <Form.Item name='image' label='Image URL'>
                        <input type='text' placeholder='Image' />
                    </Form.Item>
                    <Form.Item name='description' label='Description'>
                        <input type='text' placeholder='Description' />
                    </Form.Item>
                    <Form.Item name='link' label='Link'>
                        <input type='text' placeholder='Link' />
                    </Form.Item>
                    <div className='flex justify-end gap-5'>
                        <button
                            onClick={() => {
                                setShowAddEditModal(false)
                            }}
                            className='bg-secondary text-white px-5 py-2 rounded-md'
                        >
                            CANCEL
                        </button>
                        <button className='bg-primary text-white px-8 py-2 rounded-md'>
                            {selectedItemForEdit ? 'UPDATE' : 'ADD'}
                        </button>
                    </div>
                </Form>
            </Modal>
        </div>
    )
}

export default AdminCourses
