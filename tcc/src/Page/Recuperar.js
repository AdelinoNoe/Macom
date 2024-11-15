
import Style from "./Recuperar.module.css";
import React,{ useEffect, useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';



function Recuerar()
{
    
    const[bi,setBi]= useState([]);
    const handleInput=(e)=> {
        setBi({... setBi, [e.target.name]: e.target.value } )
    }

    
    useEffect(()=>{
        handleSubmit();
      
}
,[]);

    const handleSubmit=async(e)=>{
            if(e){
            e.preventDefault();
        }
       
        const formData={bi:bi.bi}
        const reqData=await axios.post("http://localhost:80/api/pesquisa.php",formData);
        setBi(reqData.data);
}
    
       
           
    return(
      <div className={Style.Recuperar} >

      <form onSubmit={handleSubmit} > 
        <div className={Style.pesquisar}>
        <input type="text" placeholder="Digite o seu número do BI" value={bi.bi} onChange={handleInput} className={Style.pesquisa}  name="bi"></input>
        <button className={Style.botao}>Pesquisar</button>
        </div>

        <div>
        <table className={Style.tabela}> 
                <thead>
                    <tr>
                        <th>Provincia<br/> Origem</th>
                        <th>Provincia <br/> Destino</th>
                        <th>Preço</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Agencia</th>
                        <th>Autocarro</th>
                        <th>Lugar</th>
                        <th>Nome</th>
                        <th>BI</th>
                        <th>Telefone</th>
                        <th>Estado</th>
                        <th>  Comprovativo <br/> do pagamento</th>
                        <th>Anexar <br/> Comprovativo</th>
                    </tr>
                </thead>
                <tbody>
                {
                        
                        Object.values(bi).map((bi,index)=>(
                            <tr key={index}>
                                <td>{bi.provinciaOrigem}</td>
                                <td>{bi.provinciaDestino}</td>
                                <td>{bi.preco}</td>
                                <td className={Style.data}>{bi.data}</td>
                                <td>{bi.hora}</td>
                                <td>{bi.agencia}</td>
                                <td>{bi.autocarro}</td>
                                <td>{bi.lugar}</td>
                                <td>{bi.nome}</td>
                                <td>{bi.bi}</td>
                                <td>{bi.telefone}</td>
                                <td>{bi.estado}</td>
                                <td><img src={`http://localhost:80/api/imagem/${bi.imagem}` } className={Style.foto}></img></td>
                                <td>
                                <Link to={"/Addfoto/"+bi.id}>Anexar</Link>
                                </td>
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

export default Recuerar