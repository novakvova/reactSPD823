import React, { Component } from 'react';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            btnMessage: "Приховати текст", 
            image: "https://static.espreso.tv/uploads/article/183052/images/im578x383-12.png"
        };
        //this.onClickHideText=this.onClickHideText.bind(this);

    }

    // onClickHideText(e) {
    //     e.preventDefault();
    //     //alert("Hello Friend");
    //     this.setState({ btnMessage: "Показати текст" });
    // }

    onClickHideText = (e) => {
        e.preventDefault();
        //alert("Hello Friend");
        this.setState({ btnMessage: "Показати текст", isShow: false });
    }

    onClickShowText = (e) => {
        e.preventDefault();
        //alert("Hello Friend");
        this.setState({ btnMessage: "Приховати текст", isShow: true });
    }


    render() {
        console.log("-----Render Friend-------", this.state);
        console.log("----Friend props---", this.props);
        const { btnMessage, image, isShow } = this.state;
        const {name} = this.props;

        const btnHide = (
            <a href="#" onClick={this.onClickHideText} className="btn btn-primary">{btnMessage}</a>
        );

        const btnShow = (
            <a href="#" onClick={this.onClickShowText} className="btn btn-danger">{btnMessage}</a>
        );
        return (
            <div className="card" style={{ width: '18em' }}>
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                    { isShow ? 
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> : 
                        <div>...</div> 
                        }
                    { isShow ? btnHide : btnShow }
                </div>
            </div>
        );
    }
}

export default Friend;

export const appFriend=()=>{
    alert("dddd");
}