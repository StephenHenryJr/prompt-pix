import "@styles/global.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "PromptPix",
  description: "Share and Discover AI Image Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
