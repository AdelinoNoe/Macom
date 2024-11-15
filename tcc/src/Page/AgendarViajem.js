import  {useState,useEffect} from 'react'
 import { Link } from 'react-router-dom';
 import style from './agendarViajem.module.css'
 import axios from 'axios'


function AgendarViagem()
{
    const [userData,setUseData]= useState([]);
    const[formValue,setFormvalue]=useState({origem:'',destino:'',data:''});

    const handleInput=(e)=> {
        setFormvalue({... setFormvalue, [e.target.name]: e.target.value } )
    }

    /*useEffect(()=>{
        const getUserData=async()=>{
            const reqData=await fetch("http://localhost:80/api/connection.php");
            const resData=await reqData.json();
            console.log(reqData);
            setUseData(resData);
        }
        getUserData();
    },[]);*/

    const handleSubmit=async(e)=>{
     
            e.preventDefault();
        
           const formData={origem:formValue.origem,destino:formValue.destino,data:formValue.data};
           const rest= await axios.post("http://localhost:80/api/agendarViagem.php",formData);
           setFormvalue(rest);
           console.log(rest);
    }


    return(
        <div className={style.viajar}> 

        <h3>Viagens Disponíveis</h3>

            <div className={style.procurar}>

            <form onSubmit={handleSubmit}>

                <input type="text" name="origem" className={style.iptn} value={formValue.origem} onChange={handleInput} placeholder="Digite a Província Origem"/>
                <input type="text" name="destino" className={style.iptn} value={formValue.destino} onChange={handleInput} placeholder="Digite a Província Destino"/>
                <input type="date" name="data" className={style.iptn} value={formValue.data} onChange={handleInput}/>

                <button className={style.botao} type="submit"> Procurar</button>

            </form>
            </div>


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