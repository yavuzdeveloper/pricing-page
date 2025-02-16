import Pricing from "./components/Pricing";
import Header from "./components/Header";
import ThemeWrapper from "./components/ThemeWrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeWrapper>
      <Header />
      <Pricing />
      <Footer />
    </ThemeWrapper>
  );
}

export default App;
