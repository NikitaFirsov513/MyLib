import React from 'react';
import "normalize.css";
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import { useDispatch } from 'react-redux';
import { setBookList } from './redux/actions/bookListActions';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Auth from './components/Auth/Auth';


function App() {

  const dispatch = useDispatch();
  dispatch(setBookList());


  return (
    <>
      <Header />
      <Auth />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}







export default App;



