import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRemove } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter().asPath;
  const [isNavShow, setNav] = useState(false);
  const routings = [
    { name: "Home", src: "/" },
    { name: "Services", src: "/services" },
    { name: "News", src: "/news" },
    { name: "Blog", src: "/blog" },
    { name: "Contact", src: "/contact" },
  ];
  const handleNav = () => {
    setNav(!isNavShow);
  };
  return (
    <>
      <div className={styles.toggle_nav__mobile} onClick={() => handleNav()}>
        {isNavShow ? (
          <FontAwesomeIcon icon={faRemove} />
        ) : (
          <FontAwesomeIcon
            style={{
              color: "black",
            }}
            icon={faBars}
          />
        )}
      </div>
      <nav
        className={`${styles.wrapper} ${
          isNavShow && styles.wrapper_mobile__show
        }`}
      >
        {routings.map((item, index) => {
          return (
            <Link
              href={item.src}
              className={`${styles.inner} 
                ${item.src == router && styles.active}
              }`}
              key={index}
            >
              <div>{item.name}</div>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
