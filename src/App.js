import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import BarChart from "./components/BarChart";
import Nav from "./components/Nav";

import PieChart from "./components/PieChart";
import SidebarLeft from "./components/SidebarLeft";
import { data } from "./Data";
import MainSidebar from "./components/MainSidebar";
import Cards from "./components/Cards";
import SupplierTable from "./components/SupplierTable";

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
    
    
     <div  style={{  width:"70" ,display: "flex", justifyContent:"center", alignItems:"center"}}>
     <PieChart Data={data} />
     <SupplierTable Data={data} />
     </div>
    
    


    </div>
  );
}

export default App;
