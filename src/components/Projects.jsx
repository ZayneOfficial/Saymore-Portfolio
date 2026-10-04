const projects = [
	{
		name: 'Project X',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam?',
		image: 'photo-1551288049-bebda4e38f71',
		theme: 'featured',
		alt: 'Analytics interface preview',
	},
	{
		name: 'Project Y',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, corrupti.',
		image: 'photo-1507238691740-187a5b1d37b8',
		theme: 'lavender',
		alt: 'Portfolio dashboard preview',
	},
	{
		name: 'Project Z',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, cum.',
		image: 'photo-1618005182384-a83a8bd57fbe',
		theme: 'gold',
		alt: 'Abstract project interface preview',
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
