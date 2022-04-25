import React, {useEffect} from 'react';
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import './style/transitionRouter.css';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import NotFound from './pages/notFound';
import './style/reset.css';
import './style/login.css';
import './style/cadastrar.css';
import loadGif from './images/load.gif'

function App() {

  useEffect(()=>{

    const telaAbertura = document.querySelector('.loadInicial')

    setTimeout(()=>{
      
      telaAbertura.style.opacity = '0'

      setTimeout(()=>{
        telaAbertura.style.display = 'none'
      },1000)
      
    },3000)

  },[])

  const location = useLocation()

  return (
    <main className="App">

      <div className="loadInicial"><img alt="gif de carregamento" src={loadGif} /></div>

      <CSSTransition in={location.pathname === '/sign-up'} timeout={300} classNames="page">

        <Routes key={location}>
          <Route path="/" element={<Login />} />
          <Route path="sign-up" element={<Cadastrar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </CSSTransition>

    </main>
  );

}

export default App;
