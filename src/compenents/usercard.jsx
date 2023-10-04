import React, { Component } from 'react';

class UserCard extends Component{
    render(){
        return <div id='user'>
            <img src={this.props.img} alt="" />
            <h2>{this.props.nom} {this.props.prenom}</h2>
            <h5>{this.props.email}</h5>
        </div>
    }
    
}

export default UserCard;