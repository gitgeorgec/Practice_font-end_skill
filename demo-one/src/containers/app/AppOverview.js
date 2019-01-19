import React, { Component } from 'react';
import ButtonRound from '../../components/button/ButtonRound';
import Card from '../../components/card/Card'

class AppOverview extends Component {
  style={
    background:"url(https://images.unsplash.com/photo-1523260349522-b9d156a677c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) fixed center no-repeat ",
    backgroundSize:"cover",
    minHeight:"100%",
    height:"100vh",
    width:"100%",
    display:"block",
    borderTop:"1px solid black"
  }
  render() {
    return (
      <div style={this.style} className="container">
        <div  style={{display:"flex", margin: "8% 0"}}>
          <Card title="美妝應用及時尚社群服務" content="『 Perfect Corp. 玩美移動』透過創新的自拍神器『玩美相機』、虛擬美妝工具『玩美彩妝』，以及結合美妝時尚社群與移動商務的『玩美圈』，帶給你全新的移動玩美體驗！"/>
          <ButtonRound content="A"/>
          <ButtonRound content="B"/>
          <ButtonRound content="C"/>
          <ButtonRound content="D"/>
          <ButtonRound content="E"/>
        </div>
      </div>
    );
  }
}

export default AppOverview;