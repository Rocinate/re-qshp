import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import Cookie from 'js-cookie'

import useAppStateContext, { AppContext } from "./state";
import Layout from "./pages/Layout"


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
      <AppContext.Provider value={[state, dispatch]}>
        <Layout />
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
