import React, { Component } from 'react';
import Friend from './Friend';

class FriendPage extends Component {
    state = {
        mass: [
            {
                id: 1,
                name: "Кіцька",
                image: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2009/11/17/1258452169650/Hippopotamus-attacks-Croc-003.jpg?width=700&quality=85&auto=format&fit=max&s=390c2e232b51e9e183a3970cc6d3014f"
            },
            {
                id: 2,
                name: "Василь",
                image: "https://img.pravda.ru/image/preview/article/1/0/6/1424106_five.jpeg"
            }
        ]
    }
    render() {
        const {mass} = this.state;
        const content = mass.map((item) =>
            <Friend key={item.id} name={item.name} image={item.image}/>
        )
        return (
            <>
                <h1>Списко друзів</h1>
                <div>
                    {content}
                    {/* <Friend name="Павло" /> */}
                </div>
            </>
        );
    }
}

export default FriendPage;