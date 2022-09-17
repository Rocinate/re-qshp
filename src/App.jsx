import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import routes from "@/route";

import TopBar from "./components/TopBar";
import useAppStateContext, { AppContext } from "./state";

const Layout = () => {
  const location = useLocation();

  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);
  return (
    <>
      { location.pathname == '/login' ? <></> : <TopBar />}
      <main className="relative" style={{ height: location.pathname == '/login' ? '100%' : 'calc(100% - 64px)'}}>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route path={path} element={<Component />} key={path} />
          ))}
        </Routes>
      </main>
    </>
  );
};

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
}

export default App;
