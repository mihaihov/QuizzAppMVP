import styles from "../Navbar/Navbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOnClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <HashLink className={styles.logoDiv} to="/"></HashLink>

                <nav className={isMenuOpen ? styles.responsiveNavbar : " "}></nav>

                {isMenuOpen ? (
                    <FaTimes className={styles.hamburger} onClick={handleOnClick} />
                ) : (
                    <FaBars className={styles.hamburger} onClick={handleOnClick} />
                )}
            </div>
        </div>
    );
};

export default Navbar;
