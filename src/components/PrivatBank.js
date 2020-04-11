import React, { Component } from 'react';
import axios from 'axios';

class PrivatBank extends Component {
    state = {
        valuta: [],
        url: "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
    }

    componentDidMount() {
        axios.get(this.state.url)
            .then(res => {
                const responseData = res.data;
                this.setState({ valuta: responseData });
            })
    }

    render() {
        console.log("---VALUTA----", this.state);
        const { valuta } = this.state;
        const content = valuta.map((valuta) =>
            <tr>
                <th scope="row">{valuta.base_ccy}</th>
                <td>{valuta.buy}</td>
                <td>{valuta.ccy}</td>
                <td>{valuta.sale}</td>
            </tr>
        );
        return (
            <>
                <h1>
                    Приват банк АПІ
                </h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">base_ccy</th>
                            <th scope="col">buy</th>
                            <th scope="col">ccy</th>
                            <th scope="col">sale</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </>
        );
    }
}

export default PrivatBank;