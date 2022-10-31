import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import PrivateRoutes from './utils/PrivateRoutes';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<Routes>
			<Route element={<PrivateRoutes />}>
				<Route path="/" element={<Dashboard />} />
			</Route>
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default App;
