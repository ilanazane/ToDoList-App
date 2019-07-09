import React from 'react';
import './App.css';
import {Component} from 'react';
import ReactDOM from 'react-dom';



class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state={items:[],text:''};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  render(){
    //console.log("you are here");
    return(
      <div>
          <div class="Todo-header">
             <h3>The To-Do List</h3>
          </div>

          <TodoList items={this.state.items} />
             <form onSubmit={this.handleSubmit}>
             <label htmlFor="new-todo">
                Enter a Task!
             </label>
               <input
                 id="new-todo"
                 onChange={this.handleChange}
                 value={this.state.text}
                />
               <button>
                 Add Another{/*#{this.state.items.length + 1}*/}
               </button>
             </form>
           </div>
         );
       }

       handleChange(e) {
         this.setState({ text: e.target.value });
       }

       handleSubmit(e) {
         e.preventDefault();
         if (!this.state.text.length) {
           return;
         }
         const newItem = {
           text: this.state.text,
           id: Date.now()
         };
         this.setState(state => ({
           items: state.items.concat(newItem),
           text: ''
         }));
       }
     }
class TodoList extends React.Component {
       render() {
         return (
           <ul>
             {this.props.items.map(item => (
               <li key={item.id}>{item.text}</li>
             ))}
           </ul>
         );
       }
     }



class App extends React.Component{
  render(){
  return (

    <div className="App">

      <header className="App-header">
        <h1> Ilana Zane</h1>
        <p>
          <div class="Welcome">
            Welcome
          </div>
        </p>

        <a
          className="App-link"
          href="https://github.com/ilanazane"
          target="_blank"
          rel="noopener noreferrer"
          >

          <input type="button" value= "visit my github!"/>
      </a>

      <div class="TodoApp">
        <TodoApp />
      </div>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>

          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root"></div>
      </header>
    </div>
  );
}
}

export default App;
