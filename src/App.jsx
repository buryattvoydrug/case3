import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TablePage } from './pages/TablePage';
import { LoginPage } from './pages/LoginPage';
import { Container } from '@mui/material';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Container sx={{marginTop: '80px'}} maxWidth="xl">
        <Routes>
          <Route path='/' element={<TablePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
