import Button from "./components/Button/Button";

const App = () => {
  return (
    <>
      <Button text="hola" action={() => console.log("hola")} />
    </>
  );
};

export default App;
