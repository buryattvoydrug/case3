import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TablePage } from './pages/TablePage';
import { LoginPage } from './pages/LoginPage';
import { Container, ThemeProvider } from '@mui/material';
import { Header } from './components/header/Header';
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Container sx={{marginTop: '80px'}} maxWidth="xl">
          <Routes>
            <Route path='/' element={<TablePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
