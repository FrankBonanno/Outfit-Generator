import { useState } from 'react';
import reactLogo from './assets/react.svg';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="nav">
				<h1 className="nav-title">Outfit Generator</h1>
				<div className="nav-btns">
					<button id="add-photos" className="nav-btn">
						<LibraryAddOutlinedIcon />
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
