import RoutesProject from "./Routes";
import { ContextProvider } from "./context";

function App() {
  return (
    <ContextProvider>
      <RoutesProject />
    </ContextProvider>
  );
}

export default App;
