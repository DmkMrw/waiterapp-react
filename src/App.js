import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Table from './components/pages/Table';
import NotFound from './components/pages/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { useDispatch } from 'react-redux';
import { updateTables } from './redux/tablesReducer';
import { useEffect } from 'react';


const App = () => {
  const dispatch = useDispatch();
  const fetchTables = () => {
    fetch('http://localhost:3131/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables), console.log('tables', tables)))
  };

  useEffect(fetchTables, [dispatch]);


  return (
    <Container>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<Table />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Container>
  );
}

export default App;
