import React from 'react';
import { useTranslation } from 'react-i18next';

function About(props) {

     // I18n's useTranslation hook
    const { t } = useTranslation();

    return (
        <div id="about" className='py-[100px] flex flex-col items-center justify-between lg:items-start'>
            <h2  className='text-slate-700 dark:text-slate-200 font-bold text-5xl mb-4'>
                {t('about.title')}
            </h2>
            <div className=''>
                <p className='text-slate-700 dark:text-slate-400 text-xl mt-6'>
                    {t('about.paragraph1')}
                </p>
            </div>
            
        </div>
    );
}

export default About;