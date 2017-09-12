import React, {Component} from 'react'
import { Drawer, List, NavBar } from 'antd-mobile';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css'
import BodyAll from '../components/BodyAll'
import City from '../components/City'
class Home extends Component {
    state = {
        open: false,
    }
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }
    render() {
        const sidebar = (

            <List>
                <List.Item><Link to="/">首页</Link></List.Item>
                <List.Item>影片</List.Item>
                <List.Item>影院</List.Item>
                <List.Item>商城</List.Item>
                <List.Item>我的</List.Item>
                <List.Item>卖座卡</List.Item>
            </List>
        );

        return (<Router>
            <div>
            <NavBar onLeftClick={this.onOpenChange}>
                卖座网
                <div className="address">
                    <Link to='/city'>上海</Link>
                </div>
                <div className="san-out">
                    <img className="san" src={require('../img/三角.png')} alt="#"/>
                </div>
                <div>
                    <img alt="#" className="user" src={require('../img/用户.png')}/>
                </div>
            </NavBar>
            <Drawer className="my-drawer" style={{ minHeight: document.documentElement.clientHeight - 200 }} enableDragHandle contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }} sidebar={sidebar} open={this.state.open} onOpenChange={this.onOpenChange}>
                <Switch>
                    <Route path="/city" component={City}/>
                    <Route exact path="/" component={BodyAll} />
                </Switch>
            </Drawer>
        </div></Router>);
    }

}

export default Home