import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js"
function App() {
  const journalEntries= data.map((journal)=>{
    return(<Entry 
            key={journal.title}
            entry={journal}

        />)
  })


  return (
    <>
    <Header />
    {journalEntries}
    

    </>
  )
}

export default App
