import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import cvFile from '../assets/CV_Abyan_Hisyam.pdf';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL IDS FROM EMAILJS
        const SERVICE_ID = 'service_xsolysr';
        const TEMPLATE_ID = 'template_ptity9k';
        const PUBLIC_KEY = 'E3h1KyeJyfRQRI77i';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset(); // Clear form
                setTimeout(() => setStatus(''), 5000); // Clear message after 5s
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <section id="contact" className="section" style={{ background: 'var(--secondary-bg)' }}>
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                {/* Direct Contact Links */}
                <div className="contact-links" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                    <a href="mailto:abyanhisyamm@gmail.com" className="contact-link-item glass" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '10px 20px', borderRadius: '12px', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s' }}
                        onMouseOver={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--accent-color)'; }}
                        onMouseOut={e => { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        Email
                    </a>
                    <a href="https://github.com/HisyamAlammar" target="_blank" rel="noopener noreferrer" className="contact-link-item glass" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '10px 20px', borderRadius: '12px', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s' }}
                        onMouseOver={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--accent-color)'; }}
                        onMouseOut={e => { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/abyan-al-ammar-4b341b295" target="_blank" rel="noopener noreferrer" className="contact-link-item glass" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '10px 20px', borderRadius: '12px', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s' }}
                        onMouseOver={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--accent-color)'; }}
                        onMouseOut={e => { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        LinkedIn
                    </a>
                    <a href={cvFile} target="_blank" rel="noopener noreferrer" className="contact-link-item glass" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '10px 20px', borderRadius: '12px', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s' }}
                        onMouseOver={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--accent-color)'; }}
                        onMouseOut={e => { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        Resume / CV
                    </a>
                </div>

                <div className="glass contact-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#aaa' }}>
                        Interested in my work, collaboration, or project discussion? Feel free to reach out.
                    </p>

                    <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div className="input-group">
                            <input type="text" name="name" placeholder="Name" required style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                            <input type="email" name="email" placeholder="Email" required style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                        </div>
                        <input type="text" name="title" placeholder="Subject" required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                        <textarea name="message" rows="5" placeholder="Message" required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', outline: 'none', resize: 'vertical' }}></textarea>

                        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && <p style={{ color: '#4ade80', textAlign: 'center', marginTop: '1rem' }}>Message sent successfully!</p>}
                        {status === 'error' && <p style={{ color: '#f87171', textAlign: 'center', marginTop: '1rem' }}>Failed to send message. Please try again.</p>}
                    </form>
                </div>
            </div>
            <style>{`
                .contact-card {
                    padding: 3rem;
                }
                .input-group {
                    display: flex;
                    gap: 1rem;
                }
                @media (max-width: 768px) {
                    .contact-card {
                        padding: 1.5rem;
                    }
                    .input-group {
                        flex-direction: column;
                    }
                    .contact-links {
                        gap: 0.75rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
