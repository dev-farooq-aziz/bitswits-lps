//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Website Development Services - Bitswits",
  description: "Bitswits offers top-notch mobile app marketing services to boost your app’s visibility and drive downloads.We specializes in ASO, user acquisition, and retention strategies to maximize engagement",
  //===== OG Tags =====
  openGraph: {
    title: 'Website Development Services - Bitswits',
    description: 'Bitswits offers top-notch mobile app marketing services to boost your app’s visibility and drive downloads.We specializes in ASO, user acquisition, and retention strategies to maximize engagement',
    url: '/website-development-services',
    siteName: '',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/website-development-services' },
  //===== GEO Tags =====
  other: {},
    //===== No-Index =====
    robots: {
      index: false,
      follow: false,
    },
 
}

export default function RootLayout({ children }) {
  return (children);
}