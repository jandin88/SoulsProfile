import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./styles/SocialLinks.module.css";

interface SocialLinksProps {
    github?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
    github,
    linkedin,
    instagram,
    twitter,
}) => (

    <div className={styles.socials}>
        {github && (
            <a href={github} target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
        )}
        {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>
        )}
        {instagram && (
            <a href={instagram} target="_blank" rel="noreferrer">
                <FaInstagram />
            </a>
        )}
        {twitter && (
            <a href={twitter} target="_blank" rel="noreferrer">
                <FaTwitter />
            </a>
        )}
    </div>
);

export default SocialLinks;
