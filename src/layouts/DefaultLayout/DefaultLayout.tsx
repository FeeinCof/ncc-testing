import { Footer, Navbar } from "@/src/components";
import { ReactNode } from "react";
import styles from "./DefaultLayout.module.css";
export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
