import React,{Component} from 'react';
import axios from 'axios';
class Blog extends Component{
    state={
        users : []
    }
    componentDidMount(){
        console.log(this.props)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            this.setState({
                users: res.data
            })
        })
    }
    render(){
        const {users}=this.state
        const userList = users.map(user=>{
            return(
                <div key={user.id}>
                    <div className='content'>
            <div>Name : {user.name}</div> 
            <div>user Name : {user.username}</div>
            <div>City : {user.address.city}</div>
                    </div>

                </div>
            )
        })
        return(
            <div>
        <h2>Blog</h2>
        <p>this is Blog section</p>
        <div>
        {userList}
        </div>
        </div>
        )
    }
}
export default Blog;