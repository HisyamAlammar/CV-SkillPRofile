import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}
            style={{
                position: 'fixed',
                width: '100%',
                top: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease',
                padding: scrolled ? '15px 0' : '25px 0',
                backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
            }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                <a href="#" className="logo" style={{ fontWeight: 'bold', fontFamily: 'var(--font-code)', zIndex: 1001 }}>
                    &lt;Abyan Hisyam /&gt;
                </a>

                {/* Desktop Menu */}
                <ul className="desktop-menu" style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} style={{ fontSize: '1rem', fontWeight: 500 }} className="hover:text-accent">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu" style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer',
                    zIndex: 1001
                }}>
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`} style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: '#0a0a0a',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                    transition: 'transform 0.3s ease-in-out',
                    transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
                    zIndex: 1000
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', textDecoration: 'none' }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            <style>{`
                .logo {
                    font-size: 1.5rem;
                }
                .desktop-menu {
                    display: flex !important;
                }
                .mobile-toggle {
                    display: none !important;
                }
                .mobile-menu {
                    display: none !important; /* Hide completely on desktop to avoid interaction */
                }

                @media (max-width: 768px) {
                    .logo {
                        font-size: 1.1rem !important; /* Smaller logo on mobile */
                    }
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: block !important;
                    }
                    .mobile-menu {
                        display: flex !important; /* Enable flex for layout, visibility handled by transform */
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
