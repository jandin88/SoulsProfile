// src/pages/Professional.tsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { WaveSeparator } from "../components/WaveSeparator";
import { GlassCard } from "../components/GlassCard";
import { ProjectCard, Project } from "../components/ProjectCard";
import image from "../assets/icon.png";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "./styles/Professional.module.css";
import Footer from "../components/Footer";

import { DiJava, DiReact, DiGit, DiIntellij, DiPython } from "react-icons/di";
import {
    SiZendesk,
    SiSpringboot,
    SiPostgresql,
    SiTypescript,
    SiSpring,
    SiC,
    SiCplusplus,
    SiMysql,
} from "react-icons/si";

// Defina assim no topo do arquivo:
const skills = [
    { name: "Zendesk", icon: <SiZendesk /> },
    { name: "Java", icon: <DiJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Spring", icon: <SiSpring /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "React", icon: <DiReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Git", icon: <DiGit /> },
    { name: "Intellij", icon: <DiIntellij /> },
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Python", icon: <DiPython /> },
];

const experiences = [
    {
        company: "Kalendae",
        role: "Especialista & Desenvolvedor Zendesk",
        period: "Mar 2024 – Jan 2025",
        description: `Consultor especializado em Zendesk, com experiência em 
            compreender e otimizar processos de atendimento ao cliente. 
            Proficiente na implementação personalizada no.Zendesk, dedicado a aprimorar a eficiência operacional.`,
    },
    {
        company: "Tecna Sistemas",
        role: "Analista/Consultor Zendesk",
        period: "Set 2022 – Jan 2024",
        description: `Experiência em análise de processos, integrações e
                desenvolvimento, com amplo conhecimento no uso de APIs
                Zendesk, criação de dashboards, definição de fluxos de bots e
                desenvolvimento utilizando as APIs do Sunco..`,
    },
];

const education = [
    {
        institution: "Universidade Estácio de Sá",
        degree: "Bacharelado em Ciência da Computação",
        period: "2022 – 2024",
    },
    {
        institution: "Univeridade Newton Paiva",
        degree: "Bacharelado em Ciência da Computação",
        period: "2024 – 2026",
    },
];

const projects: Project[] = [
    {
        title: "MYGL",
        description:
            "Projeto feito com sping boot, o intuito e a criação de uma api para uma aplicação de criar lista de jogos",
        techs: ["Java", "Spring Boot", "PostgreSQL"],
        repoUrl: "https://github.com/jandin88/MYGL",
        // liveUrl: 'https://jandin88.github.io/MYGL/'
    },
    {
        title: "SoulsProfile ",
        description: "Portigolio pessoal",
        techs: ["React", "Vite"],
        repoUrl: "https://github.com/jandin88/SoulsProfile",
        liveUrl: "https://myperfil.shop",
    },
    {
        title: "ChatBotJava",
        description: "Criação de um chatBot para um ecomerce ",
        techs: ["Java", "Spring Boot", "Openai"],
        repoUrl: "https://github.com/jandin88/ChatBotJava",
        // liveUrl: 'https://jandin88.github.io/MYGL/'
    },
];

const Professional: React.FC = () => (
    <div className={styles.container}>
        {/* Header comum */}

        <div className={styles.navButtons}>
            <Link to="/" className={styles.navButton}>
                ← Home
            </Link>
            <Link to="/personal" className={styles.navButton}>
                Hobbies →
            </Link>
        </div>
        <Header />

        {/* Hero Section */}
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Especialista Zendesk & Desenvolvedor FullStack</h1>
                <p>
                    Especialista em todos os modulos Zendesk e Desenvolvedor
                    FullStack
                </p>
                <a href="#projects" className={styles.ctaButton}>
                    Ver Projetos
                </a>
            </div>
            <div className={styles.heroImage}>
                <img src={image} alt="Janderson Coutinho" />
            </div>
        </section>

        {/* Redes Sociais */}
        <section className={styles.social}>
            <h2>Conecte-se comigo</h2>
            <div className={styles.socialLinks}>
                <a
                    href="https://linkedin.com/in/janderson-coutinho"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin size={28} />
                </a>
                <a
                    href="https://github.com/jandin88"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={28} />
                </a>
                <a href="mailto:jandersson.coutinho@gmail.com">
                    <FaEnvelope size={28} />
                </a>
            </div>
        </section>

        {/* Separadores e seções */}
        <WaveSeparator />
        <section className={styles.section} id="experience">
            <GlassCard title="Experiência">
                {experiences.map((exp) => (
                    <div key={exp.company} className={styles.item}>
                        <h3>{exp.role} </h3>
                        <h3>
                            <span>@{exp.company}</span>
                        </h3>
                        <p className={styles.period}>{exp.period}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </GlassCard>
        </section>

        <WaveSeparator flip />
        <section className={styles.section} id="education">
            <GlassCard title="Educação">
                {education.map((ed) => (
                    <div key={ed.institution} className={styles.item}>
                        <h3>{ed.degree}</h3>
                        <p className={styles.period}>{ed.period}</p>
                        <p>{ed.institution}</p>
                    </div>
                ))}
            </GlassCard>
        </section>

        <WaveSeparator />
        <section className={styles.section} id="education">
            <GlassCard title="Skills">
                <ul className={styles.skillsList}>
                    {skills.map((skill) => (
                        <li
                            key={skill.name}
                            title={skill.name}
                            className={styles.skillIcon}
                        >
                            {skill.icon}
                        </li>
                    ))}
                </ul>
            </GlassCard>
        </section>
        <WaveSeparator flip />
        <section className={styles.section} id="projects">
            <h2>Projetos</h2>
            <div className={styles.projectsGrid}>
                {projects.map((proj) => (
                    <ProjectCard key={proj.title} project={proj} />
                ))}
            </div>
        </section>
        <Footer />
    </div>
);

export default Professional;
