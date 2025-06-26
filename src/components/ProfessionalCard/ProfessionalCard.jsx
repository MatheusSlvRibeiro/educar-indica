import PhoneIcon from '../../assets/images/phone-fill.svg';
import MapIcon from '../../assets/images/map-pin-2-fill.svg';
import professionals from "../../assets/data/Professionals.json";

// SVGs
import MedalGold from "../../assets/icons/dourada.png";

import MedalSilver1 from "../../assets/icons/prata-1.png";
import MedalSilver2 from "../../assets/icons/prata-2.png";
import MedalSilver3 from "../../assets/icons/prata-3.png";

const getSilverMedalIcon = (level) => {
  switch (level) {
    case 1:
      return MedalSilver1;
    case 2:
      return MedalSilver2;
    case 3:
      return MedalSilver3;
    default:
      return null;
  }
};

const ProfessionalList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto gap-6">
      {professionals.map((prof, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 justify-center shadow-md flex items-center gap-4 max-w-xl"
        >
          <img
            src={prof.photo}
            alt={prof.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">
              {prof.name}
            </h2>
            <p className="text-gray-600 text-sm mt-1">{prof.description}</p>

            <div className="flex flex-row justify-between mt-4">
              <div className="space-y-1 text-gray-700 text-sm">
                <div className="flex items-center gap-2">
                  <img src={MapIcon} alt="Localização" className="w-4 h-4" />
                  <span className="font-medium text-gray-800">{prof.city}</span>
                </div>

                <div className="flex items-center gap-2">
                  <img src={PhoneIcon} alt="Telefone" className="w-4 h-4" />
                  <span className="font-medium text-gray-800">{prof.phone}</span>
                </div>
              </div>

              <div className="flex flex-row gap-2 items-center">
                {prof.mentoriaAvancada && (
                  <img
                    src={MedalGold}
                    alt="Mentoria Avançada"
                    className="w-16 h-16"
                  />
                )}

                {getSilverMedalIcon(prof.formacaoAmplaNivel) && (
                  <img
                    src={getSilverMedalIcon(prof.formacaoAmplaNivel)}
                    alt={`Formação nível ${prof.formacaoAmplaNivel}`}
                    className="w-16 h-16"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalList;
