import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';

function App() {
	const [user, setUser] = useState(localStorage.getItem('favUser') || 'mal');

	const handleUserClick = (user) => {
		if (user === 'mal') {
			setUser('mal');
			localStorage.setItem('favUser', 'mal');
		} else {
			setUser('frankie');
			localStorage.setItem('favUser', 'frankie');
		}
	};

	return (
		<div className="App">
			<div className="nav">
				<h1 className="nav-title">Outfit Generator</h1>
				<div className="nav-btns">
					<h3
						className="name"
						id="mal"
						onClick={() => handleUserClick('mal')}
						style={{
							color: user === 'mal' ? '#606c38' : '#bc6c25',
						}}
					>
						Malanie
					</h3>
					{user === 'mal' ? (
						<ToggleOffOutlinedIcon sx={{ fontSize: 28 }} />
					) : (
						<ToggleOnOutlinedIcon sx={{ fontSize: 28 }} />
					)}
					<h3
						className="name"
						id="frankie"
						onClick={() => handleUserClick('frankie')}
						style={{
							color: user === 'frankie' ? '#606c38' : '#bc6c25',
						}}
					>
						Frankie
					</h3>
					<button id="add-photos" className="nav-btn">
						<LibraryAddOutlinedIcon />
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
