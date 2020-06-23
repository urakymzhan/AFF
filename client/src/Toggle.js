import React, { Component } from 'react';

export default class Toggle extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            isHidden: false,
        }
    }

    toggleIsHidden () {
        this.setState((currentState)=> ({
            isHidden: !currentState.isHidden,
        }));
    }

    render () {
        return (
        <div>
            <button onClick={() => this.toggleIsHidden()}>Button</button>
            {!this.state.isHidden && this.props.text}
        </div>
        );
    }
}


  
