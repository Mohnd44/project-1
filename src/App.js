import React, { Component } from 'react';
import './App.css';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Nav from './Components/Nav';
//import Items from './Components/Items';
class App extends Component{
       render(){
        return(
                   <BrowserRouter>
                   <div className="App">
                     <Nav />
                     <Switch>
                     <Route exact path='/'component={Home}/>
                     <Route path='/about'component={About}/>
                     <Route path='/blog'component={Blog}/>
                     </Switch>
                 </div> 
                   </BrowserRouter>
              );
     }
}
export default App;