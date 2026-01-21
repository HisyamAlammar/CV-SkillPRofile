const Projects = () => {
    const projects = [
        {
            title: "Personal Portfolio",
            description: "A dark-themed, interactive portfolio website built with React and Vite.",
            tags: ["React", "Vite", "CSS"],
            link: "#"
        },
        {
            title: "Task Management App",
            description: "A full-stack application to track daily tasks and productivity.",
            tags: ["Node.js", "Express", "MongoDB"],
            link: "#"
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather application using OpenWeatherMap API.",
            tags: ["JavaScript", "API", "HTML/CSS"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <div key={index} className="glass" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '200px', background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
                                {/* Placeholder for project image */}
                                [Project Preview]
                            </div>
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{project.title}</h3>
                                <p style={{ color: '#aaa', marginBottom: '1rem', flex: 1 }}>{project.description}</p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{ fontSize: '0.8rem', padding: '4px 8px', background: 'rgba(100, 108, 255, 0.1)', color: 'var(--accent-color)', borderRadius: '4px' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.link} className="btn-primary" style={{ textAlign: 'center', display: 'inline-block', width: '100%', textDecoration: 'none' }}>View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
