import style from './Home.module.css'
import img from '../imagem/quemsomos.png'
import img2 from '../imagem/objetivo.png'
import img3 from '../imagem/negocio.png'
import img4 from '../imagem/responsabilidade.png'

function Home() {
    return (
        <div className={style.principal} >
            <div className={` ${style.slide_show} ${style.teste}`}>

            </div>
            <section className={style.secao}>

                <div className={style.flex}>
                    <div className={style.flex1}>
                        <div className={style.IconTitulo}>
                            <img src={img} alt=''></img>
                            <h1>QUEM SOMOS</h1>
                        </div>

                        <div>
                            <p className={style.paragrafo}>
                                A Macon é uma empresa Angolana de Direito  Privado concessionária<br />
                                dos serviços públicos de Transporte Rodoviário de Passageiros <br />
                                com uma moderna frota de veículos<br />
                                A Macon foi fundada em Maio de 2001 e começou operando linhas<br />
                                urbanas na  cidade de Luanda. Em 2005, a Macon iniciou um processo <br />
                                de modernização e crescimento, investindo no desenvolvimento humano <br />
                                e profissional de seus colaboradores que culminou com o aperfeiçoamento<br />
                                e ampliação de seus serviços. <br />
                            </p>
                        </div>

                    </div>
                    <div className={style.flex2}>
                        <div className={style.IconTitulo}>
                            <img src={img2} alt=''></img>
                            <h1>MISSÃO</h1>
                        </div>
                        <div>
                            <p>
                                Ser uma empresa de transporte rodoviário e urbano de passageiros,<br />
                                reconhecida pelos seus serviços com Conforto, Segurança e Qualidade,<br />
                                atenta a melhoria contínua.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            
            <section className={style.secao}>

                <div className={style.flex}>
                    <div className={style.flex1}>
                       <div className={style.IconTitulo}>
                            <img src={img3} alt=''></img>
                            <h1>NEGÓCIO</h1>
                        </div>
                        <p>
                            A MACON possui várias frentes de trabalho que são partes integrantes <br />
                            deseu negócio, somando estratégia e técnica ao dia a dia no seu   <br />
                            relacionamento com diversos públicos. Tais como: clientes, empresas <br />
                            e governo. Conheça nossas principais  áreas de negócio como: Transporte <br />
                            Interprovincial de Passageiros,Transporte Urbano de Passageiros,Cargas e <br />
                            Encomendas,Vendas de Autocarros <br />
                        </p>
                    </div>
                    <div className={style.flex2}>
                        <div className={style.IconTitulo}>
                            <img src={img4} alt=''></img>
                            <h1>SUSTENTABILIDADE</h1>
                        </div>
                        <p>
                            A MACON se preocupa não apenas em prestar um serviço de qualidade,<br />
                            mas também  em cuidar para que o contexto no qual está inserida se<br />
                            desenvolva tão bem quanto a empresa. Dessa forma, vários projectos  <br />
                            foram criados para viabilizar uma relação estável com seus colaboradores<br />
                            e com a comunidade.<br />
                        </p>
                    </div>
                </div>

            </section>
            

        </div>
    )

}

export default Home