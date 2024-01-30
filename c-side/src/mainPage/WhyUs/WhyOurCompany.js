import React from 'react'
import { data } from './LinksCompany';

const WhyOurCompany = () => {
    return (
        <div>
            <h1 className="text-3xl lg:text-5xl font-semibold text-center mt-8 ">
                Why Customer's choose Our Company ? 
            </h1>
            <div className='flex justify-center'>
                <div className='lg:grid lg:grid-cols-3 gap-4 mt-8'>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className='border-2 rounded-2xl p-2 m-4 w-[25rem] h-[20rem] pt-8'>
                                <div className='flex justify-center'>
                                    <img src={item.logo} alt='' />
                                </div>
                                <div className='text-2xl text-center text-blue-700 mt-4'>
                                    {item.title}
                                </div>
                                <div className='text-md text-center mt-4'>
                                    {item.paragraph}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>


        </div>


    )
}

export default WhyOurCompany