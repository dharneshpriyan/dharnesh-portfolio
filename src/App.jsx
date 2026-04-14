import { useState } from "react";

function IconWrapper({ children, className = "" }) {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 ${className}`}
    >
      {children}
    </span>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M4 7.5 12 13l8-5.5" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.62a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.46-1.25a2 2 0 0 1 2.11-.45c.84.33 1.72.56 2.62.68A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.6-1.4-5.6-6.1 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.7-2.9 5.8-5.7 6.1.5.4.9 1.2.9 2.4v3.6c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.83v1.71h.05c.53-1 1.84-2.06 3.79-2.06C21 8.65 21 11.18 21 14.47V21h-4v-5.79c0-1.38-.02-3.15-1.92-3.15-1.93 0-2.23 1.5-2.23 3.05V21h-4Z" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="m2 8 10-5 10 5-10 5L2 8Z" />
      <path d="M6 10.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="m8 16-4-4 4-4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M9.5 3a3.5 3.5 0 0 0-3.5 3.5V8A3 3 0 0 0 4 10.9 3 3 0 0 0 5.5 16H6a3 3 0 0 0 3 3h1v-6H8" />
      <path d="M14.5 3A3.5 3.5 0 0 1 18 6.5V8a3 3 0 0 1 2 2.9 3 3 0 0 1-1.5 5.1H18a3 3 0 0 1-3 3h-1v-6h2" />
      <path d="M10 8a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0Z" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="m12 2 1.9 5.1L19 9l-5.1 1.9L12 16l-1.9-5.1L5 9l5.1-1.9L12 2Zm7 13 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15ZM5 14l1.2 2.8L9 18l-2.8 1.2L5 22l-1.2-2.8L1 18l2.8-1.2L5 14Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
    </svg>
  );
}

function ProfileFallback() {
  return (
    <div className="relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 shadow-[0_0_60px_rgba(34,211,238,0.18)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(34,211,238,0.18),transparent_40%)]" />
      <svg viewBox="0 0 120 120" className="relative h-28 w-28 text-cyan-200" fill="currentColor">
        <circle cx="60" cy="40" r="20" opacity="0.95" />
        <path d="M25 103c4-18 18-29 35-29s31 11 35 29" opacity="0.95" />
      </svg>
    </div>
  );
}

function ProfileImage() {
  const [imgError, setImgError] = useState(false);

  if (imgError) return <ProfileFallback />;

  return (
    <img
      src="/profile.jpg"
      alt="Dharnesh Priyan J"
      onError={() => setImgError(true)}
      className="h-44 w-44 rounded-[2rem] border border-cyan-300/30 object-cover shadow-[0_0_60px_rgba(34,211,238,0.18)]"
    />
  );
}

function SectionHeading({ icon, label, title, subtitle }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6">
      <div className="flex items-center gap-4">
        <IconWrapper>{icon}</IconWrapper>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{label}</p>
          <h3 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h3>
        </div>
      </div>
      {subtitle ? <p className="hidden max-w-md text-right text-sm leading-7 text-slate-400 md:block">{subtitle}</p> : null}
    </div>
  );
}

export default function PortfolioWebsite() {
  const [showResume, setShowResume] = useState(false);
  const skills = [
    "Python",
    "React JS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SQL",
    "Git & GitHub",
    "Responsive UI",
    "REST API Integration",
    "Problem Solving",
    "Frontend Development",
    "Full Stack Development",
  ];

  const projects = [
    {
      title: "Full Stack Web Applications",
      desc: "Developed modern responsive web applications using React, JavaScript, and backend integration with Python, focusing on clean UI, performance, and real-world usability.",
      stack: "React • JavaScript • Python • SQL • Full Stack",
      highlight: "Core Project",
    },
    {
      title: "Full Stack Development Portfolio",
      desc: "A modern personal portfolio built using React, structured sections, clean UI, and responsive layouts to showcase skills, internship experience, and project work.",
      stack: "React • Tailwind CSS • JavaScript • Responsive Design",
      highlight: "Featured Web Project",
    },
    {
      title: "SQL Practice & Database Logic",
      desc: "Hands-on SQL learning focused on joins, procedures, filters, sorting, and query problem solving for placements, interviews, and practical development.",
      stack: "MySQL • SQL • Stored Procedures • Query Logic",
      highlight: "Core Technical Strength",
    },
  ];

  const experience = [
    {
      title: "Full Stack Development Intern / Trainee",
      company: "Besant Technologies",
      desc: "Building practical knowledge in frontend, backend, database concepts, and modern development workflow while strengthening project-based skills.",
    },
  ];

  const contacts = [
    {
      title: "Email",
      value: "dharneshpriyan.j@gmail.com",
      href: "mailto:dharneshpriyan.j@gmail.com",
      icon: <MailIcon />,
    },
    {
      title: "Phone",
      value: "+91 8946065377",
      href: "tel:8946065377",
      icon: <PhoneIcon />,
    },
    {
      title: "LinkedIn",
      value: "dharnesh-priyan",
      href: "https://www.linkedin.com/in/dharnesh-priyan",
      icon: <LinkedinIcon />,
    },
    {
      title: "GitHub",
      value: "github.com/dharneshpriyan",
      href: "https://github.com/dharneshpriyan",
      icon: <GithubIcon />,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020617] text-white selection:bg-cyan-400/30">
      <div className="fixed inset-0 -z-20 bg-[#020617]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_30%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_30%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#020617]/95 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-lg font-bold tracking-wide">Dharnesh Priyan J</h1>
            <p className="text-xs text-slate-400">Python & Full Stack Developer</p>
          </div>
          <nav className="hidden items-center gap-3 md:flex">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Internship", "#experience"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-cyan-400/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-200 shadow-[0_8px_20px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]"
              >
                <span className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.22),transparent_65%)]" />
                <span className="relative z-10">{label}</span>
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden pt-24 md:pt-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28 xl:py-32">
          <div className="animate-[fadeIn_0.8s_ease-out]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
              <SparklesIcon />
              Final Year Computer Science Student
            </div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">Developer</p>
            <h2 className="max-w-5xl text-4xl font-black leading-[1.05] md:text-5xl xl:text-6xl">
              Building <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">premium</span> digital experiences and modern <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">full stack</span> solutions.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I am <span className="font-semibold text-white">Dharnesh Priyan J</span>, a Python and Full Stack Developer focused on modern web development, responsive UI, and clean application structure. I enjoy creating polished, real-world projects with strong design, practical logic, and professional execution.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {/* <a
                href="#projects"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-7 py-3.5 font-semibold text-slate-950 shadow-[0_14px_40px_rgba(34,211,238,0.28)] transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_44px_rgba(34,211,238,0.38)]"
              >
                <span className="relative z-10">Explore Projects</span><span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-500 group-hover:translate-x-0" />
              </a> */}
              <a
                href="#contact"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-7 py-3.5 font-semibold text-slate-950 shadow-[0_14px_40px_rgba(34,211,238,0.28)] transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_44px_rgba(34,211,238,0.38)]"
              >
                Let’s Connect
              </a>

              {/* View Resume (Modal) */}
              <button
                onClick={() => setShowResume(true)}
                className="group relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/20 hover:shadow-[0_12px_30px_rgba(34,211,238,0.25)]"
              >
                <span className="relative z-10">👁 View Resume</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle,rgba(34,211,238,0.25),transparent_70%)]" />
              </button>

              {/* Download Resume */}
              <a
                href="/dharneshpriyan.j_fullstack_B.E(CSE)_python_2026.pdf"
                download
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(34,211,238,0.3)]"
              >
                <span className="relative z-10">⬇ Download Resume</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-white/20" />
              </a>

            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ["Specialization", "Python Development"],
                ["Current Focus", "React & Full Stack"],
                ["Project Strength", "UI + Backend Integration"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-5 shadow-xl shadow-black/20 backdrop-blur-xl">
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="mt-2 font-semibold text-cyan-300">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-[floatUp_0.9s_ease-out]">
            <div className="absolute -inset-8 rounded-[2.7rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-500/20 blur-3xl" />
            <div className="relative rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,20,45,0.96),rgba(3,8,24,0.96))] p-7">
                <div className="flex flex-col items-center text-center">
                  <ProfileImage />
                  <p className="mt-5 text-xs uppercase tracking-[0.35em] text-slate-500">Professional Profile</p>
                  <h3 className="mt-3 text-4xl font-bold">Dharnesh Priyan J</h3>
                  <p className="mt-3 text-base text-slate-300">Python Developer • Full Stack Developer</p>
                </div>

                <div className="mt-8 grid gap-4">
                  <a href="mailto:dharneshpriyan.j@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-200 transition hover:bg-white/[0.08]">
                    <IconWrapper className="h-11 w-11 rounded-xl"><MailIcon /></IconWrapper>
                    <span>dharneshpriyan.j@gmail.com</span>
                  </a>
                  <a href="tel:8946065377" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-200 transition hover:bg-white/[0.08]">
                    <IconWrapper className="h-11 w-11 rounded-xl"><PhoneIcon /></IconWrapper>
                    <span>+91 8946065377</span>
                  </a>
                  <a href="https://www.linkedin.com/in/dharnesh-priyan" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-200 transition hover:bg-white/[0.08]">
                    <span className="flex items-center gap-3">
                      <IconWrapper className="h-11 w-11 rounded-xl"><LinkedinIcon /></IconWrapper>
                      LinkedIn Profile
                    </span>
                    <ExternalLinkIcon />
                  </a>
                  <a href="https://github.com/dharneshpriyan" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-200 transition hover:bg-white/[0.08]">
                    <span className="flex items-center gap-3">
                      <IconWrapper className="h-11 w-11 rounded-xl"><GithubIcon /></IconWrapper>
                      GitHub Profile
                    </span>
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about"
      className="mx-auto max-w-7xl px-6 py-14 scroll-mt-28">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-xl backdrop-blur-xl md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">About Me</p>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">Professional Profile Summary</h3>
            <p className="mt-6 text-base leading-8 text-slate-300">
              I am a final-year Computer Science Engineering student with strong interest in Python development and Full Stack Development. I enjoy turning ideas into polished applications with clean interfaces, practical logic, and real-world value. My goal is to grow into a software professional who builds impactful systems with both strong frontend presentation and solid backend thinking.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-xl backdrop-blur-xl md:p-10">
            <div className="flex items-center gap-3">
              <IconWrapper><GraduationIcon /></IconWrapper>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Education</p>
            </div>
            <h3 className="mt-5 text-2xl font-bold">B.E. Computer Science Engineering</h3>
            <p className="mt-3 text-slate-300">Sri Raaja Raajan College of Engineering & Technology</p>
            <p className="mt-2 text-slate-400">Final Year Student</p>
            <div className="mt-8 rounded-[1.6rem] border border-cyan-400/15 bg-cyan-400/5 p-5">
              <p className="text-sm text-slate-400">Primary Focus</p>
              <p className="mt-2 font-semibold text-white">Python, React JS, Full Stack Development</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-28">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-xl backdrop-blur-xl md:p-10">
          <SectionHeading
            icon={<CodeIcon />}
            label="Technical Skills"
            title="Tools, Technologies & Strengths"
            subtitle="A focused stack built around Python, web development fundamentals, backend integration, and polished user interface work."
          />
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 px-4 py-2.5 text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-950/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-26">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-xl backdrop-blur-xl md:p-10">
          <SectionHeading
            icon={<SparklesIcon />}
            label="Internship"
            title="Professional Learning Journey"
            subtitle="Practical training experience that strengthens development workflow, project structure, and technical confidence."
          />

          <div className="grid gap-6 md:grid-cols-1">
            {experience.map((item) => (
              <div key={item.title} className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-6 shadow-lg">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Current Internship</p>
                <h4 className="mt-3 text-2xl font-bold">{item.title}</h4>
                <p className="mt-2 text-slate-400">{item.company}</p>
                <p className="mt-5 max-w-3xl leading-8 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-16">
        <SectionHeading
          icon={<BrainIcon />}
          label="Projects"
          title="Featured Work"
          subtitle="Selected work that combines Python, modern web development, problem solving, and strong presentation."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group cursor-pointer rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/[0.07] hover:shadow-[0_18px_40px_rgba(34,211,238,0.12)]"
            >
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                {project.highlight}
              </div>
              <h4 className="mt-5 text-2xl font-bold leading-tight">{project.title}</h4>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.desc}</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-cyan-200">
                {project.stack}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-14" scroll-mt-16>
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(6,182,212,0.10),rgba(59,130,246,0.10),rgba(168,85,247,0.10))] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Contact Me</p>
          <h3 className="mt-4 text-3xl font-bold md:text-5xl">Let’s Build Something Great Together</h3>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            I am open to internships, entry-level opportunities, project collaborations, freelance work, and professional connections in Python development and full stack development.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {contacts.map((contact) => (
              <a key={contact.title} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined} className="group rounded-[1.6rem] border border-white/10 bg-slate-950/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900/70 hover:shadow-[0_12px_30px_rgba(34,211,238,0.10)]">
                <div className="flex items-center gap-3">
                  <IconWrapper>{contact.icon}</IconWrapper>
                  <p className="font-semibold transition duration-300 group-hover:text-cyan-200">{contact.title}</p>
                </div>
                <p className="mt-3 text-sm text-slate-300">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* Resume Modal */}
{showResume && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
    <div className="relative w-[90%] h-[90%] max-w-5xl bg-[#020617] rounded-2xl border border-white/10 shadow-2xl">
      <button
        onClick={() => setShowResume(false)}
        className="absolute top-4 right-4 text-white text-lg px-3 py-1 rounded-lg bg-red-500/80 hover:bg-red-600"
      >
        ✕
      </button>

      <iframe
        src="/dharneshpriyan.j_fullstack_B.E(CSE)_python_2026.pdf"
        title="Resume"
        className="w-full h-full rounded-2xl"
      />
    </div>
  </div>
)}



      <footer className="mx-auto max-w-7xl px-6 pb-12 pt-4 text-center text-sm text-slate-500">
        © 2026 Dharnesh Priyan J. Crafted with React, Tailwind CSS, and ambition.
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
