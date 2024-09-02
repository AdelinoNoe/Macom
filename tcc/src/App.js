
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
import Edit from './Page/Edit'
import Viajar from './Page/Viajar'
import AgendarViagem from './Page/AgendarViajem'


function App() {
  return (
    <Router>
      <Menu />
      <section className={secao.secao}>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Viagem" element={<Viagem></Viagem>} />
        <Route path="/Agencia" element={<AgendarViagem></AgendarViagem>} />
        <Route path="/Mercadoria" element={<Mercadoria></Mercadoria>} />
        <Route path="/Recuerar" element={<Recuperar></Recuperar>} />
        <Route path="/Edit/:id" element={<Edit></Edit>} />
        <Route path="/Viajar/:id" element={<Viajar></Viajar>} />
      </Routes>
      </section>
      <Rodape/>
    </Router>
  );
}

export default App;
