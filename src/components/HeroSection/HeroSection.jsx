import { Brain, Medal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-blue-400 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Texto Principal */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Encontre profissionais qualificados e atualizados para apoiar seu filho!
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-10">
            Educadores e especialistas formados nas mentorias e cursos da <strong>Educar com Evidências</strong>, prontos para atuar com base na Ciência Cognitiva da Leitura.
          </p>
        </div>

        {/* Ilustração */}
        <div className="flex-1">
          <img
            src="/images/ilustracao-professor-crianca.png"
            alt="Professor auxiliando aluno na leitura"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Selos */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white text-gray-900 p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-4 mb-3">
            <Medal className="text-yellow-500" size={32} />
            <h3 className="font-semibold text-lg">Profissional em Atualização Contínua</h3>
          </div>
          <p className="text-sm text-gray-700">
            Participa da mentoria com o Dr. Gabriel Brito, discutindo casos e estudos científicos quinzenalmente em grupo multidisciplinar.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-gray-900 p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-4 mb-3">
            <Medal className="text-gray-400" size={32} />
            <h3 className="font-semibold text-lg">Profissional com Formação Ampla</h3>
          </div>
          <p className="text-sm text-gray-700">
            Concluiu diversos cursos da plataforma, demonstrando aprofundamento e comprometimento com a prática baseada em evidências.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-gray-900 p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-4 mb-3">
            <Brain className="text-blue-600" size={32} />
            <h3 className="font-semibold text-lg">Formação em Ciência Cognitiva da Leitura</h3>
          </div>
          <p className="text-sm text-gray-700">
            Participou dos cursos baseados na ciência da leitura, com domínio das práticas que mais ajudam crianças com dificuldades.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-white mb-4">
          Procure um profissional com os selos acima e garanta um acompanhamento de excelência.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition">
          🔍 Ver profissionais certificados
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
