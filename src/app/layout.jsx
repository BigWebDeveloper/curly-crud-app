

import "@styles/globals.css";
import { GlobalProvider } from "@context/globalContext";
import Footer from "@components/footer/Footer";
import NewFolder from "@components/new-folder/NewFolder";

export const metadata = {
  title: "Curly",
  description: "Cruly app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <GlobalProvider>
          <div className={`bg-black relative overflow-hidden max-w-sm m-auto`}>
            <div className="flex justify-between flex-col p-4 bg-[#e0e0e0] h-screen">
              <main className="app mb-auto">{children}</main>
              <Footer />
            </div>
            <NewFolder />
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
