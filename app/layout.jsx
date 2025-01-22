import NavBar from "@components/layout/navbar/NavBar";
import Provider from "@components/elements/provider/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "POSTLY",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <NavBar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
