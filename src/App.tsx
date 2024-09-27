import { Outlet } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="pt-16">
      <Nav />
      <main className="p-6 px-4 md:px-8 lg:px-16">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
