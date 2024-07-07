
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu'
import Home from './Page/Home'
import Viagem from './Page/Viagem'
import Agencia from './Page/Agencia'
import Mercadoria from './Page/Mercadoria'
import Recuperar from './Page/Recuperar'
import Rodape from './componentes/footer'
import secao from './layout/Conteiner.module.css'


function App() {
  return (
    <Router>
      <Menu />
      <section className={secao.secao}>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Viagem" element={<Viagem></Viagem>} />
        <Route path="/Agencia" element={<Agencia></Agencia>} />
        <Route path="/Mercadoria" element={<Mercadoria></Mercadoria>} />
        <Route path="/Recuerar" element={<Recuperar></Recuperar>} />
      </Routes>
      </section>
      <Rodape/>
    </Router>
  );
}

export default App;
