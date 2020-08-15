/*import React,{Component} from 'react';

class Items extends Component{
    render(){
       const {items}=this.props;
       const theItems=items.map( item=>{
         return(
             <div key={item.id}>
             <div>id : {item.id}</div>
             <div>name : {item.name}</div>
             <div>age : {item.age}</div>
             <div>height : {item.height}</div>
             <div>ــــــــــــــــــــ</div>
             </div>
         )
       }
       )
       return(
           <div>{theItems}</div>
       )
    }
}
export default Items;
*/
/*to App js
class App extends Component{
  state={items:[
    {id:1, name:'Jamil', age:3, height:95},
    {id:2, name:'Masa', age:6, height:110},
    {id:3, name:'Najla', age:31, height:166},
    {id:4, name:'Mohannad', age:37, height:177},
    {id:5, name:'Mohammad', age:1, height:35},
  ]
}
     render(){
        return(
                   <div>
                     List Items
                     <Items items={this.state.items} />
                   </div>
              );
     }
}
export default App;

*/
/*
class App extends Component{
  state={
    name:'',
  }
  handleChange=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.name)
  }
 
     render(){
        return(
                  <div className="App">
                     Form Item
                     <form onSubmit={this.handleSubmit}>
                     <input type='text' onChange={this.handleChange}/>
                     <button>Submit</button>
                     </form>
                     {this.state.name}
                   </div> 
                   <div className="App">
                   Form Item
                   <form onSubmit={this.handleSubmit}>
                   <select onChange={this.handleChange}>
                      <option value='Mohannad'>Mohannad</option>
                      <option value='Najla'>Najla</option>
                      <option value='Masa'>Masa</option>
                      <option value='Jamil'>Jamil</option>
                      </select>
                   <input type='submit' value='send'/>
                   </form>
                   {this.state.name}
                 </div> 
              );
     }
}
export default App; */