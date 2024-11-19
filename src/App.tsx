import Button from "./components/atoms/Button";
import LandingPage from "./pages/LandingPage";

function App() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      {/* Dark Mode Toggle Button */}
      <Button label="Toggle Dark Mode" onClick={toggleDarkMode} />
      <LandingPage />
    </>
  );
}

export default App;
