import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

import Header from './components/header';
import Form from './components/forms';
import RepoList from './components/repolist';
import User from './components/user/user.js';

class App extends Component {
  state = {
    userInput: "",
    repos: [],
    error: "",
    loading: false,
    usuario:[],
  };

  changeUser = userInput => {
    this.setState({ userInput });
  };

  searchRepoUser = async () => {
    const { userInput } = this.state;
    this.setState({ loading: true });

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${userInput}/repos`
      );
      console.log(repos);
     
      this.searchUsuario();

      this.setState({ repos, error: "", loading: false });
    } catch (error) {
      this.setState({
        error: "User not found :(",
        repos: [],
        loading: false,
        
      });
    }
  };
  searchUsuario = async () => {
    try {
      const { userInput } = this.state;
      const { data: usuario } = await axios.get(
        `https://api.github.com/users/${userInput}`
      );


      this.setState({usuario});

      console.log(usuario);

    } catch (error) {
      
    }
  };



 render(){   
  const { usuario,userInput, repos, error, loading } = this.state;
    return (
     <div>
     <div> 
   
          <div>
   
      <Header></Header>
      <Form
          changeUser={this.changeUser}
          userInput={userInput}
          error={error}
          loading={loading}
          buttonAction={this.searchRepoUser}
       />
     </div>
           
           <div>
            Dados Usuario:
           
           <User  usuario={usuario}/>

           </div>
      <div>
        <div>           
         
          <RepoList repos={repos} />  
        </div>
       </div>
       </div>
       </div>
       
     
      
    
    );
  }

 }


export default App;
