import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL IDS FROM EMAILJS
        const SERVICE_ID = 'service_id_placeholder';
        const TEMPLATE_ID = 'template_id_placeholder';
        const PUBLIC_KEY = 'public_key_placeholder';

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
                <div className="glass contact-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Have a question or want to work together? Feel free to leave a message!
                    </p>

                    <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div className="input-group">
                            <input type="text" name="user_name" placeholder="Name" required style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                            <input type="email" name="user_email" placeholder="Email" required style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                        </div>
                        <input type="text" name="subject" placeholder="Subject" required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
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
                }
            `}</style>
        </section>
    );
};

export default Contact;
