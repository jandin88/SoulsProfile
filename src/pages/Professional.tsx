import Header from "../components/Header";
import SocialLinks from "../components/SocialLinks";
import styles from "./styles/Professional.module.css";

const skills = [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "JWT",
    "React",
    "React Native",
    "Python",
    "C#",
];
const projects = [
    {
        title: "TesteJRBackend",
        desc: "API CRUD de tarefas em .NET 5 + C#",
        link: "...",
    },
    {
        title: "MYGL",
        desc: "Plataforma de tracking de games com JWT e PostgreSQL",
        link: "...",
    },
];

export default function Professional() {
    return (
        <>
            <Header  />
            <section className={styles.hero}>
                <h2 className={styles.sectionTitle}>
                    Minha Jornada Profissional
                </h2>
                <p className={styles.sectionText}>
                    Desenvolvedor Java Full-Stack, apaixonado por APIs seguras e
                    front-ends modernos.
                </p>
            </section>

            <section className={styles.skills}>
                <h3 className={styles.sectionTitle}>Skills & Tecnologias</h3>
                <div className={styles.tagsGrid}>
                    {skills.map((skill) => (
                        <span key={skill} className={styles.tag}>
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            <section className={styles.projects}>
                <h3 className={styles.sectionTitle}>Projetos em Destaque</h3>
                <div className={styles.projectsGrid}>
                    {projects.map(({ title, desc, link }) => (
                        <a
                            key={title}
                            href={link}
                            className={styles.card}
                            target="_blank"
                        >
                            <h4>{title}</h4>
                            <p>{desc}</p>
                        </a>
                    ))}
                </div>
            </section>

            <SocialLinks
                github="https://github.com/seu-usuario"
                linkedin="https://linkedin.com/in/seu-perfil"
                instagram="https://instagram.com/seu-perfil"
            />
        </>
    );
}
