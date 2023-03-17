import { createContext } from "react";
import { data } from "./data"
import ResultCard from "./components/ResultCard"
import SummaryCard from "./components/SummaryCard";
import Button from "./components/Button";

export const DataContext = createContext();

function App() {

  return (
    <DataContext.Provider value={data}>
      <div className="App">
        <ResultCard />
        <SummaryCard />
        <Button />
      </div>
    </DataContext.Provider>
  )
}

export default App
