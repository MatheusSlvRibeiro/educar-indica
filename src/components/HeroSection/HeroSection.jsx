import image from "../../assets/images/ilustracao-professor-crianca.png";
import SealCard from "../../components/sealCard/sealCard";
import seals from "../../assets/data/seals.json";
import professionals from "../../assets/data/Professionals.json";

const stateNames = {
    AC: "Acre", AL: "Alagoas", AP: "Amapá", AM: "Amazonas", BA: "Bahia",
    CE: "Ceará", DF: "Distrito Federal", ES: "Espírito Santo", GO: "Goiás",
    MA: "Maranhão", MT: "Mato Grosso", MS: "Mato Grosso do Sul", MG: "Minas Gerais",
    PA: "Pará", PB: "Paraíba", PR: "Paraná", PE: "Pernambuco", PI: "Piauí",
    RJ: "Rio de Janeiro", RN: "Rio Grande do Norte", RS: "Rio Grande do Sul",
    RO: "Rondônia", RR: "Roraima", SC: "Santa Catarina", SP: "São Paulo",
    SE: "Sergipe", TO: "Tocantins"
};

const extractState = (city) => {
    const match = city.toUpperCase().match(/\/([A-Z]{2})/);
    return match ? match[1] : null;
};

const HeroSection = ({ selectedState, setSelectedState }) => {
    const availableStates = Array.from(
        new Set(
            professionals
                .map((prof) => extractState(prof.local))
                .filter((state) => !!state)
        )
    ).sort();

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

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
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

                <div className="mt-6">
                    <label htmlFor="stateFilter" className="block mb-2 text-white font-medium">
                        Selecione um estado:
                    </label>
                    <select
                        id="stateFilter"
                        value={selectedState || ""}
                        onChange={(e) => setSelectedState(e.target.value || null)}
                        className="w-full max-w-xs border border-white rounded px-4 py-2 text-gray-800"
                    >
                        <option className="text-gray-800" value="">Todos os estados</option>
                        {availableStates.map((uf) => (
                            <option className="text-gray-800" key={uf} value={uf}>
                                {stateNames[uf] || uf}
                            </option>
                        ))}
                    </select>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
