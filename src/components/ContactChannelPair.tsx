import { Children, type ReactNode } from "react";
import styles from "./ContactChannelPair.module.css";

export default function ContactChannelPair({ children, showFacebook = true }: { children: ReactNode; showFacebook?: boolean }) {
  if (!showFacebook) return <>{Children.toArray(children)[0]}</>;
  return <div className={styles.pair} data-contact-channel-pair>{children}</div>;
}
