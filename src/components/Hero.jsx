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
                gridTemplateColumns: '1fr 1fr',
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
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#projects" className="btn btn-primary">View Work</a>
                        <a href="#contact" className="btn glass">Contact Me</a>
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

            <style>{`
        .cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
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
