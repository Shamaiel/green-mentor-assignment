import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import BarChart from "./components/BarChart";
import Nav from "./components/Nav";

import PieChart from "./components/PieChart";
import SidebarLeft from "./components/SidebarLeft";
import { data } from "./Data";
import MainSidebar from "./components/MainSidebar";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Nav />
    
     

      
     
     <div style={{ display: "flex" }}>
        <MainSidebar />
        <div style={{ display: "flex", flexDirection: "column" }}>
        <ChakraProvider>
        <Cards/>
        </ChakraProvider>
        <BarChart Data={data} />

        </div>
        
       
      </div>
      <PieChart Data={data} />

    </div>
  );
}

export default App;
