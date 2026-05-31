import "./App.css";

function App() {
  return (
    <>
      <h1
        style={{
          textDecoration: "underline",
        }}
      >
        This is react deployed testing react app
      </h1>
      <p>{import.meta.env.VITE_APP_NAME}</p>
      <button
        style={{
          backgroundColor: "blue",
          maxWidth: "200px",
          border: "none",
          margin: "0 auto",
          padding: "10px 20px",
          borderRadius: "5px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </>
  );
}

export default App;
