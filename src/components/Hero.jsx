function Hero() {
    return (
        <section className="hero section-shell" id="about">
            <div className="hero-image-wrap">
                <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                    alt="Portrait of Jace Smith"
                />
            </div>
            <div className="hero-copy">
                <span className="hero-intro">Hi, I'm</span>
                <h1>Saymore Muchenje</h1>
                <h2 className="gradient-text">Frontend Developer</h2>
                <div className="hero-actions">
                    <a className="pill-button" href="#contact">Download CV</a>
                    <a className="pill-button" href="#contact">Contact</a>
                </div>
                <div className="social-links" aria-label="Social links">
                    <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <i className="fa-brands fa-github" aria-hidden="true" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero