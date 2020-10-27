import React, {Component} from 'react';
import Title from "../../Common/Title";
import UserLogin from "./UserLogin";

class Home extends Component {
    render() {
        return (
            <div>
                <Title/>
                <UserLogin/>
            </div>
        );
    }
}

export default Home;