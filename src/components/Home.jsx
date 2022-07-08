import React from 'react';
import SrijithImage from '../assets/Srijith.jpeg';
import {RiArrowRightSLine} from 'react-icons/ri';
import {Link} from 'react-scroll';

const Home = () => {
  return (
      <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
          <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>  
                <div className='px-4'>
                    <img width={300} height={450} src={SrijithImage} alt="My Profile" className='rounded-2xl mx-auto w-2/3 md:w-2/3' />
                </div>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-7xl sm:5xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-black to-blue-400'> full-stack developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Hello, my name is Srijith Venkateshwaran and I am a Senior at
                        at Michigan State University majoring in Computer Science. I have various 
                        projects and experience pertaining to both back-end and front-end which you can find in the other
                        tabs.
                    </p>
                    <div>
                        <Link to="Experience" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tr from-black to-blue-400 cursor-pointer">
                            Experience
                        <span className="group-hover:rotate-90 duration-300">
                            <RiArrowRightSLine size={25} className="ml-1" />
                        </span>
                        </Link>
                    </div>
              </div>
          </div>
      </div>
  )
}

export default Home