
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Style from './Viajar.module.css'

function Viajar() {
    const{id}=useParams();
    const[formValue,setFormValue]=useState({provinciaOrigem:'',provinciaDestino:'', preco:'', data:'',hora:'',
         agencia:'', autocarro:'', lugar:'',nome:'',bi:'',telefone:''});
    const handleInput=(e)=> {
        setFormValue({... formValue, [e.target.name]: e.target.value } )
    }

    useEffect(()=>{
        const userRowData=async()=>{
            const  getuserdata=await fetch("http://localhost:80/api/connection.php/"+id);
            const resuserdata=await getuserdata.json();
            console.log(resuserdata);
            setFormValue(resuserdata);
        }
        userRowData();
}, []);

    const handleSubmit=async(e)=>{
            e.preventDefault();
           const formData={id:id,provinciaOrigem:formValue.provinciaOrigem,provinciaDestino:formValue.provinciaDestino,preco:formValue.preco,data:formValue.data,
           hora:formValue.hora,agencia:formValue.agencia,autocarro:formValue.autocarro,lugar:formValue.lugar,nome:formValue.nome,bi:formValue.bi,telefone:formValue.telefone};
           const rest= await axios.post("http://localhost:80/api/connection.php", formData);
           if(rest){

           }
    }

    return (
        <div className={Style.principal}>

            <form onSubmit={handleSubmit}>
                   <div className={Style.selecao}>
                    <label >Província Origem:</label>
    
                    <select id="provinciaO" name="provinciaOrigem"   value={formValue.provinciaOrigem} onChange={handleInput}>
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
                    <label for="" >Preco:</label>

                    <input type="text" name="number" className={Style.teste}  required  oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.preco} onChange={handleInput}/>

                    </div>

                    <div className={Style.lista2}> 
                   <label for="" >Data:</label>

                    <input type="text" name="date"   required  oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.data} onChange={handleInput}/>
                    </div>

                    <div className={Style.lista3}> 
                    <label for="" >Hora:</label>

                    <input type="text" name="hora"   required  oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.hora} onChange={handleInput}/>
                    </div>

                    <div className={Style.lista4}>
                    <label for=""  >Agencia:</label>

                    <input type="text" name="nome"  
                     required
                    oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.agencia} onChange={handleInput}/>
                    </div>

                    <div className={Style.lista5} >
                    <label for="">Autocarro:</label>
                    <input type="text" name="autocarro"  
                     required
                    oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.autocarro} onChange={handleInput}/>
                    </div>

                    <div className={Style.lista6}>
                    <label for="" >Lugares:</label>
                    <input type="number" name="nome"  
                     required
                    oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.lugar} onChange={handleInput}/>
                    </div>

                    <div className={Style.lista7}>
                    <label for="" >Nome:</label>
                    <input type="text" name="nome"  
                     required
                    oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.nome} onChange={handleInput}/>
                   </div>

                   <div className={Style.lista8}>
                    <label for="" >BI:</label>
                    <input type="text" name="bi"  
                     required
                    oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.bi} onChange={handleInput}/>
                    </div>

                    <div className={Style.lista9}>
                    <label for="" >Telefone:</label>
                    <input type="phone" name="telefone"  
                     required
                    oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.telefone} onChange={handleInput}/>
                    </div>
                    <button type="submit"  name="cadastrar" className={Style.btn}>Cadastrar</button>
                    
                </form>
        </div>
    )

}

export default Viajar