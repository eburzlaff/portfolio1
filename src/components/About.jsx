import React from 'react';

function About(props) {
    return (
        <div id="about" className='py-[100px] flex flex-col'>
            <h2  className='text-slate-700 dark:text-slate-200 font-bold text-5xl mb-4'>
                About Me
            </h2>
            <div className=''>
                <p className='text-slate-700 dark:text-slate-400 text-xl mt-6'>
                My name is Eduardo, a recent college graduate with a passion for software development. My journey into the coding world began in 2018 when I stumbled upon some online courses. As I dived into web development, I found myself completely captivated by the process and developed a strong interest for it.

                At first, I hoped to pursue a carreer in game development, but I soon realized that starting with web development was a wise move, and I haven't looked back since. My online portfolio showcases my progress and various projects that I've worked on.

                When I'm not coding, you'll often find me enjoying battles in fighting games like Street Fighter and Mortal Kombat. Just like in the digital arena, I find joy in the challenge, learning new strategies, and continuously improving my skills.

                I'm always eager to explore the latest technologies, collaborate, and contribute to exciting projects.
                </p>
            </div>
            
        </div>
    );
}

export default About;