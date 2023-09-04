import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { FaCode, FaTools } from 'react-icons/fa'
import { ImMobile } from 'react-icons/im'


function Skills(props) {
    return (
        <div id='skills' className='py-[100px] flex flex-col items-center justify-between lg:items-start'>
            <h2  className='text-slate-700 dark:text-slate-200 font-bold text-5xl mb-4'>
                Skills
            </h2>
            <p className='text-slate-700 dark:text-slate-400 text-xl mt-6'>
                I've worked with a range of technologies in the web and mobile development world.
                <br/>
                From Back-end to Front-end and Design
            </p>

            <div className='w-full flex flex-col justify-center lg:flex-row lg:justify-around mt-6'>
                <div className='mt-6 text-center'>
                    <AiFillHtml5 className='mx-auto text-indigo-500 dark:text-sky-400 text-6xl'/>
                    <p className='text-2xl font-bold text-slate-700 dark:text-slate-200 mt-3'>Front-End</p>
                    <ul className='text-slate-700 dark:text-slate-400'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>ReactJS</li>
                        <li>Tailwind CSS</li>
                        <li>Bootstrap</li>
                        <li>Sass</li>
                        <li>JSP Pages</li>
                    </ul>
                </div>
                <div className='mt-6 text-center'>
                    <FaCode className='mx-auto text-indigo-500 dark:text-sky-400 text-6xl'/>
                    <p className='text-2xl font-bold text-slate-700 dark:text-slate-200 mt-3 mx-auto'>Back-End</p>
                    <ul className='text-slate-700 dark:text-slate-400'>
                        <li>Java Web Technologies <br /> (Servlet API, Tomcat, Maven, Hibernate, JAX-RS, Log4J, JUnit)</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>NodeJS</li>
                    </ul>
                </div>
                <div className='mt-6 text-center'>
                    <ImMobile className='mx-auto text-indigo-500 dark:text-sky-400 text-6xl'/>
                    <p className='text-2xl font-bold text-slate-700 dark:text-slate-200 mt-3'>Mobile</p>
                    <ul className='text-slate-700 dark:text-slate-400'>
                        <li>React Native</li>
                        <li>Expo CLI</li>
                    </ul>
                </div>
                <div className='mt-6 text-center'>
                    <FaTools className='mx-auto text-indigo-500 dark:text-sky-400 text-6xl'/>
                    <p className='text-2xl font-bold text-slate-700 dark:text-slate-200 mt-3'>Other</p>
                    <ul className='text-slate-700 dark:text-slate-400'>
                        <li>Git</li>
                        <li>Github</li>
                        <li>Netlify</li>
                        <li>VSCode</li>
                        <li>REST APIs</li>
                        <li>Figma</li>
                        <li>Postman</li>
                        <li>IntelliJ</li>
                        <li>Vite</li>
                    </ul>
                </div>
            </div>
            
            
        </div>
    );
}

export default Skills;