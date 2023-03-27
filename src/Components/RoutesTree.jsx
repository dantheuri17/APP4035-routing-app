import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About'
import Contact from './Pages/Contact'


import React from 'react'

const RoutesTree = () => {
  return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				
			</Routes>
		</div>
	);
}

export default RoutesTree
