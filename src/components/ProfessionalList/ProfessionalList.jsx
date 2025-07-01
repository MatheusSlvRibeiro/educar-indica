import PhoneIcon from "../../assets/images/phone-fill.svg";
import MapIcon from "../../assets/images/map-pin-2-fill.svg";
import professionals from "../../assets/data/Professionals.json";

import MedalGoldA from "../../assets/icons/ouro-a.png";
import MedalGoldB from "../../assets/icons/ouro-b.png";
import MedalGoldI from "../../assets/icons/ouro-i.png";

import MedalSilver1 from "../../assets/icons/prata-1.png";
import MedalSilver2 from "../../assets/icons/prata-2.png";
import MedalSilver3 from "../../assets/icons/prata-3.png";

const extractState = (local) => {
    const match = local.toUpperCase().match(/\/([A-Z]{2})/);
    return match ? match[1] : null;
};

const ProfessionalList = ({ selectedState }) => {
    const filteredProfessionals = selectedState
        ? professionals.filter((prof) => extractState(prof.local) === selectedState)
        : professionals;

    const getMedalhaOuroImage = (tipo) => {
        switch (tipo) {
            case "a":
                return MedalGoldA;
            case "b":
                return MedalGoldB;
            case "i":
                return MedalGoldI;
            default:
                return null;
        }
    };

    const getMedalhaPrataImage = (nivel) => {
        switch (nivel) {
            case "1":
                return MedalSilver1;
            case "2":
                return MedalSilver2;
            case "3":
                return MedalSilver3;
            default:
                return null;
        }
    };

    return (
        <div className="max-w-[1200px] mx-auto py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredProfessionals.map((prof, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 flex flex-col mx-6 sm:mx-auto sm:flex-row shadow-xl items-center gap-4 max-w-xl">
                        <img
                            src={prof.foto || "/images/default-profile.png"}
                            alt={prof.nome}
                            className="w-[120px] h-[120px] rounded-full object-cover" />

                        <div className="flex-1 items-center">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {prof.nome}
                            </h2>
                            <p className="text-gray-600 text-sm mt-1">{prof.descricao}</p>

                            <div className="flex flex-row justify-between mt-4 items-center">
                                <div className="space-y-1 text-gray-700 text-sm">
                                    <div className="flex items-center gap-2">
                                        <img src={MapIcon} alt="Localização" className="w-4 h-4" />
                                        <span className="font-medium text-gray-800">{prof.local}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <img src={PhoneIcon} alt="Telefone" className="w-4 h-4" />
                                        <span className="font-medium text-gray-800">{prof.telefone}</span>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-2 items-center">
                                    {getMedalhaOuroImage(prof.medalhaOuro) && (
                                        <img
                                            src={getMedalhaOuroImage(prof.medalhaOuro)}
                                            alt={`Medalha de Ouro ${prof.medalhaOuro}`}
                                            className="w-16 h-16"
                                        />
                                    )}
                                    {getMedalhaPrataImage(prof.medalhaPrata) && (
                                        <img
                                            src={getMedalhaPrataImage(prof.medalhaPrata)}
                                            alt={`Medalha de Prata ${prof.medalhaPrata}`}
                                            className="w-16 h-16"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfessionalList;
