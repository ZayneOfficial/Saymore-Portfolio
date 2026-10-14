import zayneImage from '../assets/zayne.png'
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
							<p className="muted-copy">Designing experiences that balance function, clarity, and a smooth user journey.</p>
						</article>
					))}
				</div>
				<div className="experience-image">
					<img
						src={zayneImage}
						alt="Saymore Muchenje working on a laptop"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	)
}

export default Experience
