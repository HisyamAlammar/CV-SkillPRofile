import { useEffect, useState, useRef } from 'react';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const skillCategories = [
        {
            category: "AI & Machine Learning",
            area: "ai",
            primary: true,
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 0-2 2v1a2 2 0 0 1-2 2h-2v1.27c.6.34 1 .99 1 1.73a2 2 0 0 1-4 0c0-.74.4-1.39 1-1.73V17H9a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2 2 2 0 0 0 2-2V9a2 2 0 0 1 2-2h2V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
                </svg>
            ),
            skills: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "RAG", "AI Agents", "Prompt Engineering"]
        },
        {
            category: "Web3",
            area: "web3",
            primary: false,
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
            ),
            skills: ["Solidity", "Foundry", "Ethers.js", "go-ethereum", "Monad Testnet", "Polygon Amoy"]
        },
        {
            category: "Automation",
            area: "auto",
            primary: false,
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 3 21 3 21 8"></polyline>
                    <line x1="4" y1="20" x2="21" y2="3"></line>
                    <polyline points="21 16 21 21 16 21"></polyline>
                    <line x1="15" y1="15" x2="21" y2="21"></line>
                    <line x1="4" y1="4" x2="9" y2="9"></line>
                </svg>
            ),
            skills: ["n8n", "Google Sheets API", "Telegram Bot", "PDF Generation", "AI API Integration"]
        },
        {
            category: "Backend Engineering",
            area: "backend",
            primary: true,
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
            ),
            skills: ["FastAPI", "Laravel", "Node.js", "Express.js", "Go Fiber", "REST API", "Authentication"]
        },
        {
            category: "Database & Infrastructure",
            area: "db",
            primary: false,
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
            ),
            skills: ["PostgreSQL", "MySQL", "Redis", "Docker", "Railway", "Vercel", "GitHub Actions"]
        }
    ];

    return (
        <section id="skills" className="section" style={{ background: 'var(--secondary-bg)' }} ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="bento-grid">
                    {skillCategories.map((cat, index) => (
                        <div
                            key={cat.category}
                            className={`bento-card glass ${cat.primary ? 'bento-card--primary' : ''} ${isVisible ? 'bento-card--visible' : ''}`}
                            style={{
                                gridArea: cat.area,
                                transitionDelay: isVisible ? `${index * 0.1}s` : '0s'
                            }}
                        >
                            <div className="bento-card-header">
                                <div className="bento-card-icon">
                                    {cat.icon}
                                </div>
                                <h3 className="bento-card-title">{cat.category}</h3>
                            </div>
                            <div className="bento-tags">
                                {cat.skills.map(skill => (
                                    <span key={skill} className="bento-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
