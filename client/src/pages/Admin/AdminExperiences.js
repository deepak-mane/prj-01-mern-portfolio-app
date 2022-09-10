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

const AdminExperiences = () => {
    const dispatch = useDispatch()
    const { portfolioData } = useSelector(state => state.root)
    const { experiences } = portfolioData
    const [showAddEditModal, setShowAddEditModal] = useState(false)
    const [selectedItemForEdit, setSelectedItemForEdit] =
        useState(null)

    const onDelete = async item => {
        try {
            dispatch(ShowLoading())
            const response = await axios.post(
                '/api/v1/portfolio/delete-experience',
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
                response = await axios.post(
                    '/api/v1/portfolio/update-experience',
                    {
                        ...values,
                        _id: selectedItemForEdit._id
                    }
                )
            } else {
                response = await axios.post(
                    '/api/v1/portfolio/add-experience',
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
                    ADD EXPERIENCE
                </button>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1'>
                {experiences.map(experience => (
                    <div className='shadow border p-5 border-gray-400 rounded-md'>
                        <h1 className='text-secondary text-xl font-bold'>
                            {experience.period}
                        </h1>
                        <hr />
                        <h1 className='text-white bg-primary text-lg font-semibold mt-5'>
                            Company : {experience.company}
                        </h1>
                        <h1 className='text-tertiarytext-sm font-semibold'>
                            Role : {experience.title}
                        </h1>
                        <h1 className='text-primary text-sm font-semibold'>
                            {experience.description}
                        </h1>

                        <div className='flex justify-end gap-5'>
                            <buttom className='bg-secondary text-white px-8 py-2 rounded-md'
                            onClick={() => {
                                    onDelete(experience);
                                }}
                            >
                                DELETE
                            </buttom>
                            <buttom
                                className='bg-tertiary text-white px-8 py-2 rounded-md'
                                onClick={() => {
                                    setSelectedItemForEdit(experience)
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
                    selectedItemForEdit
                        ? 'EDIT EXPERIENCE'
                        : 'ADD EXPERIENCE'
                }
            >
                <Form
                    layout='vertical'
                    onFinish={onFinish}
                    initialValues={selectedItemForEdit || {}}
                >
                    <Form.Item name='period' label='Period'>
                        <input type='text' placeholder='Period' />
                    </Form.Item>
                    <Form.Item name='company' label='Company'>
                        <input type='text' placeholder='Company' />
                    </Form.Item>
                    <Form.Item name='title' label='Title'>
                        <input type='text' placeholder='Title' />
                    </Form.Item>
                    <Form.Item name='description' label='Description'>
                        <input type='text' placeholder='Description' />
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

export default AdminExperiences
