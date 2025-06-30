import FacebookIcon from '../../assets/icons/socialMedia/facebook-circle-fill.svg'
import InstagramIcon from '../../assets/icons/socialMedia/instagram-line.svg'
import YoutubeIcon from '../../assets/icons/socialMedia/youtube-fill.svg'

import LogoEducar from '../../assets/images/LogoB.svg'

const Footer = () => {
    return (
        <footer className="bg-white text-primary">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 md:gap-0 bottom-0  py-10">

                {/* Logo e Contato */}
                <div className="flex flex-col gap-6">
                    <img
                        src={LogoEducar}
                        alt="Educar com Evidências"
                        className="w-40"
                    />
                    <div>
                        <h3 className="font-semibold mb-2 text-primary">Contato</h3>
                        <a
                            href="mailto:contato@educarcomevidencias.com"
                            className="text-primary hover:underline"
                        >
                            contato@educarcomevidencias.com
                        </a>
                    </div>
                    <div className="flex gap-4 mt-4 text-primary text-xl">
                        <a
                            href="https://www.youtube.com/@educarcomevidencias"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <img src={YoutubeIcon} className='text-red-700' alt="Youtube" />
                        </a>
                        <a
                            href="https://www.instagram.com/drgabriel.brito"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <img src={InstagramIcon} alt="Instagram" />
                        </a>
                        <a
                            href="https://www.facebook.com/projetoeducarcomevidencias"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <img src={FacebookIcon} alt="Facebook" />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-4 md:w-1/3">
                    <h3 className="font-semibold mb-2 text-primary">Links</h3>
                    <a
                        href="https://espacocume.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-primary font-normal "
                    >
                        Espaço CUME
                    </a>
                    <a
                        href="/politica-de-privacidade"
                        className="hover:underline text-primary font-normal"
                    >
                        Política de privacidade
                    </a>
                    <a
                        href="/termos-e-condicoes"
                        className="hover:underline text-primary font-normal"
                    >
                        Termos & Condições
                    </a>
                    <a
                        href="https://www.facebook.com/omundodogabs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-primary font-normal"
                    >
                        O Mundo do Gabs
                    </a>
                </div>
            </div>

            {/* Rodapé inferior */}
            <div className="bg-[#012346] text-white text-center py-8 font-light flex items-center justify-center gap-3">
                <span>
                    ©2025 Todos os direitos reservados -  Educar com Evidências LTDA | CNPJ 48.785.041/0001-67
                </span>
            </div>
        </footer>
    );
};

export default Footer;
