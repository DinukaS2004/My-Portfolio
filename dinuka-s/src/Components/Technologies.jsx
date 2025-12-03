import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { SiMysql } from "react-icons/si";

const Technologies = () => {
  return (
    <div className='pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className='p-4'>
                <TbBrandNextjs className='text-7xl text-white'/>
            </div>
            <div className='p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </div>
            <div className='p-4'>
                <FaJava className='text-7xl text-red-700'/>
            </div>
            <div className='p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </div>
            <div className='p-4'>
                <BiLogoPostgresql className='text-7xl text-sky-700'/>
            </div>
            <div className='p-4'>
                <SiMysql className='text-7xl text-white'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies