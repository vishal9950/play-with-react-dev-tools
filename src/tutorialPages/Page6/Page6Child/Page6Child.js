import React from 'react';
import './Page6Child.css';
import south_park_me from '../../../assets/icons/south_park_me.png';

class Page6Child extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            message: 'This is state in the same component'
        }
    }

    render() {
        return (
            <div>
                <p><img className="Page6Child-img" src={south_park_me} alt="south" /></p>
            </div>
        )
    }
}

export default Page6Child;
