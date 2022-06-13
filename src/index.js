import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
    state = {lat: null, errorMsg: ""}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (pos)=> this.setState({lat: pos.coords.latitude}),
            (err) => this.setState({errorMsg:err.message})
        )
    }

    render(){
        if(!this.state.lat && this.state.errorMsg){
            return <div>Error: {this.state.errorMsg}</div>
        }
        if(this.state.lat && !this.state.errorMsg){
            return <SeasonDisplay lat = {this.state.lat} />
        }
        return <div>Loading...</div>
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')

)