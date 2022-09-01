import './App.css';
import Header from "./components/layoutComponents/Header";
import Sidebar from "./components/layoutComponents/Sidebar";
import Dashboard from "./pages/dashboards/Dashboard";

function App() {
  return (
   <>
      <Header />
     <Sidebar />
       <Dashboard />
   </>
  );
}

export default App;
