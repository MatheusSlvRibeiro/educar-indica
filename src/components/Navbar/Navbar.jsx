import logo from '../../assets/images/LogoA.svg'

const Navbar = () => {
      return (
            <div 
                  style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)' }}
                  className='bg-[#012346] fixed w-full'>
                  <nav className="navbar flex flex-row items-center justify-between p-4 mx-auto max-w-[1200px]">
                        <div className="navbar-logo">
                              <img
                                    className='w-[10rem]'
                                    src={logo}
                                    alt="Logo Educar com evidências" />
                        </div>

                        <ul className="navbar-links flex flex-row">
                              <li><a
                                    className="relative text-whiteColor font-medium mx-4 transition-colors duration-300 ease-in-out hover:text-second after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-second after:transition-all after:duration-300 hover:after:w-full"
                                    href="#home">Home</a></li>
                              <li><a
                                    className="relative text-whiteColor font-medium mx-4 transition-colors duration-300 ease-in-out hover:text-second after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-second after:transition-all after:duration-300 hover:after:w-full" href="#features">Blog</a></li>
                              <li><a
                                    className="relative text-whiteColor font-medium mx-4 transition-colors duration-300 ease-in-out hover:text-second after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-second after:transition-all after:duration-300 hover:after:w-full" href="#pricing">Cursos</a></li>
                              <li><a
                                    className="relative text-whiteColor font-medium mx-4 transition-colors duration-300 ease-in-out hover:text-second after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-second after:transition-all after:duration-300 hover:after:w-full" href="#about">Educar Indica</a></li>
                              <li><a
                                    className="relative text-whiteColor font-medium mx-4 transition-colors duration-300 ease-in-out hover:text-second after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-second after:transition-all after:duration-300 hover:after:w-full"
                                    href="#about">Área do Aluno</a></li>
                              <li><a
                                    className="relative text-whiteColor font-medium mx-4 transition-colors duration-300 ease-in-out hover:text-second after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-second after:transition-all after:duration-300 hover:after:w-full" href="#about">Loja</a></li>
                        </ul>
                  </nav>
            </div>
      );
};

export default Navbar;