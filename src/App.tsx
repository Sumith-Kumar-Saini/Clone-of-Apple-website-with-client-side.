import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="text-9xl w-full min-h-screen font-inter leading-none bg-gradient-to-tr">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
