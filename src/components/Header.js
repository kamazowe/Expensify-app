import React from 'react';
import { Link } from 'react-router-dom';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';

export class Header extends React.Component{
    onClick=()=>{
        this.props.startLogout();
    };
    render(){
        return(
    <header className="header">
        <div className="content-container">
        <div className="header__content">
        <Link className="header__title" to="/"  exact={true}><h1>Expensify</h1></Link>
       
        <button className="button button--link" onClick={this.onClick}>Logout</button>
        </div></div>
    </header>);
    }
}




const mapDispatchToProps = (dispatch)=>({
    startLogout:()=>
    dispatch(startLogout())
});
export default connect(undefined,mapDispatchToProps)(Header);
