import { useEffect, useState, useRef } from 'react';
import lungsNetImg from '../assets/lungsnet.png';
import capitalSenseImg from '../assets/capital-sense.png';
import elegantFashionImg from '../assets/elegant-fashion.png';
import rentalIqraImg from '../assets/rental-iqra.png';
import n8nWorkflowImg from '../assets/n8n-workflow.png';
import attestaImg from '../assets/attesta.png';
import nemosImg from '../assets/nemos.png';
import cdssImg from '../assets/cdss-keperawatan.png'; 

const Projects = () => {
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    
    // Track image errors to fallback to gradient placeholders cleanly
    const [imgError, setImgError] = useState({});
    const [otherImgError, setOtherImgError] = useState({});

    const featuredProjects = [
        {
            title: "CDSS AI Keperawatan",
            subtitle: "Agentic Clinical Decision Support System",
            description: "Multi-agent AI backend for nursing diagnosis support, combining RAG, clinical knowledge bases, PII sanitization, and audit logging.",
            role: "Backend & AI Integration Engineer",
            tags: ["FastAPI", "LangChain", "PostgreSQL", "Docker", "RAG", "AI Agents"],
            status: "Ongoing Research",
            image: cdssImg,
            alt: "Screenshot of CDSS AI Keperawatan clinical decision support platform",
            githubUrl: "",
            liveUrl: "",
            caseStudyUrl: ""
        },
        {
            title: "NEMOS",
            subtitle: "Web3 Revenue-Based Financing for MSMEs",
            description: "A financing platform for MSMEs with payment integration, AI receipt OCR, and immutable audit trail for transparent business verification.",
            role: "Backend Developer & AI Engineer",
            tags: ["Node.js", "TypeScript", "FastAPI", "Xendit", "PostgreSQL", "AI Vision", "Web3"],
            status: "In Development",
            image: nemosImg,
            alt: "Screenshot of NEMOS platform landing page",
            githubUrl: "",
            liveUrl: "https://nemos-three.vercel.app/",
            caseStudyUrl: ""
        },
        {
            title: "Attesta",
            subtitle: "AI-Powered On-Chain Skill Verification",
            description: "A platform that analyzes user skills with AI and records verification results through on-chain attestation, built during Monad Blitz Jogja.",
            role: "Backend Engineer",
            tags: ["Go Fiber", "Solidity", "Monad Testnet", "Claude", "Groq", "REST API"],
            status: "Hackathon Project",
            image: attestaImg,
            alt: "Screenshot of Attesta AI-powered skill verification platform",
            githubUrl: "",
            liveUrl: "",
            caseStudyUrl: ""
        },
        {
            title: "RentalIqra",
            subtitle: "Laravel + React Car Rental Web Application",
            description: "Full-stack car rental web application with Laravel backend, React frontend, authentication, car listing, booking flow, and database management.",
            role: "Fullstack Developer",
            tags: ["Laravel", "PHP", "MySQL", "React", "REST API", "Bootstrap"],
            status: "Completed",
            image: rentalIqraImg,
            alt: "Screenshot of RentalIqra car rental platform",
            githubUrl: "https://github.com/HisyamAlammar/Website-RentalIqra",
            liveUrl: "",
            caseStudyUrl: ""
        },
        {
            title: "Affiliate Workflow Automation",
            subtitle: "AI-Powered Content Automation Template",
            description: "An automation workflow that processes product data, generates copywriting, manages AI image generation, and stores structured outputs into Google Sheets.",
            role: "Automation Workflow Builder",
            tags: ["n8n", "Google Sheets", "AI API", "Telegram Bot", "JSON Parser", "Image Gen API"],
            status: "Product / Template",
            image: n8nWorkflowImg,
            alt: "Screenshot of n8n affiliate workflow automation canvas",
            githubUrl: "",
            liveUrl: "",
            caseStudyUrl: ""
        }
    ];

    const otherProjects = [
        {
            title: "LungsNet: Smart Radiologist",
            description: "AI-powered CAD system for detecting Pneumonia from X-Ray images using Deep Learning and Explainable AI (XAI) for visual transparency.",
            tags: ["Python", "Deep Learning", "Computer Vision", "XAI"],
            githubUrl: "https://github.com/HisyamAlammar/LungsNet",
            image: lungsNetImg
        },
        {
            title: "Capital Sense",
            description: "Intelligent stock evaluation platform combining Fundamental, Technical, and Sentiment analysis (NLP) for smart investment decisions.",
            tags: ["Python", "NLP", "Machine Learning", "Finance"],
            githubUrl: "https://github.com/HisyamAlammar/CAPITAL-SENSE",
            image: capitalSenseImg
        },
        {
            title: "Elegant Fashion",
            description: "Modern e-commerce platform built with Next.js and Tailwind, featuring server-side rendering, responsive design, and real-time cart management.",
            tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
            githubUrl: "https://github.com/HisyamAlammar/Shopping-Website",
            image: elegantFashionImg
        }
    ];

    const handleScroll = () => {
        if (!trackRef.current) return;
        const track = trackRef.current;
        const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
        
        // Find which card is closest to the horizontal center of the track viewport
        // Exclude the spacer elements (first and last children)
        const children = Array.from(track.children).slice(1, -1);
        let closestIndex = 0;
        let minDistance = Infinity;

        children.forEach((child, index) => {
            const rect = child.getBoundingClientRect();
            const childCenter = rect.left + rect.width / 2;
            const distance = Math.abs(childCenter - trackCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        setActiveIndex(closestIndex);
    };

    const scrollToIndex = (index) => {
        if (!trackRef.current) return;
        const track = trackRef.current;
        // Children list: spacer, cards..., spacer
        const children = Array.from(track.children);
        const cardElement = children[index + 1]; // Offset by 1 because of the start spacer
        
        if (cardElement) {
            const trackWidth = track.clientWidth;
            const cardWidth = cardElement.clientWidth;
            const targetScrollLeft = cardElement.offsetLeft - (trackWidth - cardWidth) / 2;
            
            track.scrollTo({
                left: targetScrollLeft,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    const handlePrev = () => {
        const nextIndex = Math.max(0, activeIndex - 1);
        scrollToIndex(nextIndex);
    };

    const handleNext = () => {
        const nextIndex = Math.min(featuredProjects.length - 1, activeIndex + 1);
        scrollToIndex(nextIndex);
    };

    return (
        <section id="projects" className="section carousel-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                {/* Horizontal Snap Carousel */}
                <div className="carousel-wrapper">
                    {/* Desktop-only navigation arrows */}
                    <button 
                        className="carousel-arrow carousel-arrow--left" 
                        onClick={handlePrev}
                        aria-label="Previous Project"
                        style={{ display: activeIndex === 0 ? 'none' : 'flex' }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    
                    <button 
                        className="carousel-arrow carousel-arrow--right" 
                        onClick={handleNext}
                        aria-label="Next Project"
                        style={{ display: activeIndex === featuredProjects.length - 1 ? 'none' : 'flex' }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>

                    <div 
                        className="carousel-track" 
                        ref={trackRef} 
                        onScroll={handleScroll}
                    >
                        {/* Start Spacer to allow first card centering */}
                        <div style={{ flex: '0 0 calc(50% - min(460px, 80vw)/2 - 0.75rem)', pointerEvents: 'none' }} />

                        {featuredProjects.map((project, index) => {
                            const showPlaceholder = !project.image || imgError[index];
                            return (
                                <div 
                                    key={index} 
                                    className={`glass carousel-card ${index === activeIndex ? 'carousel-card--active' : ''}`}
                                >
                                    {/* 16:9 Image or Gradient Placeholder Container */}
                                    <div className="project-img-wrapper">
                                        {showPlaceholder ? (
                                            <div style={{ textAlign: 'center', padding: '1rem' }}>
                                                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(100,108,255,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                                    <polyline points="21 15 16 10 5 21"></polyline>
                                                </svg>
                                                <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.72rem', marginTop: '0.5rem', fontFamily: 'var(--font-code)' }}>Preview coming soon</p>
                                            </div>
                                        ) : (
                                            <>
                                                <img
                                                    className="project-img"
                                                    src={project.image}
                                                    alt={project.alt || project.title}
                                                    onError={() => setImgError(prev => ({ ...prev, [index]: true }))}
                                                />
                                                <div className="project-img-overlay" />
                                            </>
                                        )}
                                        {/* Status Badge */}
                                        {project.status && (
                                            <span className="project-status-badge">
                                                {project.status}
                                            </span>
                                        )}
                                    </div>

                                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ marginBottom: '0.25rem', fontSize: '1.25rem', color: '#fff' }}>{project.title}</h3>
                                        {project.subtitle && (
                                            <p style={{ fontSize: '0.85rem', color: 'var(--accent-color)', marginBottom: '0.75rem', fontFamily: 'var(--font-code)' }}>{project.subtitle}</p>
                                        )}
                                        <p style={{ color: '#aaa', marginBottom: '0.75rem', flex: 1, fontSize: '0.92rem', lineHeight: '1.55' }}>{project.description}</p>
                                        {project.role && (
                                            <p style={{ fontSize: '0.8rem', color: '#777', marginBottom: '1rem' }}>
                                                <span style={{ color: '#999' }}>Role:</span> {project.role}
                                            </p>
                                        )}
                                        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                            {project.tags.map(tag => (
                                                <span key={tag} style={{ fontSize: '0.72rem', padding: '3px 8px', background: 'rgba(100, 108, 255, 0.12)', color: '#c4c9ff', borderRadius: '6px', border: '1px solid rgba(100, 108, 255, 0.15)' }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons — only render if at least one URL exists */}
                                        {(project.githubUrl || project.liveUrl || project.caseStudyUrl) && (
                                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                                                {project.githubUrl && (
                                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textAlign: 'center', flex: 1, textDecoration: 'none', fontSize: '0.82rem', padding: '9px 12px' }}>
                                                        GitHub
                                                    </a>
                                                )}
                                                {project.liveUrl && (
                                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn glass" style={{ textAlign: 'center', flex: 1, textDecoration: 'none', fontSize: '0.82rem', padding: '9px 12px', borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}>
                                                        Live Demo
                                                    </a>
                                                )}
                                                {project.caseStudyUrl && (
                                                    <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer" className="btn glass" style={{ textAlign: 'center', flex: 1, textDecoration: 'none', fontSize: '0.82rem', padding: '9px 12px' }}>
                                                        Case Study
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}

                        {/* End Spacer to allow last card centering */}
                        <div style={{ flex: '0 0 calc(50% - min(460px, 80vw)/2 - 0.75rem)', pointerEvents: 'none' }} />
                    </div>

                    {/* Dot Indicators */}
                    <div className="carousel-dots">
                        {featuredProjects.map((_, index) => (
                            <button
                                key={index}
                                className={`carousel-dot ${index === activeIndex ? 'carousel-dot--active' : ''}`}
                                onClick={() => scrollToIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Other Projects */}
                <h3 style={{ textAlign: 'center', fontSize: '1.4rem', marginTop: '4.5rem', marginBottom: '2rem', color: '#fff' }}>Other Projects & Experiments</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {otherProjects.map((project, index) => {
                        const showOtherPlaceholder = !project.image || otherImgError[index];
                        return (
                            <div key={index} className="glass other-project-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease' }}>
                                <div className="project-img-wrapper">
                                    {showOtherPlaceholder ? (
                                        <span style={{ color: '#555', fontSize: '0.85rem', fontFamily: 'var(--font-code)' }}>[Project Preview]</span>
                                    ) : (
                                        <>
                                            <img
                                                className="project-img"
                                                src={project.image}
                                                alt={project.title}
                                                onError={() => setOtherImgError(prev => ({ ...prev, [index]: true }))}
                                            />
                                            <div className="project-img-overlay" />
                                        </>
                                    )}
                                </div>
                                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem', color: '#fff' }}>{project.title}</h3>
                                    <p style={{ color: '#aaa', marginBottom: '1rem', flex: 1, fontSize: '0.88rem', lineHeight: '1.5' }}>{project.description}</p>
                                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{ fontSize: '0.72rem', padding: '3px 8px', background: 'rgba(255,255,255,0.06)', color: '#c4c9ff', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textAlign: 'center', display: 'inline-block', width: '100%', textDecoration: 'none', fontSize: '0.82rem', padding: '8px 12px' }}>View Project</a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                /* Premium hover spotlight effects for images */
                .project-img-wrapper {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, rgba(100,108,255,0.1) 0%, rgba(30,30,40,1) 50%, rgba(100,255,218,0.08) 100%);
                    transition: box-shadow 0.4s ease;
                }
                .project-img-wrapper:hover {
                    box-shadow: 0 0 20px rgba(100, 108, 255, 0.15);
                }
                .project-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .carousel-card:hover .project-img,
                .other-project-card:hover .project-img {
                    transform: scale(1.06);
                }
                
                /* Dark gradient overlay for image text readability */
                .project-img-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to bottom, transparent 35%, rgba(10, 10, 15, 0.75) 100%);
                    opacity: 0.65;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                    z-index: 1;
                }
                .carousel-card:hover .project-img-overlay,
                .other-project-card:hover .project-img-overlay {
                    opacity: 0.35;
                }

                .other-project-card {
                    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease !important;
                }
                .other-project-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(100, 108, 255, 0.25);
                    box-shadow: 0 12px 30px rgba(100, 108, 255, 0.1);
                }
                .project-status-badge {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    font-size: 0.68rem;
                    padding: 4px 10px;
                    background: rgba(10, 10, 10, 0.85);
                    color: var(--accent-color);
                    border-radius: 20px;
                    border: 1px solid rgba(100, 108, 255, 0.3);
                    backdrop-filter: blur(4px);
                    font-weight: 500;
                    letter-spacing: 0.5px;
                    z-index: 2;
                }
                /* Hide arrows on mobile devices */
                @media (max-width: 768px) {
                    .carousel-arrow {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
