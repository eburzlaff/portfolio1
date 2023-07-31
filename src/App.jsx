import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import About from './components/About';

function App() {

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
    <div className='h-screen bg-white dark:bg-slate-900'>
      <Header handleThemeSwitch={handleThemeSwitch} theme={theme}/>
      <div className='bg-white max-w-[1280px] mx-auto'>        
        <Hero/>
        <About/>
        <Timeline/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
