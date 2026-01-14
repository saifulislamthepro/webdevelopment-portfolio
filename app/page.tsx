import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import "./style.css"

export default function Home() {
  return (
    <div>
      <Hero/>

      <div className="info-container">
        
      <section className="skills">
        <h2>Expertise</h2>

        {[
          ["HTML", "95%"],
          ["CSS", "90%"],
          ["JavaScript", "90%"],
          ["React", "95%"],
          ["Next.js", "90%"],
          ["Node.js", "80%"],
          ["MongoDB", "80%"],
        ].map(([name, percent]) => (
          <div className="skill" key={name}>
            <div className="skill-title">
              <span>{name}</span>
              <span>{percent}</span>
            </div>
            <div className="bar">
              <div style={{ width: percent }}></div>
            </div>
          </div>
        ))}
      </section>

      <section className="services">
        <h2>Services</h2>
        <div className="grid">
          <div className="card">Web App Development</div>
          <div className="card">E-commerce Solutions</div>
          <div className="card">API Development</div>
          <div className="card">Performance Optimization</div>
        </div>
      </section>

      <section className="services">
        <h2>Projects</h2>
        <div className="grid">
          <div className="card">E-commerce Platform</div>
          <div className="card">SaaS Dashboard</div>
          <div className="card">Landing Page Builder</div>
          <div className="card">Portfolio Generator</div>
        </div>
      </section>
      </div>

      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li><strong>2024 - Present:</strong> Freelance Full Stack Developer</li>
          <li><strong>2023:</strong> Built multiple client projects</li>
          <li><strong>2022:</strong> Learned MERN stack deeply</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <form>
          <input placeholder="Your Name" />
          <input placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </form>
      </section>
      <footer className="footer">
        © {new Date().getFullYear()} Saiful Islam. All rights reserved.
      </footer>
    </div>
  );
}
