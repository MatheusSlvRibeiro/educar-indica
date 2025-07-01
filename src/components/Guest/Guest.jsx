// import AboutSvg from '../../assets/images/about.svg'
import CbmIcon from '../../assets/images/Inc/Brans Brasil Auspicios_cbm.png'
import CumeIcon from '../../assets/images/Inc/Brans Brasil Auspicios_cume.png'
import MackezieIcon from '../../assets/images/Inc/Brans Brasil Auspicios_Mackezie.png'
import SingularidadesIcon from '../../assets/images/Inc/Logo_singularidades.png'
import UnipIcon from '../../assets/images/Inc/logo-unip.png'

const Guest = () => {
    // const divStyle = {
    //     backgroundImage: `url(${AboutSvg})`
    // };

    return (
        <section
            // style={divStyle}
            className="text-center px-8 py-[6rem] flex flex-col justify-center lg:flex-row">
            <div
                className="w-full justify-start items-center
                        md:flex md:flex-row md:mx-auto
                        xl:mb-[3rem] max-w-[1200px] mx-auto">
                <img
                    loading="lazy"
                    src="/images/gabriel_brito.png"
                    alt="Dr. Gabriel Brito, um homem sorridente de barba curta, cabelo castanho escuro, vestindo camisa verde escura, posando de braços cruzados em frente a um fundo azul escuro."
                    className="m-auto
                            sm:w-[70%] 
                            md:w-[40%]"/>

                <div className='flex flex-col text-start justify-center gap-6 py-[4rem] sm:p-[4rem]'>
                    <div>
                        <h1 className="text-second font-bold text-[2.2rem]">Gabriel Brito</h1>
                        <h3 className="font-medium text-[1.5rem]">Fundador</h3>
                    </div>

                    <div>
                        <p>Pedagogo pela Universidade Luterana do Brasil, pós-graduado em Psicopedagogia, Mestre e <span className='text-second font-semibold'>Doutor em Distúrbios do Desenvolvimento pela Universidade Presbiteriana Mackenzie-SP.</span> Bolsista da Capes (PROSUP). Atualmente, dirige seus estudos à área da Avaliação Neuropsicológica, com ênfase em leitura e escrita. Pesquisador do grupo de Neuropsicologia Infantil da UPM e Membro da Rede de Formadores do Instituto ABCD. Além de atuar como psicopedagogo clínico e institucional é coordenador do Espaço de Desenvolvimento Cognitivo Cume. Ministrou aulas e palestras em diversas instituições de prestígio.</p>

                        <div id="images" className="grid grid-cols-3 mt-8">
                            <img src={CbmIcon} alt="Cbm" />
                            <img src={MackezieIcon} alt="Mackenzie" />
                            <img src={CumeIcon} alt="Cume" />
                            <img src={SingularidadesIcon} alt="Singularidades" />
                            <img src={UnipIcon} alt="Unip" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guest;