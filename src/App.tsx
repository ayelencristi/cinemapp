import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Admin, Details, Home, Login, Movies, Series, SingUp, Users } from './pages';
import { AuthProvider } from './context/Auth';
import { UsersProvider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"


const App = () => {
  return (
    <UsersProvider>
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
    </UsersProvider>
  );
}

export default App;
