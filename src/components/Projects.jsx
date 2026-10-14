const projects = [
	{
		name: 'Burial Society MS',
		description: 'Developed a member management system that helps organizations track contributions, member records, and communication with clarity and trust.',
		image: 'photo-1551288049-bebda4e38f71',
		theme: 'featured',
		alt: 'Member management dashboard preview',
	},
	{
		name: 'Chat App',
		description: 'Built a real-time messaging experience with clear conversations, responsive layouts, and smooth user interaction for everyday communication.',
		image: 'photo-1522202176988-66273c2fd55f',
		theme: 'lavender',
		alt: 'Chat app interface preview',
	},
	{
		name: 'Budget Tracker',
		description: 'Created a personal finance dashboard for monitoring expenses, setting savings goals, and staying in control of monthly spending.',
		image: 'photo-1554224155-8d04cb21cd6c',
		theme: 'gold',
		alt: 'Budget tracking dashboard preview',
	},
]

function Projects() {
	return (
		<section className="section-shell content-section" id="projects">
			<h2 className="section-title">Recent Projects</h2>
			<div className="projects-grid">
				{projects.map(({ name, description, image, theme, alt }, index) => (
					<article className={`project-card project-card--${theme}`} key={name}>
						<div className="project-preview">
							<img
								src={`https://images.unsplash.com/${image}?auto=format&fit=crop&q=80&w=700`}
								alt={alt}
								loading="lazy"
							/>
						</div>
						<div>
							<h3>{name}</h3>
							<p>{description}</p>
						</div>
						<div className="project-actions">
							<a className={index === 0 ? 'pill-button pill-button--light' : 'pill-button'} href="#contact">Live Demo</a>
							<a className={index === 0 ? 'pill-button pill-button--light' : 'pill-button'} href="https://github.com" target="_blank" rel="noreferrer">Github Repo</a>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default Projects
