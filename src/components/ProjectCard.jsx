import React from 'react';

function ProjectCard({title, description, image, technologies, buttons, id}) {

    return (
        <div key={id} className="max-w-lg rounded overflow-hidden shadow-2xl border border-slate-300 dark:border-slate-500 mb-4">
                <img className="w-full" src={image} alt="Project Image Unavailable"/>
                <div className='flex flex-col justify-center items-center align-middle'>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center text-slate-700 dark:text-slate-200">{title}</div>
                        <p className="text-slate-700 dark:text-slate-400 text-center">
                        {description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className='text-xl text-slate-700 dark:text-slate-200'>Technologies: </span>
                        {technologies.map(tech => (
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
                        ))}
                        
                    </div>
                    <div className='pb-4'>
                        {buttons.map(button => (
                            <a href={button.link} target="_blank" className='inline-block px-6 py-4 mt-4 bg-indigo-500 hover:bg-indigo-800 dark:bg-sky-500 dark:hover:bg-sky-800 text-white font-bold rounded-md ml-4'>
                                {button.text} 
                            </a>
                        ))}
                    </div>
                </div>        
        </div>
    );
}

export default ProjectCard;