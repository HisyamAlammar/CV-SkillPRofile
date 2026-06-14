import { useEffect, useState, useRef } from 'react';

const Achievements = () => {
    const [visibleItems, setVisibleItems] = useState({});
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = entry.target.getAttribute('data-index');
                        if (index !== null) {
                            setVisibleItems(prev => ({ ...prev, [index]: true }));
                            observer.unobserve(entry.target);
                        }
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (sectionRef.current) {
            const items = sectionRef.current.querySelectorAll('.timeline-item');
            items.forEach(item => observer.observe(item));
        }

        return () => observer.disconnect();
    }, []);

    const achievements = [
        {
            title: "Top 400 Ideation Proposal",
            event: "Bank Indonesia pidi.id Hackathon",
            year: "2026",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
            )
        },
        {
            title: "Top 10 Finalist",
            event: "Business Plan Competition, Universitas Ciputra",
            year: "2026",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            )
        },
        {
            title: "Builder",
            event: "Monad Blitz Jogja Hackathon",
            year: "2026",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
            )
        },
        {
            title: "Lab Assistant",
            event: "Programming, Data Structures & Advanced Programming — Universitas AMIKOM Yogyakarta",
            year: "",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
            )
        },
        {
            title: "Security Research Contributor",
            event: "Cantina Audit Contributor — 2 Medium Findings",
            year: "",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            )
        }
    ];

    return (
        <section id="achievements" className="section" style={{ background: 'var(--secondary-bg)' }} ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Achievements & Activities</h2>

                <div className="timeline">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`timeline-item ${visibleItems[index] ? 'timeline-item--visible' : ''}`}
                            style={{
                                transitionDelay: visibleItems[index] ? `${(index % 3) * 0.1}s` : '0s'
                            }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="glass timeline-card">
                                <div className="timeline-card-icon">
                                    {item.icon}
                                </div>
                                <h4 className="timeline-card-title">{item.title}</h4>
                                <p className="timeline-card-event">{item.event}</p>
                                {item.year && (
                                    <span className="timeline-card-year">{item.year}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
