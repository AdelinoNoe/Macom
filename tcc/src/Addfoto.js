
import Style from './Addfoto.module.css'
import axios from "axios";
import React,{useState} from "react";
import { useNavigate, useParams} from "react-router-dom";

function Addfoto()
{
    const {id}=useParams();
    const[pfile,setPfile]=useState([]);
    const[mensagem,setMensagem]=useState('');
    const navegar=useNavigate();

    const upLoadProduct=async()=>
    {
        const formData= new FormData();
        formData.append('pfile',pfile);
        formData.append('id',id);
       

        const response=await axios.post("http://localhost:80/api/foto.php",formData,{
            headers:{'Content-Type':"multipart/form-data"},
        });
        if(response.data)
        {
            setMensagem('Imagem anexada com Sucesso');
            setTimeout(()=>{
            navegar('/Recuerar');
            },3000);
        }
        
    }
    const handleSubmit=async(e)=>
        {
            e.preventDefault();
            await upLoadProduct();

        }
    return(
        <div className={Style.principal}>
           
            <h2>{mensagem}</h2>
            <form onSubmit={handleSubmit}>

                <div className={Style.estilo}>

                <label>Inserir Comprovativo</label>
                <input type="file" name="imagem" onChange={(e)=>setPfile(e.target.files[0]) }  ></input>
                
                <button type="submit" className={Style.btn}>Enviar</button>
                </div>

            </form>
        </div>
    )

}
export default Addfoto;