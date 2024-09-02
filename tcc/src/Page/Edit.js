
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
    const{id}=useParams();
    const[formValue,setFormValue]=useState({provincia:'', municipio:'', nome:''});
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
           const formData={id:id,provincia:formValue.provincia,municipio:formValue.municipio,nome:formValue.nome};
           const rest= await axios.put("http://localhost:80/api/connection.php", formData);
           if(rest){

           }
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

export default Edit