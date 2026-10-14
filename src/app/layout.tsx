import type { Metadata } from "next";
import "./globals.css";
import "./loader.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "TDDTech - Website là tài sản: xây đúng, vận hành mỗi tháng",
  description:
    "Website là tài sản của doanh nghiệp. TDDTech xây đúng nền móng, anh chị sở hữu 100%, rồi vận hành mỗi tháng để website mang về khách hàng.",
  icons: { icon: "/brand/mark.png", apple: "/brand/mark.png" },
};

const themeScript = `(function(){try{var saved=localStorage.getItem('tddtech-ui-theme');var dark=saved==='dark'||(saved==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.className=dark?'dark':'light'}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
