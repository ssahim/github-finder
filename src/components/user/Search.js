import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {

    state = {
        text:''
    }

    static propTypes = {
        searchUser: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    }
    onSubmit=e=>{
        e.preventDefault();
        if(this.state.text===''){
            this.props.setAlert('please enter something','light');
        }
        else{
        this.props.searchUser(this.state.text);
        this.setState({ text: ''});

    }
    }

    onChange=(e)=>this.setState({[e.target.name]:e.target.value});


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search user..." value={this.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {this.props.showClear && <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>}
                
            </div>
        )
    }
}

export default Search