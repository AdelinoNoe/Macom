import Style from './ReservaMercadoria.module.css'
import { useState,useEffect } from 'react';
import axios from 'axios';


function ReservaMercadoria()
{

    const[bi,setBi]= useState([]);
    const handleInput=(e)=> {
        setBi({... setBi, [e.target.name]: e.target.value } )
    }   

    const handleSubmit=async(e)=>
    {
        if(e)
        {
             e.preventDefault();
         }
   
         const formData={bi:bi.bi}
         const reqData=await axios.put("http://localhost:80/api/mercadoria.php",formData);
         setBi(reqData.data);
    }

        useEffect(()=>
        {
            handleSubmit();
        
        },[]);
    return(
        <div className={Style.Recuperar} >

      <form onSubmit={handleSubmit} > 

        <div className={Style.pesquisar}>

             <input type="text" placeholder="Digite o seu número do BI" value={setBi.bi}
                 onChange={handleInput} className={Style.pesquisa}  name="bi"></input>
             <button className={Style.botao}>Pesquisar</button>
        </div>

        <div>
        <table className={Style.tabela}> 
                <thead>
                    <tr>
                        <th>Provincia<br/> Origem</th>
                        <th>Provincia <br/> Destino</th>
                        <th>Agencia</th>
                        <th>Transporte</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Nome</th>
                        <th>BI</th>
                        <th>Telefone</th>
                        <th>Destinatário</th>
                        <th>Número Destinatário</th>
                    </tr>
                </thead>
                <tbody>
                {
                        
                       Object.values(bi).map((bi,index)=>(
                            <tr key={index}>
                                <td>{bi.provinciaOrigem}</td>
                                <td>{bi.provinciaDestino}</td>
                                <td>{bi.agencia}</td>
                                <td>{bi.transporte}</td>
                                <td>{bi.data}</td>
                                <td>{bi.hora}</td>
                                <td>{bi.nome}</td>
                                <td>{bi.bi}</td>
                                <td>{bi.telefone}</td>
                                <td>{bi.nomeDestino}</td>
                                <td>{bi.telefoneDestino}</td>
                            </tr>                             
                        ))   
                       
                       
                    }
                </tbody>
            </table>
        </div>
        </form>

      </div>
    
    )

}
export default ReservaMercadoria;