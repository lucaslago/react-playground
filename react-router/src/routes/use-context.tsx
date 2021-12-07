import {createContext, useContext, useEffect, useState} from "react";
const NameContext = createContext('Unamed');

function FirstComopnent() {
  const name = useContext(NameContext)
  return (
    <div>
      First component: {name}
      <SecondComopnent/>
    </div>
  )
}

function SecondComopnent() {
  const name = useContext(NameContext)
  return (
    <div>
      Second component: {name}
    </div>
  )
}

export default function useContextPage() {
  const [name, setName] = useState('Unamed');

  useEffect(() => {
    setTimeout(() => {
      console.log('Fetching name...');
      setName('Lucas');
    }, Math.random() * 2000);
  }, []);

  return (
    <main>
      Use case: Two components sharing state and the same side-effect
      <NameContext.Provider value={name}>
        <FirstComopnent/>
      </NameContext.Provider>
    </main>
  )
}
