import React from 'react';

export default class AutoCompleteText extends React.Component {
    constructor (props){
        super(props);
        this.items = [
            'Kyrgyzstan',
            'Kazakhstan',
            'Uzbekistan',
            'Tajikistan'
        ];
    }
    render() {
        return (
            <div>
                <input type='text' placeholder="Search Asian Country" />
                <ul>
                    {this.items.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        )
    }
}