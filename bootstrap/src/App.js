// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import PublicRoutes from './Navigation/PublicRoutes/PublicRoutes';

function App() {
  return (
    <div className="App">
      <PublicRoutes />
    </div>
  );
}

export default App;
