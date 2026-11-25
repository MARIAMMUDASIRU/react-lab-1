import Child from "./Child";
import Promo from "./components/Promo";

function App() {
  const date = new Date();

  return (
    <>
      <Promo />
      <Child message={date.toLocaleTimeString()} />
    </>
  );
}

export default App;
