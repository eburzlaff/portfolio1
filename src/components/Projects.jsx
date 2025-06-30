import React from 'react';
import ProjectCard from './ProjectCard';
import { projects_en, projects_pt } from '../constants/constants';
import { useTranslation } from 'react-i18next';

function Projects(props) {

    // I18n's useTranslation hook
    const { t, i18n } = useTranslation();

    // Select the correct array based on language
    const projects = i18n.language === 'pt' ? projects_pt : projects_en;

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