import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/dashboard" element={<Navbar />} />
		</Routes>
	);
}

export default App;
