import "styles/index.css";
import ReactQueryProvider from "./ReactQueryProvider";
import RandomUser from "pages/RandomUser";
function App() {
  return (
    <ReactQueryProvider>
      <RandomUser />
    </ReactQueryProvider>
  );
}

export default App;
