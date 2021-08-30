import React from 'react';
import './App.css';
import Email from './e-mail_form/e-mail';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header'
import { Main } from './main/Main';
import MyWorks from './Myworks/MyWorks';
import { Skills } from './skills/Skills';


function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Skills />
			<MyWorks />
			<Email />
			<Footer />

		</div>
	);
}

export default App;
