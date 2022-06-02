import React, { Component } from 'react';
import { connect } from 'react-redux';

class String extends Component {
    state = {  } 

    handleClickAdd = () => {
        this.props.add(10);
    }

    handleClickSub = () => {
        this.props.sub(1);
    }

    render() { 
        return (
            <React.Fragment>
                <h3>String:</h3>
                <div>{this.props.string}</div>
                <button onClick={this.handleClickAdd}>add</button>
                <button onClick={this.handleClickSub}>sub</button>
            </React.Fragment>
        );
    }
}
 
const mapStateToProps = (state, props) => {
    return {
        string: state.string,
    }
};

const mapDispatchToProps = {
    add: (x) => {
        return {
            type: "add",
            value: x,
        }
    },
    sub: (x) => {
        return {
            type: "sub",
            value: x,
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(String);