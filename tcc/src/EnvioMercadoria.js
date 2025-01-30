
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Style from './EnvioMercadoria.module.css'
import { useNavigate } from 'react-router-dom';

function EnvioMercadoria() {
    const{id}=useParams();
    const[mensagem,setMensagem]=useState('');
    const navegar=useNavigate();
    const[formValue,setFormValue]=useState({provinciaOrigem:'',provinciaDestino:'', agencia:'', transporte:'',data:'',
         hora:'',nome:'',bi:'',telefone:'',nomeDestino:'',telefoneDestino:''});
    const handleInput=(e)=> {
        setFormValue({... formValue, [e.target.name]: e.target.value } );
    }

    useEffect(()=>{
        const userRowData=async()=>{
            const  getuserdata=await fetch("http://localhost:80/api/mercadoria.php/"+id);
            const resuserdata=await getuserdata.json();
            console.log(resuserdata);
            setFormValue(resuserdata);
        }
        userRowData();
}, []);

    const handleSubmit=async(e)=>{
            e.preventDefault();
           const formData={id:id,provinciaOrigem:formValue.provinciaOrigem,provinciaDestino:formValue.provinciaDestino,agencia:formValue.agencia,transporte:formValue.transporte,
           data:formValue.data,hora:formValue.hora,nome:formValue.nome,bi:formValue.bi,telefone:formValue.telefone,nomeDestino:formValue.nomeDestino,telefoneDestino:formValue.telefoneDestino,peso:formValue.peso, preco:formValue.preco};
           const rest= await axios.post("http://localhost:80/api/mercadoria.php", formData);
           if(rest)
            {
                setMensagem('Reserva Efetuada com sucesso');
                setTimeout(()=>{
                navegar('/ReservaMercadoria');
                },2000);
            }
            else{
                alert( "Reserva não efetuada, verifique os dados ou se jça excedeu o limite de cargas");
                setTimeout(()=>{
                navegar('/ReservaMercadoria');
                },3000)
            }
    }

    return (
        <div className={Style.principal}>
            <h2>{mensagem}</h2>
            <form onSubmit={handleSubmit}>
                  <h2>Fazer Reserva</h2>

                   <div className={Style.selecao}>

                    <label >Província Origem:</label>
    
                    <select id="provinciaO" name="provinciaOrigem"  className={Style.prov} value={formValue.provinciaOrigem} onChange={handleInput}>
                        <option value="Luanda">Luanda</option>
                        <option value="Huambo">Huambo</option>
                        <option value="Malange">Malange</option>
                        <option value="KwanzaSul">Kwanza Sul</option>
                    </select>
                    </div>

                    <div className={Style.selecao1}>
                    <label >Província Destino:</label>
    
                    <select id="provinciaO" name="provinciaDestino"   value={formValue.provinciaDestino} onChange={handleInput}>
                        <option value="Luanda">Luanda</option>
                        <option value="Huambo">Huambo</option>
                        <option value="Malange">Malange</option>
                        <option value="KwanzaSul">Kwanza Sul</option>
                    </select>
                    </div>

                    <div className={Style.lista1}>
                    <label for="" >Agencia:</label>

                    <input type="text" name="agencia" className={Style.teste}  required  oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.agencia} onChange={handleInput}/>

                    </div>
                    <div className={Style.lista2}>
                    <label for="" >Transporte:</label>

                    <input type="text" name="agencia" className={Style.teste}  required  oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.transporte} onChange={handleInput}/>

                    </div>

                    <div className={Style.lista3}> 
                   <label for="" >Data:</label>

                    <input type="date" name="data"   required  oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.data} onChange={handleInput}/>
                    </div>

                    <div className={Style.lista4}> 
                    <label for="" >Hora:</label>

                    <input type="time" name="hora"   required  oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.hora} onChange={handleInput}/>
                    </div>

                       
                <div className={Style.lista5}>
                    <label for=""  >Nome:</label>

                    <input type="text" name="nome"  
                     required
                    oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.nome} onChange={handleInput}/>
                    </div>

                    <div className={Style.lista6} >
                    <label for="">BI:</label>
                    <input type="text" name="bi"  
                     required
                    oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.bi} onChange={handleInput}/>
                    </div>
                    <div className={Style.lista9} >
                    <label for="">Telefone:</label>
                    <input type="int" name="telefone"  
                     required
                    oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.telefone} onChange={handleInput}/>
                    </div>

                    <div className={Style.lista7}>
                    <label for="" >Nome do Destinatário:</label>
                    <input type="text" name="nomeDestino"  
                     required
                    oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.nomeDestino} onChange={handleInput}/>
                    </div>

                    <div className={Style.lista8}>
                    <label for="" >Telefone do Destinatário:</label>
                    <input type="int" name="telefoneDestino"  
                     required
                    oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.telefoneDestino} onChange={handleInput}/>
                   </div>
                    
                    <button type="submit"  name="cadastrar" className={Style.btn}>Cadastrar</button>
                    
                </form>
        </div>
    )

}

export default EnvioMercadoria