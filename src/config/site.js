// Set NEXT_PUBLIC_* values before building to connect your own contact channels.
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "0393312336";
const email =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "thieuducdung254@gmail.com";
const phoneDigits = phone.replace(/\D/g, "");
export const siteOrigin =
  typeof window !== "undefined"
    ? window.location.origin
    : (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
        /\/$/,
        "",
      );
export const site = {
  name: "TDDTech",
  contactPath: "/lien-he",
  logoModelUrl: process.env.NEXT_PUBLIC_LOGO_MODEL_URL || "",
  phone,
  email,
  phoneLabel: phone || "Liên hệ tư vấn",
  emailLabel: email || "Liên hệ qua website",
  phoneHref: phoneDigits
    ? `tel:${phone.startsWith("+") ? "+" : ""}${phoneDigits}`
    : "/lien-he",
  emailHref: email ? `mailto:${email}` : "/lien-he",
  zaloHref: process.env.NEXT_PUBLIC_ZALO_URL || "https://zalo.me/0393312336",
  social: {
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ||
      "https://www.facebook.com/dungchuche25",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "/lien-he",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "/lien-he",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "/lien-he",
    threads: process.env.NEXT_PUBLIC_THREADS_URL || "/lien-he",
  },
};
site.company = {
  brandName: site.name,
  legalName: site.name,
  internationalName: site.name,
  shortName: site.name,
  representative: "Chưa cập nhật",
  founderName: "Đội ngũ TDDTech",
  founderAliases: ["TDDTech"],
  founderRole: "Đội ngũ phát triển",
  leadingSince: "2026",
  founderImage: "/brand/team.svg",
  phone: site.phoneLabel,
  phoneCompact: phoneDigits,
  phoneHref: phone,
  email: site.emailLabel,
  website: siteOrigin,
  address: "Hà Nội",
  shortAddress: "Hà Nội",
  businessStatus: "Chưa cập nhật",
  businessType: "Chưa cập nhật",
  startedAt: "Chưa cập nhật",
  mainBusiness: "Phát triển website và phần mềm",
  mainBusinessDetail: "Thiết kế website, phát triển phần mềm và ứng dụng web",
  taxProfileUrl: site.contactPath,
  bank: {
    name: "Chưa cập nhật",
    fullName: "Chưa cập nhật",
    accountNumber: "Chưa cập nhật",
    accountName: site.name,
  },
};
export function siteUrl(path = "") {
  if (!path) return siteOrigin;
  return `${siteOrigin}${path.startsWith("/") || path.startsWith("#") ? "" : "/"}${path}`;
}
export function siteText(text) {
  return text
    .replaceAll("https://zalo.me/{{phone}}", site.zaloHref)
    .replaceAll("{{zalo}}", site.zaloHref)
    .replaceAll("{{phone}}", site.phoneLabel)
    .replaceAll("{{email}}", site.emailLabel)
    .replaceAll("{{address}}", site.company.address);
}
