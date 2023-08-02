import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa';

function Contact(props) {
    return (
        <div id="contact" className='py-[100px]'>
            <h2  className='text-slate-700 dark:text-slate-200 font-bold text-5xl mb-4'>
                Contact Me
            </h2>
            <div className='flex justify-around flex-wrap'>
                <a href="mailto:du.di.99@hotmail.com" target='_blank' className=' text-white'>
                    <div  className='mt-6 p-8 w-[360px] border-slate-300 dark:border-slate-500 hover:border-indigo-500  dark:hover:border-sky-500 border-4 rounded'>
                        <div className='p-5 rounded flex items-center'>            
                            <AiFillMail className='text-indigo-500 dark:text-sky-500 text-6xl mr-8  '/>
                            <p className='text-slate-700 dark:text-slate-200 font-bold text-2xl'>Email</p>
                        </div>
                        <p className='text-slate-700 dark:text-slate-300'>Let's Get In Touch</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/eblrb" target='_blank' className=' text-white'>
                    <div  className='mt-6 w-[360px] p-8 border-slate-300 dark:border-slate-500 hover:border-indigo-500  dark:hover:border-sky-500 border-4 rounded'>
                        <div className='p-5 rounded flex items-center'>            
                            <AiFillLinkedin className='text-indigo-500 dark:text-sky-500 text-6xl mr-8  '/>
                            <p className='text-slate-700 dark:text-slate-200 font-bold text-2xl'>Linkedin</p>
                        </div>
                        <p className='text-slate-700 dark:text-slate-300'>Let's Connect</p>
                    </div>
                </a>
                <a href="https://github.com/eburzlaff" target='_blank' className=' text-white'>
                    <div  className='mt-6 w-[360px] p-8 border-slate-300 dark:border-slate-500 hover:border-indigo-500  dark:hover:border-sky-500 border-4 rounded'>
                        <div className='p-5 rounded flex items-center'>            
                            <BsGithub className='text-indigo-500 dark:text-sky-500 text-6xl mr-8  '/>
                            <p className='text-slate-700 dark:text-slate-200 font-bold text-2xl'>Github</p>
                        </div>
                        <p className='text-slate-700 dark:text-slate-300'>Check Out My Repos</p>
                    </div>
                </a>
                <a href="src\assets\resume.pdf" download='eburzlaff-resume.pdf' className='text-white'>
                    <div  className='mt-6 w-[360px] p-8 border-slate-300 dark:border-slate-500 hover:border-indigo-500  dark:hover:border-sky-500 border-4 rounded'>
                        <div className='p-5 rounded flex items-center'>            
                            <FaDownload className='text-indigo-500 dark:text-sky-500 text-6xl mr-8  '/>
                            <p className='text-slate-700 dark:text-slate-200 font-bold text-2xl'>Resume</p>
                        </div>
                        <p className='text-slate-700 dark:text-slate-300 break-all'>Download My Resume</p>
                    </div>
                </a>
            </div>
            
        </div>
    );
}

export default Contact;