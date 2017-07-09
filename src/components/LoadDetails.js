import React from "react"
import axios from "axios"
import { connect } from "react-redux"



class LoadDetails extends React.Component {
    renderUsers = (users) => {
        return users.map((userItem) => <li>{userItem.email}</li>)         
    }
    render(){
        return (
            <section>
                <button onClick={this.props.getUsers}>GET USERS</button> 
               
                
                {
                    this.props.isLoading && !this.props.isLoaded ? "Loading" : <ul>{this.renderUsers(this.props.users)} </ul>
                }
            </section>  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users:state.users,
        isLoading:state.isLoading,
        isLoaded:state.isLoaded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers:() => {
            dispatch({
                type:"GET_USER",
                payload:axios.get("https://jsonplaceholder.typicode.com/users")
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoadDetails)