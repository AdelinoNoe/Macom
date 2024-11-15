import Style from "./Agencia.module.css"
import  {useState,useEffect} from 'react'
 import { Link } from 'react-router-dom';

function Agencia()
{

    const [userData,setUseData]= useState([]);
    useEffect(()=>{
        const getUserData=async()=>{
            const reqData=await fetch("http://localhost:80/api/connection.php");
            const resData=await reqData.json();
            console.log(reqData);
            setUseData(resData);
        }
        getUserData();
    },[]);
    
    return(
        <div className={Style.principal}>

        <div className={Style.norte}>

              <div className={Style.Gamek}>

              <p className={Style.paragrafo}>Agencia Luanda-Gamek</p>

                 <table className={Style.tabela}> 
                    <thead>
                     <tr>
                        <th>Provincia Origem</th>
                        <th>Provincia Destino</th>
                        <th>Preço</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Marcar</th>
                     </tr>
                    </thead>
                
                   <tbody>
                    {
                        userData.map((dados,index)=>(

                            <tr key={index}>
                                <td>{dados.provinciaOrigem}</td>
                                <td>{dados.provinciaDestino}</td>
                                <td>{dados.preco}</td>
                                <td>{dados.data}</td>
                                <td>{dados.hora}</td>
                                <td>
                                    <Link to={"/Viajar/"+dados.id}>Marcar</Link>

                                </td>

                            </tr>    
                        ))     
                    }
                 </tbody>  
              </table>
            </div>

                <div className={Style.Golf2}>
                    <p className={Style.paragrafo}>Agencia Luanda-Golf 2</p>

                    <table className={Style.tabela}> 
                      <thead>
                         <tr>
                             <th>Provincia Origem</th>
                             <th>Provincia Destino</th>
                             <th>Preço</th>
                             <th>Data</th>
                            <th>Hora</th>
                            <th>Marcar</th>
                        </tr>
                    </thead>

                     <tbody>
                         {
                            userData.map((dados,index)=>(
                            <tr key={index}>
                                <td>{dados.provinciaOrigem}</td>
                                 <td>{dados.provinciaDestino}</td>
                                <td>{dados.preco}</td>
                                <td>{dados.data}</td>
                                <td>{dados.hora}</td>
                                <td>
                                  <Link to={"/Viajar/"+dados.id}>Marcar</Link>
                                </td>
                             </tr>    
                             ))     
                        }
                    </tbody>  
                </table>
                 </div>       
            </div>

                {/* Segunda nav-----------------------------------------------*/}
                <div className={Style.mix}>

                    <div className={Style.Benguela}>
                    <p className={Style.paragrafo}>Agencia Benguela-Lobito</p>

                    <table className={Style.tabela}> 
                      <thead>
                        <tr>
                          <th>Provincia Origem</th>
                          <th>Provincia Destino</th>
                          <th>Preço</th>
                          <th>Data</th>
                          <th>Hora</th>
                          <th>Marcar</th>
                        </tr>
                      </thead>

                    <tbody>
                         {
                             userData.map((dados,index)=>(
                         <tr key={index}>
                             <td>{dados.provinciaOrigem}</td>
                             <td>{dados.provinciaDestino}</td>
                             <td>{dados.preco}</td>
                             <td>{dados.data}</td>
                             <td>{dados.hora}</td>
                            <td>
                              <Link to={"/Viajar/"+dados.id}>Marcar</Link>
                             </td>
                         </tr>    
                         ))     
                       }
                 </tbody>  
                </table>
                </div>


                    <div className={Style.Huambo}>
                    <p className={Style.paragrafo}>Agencia Benguela-Lobito</p>

                    <table className={Style.tabela}> 
                      <thead>
                        <tr>
                          <th>Provincia Origem</th>
                          <th>Provincia Destino</th>
                          <th>Preço</th>
                          <th>Data</th>
                          <th>Hora</th>
                          <th>Marcar</th>
                        </tr>
                      </thead>

                    <tbody>
                         {
                             userData.map((dados,index)=>(
                         <tr key={index}>
                             <td>{dados.provinciaOrigem}</td>
                             <td>{dados.provinciaDestino}</td>
                             <td>{dados.preco}</td>
                             <td>{dados.data}</td>
                             <td>{dados.hora}</td>
                            <td>
                              <Link to={"/Viajar/"+dados.id}>Marcar</Link>
                             </td>
                         </tr>    
                         ))     
                       }
                 </tbody>  
                </table>
                </div>
                </div>
                
        </div>
    )

}

export default Agencia