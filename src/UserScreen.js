import React from 'react'
import './App.css';
class UserScreen extends React.Component{
    render(){
        return( 
            <div className="main">
                    <div className="user-data">
                        <span>Welcome to TIC TAC TOE</span>
                        <label>PLAYER1</label>
                        <input type="text" id="player1" name="player1"></input>
                        <label>PLAYER2</label>
                        <input type="text" id="player2" name="player2"></input>
                        <button className="continue" >Continue</button>
                    </div>
            </div>
            
        )
    }
}

export default UserScreen;