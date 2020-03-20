import React from 'react';
import map from 'lodash/map';
import get from 'lodash/get';
import {Link} from 'react-router-dom';
import Button from 'reactstrap/lib/Button';
import Table from 'reactstrap/lib/Table';

export default ({data, columns, headers, onSort}) => (
    <Table bordered size="sm" hovered dark>
        <thead>
        <tr>
            {map(headers, header => (
                <th onClick={() => onSort(header)}>
                    {header.label}
                    {header.sort === 'desc' &&  (<i className="fas fa-angle-up float-right"/>)}
                    {header.sort !== 'desc' && (<i className="fas fa-angle-down float-right"/>)}
                </th>
            ))}
        </tr>
        </thead>
        <tbody>
            {map(data, d => (
                <tr key={d.id}>
                    {map(columns, column => {
                        if(column === 'actions') {
                            return (<td><Button tag={Link} color="primary" to={`/country/edit/${d.code}`}> Edicion </Button></td>);
                        }
                        
                        return (<td>{get(d, column)}</td>);
                    })}
                </tr>
            ))}
        </tbody>
    </Table>
)