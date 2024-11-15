
import { useState } from 'react'
import axios from 'axios';

function Viagem() {
    const[formValue,setFormValue]=useState({provincia:'', municipio:'', nome:''});
    const handleInput=(e)=> {
        setFormValue({... formValue, [e.target.name]: e.target.value } )
    }
    const handleSubmit=async(e)=>{
            e.preventDefault();
           const formData={provincia:formValue.provincia,municipio:formValue.municipio,nome:formValue.nome};
           const rest= await axios.post("http://localhost:80/api/connection.php", formData)
           console.log(rest);
    }
    return (
        <div >

            <form onSubmit={handleSubmit}>
                    <label >Província:</label>
    
                    <select id="provinciaO" name="provincia"   value={formValue.provincia} onChange={handleInput}>
                        <option value="Luanda">Luanda</option>
                        <option value="Huambo">Huambo</option>
                        <option value="Malange">Malange</option>
                        <option value="KwanzaSul">Kwanza Sul</option>
                    </select>

                    <label for="">Município:</label>

                    <select id="provinciaD" name="municipio"  value={formValue.municipio} onChange={handleInput}>
                        <option value="Luanda">Luanda</option>
                        <option value="Huambo">Huambo</option>
                        <option value="Malange">Malange</option>
                        <option value="KwanzaSul">Kwanza Sul</option>
                    </select>
                    
                    <label for="" >Nome:</label>

                    <input type="text" name="nome"  
                     required
                    oninvalid="this.setCustomValidity('Campo obrigatório!')" value={formValue.nome} onChange={handleInput}/>

                    <button type="submit"  name="cadastrar">Cadastrar</button>
                    
                </form>
        </div>
    )

}

export default Viagem