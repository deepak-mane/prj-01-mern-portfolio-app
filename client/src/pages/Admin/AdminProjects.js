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

const AdminProjects = () => {
    const dispatch = useDispatch()
    const { portfolioData } = useSelector(state => state.root)
    const { projects } = portfolioData
    const [showAddEditModal, setShowAddEditModal] = useState(false)
    const [selectedItemForEdit, setSelectedItemForEdit] =
        useState(null)

    const onDelete = async item => {
        try {
            dispatch(ShowLoading())
            const response = await axios.post(
                '/api/v1/portfolio/delete-project',
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
                const tempTechnologies = values.technologies.split(',')
                values.technologies = tempTechnologies
                dispatch(ShowLoading())
                response = await axios.post(
                    '/api/v1/portfolio/update-project',
                    {
                        ...values,
                        _id: selectedItemForEdit._id
                    }
                )
            } else {
                response = await axios.post(
                    '/api/v1/portfolio/add-project',
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
                    ADD PROJECT
                </button>
            </div>
            <div className='grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1'>
                {projects.map(project => (
                    <div className='shadow border p-5 border-gray-400 rounded-md'>
                        <h1 className='text-secondary text-xl font-bold'>
                        {project.title}
                        </h1>
                        <hr />
                        <img src={project.image} alt={project.name} className='h-60 w-80'/>
                        <h1 className='text-primary text-sm font-semibold'>
                            Description : {project.description}
                        </h1>
                        <h1 className='text-primary text-sm font-semibold'>
                            Github Link : {project.link}
                        </h1>
                        <h1 className='text-primary text-sm font-semibold'>
                            Technologies : {project.technologies}
                        </h1>
                        <div className='flex justify-end gap-5'>
                            <buttom className='bg-secondary text-white px-8 py-2 rounded-md'
                            onClick={() => {
                                    onDelete(project);
                                }}
                            >
                                DELETE
                            </buttom>
                            <buttom
                                className='bg-tertiary text-white px-8 py-2 rounded-md'
                                onClick={() => {
                                    setSelectedItemForEdit(project)
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
                        ? 'EDIT PROJECT'
                        : 'ADD PROJECT'
                }
            >
                <Form
                    layout='vertical'
                    onFinish={onFinish}
                    initialValues={{...selectedItemForEdit, technologies: selectedItemForEdit?.technologies.join(" , ")} || {}}
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
                    <Form.Item name='technologies' label='Technologies'>
                    <input type='text' placeholder='Enter Technologies (Comma separated values)' />
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

export default AdminProjects
