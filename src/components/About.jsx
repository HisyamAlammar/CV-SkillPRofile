const About = () => {


    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '4rem' }}>

                    {/* Text Content */}
                    <div className="animate-fade-in" style={{ flex: '1 1 300px', maxWidth: '800px', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            I am an Informatics Engineering student passionate about Artificial Intelligence.
                            My journey involves diving deep into Machine Learning algorithms, Deep Learning architectures, and Neural Networks.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#aaa' }}>
                            I enjoy turning data into insights and building intelligent systems that solve complex problems.
                            When I'm not training models, you'll find me reading research papers or exploring new AI tools.
                        </p>

                        <div style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem', justifyContent: 'center' }}>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>2+</h3>
                                <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Years Exp.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>10+</h3>
                                <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Projects</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
