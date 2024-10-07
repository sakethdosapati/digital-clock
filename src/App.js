import React,{Component} from "react";
import "./App.css"

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            time : new Date().toLocaleTimeString(),
        }
    }
    componentDidMount(){
        this.IntervalId = setInterval(() => {
            this.setState({time:new Date().toLocaleTimeString()})
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.IntervalId);
    }
    render(){
        return(
            <>
            <div id="main-div">
               <h1 id="digi">{this.state.time}</h1>
            </div>
            </>
        )
    }
}
export default App;