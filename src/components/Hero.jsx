import { useEffect, useState } from 'react';
import Lanyard from './Lanyard';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Machine Learning Engineer";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + fullText.charAt(index));
                setIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section id="home" className="section" style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px' // Offset for navbar
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                zIndex: -2,
                opacity: 0.5
            }}></div>
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(100,108,255,0.15) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(100,255,218,0.1) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                zIndex: -1
            }}></div>

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(300px, 1fr) 1fr',
                gap: '2rem',
                alignItems: 'center',
                width: '100%'
            }}>
                {/* Text Content (Left) */}
                <div className="animate-fade-in" style={{ textAlign: 'left', zIndex: 1 }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Hello, I'm</h2>
                    <h1 style={{ fontSize: '5rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1, background: 'linear-gradient(to right, #fff, #aaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Abyan Hisyam Al'ammar
                    </h1>
                    <h3 style={{ fontSize: '2rem', marginBottom: '2rem', fontFamily: 'var(--font-code)', minHeight: '3rem', color: '#ccc' }}>
                        {text}<span className="cursor">|</span>
                    </h3>
                    <p style={{ maxWidth: '600px', margin: '0 0 2rem 0', color: '#888', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Exploring the depths of Artificial Intelligence. <br />
                        Focusing on Machine Learning and Deep Learning.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                        <a href="#projects" className="btn btn-primary">View Work</a>
                        <a href="#contact" className="btn glass">Contact Me</a>
                    </div>

                    {/* Social Icons */}
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <a href="https://github.com/HisyamAlammar" target="_blank" rel="noreferrer" style={{ color: '#aaa', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#aaa'}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                        </a>
                        <a href="mailto:abyanhisyamm@gmail.com" style={{ color: '#aaa', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#aaa'}>
                            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Lanyard Graphic (Right) */}
                <div style={{
                    height: '600px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingTop: '0',
                    zIndex: 2,
                    // pointerEvents: 'none' // We need pointer events for the lanyard
                }}>
                    <div style={{ transform: 'scale(1)' }}>
                        <Lanyard />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator" style={{
                position: 'absolute',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'bounce 2s infinite',
                color: '#aaa',
                cursor: 'pointer'
            }} onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>

            <style>{`
        .cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
            40% {transform: translateY(-10px) translateX(-50%);}
            60% {transform: translateY(-5px) translateX(-50%);}
        }
        @media (max-width: 968px) {
            .container {
                grid-template-columns: 1fr !important;
                text-align: center !important;
            }
            .animate-fade-in {
                order: 2;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .animate-fade-in h1 {
                font-size: 3rem !important;
            }
             /* Lanyard container on mobile */
             div[style*="height: 600px"] {
                order: 1;
                height: 400px !important;
                margin-bottom: 2rem;
             }
        }
      `}</style>
        </section>
    );
};

export default Hero;
