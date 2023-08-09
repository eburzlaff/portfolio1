import React from 'react';
import { BsFillDatabaseFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Modal({ visible = false, setIsVisible, theme, handleThemeSwitch }) {

    // Light and Dark Mode Icons
    const sun = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="#0f172a"
			className="w-[50px] h-[50px]"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);

	const moon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="white"
			className="w-[50px] h-[50px]"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);

    return (
        <div id="modal" visible={visible} className='py-8 text-xl fixed top-0 left-0 right-0 z-2'>
            <div className='max-w-lg mx-auto py-4 flex flex-col items-center bg-white border border-slate-900 '>
                <div className='flex justify-between px-8 w-full'>
                    <a href='#home' className='flex flex-row items-center mr-auto pl-4'> 
                        {theme === 'dark' ?  
                            <BsFillDatabaseFill size="2rem" color='black'/>
                        :
                            <BsFillDatabaseFill size="2rem" color='rgb(99 102 241)'/>
                        }                     
                        <p className='text-slate-900 text-2xl font-bold ml-3'>EduardoDev</p>
                    </a>
                    <button className='p-3 font-bold hover:text-indigo-500' onClick={() => setIsVisible(false)}>X</button>
                </div>
                
                <ul className='font-semibold flex flex-col mt-5' onClick={() => setIsVisible(false)}>
                    <li className='mr-4 hover:text-indigo-500 dark:hover:text-sky-400'><a href="#home">Home</a></li>
                    <li className='mr-4 hover:text-indigo-500 dark:hover:text-sky-400'><a href="#about">About Me</a></li>
                    <li className='mr-4 hover:text-indigo-500 dark:hover:text-sky-400'><a href="#skills">Skills</a></li>
                    <li className='mr-4 hover:text-indigo-500 dark:hover:text-sky-400'><a href="#projects">Projects</a></li>
                    <li className='mr-12 hover:text-indigo-500 dark:hover:text-sky-400'><a href="#contact">Contact</a></li>
                    <li className='mr-4 text-indigo-500 dark:text-slate-900 hover:text-slate-500 dark:hover:text-sky-400'><a href="https://github.com/eburzlaff" target='_blank'><AiFillGithub size="4rem"/></a></li>
                    <li className='mr-4 text-indigo-500 dark:text-slate-900 hover:text-slate-500  dark:hover:text-sky-400'><a href="https://www.linkedin.com/in/eblrb" target='_blank'><AiFillLinkedin size="4rem"/></a></li>
                    <li className='mr-4 hover:text-indigo-500 dark:hover:text-sky-400'>
                        <button 
                            type="button" 
                            onClick={handleThemeSwitch} 
                            className="bg-slate-800 dark:bg-orange-300 hover:bg-slate-500 dark:hover:bg-sky-400 text-lg p-2 rounded-md"
                        >
                                {theme === 'dark' ? sun : moon}
                        </button>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default Modal;