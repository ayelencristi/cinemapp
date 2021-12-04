import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Admin, Details, Home, Login, Movies, Series, SingUp } from './pages';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SingUp} />
        <Route path="/admin" component={Admin} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route path="/details" component={Details} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
