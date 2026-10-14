import FacebookIcon from "./FacebookIcon";
import { site } from "@/config/site";
import styles from "./FacebookContactLink.module.css";

export default function FacebookContactLink({
  variant = "button",
  className,
  label,
}: {
  variant?: "button" | "inline" | "faq";
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={site.social.facebook}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Liên hệ qua Facebook"
      className={
        className ? `${styles.button} ${className}` :
        variant === "inline"
          ? "inline-flex items-center gap-2 text-inherit transition-colors hover:text-primary hover:underline"
          : variant === "faq"
            ? `${styles.button} mx-1 mt-3 inline-flex h-12 w-60 max-w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-md transition-all hover:shadow-lg`
            : `${styles.button} inline-flex items-center justify-center gap-2 rounded-[8px] border px-4 py-3.5 font-semibold text-white transition-colors`
      }
    >
      <FacebookIcon className="h-5 w-5 flex-none" />
      <span>
        {label ?? (variant === "inline" ? "Facebook · Thiều Đức Dũng" : variant === "faq" ? "Nhắn Facebook" : "Trao đổi thiết kế Web")}
      </span>
    </a>
  );
}
