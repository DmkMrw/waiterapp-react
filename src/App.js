import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Table from './components/pages/Table';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Table />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Container>
  );
}

export default App;
