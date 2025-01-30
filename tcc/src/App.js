
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu'
import Home from './Page/Home'
import Agencia from './Page/Agencia'
import Mercadoria from './Page/Mercadoria'
import Recuperar from './Page/Recuperar'
import Rodape from './componentes/footer'
import secao from './layout/Conteiner.module.css'
import Edit from './Page/Edit'
import Viajar from './Page/Viajar'
import AgendarViagem from './Page/AgendarViajem'
import EnvioMercadoria from './EnvioMercadoria';
import Addfoto from './Addfoto';
import ReservaMercadoria from './Page/ReservaMercadoria';
import ViagemAgendada from './Page/ViagemAgendada';
import Voyage from './Page/Voyage';





function App() {
  return (
    <Router>
      <Menu />
      <section className={secao.secao}>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Viagem" element={<AgendarViagem></AgendarViagem>} />
        <Route path="/Agencia" element={<Agencia></Agencia>} />
        <Route path="/Mercadoria" element={<Mercadoria></Mercadoria>} />
        <Route path="/Recuerar/" element={<Recuperar></Recuperar>} />
        <Route path="/Edit/:id" element={<Edit></Edit>} />
        <Route path="/Viajar/:id" element={<Viajar></Viajar>} />
        <Route path="/EnvioMercadoria/:id" element={<EnvioMercadoria></EnvioMercadoria>} />
        <Route path="/Addfoto/:id" element={<Addfoto></Addfoto>}/>
        <Route path="/ReservaMercadoria" element={<ReservaMercadoria></ReservaMercadoria>}/>
        <Route path="/ViagemAgendada" element={<ViagemAgendada></ViagemAgendada>}/>
        <Route path="/Voyage" element={<Voyage></Voyage>}/>
      </Routes>
      </section>
      <Rodape/>
    </Router>
  );
}

export default App;
