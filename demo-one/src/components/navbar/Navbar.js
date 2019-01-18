import React, { Component } from 'react'


class Navbar extends Component{
    constructor(props){
        super(props)
        this.state={
            hover:null
        }
    }
    style={
        display:'flex',
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        background:"black",
        color:"white",
        padding:"0 2%",
        boxSizing:"border-box"
    }

    listStyle={
        display:'flex',
        listStyle: "none",
        padding:"0",
        margin:"0",
        justifyContent:"space-around",
        flexGrow:1,
        overflow:"scroll"
    }
    listStyle2={
        width:"100vw",
        display:'flex',
        listStyle: "none",
        padding:"0",
        justifyContent:"space-around",
        flexGrow:1,
        maxWidth:"800px",
        color:"#ffffff"
    }

    MouseEnter=(e)=>{
        this.setState({
            hover:e.target.textContent
        })
    }
    MouseLeave=(e)=>{
        this.setState({
            hover:null
        })
    }

    render(){
        return (
            <div style={{position:"fixed", width:"100%"}} onMouseLeave={this.MouseLeave}>
            <div style={this.style}>
                <div id="logo" style={{flexGrow:1}}><h1>PERFECT</h1></div>
                <ul style={this.listStyle}>
                    <li onMouseEnter={this.MouseEnter}>美妝APP</li>
                    <li onMouseEnter={this.MouseEnter}>科技</li>
                    <li onMouseEnter={this.MouseEnter}>品牌服務</li>
                    <li onMouseEnter={this.MouseEnter}>公司簡介</li>
                </ul>
                <div style={{flexGrow:1, textAlign:"right"}}>app</div>
            </div>
            <div style={{display:"flex", justifyContent:"center", background:"rgba(0,0,0,0.8)"}}>
                {(this.state.hover === "美妝APP")?
                        <ul style={this.listStyle2}>
                        <li>玩美彩妝</li>
                        <li>玩美相機</li>
                        <li>玩美秀</li>
                        <li>玩美甲</li>
                        <li>玩美 Fun</li>
                    </ul>
                :""}
                {(this.state.hover === "科技")?
                <ul style={this.listStyle2}>
                    <li>面部辨識</li>
                    <li>AR 試妝</li>
                    <li>3D實時試妝</li>
                    <li>AR 護膚</li>
                    <li>面部 AI</li>
                </ul>
                :""}
                {(this.state.hover === "品牌服務")?
                <ul style={this.listStyle2}>
                    <li>AR 試妝</li>
                    <li>店內美容顧問</li>
                    <li>網路美容顧問</li>
                    <li>AR 培訓</li>
                    <li>AR 美妝直播</li>
                    <li>品牌數據分析</li>
                    <li>一對一美容顧問</li>
                    <li>微信小程序</li>
                </ul>
                :""}
                {(this.state.hover === "公司簡介")?
                <ul style={this.listStyle2}>
                    <li>關於我們</li>
                    <li>最新消息與活動</li>
                    <li>聯絡我們</li>
                </ul>
                :""}
            </div>
            </div>
        )
    }
}

export default Navbar