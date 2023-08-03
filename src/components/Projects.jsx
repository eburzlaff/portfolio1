import React from 'react';

function Projects(props) {
    return (
        <div id='projects' className='py-[100px]'>
            <h2  className='text-slate-700 dark:text-slate-200 font-bold text-5xl pb-8'>
                Projects
            </h2>
            <div class="max-w-lg rounded overflow-hidden shadow-2xl border border-slate-300 dark:border-slate-500">
                <img class="w-full" src="./assets/home.png" alt="Sunset in the mountains"/>
                <div className='flex flex-col justify-center items-center'>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center text-slate-700 dark:text-slate-200">The Coldest Sunset</div>
                        <p class="text-slate-700 dark:text-slate-400 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                    <div className='pb-4'>
                        <a href="#about" className='inline-block px-6 py-4 mt-4 bg-indigo-500 hover:bg-indigo-800 dark:bg-sky-500 dark:hover:bg-sky-800 text-white font-bold rounded-md ml-4'>
                            See Source Code
                        </a>
                        <a href="#projects" className='inline-block px-6 py-4 mt-4 bg-indigo-500 hover:bg-indigo-800 dark:bg-sky-500 dark:hover:bg-sky-800 text-white font-bold rounded-md ml-4'>
                            YT Demo
                        </a>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default Projects;