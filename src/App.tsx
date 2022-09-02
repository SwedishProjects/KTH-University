import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AboutKTH,
  Contact,
  Home,
  Library,
  CoOperation,
  Research,
  Studies,
  Alumni,

} from "./Pages/Main";

import MainLayout from "./Layouts/MainLayout/MainLayout";

import { ScrollToTop } from "./Components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about-kth" element={<AboutKTH />} />
              <Route path="/contact-kth" element={<Contact />} />
              <Route path="/library" element={<Library />} />
              <Route path="/co-operation" element={<CoOperation />} />
              <Route path="/research" element={<Research />} />
              <Route path="/studies" element={<Studies />} />
              <Route path="/alumni" element={<Alumni />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
