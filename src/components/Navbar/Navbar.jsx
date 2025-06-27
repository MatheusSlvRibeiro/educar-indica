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
                                    href="https://www.educarcomevidencias.com/" 
                                    rel='noopener noreferrer'>Home</a></li>
                              <li><a
                                    className="text-whiteColor font-medium hover:text-second px-4" href="https://www.educarcomevidencias.com/blog" 
                                    rel='noopener noreferrer'>Blog</a></li>
                              <li><a
                                    className="text-whiteColor font-medium hover:text-second px-4" href="https://www.educarcomevidencias.com/cursos" 
                                    rel='noopener noreferrer'>Cursos</a></li>
                              <li><a
                                    className="text-whiteColor font-medium hover:text-second px-4" 
                                    href="/" 
                                    rel='noopener noreferrer'>Educar Indica</a></li>
                              <li><a
                                    className="text-whiteColor font-medium hover:text-second px-4"
                                    href="https://portal.educarcomevidencias.com/auth/login?redirect=%2F" 
                                    rel='noopener noreferrer'>Área do Aluno</a></li>
                              <li><a
                                    className="text-whiteColor font-medium hover:text-second px-4" href="https://www.educarcomevidencias.com/loja" 
                                    rel='noopener noreferrer'>Loja</a></li>
                        </ul>
                  </nav>
            </div>
      );
};

export default Navbar;