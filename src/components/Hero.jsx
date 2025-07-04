import React from 'react';
import BgAnimation from './BackgroundAnimation';
import { useTranslation } from 'react-i18next';

function Hero(props) {

    // I18n's useTranslation hook
    const { t } = useTranslation();

    return (
        <div className='pb-[100px] pt-[200px]'>
            <div className='lg:absolute flex flex-col items-center justify-between  lg:items-start'>
                <h2 className='text-slate-700 dark:text-slate-200 font-bold text-5xl sm:text-6xl md:text-7xl '>
                    {t('hero.greeting')} <span className='text-indigo-500 dark:text-sky-400'>Eduardo</span>
                </h2>
                <p className='text-slate-700 dark:text-slate-400 text-base sm:text-lg  md:text-xl  mt-6'>{t('hero.description1')}</p>
                <p className='text-slate-700 dark:text-slate-400 text-base sm:text-lg md:text-xl  mt-4'>{t('hero.description2')}</p>
                <div className='mt-4 flex flex-col lg:flex-row'>
                    <a href="#about" className='inline-block px-6 py-4 bg-white hover:bg-gray-800 hover:text-white mt-12 border-2 border-black dark:border-0 font-bold rounded-md mt-4 text-center transition-colors duration-500 ease-in-out'>
                        {t('hero.button1')}
                    </a>
                    <a href="#projects" className='inline-block px-6 py-4 mt-4 bg-indigo-500 hover:bg-indigo-800 dark:bg-sky-500 dark:hover:bg-sky-800 text-white font-bold rounded-md lg:ml-4 transition-colors duration-500 ease-in-out'>
                        {t('hero.button2')}
                    </a>
                </div>
               
            </div>
            <div className='hidden lg:block lg:w-[400px] lg:h-[200px] lg:relative z-0 left-[500px] bottom-[55px]'><BgAnimation/></div>
        </div>
        
    );
}

export default Hero;