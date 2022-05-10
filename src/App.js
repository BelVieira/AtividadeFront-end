import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{

  state = {
    chave: '',
    nomeCientifico:'',
    nomePopular:'',
    
  }

  //sum = () => {
  //var result = parseInt(this.state.number1) + parseInt(this.state.number2);
  //this.setState({result});
  //}
inserir = () => {
  console.log(this.state);
}
render(){
  return (
    <div>
        <label> chave: </label>
          <input type = "text" value={this.state.chave} onChange = {(e) => {this.setState({chave: e.target.value})}} />
          
          <br/>
          <label> nomeCientifico: </label>
          <input type = "text" value={this.state.nomeCientifico} onChange = {(e) => {this.setState({nomeCientifico: e.target.value})}} />
      
          <br/>
          <label> nomePopular: </label>
          <input type = "text" value={this.state.nomePopular} onChange = {(e) => {this.setState({nomePopular: e.target.value})}} />
          
          <br/>
          <button onClick = {this.inserir}>inserir</button>
         
         <br/>
       
    </div>
    )
  }   
}