import Link from 'next/link';
import Logo from '../common/Logo';
import { useEffect } from 'react';
import MobileMenu from './MobileMenu';

const Header3 = ({headerSetting = {}}) => {      
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });           
    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.uni-header-navbar');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('uk-sticky-fixed') : header.classList.remove('uk-sticky-fixed');
    };

    const mystyle = {
        marginBottom: "10px",
      };
      
    return (
        <>     
        {/* <MobileMenu/> */}
         <header className="header uni-header uk-position-top uni-header-3">
                <div className="uni-header-navbar" data-uk-sticky="top: 70; show-on-up: false; animation: uk-animation-slide-top">
                    <div className="uk-container">
                        <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                            <div className="uk-navbar-top">
                                <div className="uk-navbar-left uk-flex-1@m">
                                    <ul className="uk-navbar-nav uk-text-uppercase dark:uk-text-gray-10 uk-visible@m" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 40" data-uk-navbar-bound>
                                        <li><a href="#uni_venom">Venom</a></li>
                                        <li><a href="#uni_about">About</a></li>
                                        <li><a href="science"><span className="uk-text-gradient">Science</span></a></li>
                                        <li><a href="#uni_roadmap">Roadmap</a></li>
                                    </ul>
                                </div>

                                <div style={mystyle} className="uk-navbar-center">
                                    <Link className="uk-logo uk-navbar-item uk-h4 uk-h3@m uk-margin-remove" href="/"> 
                                    {/* <Logo/>  */}
                                    </Link>
                                </div>

                                <div className="uk-navbar-right uk-flex-1 uk-flex-right">
                                    <div className="uk-navbar-item uk-visible@m">
                                        <ul className="uk-subnav uk-subnav-small">
                                            <li>
                                                <Link href="https://twitter.com/"><i className="uk-icon uk-icon-medium unicon-logo-twitter"></i></Link>
                                            </li>
                                            <li>
                                                <a href="https://discord.com/"><i className="uk-icon uk-icon-medium unicon-logo-discord"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://instagram.com/"><i className="uk-icon uk-icon-medium unicon-logo-instagram"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://facebook.com/"><i className="uk-icon uk-icon-medium unicon-logo-facebook"></i></a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="uk-navbar-item uk-hidden@m">
                                        <a href="#uni_mobile_menu" data-uk-toggle="">
                                            <i className="uk-icon uk-icon-medium unicon-menu"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>          
        </>
    );
};
export default Header3;