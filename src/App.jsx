import "./App.scss";
import { TolgeeProvider } from "@tolgee/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import BlockchainPage from "./components/blockchain-page/blockchain-page";
import InfoPage from "./components/info-page/info-page";
import { ServicesPage } from "./components/services-page/services-page";
import { Blog } from "./components/blog/blog";
import { Layout } from "./components/layout/Layout";
import BlogPost from "./components/blog-post/blog-post";

function App() {
  return (
    <TolgeeProvider
      apiUrl={process.env.REACT_APP_TOLGEE_API_URL}
      apiKey={process.env.REACT_APP_TOLGEE_API_KEY}
      defaultLanguage="es-ES"
      loadingFallback={<h1 className="all-center blink_me">Loading…</h1>}
    >
      <BrowserRouter>
        <Routes>
          {/* Todas las rutas dentro del Layout para que Navbar y Footer sean fijos */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="blockchain" element={<BlockchainPage />} />
            <Route path="info" element={<InfoPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TolgeeProvider>
  );
}

export default App;
