import type { Metadata } from "next";
import "../app/styles/globals.css";

export const metadata: Metadata = {
  title: "LitStore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
  <head>
  </head>
  <body className="antialiased">
    <div className="h-screen">
      

      <div className="flex flex-col">
        

        <main className="flex-1 p-6 ml-[var(--sidenav-width)]">
          {children}
        </main>
      </div>
    </div>
  </body>
</html>


  );
}
