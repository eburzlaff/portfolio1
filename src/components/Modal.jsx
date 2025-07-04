import React from 'react';
import { BsFillDatabaseFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaWindowClose } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Modal({ visible = false, setIsVisible, theme, handleThemeSwitch }) {

    // I18n's useTranslation hook
        const { t, i18n } = useTranslation();
    
    // Language change function
    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem('lang', e.target.value);
    };

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
        <div id="modal" visible={visible} className='inset-0 py-8 text-xl fixed top-0 left-0 right-0 z-20 overflow-y-auto' onClick={() => setIsVisible(false)}>
            <div className='max-w-lg mx-auto py-4 flex flex-col items-center bg-white border border-slate-900 rounded' >
                <div className='flex justify-between px-8 w-full'>
                    <a href='#home' className='flex flex-row items-center mr-auto pl-4'> 
                        {theme === 'dark' ?  
                            <BsFillDatabaseFill size="2rem" className='text-slate-900'/>
                        :
                            <BsFillDatabaseFill size="2rem" color='rgb(99 102 241)'/>
                        }                     
                        <p className='text-slate-900 text-2xl font-bold ml-3'>EduardoDev</p>
                    </a>
                    <button className='p-3 font-bold hover:text-indigo-500' onClick={() => setIsVisible(false)}><FaWindowClose className="text-red-500 bg-white hover:bg-slate-300 w-12 h-12 p-1"/></button>
                </div>
                
                <ul className='w-full font-semibold flex flex-col items-center text-center text-white mt-5' onClick={() => setIsVisible(false)}>
                    <li className='w-full mb-1'><a href="#home" className='mx-2 block px-4 py-8 border rounded bg-indigo-500 dark:bg-slate-900 hover:bg-indigo-800 hover:text-slate-500 dark:hover:text-slate-400 dark:hover:bg-slate-800'>{t('nav.home')}</a></li>
                    <li className='w-full mb-1'><a href="#about" className='mx-2 block px-4 py-8 border-2 rounded border-indigo-500 dark:border-none text-indigo-500 dark:text-white dark:bg-slate-700 hover:border-slate-500 hover:text-slate-500 dark:hover:text-slate-400 dark:hover:bg-slate-800'>{t('nav.about')}</a></li>
                    <li className='w-full mb-1'><a href="#skills" className='mx-2 block px-4 py-8 border rounded bg-indigo-500 dark:bg-slate-900 hover:bg-indigo-800 hover:text-slate-500 dark:hover:text-slate-400 dark:hover:bg-slate-800'>{t('nav.skills')}</a></li>
                    <li className='w-full mb-1'><a href="#projects" className='mx-2 block px-4 py-8 border-2 rounded border-indigo-500 dark:border-none text-indigo-500 dark:text-white dark:bg-slate-700 hover:border-slate-500 hover:text-slate-500 dark:hover:text-slate-400 dark:hover:bg-slate-800'>{t('nav.projects')}</a></li>
                    <li className='w-full mb-1'><a href="#contact" className='mx-2 block px-4 py-8 border rounded bg-indigo-500 dark:bg-slate-900 hover:bg-indigo-800 hover:text-slate-500 dark:hover:text-slate-400 dark:hover:bg-slate-800'>{t('nav.contact')}</a></li>
                    <li className='w-full mb-1 border-x-[8px] border-white bg-white dark:bg-slate-700 rounded dark:rounded-2xl'><a href="https://github.com/eburzlaff" target='_blank' className='flex justify-center items-center px-4 py-4 border-2 border-indigo-500 dark:border-slate-700 rounded dark:rounded-lg hover:border-slate-500  dark:hover:bg-slate-800 text-indigo-500 dark:text-white hover:text-slate-500 dark:hover:text-sky-400'><AiFillGithub size="4rem"/></a></li>
                    <li className='w-full mb-2 border-x-[8px] border-white bg-indigo-500 dark:bg-slate-900 rounded-2xl'><a href="https://www.linkedin.com/in/eblrb" target='_blank' className='flex justify-center items-center px-4 py-4 border-2 border-indigo-500 rounded dark:border-slate-900 bg-indigo-500 dark:bg-slate-900 text-white dark:text-white hover:bg-indigo-800 dark:hover:bg-slate-800 hover:text-slate-500 dark:hover:text-sky-400'><AiFillLinkedin size="4rem"/></a></li>
                    
                    {/* Language dropdown */}
                    <li className='w-full mb-2'>
                        <div className='border-2 border-white mx-2'>
                            <select
                                value={i18n.language}
                                onChange={handleLanguageChange}
                                className="w-full border-2 rounded border-indigo-500 dark:border-none text-4xl text-center bg-white dark:bg-slate-700 text-indigo-500 dark:text-white py-2"
                                onClick={e => e.stopPropagation()}
                            >
                                <option value="en">English</option>
                                <option value="pt">Português</option>
                            </select>
                        </div>
					</li>
                    
                    <li className='w-full mb-1 px-2'>
                        <button 
                            type="button" 
                            onClick={e => {
                                e.stopPropagation();
                                handleThemeSwitch();
                            }}
                            className="w-full border-slate-800 rounded dark:border-orange-300 flex justify-center py-4 bg-slate-800 dark:bg-orange-300 hover:bg-slate-500 dark:hover:bg-sky-400 text-lg"
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