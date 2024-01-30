import React from 'react'
import './AnimationBar.css'
import { iconsRow1 } from './IconsLink'

const AnimationBar = () => {
    return (
        <div className='h-[600px] bg-gradient-to-r from-[#172554] to-cyan-800 border'>
            <div className='flex justify-between px-44 pt-5'>
                <h1 className='text-4xl font-bold text-white'>Our Tech Stacks</h1>
                <p className='text-md text-white w-72 text-center'>Get IT experts to deliver tasks with optimal budgets in light of the expense gaps of Vietnam outsourcing market.</p>

            </div>
            <div id='Bar1' className='bar flex gap-12 mt-24'>
                {iconsRow1.map((item, index) => {
                    return (
                        <button key={index} className='flex justify-center items-center bg-[#94a3b8] rounded-[2rem] w-[10rem] h-[5rem] text-xl gap-2 ' style={{ background: 'rgba(148, 163, 184, 0.75)' }}>
                            <img className='w-[1.5rem] h-[1.5rem]' src={item.icons} alt='react' />
                            <div className='text-white opacity-100'>{item.name}</div>
                        </button>
                    )
                })}
            </div>

            <div id='Bar2' className='bar2 flex gap-12 mt-8'>
                {iconsRow1.map((item, index) => {
                    return (
                        <button key={index} className='flex justify-center items-center bg-[#94a3b8] rounded-[2rem] w-[10rem] h-[5rem] text-xl gap-2 ' style={{ background: 'rgba(148, 163, 184, 0.75)' }}>
                            <img className='w-[1.5rem] h-[1.5rem]' src={item.icons} alt='react' />
                            <div className='text-white opacity-100'>{item.name}</div>
                        </button>
                    )
                })}
            </div>

            <div id='Bar3' className='bar3 flex gap-12 mt-8'>
                {iconsRow1.map((item, index) => {
                    return (
                        <button key={index} className='flex justify-center items-center bg-[#94a3b8] rounded-[2rem] w-[10rem] h-[5rem] text-xl gap-2 ' style={{ background: 'rgba(148, 163, 184, 0.75)' }}>
                            <img className='w-[1.5rem] h-[1.5rem]' src={item.icons} alt='react' />
                            <div className='text-white opacity-100'>{item.name}</div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default AnimationBar




