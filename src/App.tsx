import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Admin, Details, Home, Login, Movies, Series, SingUp, Users } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"
// import { UsersProvider } from './context/Users';
import { AuthProvider } from './context/Auth';
import { Wrapper } from './components';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SingUp} />
          <Route path="/admin" component={Admin} />
          <Route path="/users" component={Users} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/details" component={Details} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
