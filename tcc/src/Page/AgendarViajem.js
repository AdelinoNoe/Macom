import  {useState,useEffect} from 'react';
 import { Link} from 'react-router-dom';
 import style from './agendarViajem.module.css';
 import axios from 'axios';
 import { useNavigate } from 'react-router-dom';


function AgendarViagem()
{
   
    const [userData,setUseData]= useState([]);
    const navegar=useNavigate();
    const[formValue,setFormvalue]=useState({origem:'',destino:'',data:''});

    const handleInput=(e)=> {
        setFormvalue({... formValue, [e.target.name]: e.target.value } )
    }

    useEffect(()=>{
        const getUserData=async()=>{
            const reqData=await fetch("http://localhost:80/api/connection.php");
            const resData=await reqData.json();
            setUseData(resData);
        }
        getUserData();
    
    },[]);

   

    return(

        <div className={style.viajar}> 

           <Link to={"/ViagemAgendada/"}>
            <button className={style.btn}>Pesquisar viagem por data</button>
            </Link>

        <h3>Viagens Disponíveis</h3>

            <table className={style.tabela}> 
                <thead>
                    <tr>
                        <th>Provincia Origem</th>
                        <th>Provincia Destino</th>
                        <th>Preço</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Agencia</th>
                        <th>Autocarro</th>
                        <th>Lugar</th>
                        <th>Marcar Viagem</th>
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
                                <td>{dados.agencia}</td>
                                <td>{dados.autocarro}</td>
                                <td>{dados.lugar}</td>
                                <td>
                                    <Link to={"/Viajar/"+dados.id}>Marcar Viagem</Link>

                                </td>

                            </tr>    
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default AgendarViagem