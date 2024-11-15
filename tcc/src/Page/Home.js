import style from './Home.module.css'
import img from '../imagem/humabo1.png'
import img2 from '../imagem/benguela.png'
import img3 from '../imagem/namibe.jpg'
import img4 from '../imagem/cunene.jpg'
import img5 from '../imagem/kwanza sul.jpg'
import img6 from '../imagem/luanda.jpg'
import  {useState,useEffect} from 'react'

function Home() {

    const [userData,setUseData]= useState([]);
    useEffect(()=>{
        const getUserData=async()=>{
            const reqData=await fetch("http://localhost:80/api/Home.php");
            const resData=await reqData.json();
            console.log(reqData);
            setUseData(resData);
        }
        getUserData();
    },[]);

    return (
        <div className={style.principal} >
            <div className={` ${style.slide_show} ${style.teste}`}>

            </div>
            <section className={style.secao}>

                <div className={style.flex}>
                    
                    <div className={style.flex1}>

                        <div className={style.IconTitulo}>
                            <img src={img} alt=''></img>
                        </div>

                        <div className={style.corpo}>
                            <br/>
                           <p className={style.paragrafo}>Luanda - Huambo</p>
                           <p className={style.paragrafo}> Preço</p>
                           <p className={style.paragrafo} >19.000 kzs</p>
                          
                        </div>

                    </div>

                    <div className={style.flex2}>

                        <div className={style.IconTitulo}>
                            <img src={img2} alt=''></img>
                        </div>

                        <div className={style.corpo}>
                            <br/>
                        <p className={style.paragrafo}>Luanda - Benguela</p>
                           <p className={style.paragrafo}> Preço</p>
                           <p className={style.paragrafo} >19.000 kzs</p>
                        </div>

                    </div>

                    <div className={style.flex3}>

                        <div className={style.IconTitulo}>
                            <img src={img3} alt=''></img>

                        </div>

                        <div className={style.corpo}>
                        <br/>
                        <p className={style.paragrafo}>Luanda - Namibe</p>
                           <p className={style.paragrafo}> Preço</p>
                           <p className={style.paragrafo} >19.000 kzs</p>
                        </div>
                    </div>
                </div>

            </section>

            
            <section className={style.secao}>

                <div className={style.flex}>

                    <div className={style.flex1}>

                       <div className={style.IconTitulo}>
                            <img src={img4} alt=''></img>
                        </div>

                        <div className={style.corpo}>
                        <br/>
                        <p className={style.paragrafo}>Luanda - Cunene</p>
                           <p className={style.paragrafo}> Preço</p>
                           <p className={style.paragrafo} >19.000 kzs</p>
                        </div>

                    </div>

                    <div className={style.flex2}>
                        <div className={style.IconTitulo}>
                            <img src={img5} alt=''></img>
                        </div>

                        <div className={style.corpo}>
                        <br/>
                        <p className={style.paragrafo}>Kwanza Sul - Luanda</p>
                           <p className={style.paragrafo}> Preço</p>
                           <p className={style.paragrafo} >19.000 kzs</p>
                        </div>
                        
                    </div>
                    <div className={style.flex3}>
                        <div className={style.IconTitulo}>
                            <img src={img6} alt=''></img>
                        </div>

                        <div className={style.corpo}>
                        <br/>
                        <p className={style.paragrafo}>Bie - Luanda</p>
                           <p className={style.paragrafo}> Preço</p>
                           <p className={style.paragrafo} >19.000 kzs</p>
                        </div>

                    </div>
                </div>

            </section>
            <section>
                
                <div className={style.viagem}>
                    <p className={style.paragrafoViagem}>VIAGENS AGENDADAS</p>
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
                            </tr>    
                        ))
                    }
                </tbody>
            </table>
                </div>
            </section>
            

        </div>
    )

}

export default Home