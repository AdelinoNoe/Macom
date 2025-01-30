import { Link } from "react-router-dom";
import Style from './ViagemAgendada.module.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function ViagemAgendada()
{
    
    const[formValue,setFormvalue]=useState([]);
    const navegar=useNavigate();
    const handleInput=(e)=> {
        e.preventDefault();
        setFormvalue({... formValue, [e.target.name]: e.target.value } );
    }
     
    useEffect(()=>{
         handleSubmit();
        
}   ,[]);

     const handleSubmit=async(e)=>
    {
           if(e)
            {
                e.preventDefault();
                const formData={origem:formValue.origem,destino:formValue.destino,data:formValue.data};
                const rest= await axios.post("http://localhost:80/api/agendarViagem.php",formData);
                setFormvalue(rest.data);
                console.log(formValue.origem);
           }  
    }
    
   
    return(
        <div className={Style.principal}>

            <div className={Style.procurar}>

            <form onSubmit={handleSubmit} >

                <input type="text" name="origem" className={Style.iptn} value={formValue.origem} onChange={handleInput} placeholder="Digite a Província Origem"/>
                <input type="text" name="destino" className={Style.iptn} value={formValue.destino} onChange={handleInput} placeholder="Digite a Província Destino"/>
                <input type="date" name="data"  className={Style.iptn} value={formValue.data} onChange={handleInput} /> 
                <button className={Style.botao} >Procurar </button>   

            </form>
            </div>

            <table  className={Style.tabela}>
                 <thead>
                    <tr>
                        <th>Provincia Origem</th>
                        <th>Provincia  Destino</th>
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
                    
                        
                    Object.values(formValue).map((form,index)=>(
                        <tr key={index}>
                            <td>{form.provinciaOrigem}</td>
                            <td>{form.provinciaDestino}</td>
                            <td>{form.preco}</td>
                            <td >{form.data}</td>
                            <td>{form.hora}</td>
                            <td>{form.agencia}</td>
                            <td>{form.autocarro}</td>
                            <td>{form.lugar}</td>
                            <td>
                            <Link to={"/Viajar/"+formValue.id}>Marcar Viagem</Link>
                            </td>
                        </tr>                  
                    ))
                }
                
                </tbody>
            </table>
        </div>
    )
}
export default ViagemAgendada;