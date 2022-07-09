import React from 'react';
import SrijithImage from '../assets/Srijith.jpeg';
import {RiArrowRightSLine} from 'react-icons/ri';
import {Link} from 'react-scroll';
import "./Home.css"
const Home = () => {

  return (
      <div name="Home" className="w-full bg-gradient-to-b from-white via-white to-gray-800 min-h-screen">
          <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-screen px-4 md:flex-row'>  
               <br/>
               <br/>
               <br/>
               <br/>
                <div className='image'>
                    <img src={SrijithImage} alt="My Profile" className='pfp' />
                </div>
                <div className='flex flex-col justify-center min-h-screen'>
                    <h2 className='text-7xl sm:5xl font-bold text-slate-600'> full-stack developer</h2>
                    {/* bg-clip-text bg-gradient-to-bl from-black to-blue-400 */}
                    <p className='text-gray-500 py-4 max-w-md'>
                        Hello, my name is Srijith Venkateshwaran and I am a Senior at
                        at Michigan State University majoring in Computer Science. I have various 
                        projects and experience pertaining to both back-end and front-end which you can find in the other
                        tabs.
                    </p>
                    <div>
                        <Link to="Skills" smooth duration={500} className="group text-slate-600 w-fit px-6 py-3 flex items-center rounded-md bg-white opacity-90 border-0 border-slate-600 cursor-pointer">
                            Skills
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