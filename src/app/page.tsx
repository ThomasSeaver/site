import {
	ChevronDown,
	Download,
	Github,
	Linkedin,
	Mail,
	MapPin,
} from "lucide-react";

export default function Home() {
	return (
		<>
			<header className="sticky top-0 z-10 h-20 border-b border-zinc-300 dark:border-zinc-800 header-blur">
				<div className="h-full w-full px-6 sm:px-8 md:px-12">
					<div className="mx-auto h-full max-w-6xl flex justify-between items-center text-lg font-extrabold">
						<h2 className=" text-zinc-900 dark:text-white">thomas seaver</h2>
						<nav className="flex items-center gap-3" aria-label="Social Links">
							<a
								href="https://github.com/ThomasSeaver"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center h-9 w-9 rounded-md text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
								aria-label="GitHub Profile"
							>
								<Github className="h-5 w-5" />
							</a>
							<a
								href="https://www.linkedin.com/in/thomas-seaver/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center h-9 w-9 rounded-md text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
								aria-label="LinkedIn Profile"
							>
								<Linkedin className="h-5 w-5" />
							</a>
							<a
								href="mailto:hello@thomasseaver.com"
								className="inline-flex items-center justify-center h-9 w-9 rounded-md text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
								aria-label="Hire Me"
							>
								<Mail className="h-5 w-5" />
							</a>
						</nav>
					</div>
				</div>
			</header>

			<main className="w-full px-6 sm:px-8 md:px-12">
				<div className="mx-auto max-w-6xl">
					<section className="flex min-h-screen flex-col justify-center py-16 md:py-24 lg:py-32">
						<div className="max-w-2xl md:max-w-3xl">
							<footer className="mb-4 flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
								<MapPin className="h-4 w-4" aria-hidden="true" />
								<span>Atlanta, GA</span>
							</footer>
							<h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
								Hi, I&apos;m Thomas — I build software that makes a difference.
							</h1>
							<p className="mb-8 text-lg leading-relaxed tracking-wide text-zinc-600 dark:text-zinc-300">
								I have experience spanning the gamut of embedded systems and
								processors to large-scale customer facing web applications and
								videogame development. Always learning, always looking to grow
								with new technology amidst new challenges.
							</p>
							<div className="flex flex-col gap-2">
								<p className="tracking-wide text-zinc-600 dark:text-zinc-300">
									Checkout my resume below or reach out now.
								</p>
								<a
									href="mailto:hello@thomasseaver.com"
									className="group inline-flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white"
								>
									<Mail className="h-4 w-4 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
									<span className="border-b-2 bborder-dotted border-zinc-300 dark:border-zinc-600 group-hover:border-zinc-900 dark:group-hover:border-white transition-colors">
										hello@thomasseaver.com
									</span>
								</a>
							</div>
						</div>
						<div className="mt-16 lg:mt-24 flex justify-center">
							<ChevronDown
								className="h-6 w-6 animate-bounce text-zinc-400 dark:text-zinc-500"
								aria-hidden="true"
							/>
						</div>
					</section>

					<section className="py-24">
						<div className="space-y-16">
							<div>
								<div className="mb-6 flex items-center justify-between">
									<h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
										Experience
									</h2>
									<a
										href="/thomas-seaver-resume.pdf"
										download
										className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm tracking-wide text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
									>
										<Download className="h-4 w-4" />
										<span>Download Resume</span>
									</a>
								</div>
								<div className="space-y-12 border-l border-zinc-200 dark:border-zinc-700">
									<div className="relative pl-8 group">
										<div className="absolute -left-[5px] top-[10px] h-2 w-2 rounded-full bg-zinc-400 transition-colors group-hover:bg-zinc-900 dark:bg-zinc-500 dark:group-hover:bg-white" />
										<div className="mb-1 text-sm text-zinc-500 dark:text-zinc-400">
											2022 — Present
										</div>
										<h3 className="mb-2 text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
											Software Engineer @ Spear AI
										</h3>
										<ul className="space-y-2 text-zinc-600 marker:text-zinc-400 dark:text-zinc-300 dark:marker:text-zinc-500 list-disc pl-4">
											<li>
												Led development of acoustic machine learning
												visualization systems and defense budget optimization
												tools
											</li>
											<li>
												Architected full-stack solutions using Next.js,
												Postgraphile, and GraphQL for government and commercial
												clients
											</li>
											<li>
												Implemented robust CI/CD pipelines using GitHub Actions
												for secure, automated deployments
											</li>
											<li>
												Maintained active Secret clearance while working on
												sensitive government projects
											</li>
										</ul>
									</div>

									<div className="relative pl-8 group">
										<div className="absolute -left-[5px] top-[10px] h-2 w-2 rounded-full bg-zinc-400 transition-colors group-hover:bg-zinc-900 dark:bg-zinc-500 dark:group-hover:bg-white" />
										<div className="mb-1 text-sm text-zinc-500 dark:text-zinc-400">
											2020 — 2022
										</div>
										<h3 className="mb-2 text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
											Software Developer @ IBM
										</h3>
										<ul className="space-y-2 text-zinc-600 marker:text-zinc-400 dark:text-zinc-300 dark:marker:text-zinc-500 list-disc pl-4">
											<li>
												Led development of customer-facing web applications
												using React and IBM Carbon Design System
											</li>
											<li>
												Architected and maintained OAuth identity management
												system for high-availability enterprise products
											</li>
										</ul>
									</div>

									<div className="relative pl-8 group">
										<div className="absolute -left-[5px] top-[10px] h-2 w-2 rounded-full bg-zinc-400 transition-colors group-hover:bg-zinc-900 dark:bg-zinc-500 dark:group-hover:bg-white" />
										<div className="mb-1 text-sm text-zinc-500 dark:text-zinc-400">
											2018
										</div>
										<h3 className="mb-2 text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
											Software Engineering Intern @ Union Pacific
										</h3>
										<ul className="space-y-2 text-zinc-600 marker:text-zinc-400 dark:text-zinc-300 dark:marker:text-zinc-500 list-disc pl-4">
											<li>
												Developed mobile application features for distribution
												center operations
											</li>
											<li>
												Collaborated on front-end implementation using Angular
												JS and internal frameworks
											</li>
										</ul>
									</div>

									<div className="relative pl-8 group">
										<div className="absolute -left-[5px] top-[10px] h-2 w-2 rounded-full bg-zinc-400 transition-colors group-hover:bg-zinc-900 dark:bg-zinc-500 dark:group-hover:bg-white" />
										<div className="mb-1 text-sm text-zinc-500 dark:text-zinc-400">
											2017
										</div>
										<h3 className="mb-2 text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
											Software Engineering Intern @ Apago
										</h3>
										<ul className="space-y-2 text-zinc-600 marker:text-zinc-400 dark:text-zinc-300 dark:marker:text-zinc-500 list-disc pl-4">
											<li>
												Built automated test suites using Mocha and Node.js
											</li>
											<li>
												Conducted thorough QA testing and bug documentation
											</li>
										</ul>
									</div>
								</div>
							</div>

							{/* Education Section */}
							<div>
								<h2 className="mb-6 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
									Education
								</h2>
								<div className="border-l border-zinc-200 dark:border-zinc-700">
									<div className="relative pl-8 group">
										<div className="absolute -left-[5px] top-[10px] h-2 w-2 rounded-full bg-zinc-400 transition-colors group-hover:bg-zinc-900 dark:bg-zinc-500 dark:group-hover:bg-white" />
										<div className="mb-1 text-sm text-zinc-500 dark:text-zinc-400">
											2020
										</div>
										<h3 className="mb-2 text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
											Georgia Institute of Technology
										</h3>
										<div className="space-y-1 text-zinc-600 dark:text-zinc-300">
											<p>B.S. in Computer Science</p>
											<p>Focus: Media & Systems Architecture</p>
											<p>GPA: 3.2/4.0 (Honors)</p>
										</div>
									</div>
								</div>
							</div>

							{/* Technical Expertise Section */}
							<div>
								<div className="mb-12">
									<h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
										Technical Expertise
									</h2>
									<p className="mt-4 text-zinc-600 dark:text-zinc-300">
										Full-stack development expertise with government security
										clearance, specializing in modern web technologies and ML
										systems.
									</p>
								</div>

								<ul className="flex flex-wrap justify-center gap-6">
									<li className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
										<h3 className="mb-4 text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
											Frontend & Web
										</h3>
										<ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
											<li className="flex items-center gap-2">
												<span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
												Next.js
											</li>
											<li className="flex items-center gap-2">
												<span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
												React
											</li>
											<li className="flex items-center gap-2">
												<span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
												TypeScript
											</li>
											<li className="flex items-center gap-2">
												<span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
												Tailwind CSS
											</li>
										</ul>
									</li>

									<li className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
										<h3 className="mb-4 text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
											Backend & Data
										</h3>
										<ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
											<li className="flex items-center gap-2">
												<span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
												Node.js
											</li>
											<li className="flex items-center gap-2">
												<span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
												GraphQL & Postgraphile
											</li>
											<li className="flex items-center gap-2">
												<span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
												PostgreSQL
											</li>
											<li className="flex items-center gap-2">
												<span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
												Python
											</li>
										</ul>
									</li>

									<li className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
										<h3 className="mb-4 text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
											Domain Knowledge
										</h3>
										<ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
											<li className="flex items-center gap-2">
												<span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
												Government Contracting
											</li>
											<li className="flex items-center gap-2">
												<span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
												System Architecture
											</li>
											<li className="flex items-center gap-2">
												<span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
												Data Visualization
											</li>
											<li className="flex items-center gap-2">
												<span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
												Graphics Programming
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
