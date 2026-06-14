const About = () => {
    return (
        <section id="about" className="section" style={{ position: 'relative' }}>
            {/* Background enhancement */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(100,108,255,0.05) 0%, transparent 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>

            <div className="container">
                <h2 className="section-title" style={{ marginBottom: '3rem' }}>About Me</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                    {/* Intro Text */}
                    <div className="animate-fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', lineHeight: '1.8', color: '#eee' }}>
                            I am an <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Informatics student</span> and product-minded developer who enjoys building systems across AI, backend engineering, automation, and Web3.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#aaa', lineHeight: '1.7', maxWidth: '750px', margin: '0 auto' }}>
                            My work includes clinical decision support systems, AI-powered backend services, on-chain applications, automation workflows, and full-stack web platforms. I like exploring how software can turn complex ideas into practical, usable products.
                        </p>
                    </div>

                    {/* What I Do Cards */}
                    <h3 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '2rem', color: '#fff' }}>What I Do</h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '4rem'
                    }}>
                        {/* Card 1: AI Systems */}
                        <div className="glass" style={{ padding: '2rem', textAlign: 'left', transition: 'transform 0.3s', cursor: 'default' }}
                            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 0-2 2v1a2 2 0 0 1-2 2h-2v1.27c.6.34 1 .99 1 1.73a2 2 0 0 1-4 0c0-.74.4-1.39 1-1.73V17H9a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2 2 2 0 0 0 2-2V9a2 2 0 0 1 2-2h2V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
                                </svg>
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#fff' }}>AI Systems</h4>
                            <p style={{ fontSize: '0.95rem', color: '#aaa', lineHeight: '1.6' }}>
                                Building AI-powered applications using LLMs, RAG, multi-agent workflows, and machine learning models.
                            </p>
                        </div>

                        {/* Card 2: Backend Engineering */}
                        <div className="glass" style={{ padding: '2rem', textAlign: 'left', transition: 'transform 0.3s', cursor: 'default' }}
                            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                                </svg>
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#fff' }}>Backend Engineering</h4>
                            <p style={{ fontSize: '0.95rem', color: '#aaa', lineHeight: '1.6' }}>
                                Designing APIs, authentication, databases, and scalable backend services for real-world applications.
                            </p>
                        </div>

                        {/* Card 3: Web3 Applications */}
                        <div className="glass" style={{ padding: '2rem', textAlign: 'left', transition: 'transform 0.3s', cursor: 'default' }}
                            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                </svg>
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#fff' }}>Web3 Applications</h4>
                            <p style={{ fontSize: '0.95rem', color: '#aaa', lineHeight: '1.6' }}>
                                Building blockchain-integrated products, smart contract interactions, and on-chain verification systems.
                            </p>
                        </div>

                        {/* Card 4: Automation Workflows */}
                        <div className="glass" style={{ padding: '2rem', textAlign: 'left', transition: 'transform 0.3s', cursor: 'default' }}
                            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 3 21 3 21 8"></polyline>
                                    <line x1="4" y1="20" x2="21" y2="3"></line>
                                    <polyline points="21 16 21 21 16 21"></polyline>
                                    <line x1="15" y1="15" x2="21" y2="21"></line>
                                    <line x1="4" y1="4" x2="9" y2="9"></line>
                                </svg>
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#fff' }}>Automation Workflows</h4>
                            <p style={{ fontSize: '0.95rem', color: '#aaa', lineHeight: '1.6' }}>
                                Creating workflow automation using n8n, Google Sheets, Telegram bots, AI APIs, and structured data pipelines.
                            </p>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="stats-container" style={{ display: 'flex', gap: '4rem', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '0rem', fontWeight: 'bold' }}>2+</h3>
                            <p style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Years Building</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '0rem', fontWeight: 'bold' }}>10+</h3>
                            <p style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Projects Built</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '0rem', fontWeight: 'bold' }}>3+</h3>
                            <p style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Achievements</p>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .stats-container {
                        gap: 1.5rem !important;
                        flex-wrap: wrap;
                        justify-content: space-around !important;
                    }
                    .stats-container h3 {
                        font-size: 2rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
