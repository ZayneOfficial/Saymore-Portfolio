import { useEffect, useState } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [theme, setTheme] = useState(() => {
        const savedTheme = window.localStorage.getItem('theme')
        if (savedTheme) return savedTheme

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    })

    const links = [
        ['About', '#about'],
        ['Experience', '#experience'],
        ['Projects', '#projects'],
        ['Contact', '#contact'],
    ]

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        window.localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <header className="site-header">
            <nav className="nav-shell" aria-label="Main navigation">
                <a className="nav-brand" href="#about">Saymore</a>
                <div className="nav-links">
                    {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
                </div>
                <button
                    className="theme-toggle"
                    type="button"
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
                >
                    <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true" />
                </button>
                <a className="nav-cta" href="https://github.com/ZayneOfficial" target="_blank" rel="noreferrer">
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
                    <button
                        className="theme-toggle mobile-theme-toggle"
                        type="button"
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
                    >
                        <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true" />
                        <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
                    </button>
                    <a className="mobile-menu-cta" href="https://github.com/ZayneOfficial" target="_blank" rel="noreferrer">
                        Visit Github
                    </a>
                </div>
            )}
        </header>
    )
}

export default Header