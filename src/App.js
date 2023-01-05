import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import './App.scss';

const App = () => {
  return (
	<>
	<Router>
	<Header/> 
		<Routes>
			<Route path='/' element={<Home/>} />
		</Routes>
	</Router>
	</>
  )
}

export default App