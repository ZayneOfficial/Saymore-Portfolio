const experienceItems = [
	{ icon: 'fa-code', title: 'Frontend Development', years: '5 Years' },
	{ icon: 'fa-file-code', title: 'Graphic Design', years: '2 Years', regular: true },
	{ icon: 'fa-laptop-code', title: 'System Design', years: '2 Years' },
	{ icon: 'fa-list-check', title: 'Content Manager', years: '1 Year' },
]

function Experience() {
	return (
		<section className="section-shell content-section" id="experience">
			<h2 className="section-title">Experience</h2>
			<div className="experience-layout">
				<div className="experience-grid">
					{experienceItems.map(({ icon, title, years, regular }) => (
						<article className="experience-card" key={title}>
							<i className={`${regular ? 'fa-regular' : 'fa-solid'} ${icon} experience-icon`} aria-hidden="true" />
							<h3 className="gradient-text">{title}</h3>
							<p className="experience-years">{years}</p>
							<p className="muted-copy">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, iste.</p>
						</article>
					))}
				</div>
				<div className="experience-image">
					<img
						src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
						alt="Jace Smith"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	)
}

export default Experience
