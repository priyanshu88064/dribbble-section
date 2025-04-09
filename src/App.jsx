import { useState } from 'react'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'
import { HiOutlineArrowTopRightOnSquare, HiOutlineArrowUpRight } from 'react-icons/hi2'

function App() {

  return (
    <div>
      <div className='text-center text-4xl font-bold mt-5 mx-[50px]'>The power of intelligence tools</div>
      <div className='text-center text-lg text-gray-500 max-w-[700px] w-[90%] mx-auto mt-5'>Our platform offers a comprehensive suit of AI-powered solutions designed to elevate your business</div>

      <div className='flex justify-center gap-5 mt-10'>
        <div className='flex border gap-2 px-4 py-2 rounded-4xl items-center'>
          <CiSearch size={16} />
          <input placeholder='Search for tools' className='focus:outline-none' />
        </div>
        <div className='bg-black text-white px-6 rounded-3xl text-sm flex items-center'>Search</div>
      </div>

      <div className='flex justify-center gap-4 mt-15 flex-wrap'>

        <div className='w-[380px] flex flex-col gap-4'>

          <div className='bg-[#E9DFFF] p-5 gap-4 flex flex-col rounded-xl'>
            <div className='flex items-center gap-2'>
              <div className='text-xl font-medium'>Cognitive Decision-Making</div>
              <CiHeart size={17} className='ml-auto' />
              <div className='text-sm mt-0.5'>508</div>
            </div>
            <div className='text-gray-500 mr-[50px]'>
              Empowering Business with goft for data-driven and informed choices.
            </div>
            <div className='mr-[50px]'>By harnessing the power of advanced algorithms and real-time data analysis.</div>
            <div className='text-gray-500 text-sm flex justify-between items-center'>
              <div>Used by 5k people</div>
              <HiOutlineArrowUpRight size={16} color='black' />
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='flex-1 bg-[#DCF0F2] p-5 rounded-xl'>
              <div className='text-xl font-medium '>Smart Chatbots</div>
              <div className='text-gray-500 text-sm flex gap-8 justify-between items-center mt-8'>
                <div>Used by 2.9k people</div>
                <HiOutlineArrowUpRight size={16} color='black' />
              </div>
            </div>
            <div className='flex-1 bg-[#F3E0F0] p-5 rounded-xl'>
              <div className='text-xl font-medium '>Computer Viesion</div>
              <div className='text-gray-500 text-sm flex gap-8 justify-between items-center mt-8'>
                <div>Used by 3k people</div>
                <HiOutlineArrowUpRight size={16} color='black' />
              </div>
            </div>
          </div>
        </div>

        <div className='border w-[380px] bg-black p-5 gap-4 flex flex-col rounded-xl text-white'>
          <div className='flex items-center gap-2'>
            <div className='text-xl font-medium'>Human-Machine Collaboration</div>
            <FaHeart size={14} className='ml-auto' />
            <div className='text-gray-400 text-sm mt-0.5'>616</div>
          </div>
          <div className='text-gray-400 mr-[50px]'>
            Fosting seamless interactiona and innovation.
          </div>
          <div className='mr-[50px] text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos inventore dignissimos veritatis odit blanditiis dolore, consequatur voluptatem assumenda.</div>
          <div className='text-gray-500 text-sm flex justify-between items-center mt-[auto]'>
            <div>Used by 12k people</div>
            <HiOutlineArrowUpRight size={16} color='white' />
          </div>
        </div>

        <div className='w-[380px] flex flex-col gap-4'>

          <div className='bg-[#FDEBDD] p-5 gap-4 flex flex-col rounded-xl'>
            <div className='flex items-center gap-2'>
              <div className='text-xl font-medium'>Smart Healthcare System</div>
              <CiHeart size={17} className='ml-auto' />
              <div className='text-sm mt-0.5'>231</div>
            </div>
            <div className='text-gray-500 text-sm flex justify-between items-center mt-8'>
              <div>Used by 2.1k people</div>
              <HiOutlineArrowUpRight size={16} color='black' />
            </div>
          </div>

          <div className='bg-[#F2F4F5] p-5 gap-4 flex flex-col rounded-xl flex-1'>
            <div className='flex items-center gap-2'>
              <div className='text-xl font-medium'>Adaptive Learning Systems</div>
              <CiHeart size={17} className='ml-auto' />
              <div className='text-sm mt-0.5'>765</div>
            </div>
            <div className='text-gray-500 mr-[50px]'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt accusamus dolorem eum.
            </div>
            <div className='text-gray-500 text-sm flex justify-between items-center mt-[auto]'>
              <div>Used by 7.4k people</div>
              <HiOutlineArrowUpRight size={16} color='black' />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App
