import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import Cookie from 'js-cookie'

import useAppStateContext, { AppContext } from "./state";
import Layout from "./pages/Layout"
import moment from "./utils/moment"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  const [state, dispatch] = useAppStateContext()

  useEffect(() => {
    const baseCache = localStorage.getItem("base_cache")

    if (!baseCache) {
      return;
    }

    if (moment(baseCache.expire).isBefore(moment().add(1, 'h'))) {
      // refreshCookie()
    }
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
