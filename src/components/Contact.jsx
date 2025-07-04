import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Contact(props) {

    // I18n's useTranslation hook
    const { t, i18n } = useTranslation();

    // Choose the appropriate resume file
    const resumeFile = i18n.language === 'pt' ? 'resume-pt.pdf' : 'resume-en.pdf';
    const downloadName = i18n.language === 'pt' ? 'eburzlaff-curriculo.pdf' : 'eburzlaff-resume.pdf';

    return (
        <div id="contact" className='py-[100px] flex flex-col items-center justify-between lg:items-start'>
            <h2  className='text-slate-700 dark:text-slate-200 font-bold text-5xl mb-4'>
                {t('contact.title')}
            </h2>
            <div className='flex justify-around flex-wrap'>
                <a href="mailto:du.di.99@hotmail.com" target='_blank' className=' text-white'>
                    <div  className='mt-6 p-8 w-[300px] sm:w-[360px] border-slate-300 dark:border-slate-500 hover:border-indigo-500  dark:hover:border-sky-500 border-4 rounded transition-colors duration-500 ease-in-out'>
                        <div className='p-5 rounded flex items-center'>            
                            <AiFillMail className='text-indigo-500 dark:text-sky-500 text-6xl mr-8  '/>
                            <p className='text-slate-700 dark:text-slate-200 font-bold text-2xl'>Email</p>
                        </div>
                        <p className='text-slate-700 dark:text-slate-300'>{t('contact.email')}</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/eblrb" target='_blank' className=' text-white'>
                    <div  className='mt-6 w-[300px] sm:w-[360px] p-8 border-slate-300 dark:border-slate-500 hover:border-indigo-500  dark:hover:border-sky-500 border-4 rounded transition-colors duration-500 ease-in-out'>
                        <div className='p-5 rounded flex items-center'>            
                            <AiFillLinkedin className='text-indigo-500 dark:text-sky-500 text-6xl mr-8  '/>
                            <p className='text-slate-700 dark:text-slate-200 font-bold text-2xl'>Linkedin</p>
                        </div>
                        <p className='text-slate-700 dark:text-slate-300'>{t('contact.linkedin')}</p>
                    </div>
                </a>
                <a href="https://github.com/eburzlaff" target='_blank' className=' text-white'>
                    <div  className='mt-6 w-[300px] sm:w-[360px] p-8 border-slate-300 dark:border-slate-500 hover:border-indigo-500  dark:hover:border-sky-500 border-4 rounded transition-colors duration-500 ease-in-out'>
                        <div className='p-5 rounded flex items-center'>            
                            <BsGithub className='text-indigo-500 dark:text-sky-500 text-6xl mr-8  '/>
                            <p className='text-slate-700 dark:text-slate-200 font-bold text-2xl'>Github</p>
                        </div>
                        <p className='text-slate-700 dark:text-slate-300'>{t('contact.github')}</p>
                    </div>
                </a>
                <a href={`/assets/${resumeFile}`} download={downloadName} className='text-white'>
                    <div  className='mt-6 w-[300px] sm:w-[360px] p-8 border-slate-300 dark:border-slate-500 hover:border-indigo-500  dark:hover:border-sky-500 border-4 rounded transition-colors duration-500 ease-in-out'>
                        <div className='p-5 rounded flex items-center'>            
                            <FaDownload className='text-indigo-500 dark:text-sky-500 text-6xl mr-8  '/>
                            <p className='text-slate-700 dark:text-slate-200 font-bold text-2xl'>{t('contact.resumeTitle')}</p>
                        </div>
                        <p className='text-slate-700 dark:text-slate-300 break-all'>{t('contact.resumeDescription')}</p>
                    </div>
                </a>
            </div>
            
        </div>
    );
}

export default Contact;