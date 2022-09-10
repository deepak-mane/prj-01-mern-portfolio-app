import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'


function Contact() {
    
    const { loading, portfolioData } = useSelector((state) => state.root)
    const { contacts } = portfolioData
    // contacts._id = '';

    return (
        <div>
            <SectionTitle title='Say Hello' />

            <div className='flex sm:flex-col items-center justify-between  text-lg'>
                <div className='flex flex-col'>
                    <p className='text-white'>{'{'}</p>
                    {Object.keys(contacts).map(key => (
                        key !== '_id' && <p className='ml-5 '>
                            <span className='text-tertiary'>
                                {key}{'      '}:{'      '}
                            </span>
                            <span className='text-tertiary'>
                                {contacts[key]},{' '}
                            </span>
                        </p>
                    ))}
                    <p className='text-white'>{'}'}</p>
                </div>

                <div className='h-[400px] '>
                    <lottie-player
                        src='https://assets5.lottiefiles.com/packages/lf20_eroqjb7w.json'
                        background='transparent'
                        speed='1'
                        autoplay
                    ></lottie-player>
                </div>
            </div>
        </div>
    )
}

export default Contact
