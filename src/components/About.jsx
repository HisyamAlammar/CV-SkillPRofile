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
                            I am an <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Informatics Engineering student</span> passionate about bridging the gap between complex AI logic and user-friendly web applications.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#aaa', lineHeight: '1.7', maxWidth: '750px', margin: '0 auto' }}>
                            My journey involves diving deep into Machine Learning algorithms, Deep Learning architectures, and Neural Networks, while maintaining the engineering rigour to deploy them as scalable products.
                        </p>
                    </div>

                    {/* What I Do Cards */}
                    <h3 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '2rem', color: '#fff' }}>What I Do</h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '4rem'
                    }}>
                        {/* Card 1: AI & ML */}
                        <div className="glass" style={{ padding: '2rem', textAlign: 'left', transition: 'transform 0.3s', cursor: 'default' }}
                            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V11a2 2 0 0 1-2 2H9a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2a2 2 0 0 1-2-2V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
                                    <circle cx="12" cy="2" r="2"></circle>
                                    <path d="M22 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0"></path>
                                    <path d="M8 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0"></path>
                                </svg>
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#fff' }}>AI & Machine Learning</h4>
                            <p style={{ fontSize: '0.95rem', color: '#aaa', lineHeight: '1.6' }}>
                                Building intelligent systems using PyTorch & TensorFlow. Specialized in Computer Vision, Pattern Recognition, and Deep Learning architectures.
                            </p>
                        </div>

                        {/* Card 2: Data Science */}
                        <div className="glass" style={{ padding: '2rem', textAlign: 'left', transition: 'transform 0.3s', cursor: 'default' }}
                            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                </svg>
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#fff' }}>Data Science</h4>
                            <p style={{ fontSize: '0.95rem', color: '#aaa', lineHeight: '1.6' }}>
                                Turning raw data into actionable insights. Proficient in Python, Pandas, NumPy, and advanced Data Visualization techniques.
                            </p>
                        </div>

                        {/* Card 3: Web Integration */}
                        <div className="glass" style={{ padding: '2rem', textAlign: 'left', transition: 'transform 0.3s', cursor: 'default' }}
                            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#fff' }}>Full-Stack Integration</h4>
                            <p style={{ fontSize: '0.95rem', color: '#aaa', lineHeight: '1.6' }}>
                                Deploying AI models into seamless web applications. Expert in React, Next.js, and integrating Python backends with modern frontends.
                            </p>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '0rem', fontWeight: 'bold' }}>2+</h3>
                            <p style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Years Exp.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '0rem', fontWeight: 'bold' }}>10+</h3>
                            <p style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Projects</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '0rem', fontWeight: 'bold' }}>5+</h3>
                            <p style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Happy Clients</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
