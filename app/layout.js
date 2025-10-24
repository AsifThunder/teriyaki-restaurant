export const metadata = {
  title: "Teriyaki - Fine Dining",
  description: "Fine dining experience crafted with pride and passion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
