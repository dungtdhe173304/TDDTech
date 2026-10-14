export default function FacebookIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M14 22v-9h3l.5-4H14V7c0-1.1.3-2 2-2h2V1.3C17.4 1.1 16.3 1 15 1c-3 0-5 1.8-5 5v3H7v4h3v9h4Z" />
    </svg>
  );
}
