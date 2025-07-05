import { useState } from 'react';
import logo from '../../assets/images/LogoA.svg';

const menuItems = [
    { label: 'Home', href: 'https://www.educarcomevidencias.com/' },
    { label: 'Blog', href: 'https://www.educarcomevidencias.com/blog' },
    { label: 'Cursos', href: 'https://www.educarcomevidencias.com/cursos' },
    { label: 'Educar Indica', href: '/' },
    { label: 'Área do Aluno', href: 'https://portal.educarcomevidencias.com/auth/login?redirect=%2F' },
    { label: 'Loja', href: 'https://www.educarcomevidencias.com/loja' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <div
            style={{ boxShadow: '0 3px 5px rgba(0, 0, 0, 0.3)' }}
            className="bg-[#082862] fixed w-full z-50"
        >
            <nav className="flex items-center justify-between p-4 mx-auto max-w-[1200px]">
                
                <div>
                    <img className="w-[10rem]" src={logo} alt="Logo Educar com Evidências" />
                </div>

                <ul className="hidden md:flex flex-row">
                    {menuItems.map(({ label, href }, index) => (
                        <li key={index}>
                            <a
                                href={href}
                                target={href.startsWith('http') ? '_self' : undefined}
                                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="relative text-whiteColor font-medium mx-4 transition-colors duration-300 ease-in-out hover:text-second after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-second after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Abrir menu" className="text-whiteColor">
                        {!isMenuOpen ? (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            <div
                className={`fixed top-0 right-0 h-full w-[70%] max-w-xs bg-[#082862] transition-transform duration-300 z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col p-6 gap-6">
                    {menuItems.map(({ label, href }, index) => (
                        <a
                            key={index}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-whiteColor text-lg font-medium border-b border-whiteColor pb-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default Navbar;
