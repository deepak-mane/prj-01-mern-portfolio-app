import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'


function Courses() {
    const { loading, portfolioData } = useSelector((state) => state.root)
    const { courses } = portfolioData
    const [selectedItemIndex, setSelectedItemIndex] = useState(0)
    return (
        <div>
            <SectionTitle title='Courses' />

            <div className='flex py-10 gap-20 sm:flex-col '>
                {/* Displaying the Period - Part 1  */}
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {courses.map((project, index) => (
                        <div onClick={()=>{
                            setSelectedItemIndex(index)
                        }} className='cursor-pointer'>
                            <h1
                                className={`text-xl px-5 ${
                                    selectedItemIndex === index
                                        ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-full'
                                        : 'text-white'
                                }`}
                            >
                                {project.title}
                            </h1>
                        </div>
                    ))}
                </div>
                {/* Displaying the Content of Selected Period - Part 2  */}
                <div className="flex items-center justify-center gap-10 sm:flex-col">
                <div className='flex flex-col gap-5 w-3/4'>
                    <h1 className="text-secondary text-xl">{courses[selectedItemIndex].title}</h1>
                    <h1 className="text-tertiary text-xl">{courses[selectedItemIndex].image}</h1>
                    <p className="text-white">{courses[selectedItemIndex].description}</p>
                </div>                
                <img src={courses[selectedItemIndex].image } alt="" className='h-50 w-72'/>
                </div>
            </div>
        </div>
    )
}

export default Courses