import "./App.css";

function App() {
  return (
    <>
      <h1>This is react deployed testing react app</h1>
      <p>{import.meta.env.VITE_APP_NAME}</p>
    </>
  );
}

export default App;
