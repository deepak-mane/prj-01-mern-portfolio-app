import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'


function Experiences() {
    
    const { loading, portfolioData } = useSelector((state) => state.root)
    const { experiences } = portfolioData
    const [selectedItemIndex, setSelectedItemIndex] = useState(0)

    return (
        <div>
            <SectionTitle title='Experience' />

            <div className='flex py-10 gap-20 sm:flex-col '>
                {/* Displaying the Period - Part 1  */}
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {experiences.map((experience, index) => (
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
                                {experience.period}
                            </h1>
                        </div>
                    ))}
                </div>
                {/* Displaying the Content of Selected Period - Part 2  */}
                <div className='flex flex-col gap-5 w-3/4'>
                    <h1 className="text-secondary text-xl">{experiences[selectedItemIndex].title}</h1>
                    <h1 className="text-tertiary text-xl">{experiences[selectedItemIndex].company}</h1>
                    <p className="text-white">{experiences[selectedItemIndex].description}</p>
                </div>
            </div>
        </div>
    )
}

export default Experiences
