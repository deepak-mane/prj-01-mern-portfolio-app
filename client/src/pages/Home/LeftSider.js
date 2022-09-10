import React from 'react'

function LeftSider() {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-5 sm:flex-row sm:gap-3'>
                    <a
                        href='https://facebook.com/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className='ri-facebook-circle-line text-gray-400'></i>
                    </a>
                    <a
                        href='https://gmail.com/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className='ri-mail-line text-gray-400 '></i>
                    </a>
                    <a
                        href='https://instagram.com/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className='ri-instagram-line text-gray-400  '></i>
                    </a>
                    <a
                        href='https://linkedin.com/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className='ri-linkedin-box-line text-gray-400 '></i>
                    </a>
                    <a
                        href='https://github.com/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className='ri-github-line text-gray-400 '></i>
                    </a>
                </div>
                <div className='w-[1px] h-52 bg-[#125f63] sm:hidden'></div>
            </div>
        </div>
    )
}

export default LeftSider
