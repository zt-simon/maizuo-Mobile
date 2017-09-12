/**
 * Created by dllo on 17/9/11.
 */
import React, {Component} from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
class BodyAll extends Component {
    state = {
        data: []
    }
    componentDidMount () {
        var date = new Date().getTime()
        fetch('api/film/now-playing?__t='+date+'&page=1&count=5',{
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
    render () {
        let List = this.state.data.map((item,index)=>{
            return(
                    <Router key={index.toString()}>
                        <div className="imgAll">
                            <Link to='/'><img className="imgIn" src={item.cover.origin} alt=""/>
                            </Link>
                            <div className="clear">
                                <div className="left">{item.name}
                                    <br/>
                                    <span>{item.cinemaCount}家影院上映{item.watchCount}购票</span>
                                </div>
                                <div className="right">
                                    {item.grade}
                                </div>
                            </div>
                        </div>
                    </Router>
            )
        })
        return(
            <div>
                {List}
            </div>
        )
    }
}
export default BodyAll
