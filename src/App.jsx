import AppRoute from "./components/routing/AppRoute";
import { SearchProvider } from "./components/context/SearchContext";
import { PathProvider } from "./components/context/PathContext";
import { UserProvider } from "./components/context/UserContext";

function App() {
  return (
    <UserProvider>
      <PathProvider>
        <SearchProvider>
          <div>
            <AppRoute />
          </div>
        </SearchProvider>
      </PathProvider>
    </UserProvider>
  );
}

export default App;
