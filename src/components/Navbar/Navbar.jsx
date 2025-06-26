import logo from '../../assets/images/LogoA.svg'

const Navbar = () => {
      return (
            <div className='bg-primary'>
                  <nav className="navbar flex flex-row items-center justify-between p-6 mx-auto max-w-[1200px]">
                        <div className="navbar-logo">
                              <img
                                    className='w-[12rem]'
                                    src={logo}
                                    alt="Logo Educar com evidências" />
                        </div>

                        <ul className="navbar-links flex flex-row">
                              <li><a
                                    className="text-whiteColor font-medium hover:text-second px-4"
                                    href="#home">Home</a></li>
                              <li><a
                                    className="text-whiteColor font-medium hover:text-second px-4" href="#features">Blog</a></li>
                              <li><a
                                    className="text-whiteColor font-medium hover:text-second px-4" href="#pricing">Cursos</a></li>
                              <li><a
                                    className="text-whiteColor font-medium hover:text-second px-4" href="#about">Educar Indica</a></li>
                              <li><a
                                    className="text-whiteColor font-medium hover:text-second px-4"
                                    href="#about">Área do Aluno</a></li>
                              <li><a
                                    className="text-whiteColor font-medium hover:text-second px-4" href="#about">Loja</a></li>
                        </ul>
                  </nav>
            </div>
      );
};

export default Navbar;