import { useState } from 'react'

function Contact() {
	const [submitted, setSubmitted] = useState(false)

	function handleSubmit(event) {
		event.preventDefault()
		event.currentTarget.reset()
		setSubmitted(true)
		window.setTimeout(() => setSubmitted(false), 5000)
	}

	return (
		<section className="section-shell contact-section" id="contact">
			<h2 className="section-title">Contact Me</h2>
			<form className="contact-form" onSubmit={handleSubmit}>
				<label className="email-field">
					<i className="fa-solid fa-envelope" aria-hidden="true" />
					<span className="sr-only">Your email address</span>
					<input type="email" required placeholder="example@email.com" />
				</label>
				<button className="pill-button submit-button" type="submit">Submit</button>
			</form>
			{submitted && (
				<p className="status-message" role="status">
					Thank you! Your message has been sent successfully.
				</p>
			)}
		</section>
	)
}

export default Contact
