const Skills = () => {
    const skills = [
        {
            name: "HTML",
            level: "90%",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
            description: "Mampu membuat struktur website yang semantik, aksesibel, dan teroptimasi untuk SEO."
        },
        {
            name: "CSS",
            level: "85%",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
            description: "Mahir dalam layouting (Flexbox, Grid), animasi, dan desain responsif untuk berbagai perangkat."
        },
        {
            name: "JavaScript",
            level: "80%",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
            description: "Memahami konsep ES6+, DOM manipulation, dan asynchronous programming untuk website interaktif."
        },
        {
            name: "React",
            level: "75%",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            description: "Berpengalaman membangun SPA dengan Hooks, state management, dan component-based architecture."
        },
        {
            name: "Node.js",
            level: "70%",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
            description: "Bisa membuat REST API sederhana dan menangani logic backend menggunakan Express.js."
        },
        {
            name: "Python",
            level: "95%",
            logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
            description: "Bahasa utama untuk pengembangan AI/ML. Mahir dalam data manipulation (Pandas, NumPy) dan scripting."
        },
        {
            name: "TensorFlow",
            level: "85%",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
            description: "Membangun dan melatih neural networks untuk computer vision dan NLP task."
        },
        {
            name: "PyTorch",
            level: "80%",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png",
            description: "Framework pilihan untuk riset Deep Learning, custom architecture, dan prototyping model."
        },
        {
            name: "Scikit-Learn",
            level: "90%",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
            description: "Implementasi algoritma ML klasik (Regression, Classification, Clustering) untuk analisis data."
        },
        {
            name: "SQL",
            level: "75%",
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
            description: "Mampu merancang database relasional dan menulis query kompleks untuk manajemen data."
        },
        {
            name: "Git",
            level: "85%",
            logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
            description: "Terbiasa menggunakan version control untuk kolaborasi tim dan manajemen kode source."
        }
    ];


    // Duplicate skills for seamless infinite scroll
    const allSkills = [...skills, ...skills];

    return (
        <section id="skills" className="section" style={{ background: 'var(--secondary-bg)' }}>
            <div className="container" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                <h2 className="section-title">My Skills</h2>
                <div className="scroll-wrapper">
                    <div className="scroll-container">
                        {allSkills.map((skill, index) => (
                            <div key={`${skill.name}-${index}`} className="flip-card" style={{ flex: '0 0 auto', width: '280px' }}>
                                <div className="flip-card-inner">
                                    {/* Front Side */}
                                    <div className="flip-card-front">
                                        <img src={skill.logo} alt={`${skill.name} Logo`} className="skill-logo" />
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{skill.name}</h3>
                                        <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                                            <div style={{
                                                width: skill.level,
                                                height: '100%',
                                                background: 'var(--accent-color)',
                                                borderRadius: '4px'
                                            }}></div>
                                        </div>
                                        <span style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#aaa' }}>{skill.level} Proficiency</span>
                                    </div>

                                    {/* Back Side */}
                                    <div className="flip-card-back">
                                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>{skill.name}</h3>
                                        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                            {skill.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
