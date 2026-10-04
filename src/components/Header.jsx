import { useState } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const links = [
        ['About', '#about'],
        ['Experience', '#experience'],
        ['Projects', '#projects'],
        ['Contact', '#contact'],
    ]

    return (
        <header className="site-header">
            <nav className="nav-shell" aria-label="Main navigation">
                <a className="nav-brand" href="#about">Saymore</a>
                <div className="nav-links">
                    {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
                </div>
                <a className="nav-cta" href="https://github.com" target="_blank" rel="noreferrer">
                    Visit Github
                </a>
                <button
                    className="menu-toggle"
                    type="button"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
                </button>
            </nav>
            {menuOpen && (
                <div className="mobile-menu" id="mobile-menu">
                    {links.map(([label, href]) => (
                        <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
                    ))}
                    <a className="mobile-menu-cta" href="https://github.com" target="_blank" rel="noreferrer">
                        Visit Github
                    </a>
                </div>
            )}
        </header>
    )
}

export default Header