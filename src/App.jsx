import { createContext } from "react";
import { data } from "./data"
import ResultCard from "./components/ResultCard"
import SummaryCard from "./components/SummaryCard";

export const DataContext = createContext();

function App() {

  return (
    <DataContext.Provider value={data}>
      <div className="App">
        <div className="maincard">
          <ResultCard />
          <SummaryCard />
        </div>
      </div>
    </DataContext.Provider>
  )
}

export default App
