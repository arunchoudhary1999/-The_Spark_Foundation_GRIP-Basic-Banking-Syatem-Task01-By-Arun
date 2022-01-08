import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavigationBar/Navbar';
import Userdets from './Components/Userdetails/User-content';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/HomePage/home';
import Transactions from './Components/TransactionHistory/Transactions';
import Transfer from './Components/TransferAmount/Transfer';
import Successport from './Components/SuccessPortal/success';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/users' component={Userdets} />
          <Route path='/transactions' component={Transactions} />
          <Route path='/transfer/:id' component={Transfer} />
          <Route path='/success' component={Successport} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
