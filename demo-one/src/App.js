import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar'
import Card from './components/card/Card'
import Card2 from './components/card/Card2'
import Button from './components/button/Button'

class App extends Component {

  style={
    background:"url(https://images.unsplash.com/photo-1511424323602-d3c1a4138056?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) fixed center no-repeat ",
    backgroundSize:"cover",
    minHeight:"100%",
    height:"100vh",
    width:"100%",
    display:"block"
  }

  render() {
    return (
      <React.Fragment>
        <div style={this.style}>
          <Navbar/>
          <div>""</div>
          <div style={{display:"flex", margin: "8% 0"}}>
            <div  style={{display:"flex", margin: "5% 0", flex:"0 0 35%", flexDirection:"column", justifyContent:"center"}}>
            <div>
              <Card title="美麗重新定義" content="「Perfect Corp.玩美移動」透過尖端AR與AI科技，打造出女性行動化妝包「玩美彩妝」、自拍神器「玩美相機」，分享美麗生活的社群「玩美圈」，突破美的疆界、創新玩美體驗！美麗重新定義"/>
            </div>
            <Button content="美妝APP"/>
            <div>
              <Card2 title="最新消息與活動" time="DEC 21, 2018" content="玩美移動推出全新App—「玩美秀」，手機就能剪輯出精彩影片，即時與社群好友分享 "/>
            </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
