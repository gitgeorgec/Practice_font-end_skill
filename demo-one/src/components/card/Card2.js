import React, { Component } from 'react'

class Card extends Component{
    style={
        display:"flex",
        flexDirection:"column",
        flex:"0 0 35%",
        margin:"0 8%",
        background:"black",
        color:"white",
        padding: "25px"
    }

    render(){
        return(
            <div style={this.style}>
                <div style={{fontSize:"1.4vw"}}>{this.props.title}</div>
                <hr style={{width:"100%"}}/>
                <p style={{fontSize:"1vw"}}>
                    {this.props.time} <br/>
                    {this.props.content}
                </p>
            </div>
        )
    }
}

export default Card