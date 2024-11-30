import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import Frontpage from './Pages/Frontpage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />}>
        <Route index element={<Frontpage />} />
        
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
