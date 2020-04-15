import React, {Component} from 'react';
import Axios from 'axios';

import './App.css';

import Title from './components/Title';
import Table from './components/Table';

const fetchCountry = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/country');
    if (status !== 200) {
        return [];
    }
    return data;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: [],
            headers: [
                {
                    label: 'Nombre',
                    key: 'name'
                }, {
                    label: 'Codigo',
                    key: 'code'
                }, {
                    label: 'ID',
                    key: 'id'
                }
            ]
        }
    }

    async componentDidMount() {
        const documents = await fetchCountry();
        this.setState({documents});
    }

    render() {
        const {documents, headers} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <Title title="Hello Country" />
                    <div>
                        <Table {...{documents, headers}} />
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
