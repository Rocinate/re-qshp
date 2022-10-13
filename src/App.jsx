import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import Cookie from 'js-cookie'

import routes from "@/route";
import useAppStateContext, { AppContext } from "./state";
import TopBar from "./components/TopBar";

const Layout = () => {
  return (
    <>
      <TopBar />
      <main className="relative" style={{ height: 'calc(100% - 4rem)'}}>
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
  const [state, dispatch] = useAppStateContext()

  useEffect(() => {
    // if (Cookie.get("token") === undefined) {
      // window.location.replace("/login")
    // } else {
    // }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{
        ...state,
        dispatch: dispatch
      }}>
        <Layout />
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
