import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center px-4 py-2 ">
        <span className="homename text-5xl md:text-6xl">Hi I'M</span>
        <span className="homename text-5xl md:text-6xl text-indigo-600"> Vimal</span>
      </div>
      <span className="text-md  md:text-xl mb-4">Software Development Engineer</span>
      <p className="paragraph text-center text-base md:text-lg">
        I have extensive expertise in building scalable web applications to solve real-world problems.
      </p>
      <div className="flex space-x-4">
        <button className="bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
            Download CV
        </button>
        <button className="border-2 border-indigo-700 text-indigo-700 py-2 px-4 rounded-md hover:bg-indigo-100">
            Say Hi
        </button>
        </div>

      <div className='flex mx-auto gap-5 mt-5'>
        <GitHubIcon/>
        <LinkedInIcon className='hover:text-indigo-700 text-indigo-600'/>
        <EmailIcon className='hover:text-red-600 text-red-500'/>
      </div>
    </div>
  );
};

export default Home;
