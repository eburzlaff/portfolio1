import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../constants/constants';
import { useTranslation } from 'react-i18next';

function Projects(props) {

    // I18n's useTranslation hook
    const { t } = useTranslation();

    return (
        <div id='projects' className='py-[100px] flex flex-col items-center justify-between lg:items-start'>
            <h2  className='text-slate-700 dark:text-slate-200 font-bold text-5xl pb-8'>
                {t('projects.title')}
            </h2>
            <div className='flex justify-around flex-wrap'>
                {projects.map((project, id) => (
                    <ProjectCard  
                        title={project.title} 
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                        buttons={project.buttons}
                        id={id}
                    />
                ))}
            </div>
            
        </div>
    );
}

export default Projects;