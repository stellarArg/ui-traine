import React, {PureComponent} from 'react';
import Axios from 'axios';
import map from 'lodash/map';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentView: 1
    }
  }
  async endpoint() {
    const {data} = await Axios.get('http://localhost:5000/api/countries');
    this.setState(() => ({data: data, currentView: 1}));
  }

  async endpoint2() {
    const {data} = await Axios.get('http://localhost:5000/api/cars');
    this.setState(() => ({data: data, currentView: 2}));
  }

  render() {
    const {data, currentView} = this.state;
    return (
     <div>
       <h3>Tabla de datos </h3>
       <button onClick={() => this.endpoint()}> BOTONEAME Paises</button>
       <button onClick={() => this.endpoint2()}> BOTONEAME Autos </button>
       <hr/>
        <table>
          {currentView === 1 && map(data, country => (
            <tr key={country.id}>
              <td>
                {country.name}
              </td>
              <td>
                {country.code}
              </td>
            </tr>
          ))}

          {currentView === 2 && map(data, country => (
            <tr key={country.id}>
              <td>
                {country.marca}
              </td>
              <td>
                {country.modelo}
              </td>
              <td>
                {country.modelo}
              </td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default App;
