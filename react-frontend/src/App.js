import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import Sidebar from './Layout/Sidebar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />}>
        <Route index element={<Sidebar />}/>
      </Route>
    </>
  )
)
function App() {
  return <RouterProvider router={router} />;
}

export default App;