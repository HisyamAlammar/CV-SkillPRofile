const Contact = () => {
    return (
        <section id="contact" className="section" style={{ background: 'var(--secondary-bg)' }}>
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="glass" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}>
                    <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Have a question or want to work together? Feel free to leave a message!
                    </p>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <input type="text" placeholder="Name" style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                            <input type="email" placeholder="Email" style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                        </div>
                        <input type="text" placeholder="Subject" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                        <textarea rows="5" placeholder="Message" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', outline: 'none', resize: 'vertical' }}></textarea>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
