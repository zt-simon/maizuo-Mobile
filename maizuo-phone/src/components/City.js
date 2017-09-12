/**
 * Created by dllo on 17/9/11.
 */
import React, {Component} from 'react'

class City extends Component {
    componentDidMount () {
        var date = new Date().getTime()
        fetch('api/city?__t='+date,{
            method: 'GET'
        })
            .then(response=>{
                return response.json()
            })
            .then(response=>{
                console.log(response)
                this.setState({
                    data:response.data.films
                })
            })
    }
    render() {
        return(
            <div>
                <h1>545</h1>
            </div>
        )
    }
}
export default City