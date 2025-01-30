import  {useState,useEffect} from 'react'
 import { Link } from 'react-router-dom';
 import style from './Mercadoria.module.css';

function Mercadoria()
{
    const [userData,setUseData]= useState([]);
    useEffect(()=>{
        const getUserData=async()=>{
            const reqData=await fetch("http://localhost:80/api/mercadoria.php");
            const resData=await reqData.json();
            console.log(reqData);
            setUseData(resData);
        }
        getUserData();
    },[]);

    return(
        <div className={style.mercadoria}>
           
            
            <Link to={"/ReservaMercadoria/"}>
            <button className={style.botao}>Minhas Reservas</button>
            </Link>
            <p className={style.paragrafo}>Transporte de Cargas Disponíveis</p>
            <table className={style.tabela}> 
                <thead>
                    <tr>
                        <th>Provincia Origem</th>
                        <th>Provincia Destino</th>
                        <th>Agencia</th>
                        <th>Transporte</th>
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
                                <td>{dados.agencia}</td>
                                <td>{dados.transporte}</td>
                                <td>{dados.data}</td>
                                <td>{dados.hora}</td>
                                <td>
                                    <Link to={"/EnvioMercadoria/"+dados.id}>Marcar Viagem</Link>

                                </td>

                            </tr>    
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default Mercadoria