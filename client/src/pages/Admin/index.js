import React from 'react'
import Header from '../../components/Header'
import { Tabs } from 'antd'
import { useSelector } from 'react-redux'
import AdminAbout from './AdminAbout'
import AdminIntro from './AdminIntro'
import AdminExperiences from './AdminExperiences'
import AdminProjects from './AdminProjects'
import AdminCourses from './AdminCourses'
import AdminContacts from './AdminContacts'
import { useEffect } from 'react'
// const { TabPane } = Tabs;

function Admin() {
    const { portfolioData } = useSelector(state => state.root)

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.href = '/admin-login'
        }
    }, [])

    return (
        <div>
            <Header />
            <div className='flex gap-10 items-center px-5 py-2 justify-between'>
                <div className='flex gap-10 items-center '>
                    <h1 className='text-3xl text-primary'>
                        Portfolio Admin
                    </h1>
                    <div className='w-80 h-[1px] bg-gray-500'></div>
                </div>
                <h1 
                    onClick={() => {
                        localStorage.removeItem("token");
                        window.location.href = "/admin-login";
                    }}
                    className="underline text-primary text-sl cursor-pointer">LOGOUT</h1>
            </div>

            {portfolioData && (
                <div className='px-5 pb-10'>
                    <Tabs defaultActiveKey='1'>
                        <Tabs.TabPane tab='Intro' key='1'>
                            <AdminIntro />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab='About' key='2'>
                            <AdminAbout />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab='Experiences' key='3'>
                            <AdminExperiences />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab='Projects' key='4'>
                            <AdminProjects />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab='Courses' key='5'>
                            <AdminCourses />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab='Contacts' key='6'>
                            <AdminContacts />
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            )}
        </div>
    )
}

export default Admin
