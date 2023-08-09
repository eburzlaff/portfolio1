import React, { useState, useEffect } from 'react'
import viteLogo from '/vite.svg';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {

  // Theme switch logic
  const [theme, setTheme] = useState("dark");

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

  return (
    <div className='min-h-screen w-screen bg-white dark:bg-slate-900 overflow-hidden'>
      <Header handleThemeSwitch={handleThemeSwitch} theme={theme}/>
	  <a id='home'></a>
      <div className='max-w-[1280px] mx-auto px-5 lg:px-0'>        
        <Hero/>
		<hr className='w-20 h-1 mx-auto lg:mr-[100%] my-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 to-sky-500 border-0 rounded mt-10 lg:mt-32  '/>	
		Some modi
        <About/>
		<hr className='w-20 h-1 mx-auto lg:mr-[100%] my-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 to-sky-500 border-0 rounded mt-10 '/>
        <Skills/>
		<hr className='w-20 h-1 mx-auto lg:mr-[100%] my-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 to-sky-500 border-0 rounded mt-10 '/>
        <Projects/>
		<hr className='w-20 h-1 mx-auto lg:mr-[100%] my-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 to-sky-500 border-0 rounded mt-10 '/>
        <Contact/>	
      </div>
	  <Footer/>
    </div>
  )
}

export default App
