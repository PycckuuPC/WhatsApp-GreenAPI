import Home from './pages/Home';
import Login from './pages/Login';
import './style.scss';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(store => store.user);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
