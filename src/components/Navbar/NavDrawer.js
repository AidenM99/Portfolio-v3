import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const NavDrawer = ({ isOpen, setOpen }) => {
  const navMenuLinks = ["Projects", "About", "Contact"];

  const navVariant = {
    open: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      width: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const linksVariant = {
    hidden: {
      opacity: 0,
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="nav-menu"
          variants={navVariant}
          animate={isOpen ? "open" : null}
          exit="closed"
        >
          <div className="nav-menu-links">
            {navMenuLinks.map((link, index) => (
              <motion.span
                key={link}
                className="nav-menu-link"
                variants={linksVariant}
                initial="hidden"
                animate={isOpen ? "visible" : null}
                transition={{ duration: 1 }}
                exit="closed"
                onClick={() => setOpen(!isOpen)}
              >
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </motion.span>
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default NavDrawer;
