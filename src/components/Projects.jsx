import elegantFashionImg from '../assets/elegant-fashion.png';
import rentalIqraImg from '../assets/rental-iqra.png';
import capitalSenseImg from '../assets/capital-sense.png';
import lungsNetImg from '../assets/lungsnet.png';

const Projects = () => {

    const projects = [
        {
            title: "LungsNet: Smart Radiologist",
            description: "AI-powered CAD system for detecting Pneumonia from X-Ray images using Deep Learning and Explainable AI (XAI) for visual transparency.",
            tags: ["Python", "Deep Learning", "Computer Vision", "XAI"],
            link: "https://github.com/HisyamAlammar/LungsNet",
            image: lungsNetImg
        },
        {
            title: "Capital Sense",
            description: "Intelligent stock evaluation platform combining Fundamental, Technical, and Sentiment analysis (NLP) for smart investment decisions.",
            tags: ["Python", "NLP", "Machine Learning", "Finance"],
            link: "https://capitalsense.up.railway.app/market",
            image: capitalSenseImg
        },
        {
            title: "Rental Mobil Iqra",
            description: "Full-stack digital car rental platform featuring real-time availability, booking management, and a responsive React frontend.",
            tags: ["React", "Laravel (PHP)", "MySQL", "Bootstrap"],
            link: "https://github.com/HisyamAlammar/Website-RentalIqra",
            image: rentalIqraImg
        },
        {
            title: "Elegant Fashion",
            description: "Modern e-commerce platform built with Next.js 16 and Tailwind v4, featuring server-side rendering, responsive design, and real-time cart management.",
            tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
            link: "https://github.com/HisyamAlammar/Shopping-Website",
            image: elegantFashionImg
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <div key={index} className="glass" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '200px', background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', overflow: 'hidden' }}>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                ) : (
                                    <span>[Project Preview]</span>
                                )}
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
