import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full bg-gray-800 text-white whitespace-normal pb-10 min-h-screen'>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
        <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center h-full'>
            <div className='pb-2'>
                <h2 className='text-4xl font-bold inline border-b-4 bottom-gray-500'>About</h2>
            </div>
                <p className='text-xl mt-20 '>
                    Hello! My name is Srijith Venkateshwaran and I am currently pursuing a Bachelor's in
                    Computer Science at the College of Engineering at Michigan State University. My interests in the Computer Science field lies in Mobile App Development, 
                    Web Development, and most importantly Problem Solving of any kind. I'm driven by challenges and hope to face more fun ones in the future. I am in my 4th year
                    at MSU and am extremely excited to get in the workplace.
                </p>
                <p className='text-xl mt-20'>
                    In my free time, I have a few extracurriculurs and hobbies I like to partake in.
                    I am the Vice President of Logistics of the Coalition of Indian Undergraduate Students
                    (CIUS) boasting over 250+ members as one of the largest cultural organizations at MSU. I spend most of my time outside of studying helping the incoming indian students connect with their culture and heritage
                    to give them the chance I was given my freshman year to make lifelong friends and connections at the many large events we host. In my free time, one of my favorite hobbies
                    is to go to the gym as it not only gives me a giant bobut helps me keeps a regime. Thank you for taking your time to read this and feel free
                    to connect with me from the Contact tab!
                </p>
        </div>
    </div>
  )
}

export default About