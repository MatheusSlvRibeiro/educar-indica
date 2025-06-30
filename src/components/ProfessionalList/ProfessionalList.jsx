import React from "react";
import PhoneIcon from "../../assets/images/phone-fill.svg";
import MapIcon from "../../assets/images/map-pin-2-fill.svg";
import professionals from "../../assets/data/Professionals.json";
import MedalGold from "../../assets/icons/dourada.png";
import MedalSilver1 from "../../assets/icons/prata-1.png";

const extractState = (local) => {
    const match = local.toUpperCase().match(/\/([A-Z]{2})/);
    return match ? match[1] : null;
};

const ProfessionalList = ({ selectedState }) => {
    const filteredProfessionals = selectedState
        ? professionals.filter((prof) => extractState(prof.local) === selectedState)
        : professionals;

    return (
        <div className="max-w-[1200px] mx-auto py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProfessionals.map((prof, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 flex shadow-xl items-center gap-4 max-w-xl"
                    >
                        <img
                            src={prof.foto || "/images/default-profile.png"}
                            alt={prof.nome}
                            className="w-[120px] h-[120px] rounded-full object-cover"
                        />

                        <div className="flex-1 items-center">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {prof.nome}
                            </h2>
                            <p className="text-gray-600 text-sm mt-1">{prof.descricao}</p>

                            <div className="flex flex-row justify-between mt-4">
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
                                    {prof.medalhaOuro && (
                                        <img
                                            src={MedalGold}
                                            alt="Medalha de Ouro"
                                            className="w-12 h-12"
                                        />
                                    )}
                                    {prof.medalhaPrata && (
                                        <img
                                            src={MedalSilver1}
                                            alt="Medalha de Prata"
                                            className="w-12 h-12"
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
