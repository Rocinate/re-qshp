import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import Edit from './pages/Edit';
import Article from './pages/Article';

import TopBar from './components/TopBar'
import useAppStateContext, { AppContext } from './state';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/main',
    component: Main
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/edit',
    component: Edit
  },
  {
    path: '/article',
    component: Article
  }
]

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TopBar></TopBar>
      <Routes>
        {
          routes.map(({ path, component: Component }) =>
            <Route
              path={path}
              element={<Component />}
              key={path}
            />
          )
        }
      </Routes>
    </QueryClientProvider>
  )
}

export default App
