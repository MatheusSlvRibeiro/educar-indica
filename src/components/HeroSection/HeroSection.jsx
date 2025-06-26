import image from "../../assets/images/ilustracao-professor-crianca.png";
import SearchIcon from '../../assets/images/search-2-line.svg'
import SealCard from "../../components/sealCard/sealCard";
import seals from "../../assets/data/seals.json";

const HeroSection = () => {
    return (
        <section className="mx-auto max-w-[1200px] text-white py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1">
                    <h1 className="text-3xl md:text-[2.5rem] font-bold mb-6 leading-tight">
                        Encontre profissionais qualificados e atualizados para apoiar seu filho!
                    </h1>
                    <p className="text-lg md:text-[1.2rem] font-normal leading-relaxed mb-10">
                        Educadores e especialistas formados nas mentorias e cursos da <strong>Educar com Evidências</strong>, prontos para atuar com base na Ciência Cognitiva da Leitura.
                    </p>
                </div>

                <div className="flex-1">
                    <img
                        src={image}
                        alt="Professor auxiliando aluno na leitura"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {seals.map((seal, index) => (
                    <SealCard
                        key={index}
                        image={seal.image}
                        title={seal.title}
                        description={seal.description}
                    />
                ))}
            </div>

            <div className="text-center mt-12">
                <p className="text-white mb-4">
                    Procure um profissional com os selos acima e garanta um acompanhamento de excelência.
                </p>
                <button 
                    className="bg-[#012346] px-6 py-2 rounded-full shadow hover:bg-blue-100 transition flex flex-row justify-between mx-auto items-center">
                    <img src={SearchIcon} className="w-4 p-4 text-whiteColor" alt="Icone de pesquisa" /> 
                    <span className="text-whiteColor font-semibold">Selecione um estado</span>
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
