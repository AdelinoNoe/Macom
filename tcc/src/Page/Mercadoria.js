import  {useState,useEffect} from 'react'
 import { Link } from 'react-router-dom';
 import axios from 'axios';

function Mercadoria()
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

    const handleDelete= async(id)=>{
        const res= axios.delete("http://localhost:80/api/connection.php/"+id);
    }
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Provincia</th>
                        <th>Municipio</th>
                        <th>Nome</th>
                        <th>id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((dados,index)=>(

                            <tr key={index}>
                                <td>{dados.provincia}</td>
                                <td>{dados.municipio}</td>
                                <td>{dados.nome}</td>
                                <td>{dados.id}</td>
                                <td> <button onClick={()=>handleDelete(dados.id)}>Apagar</button></td>
                                <td>
                                    <Link to={"/Edit/"+dados.id}>Edição</Link>

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