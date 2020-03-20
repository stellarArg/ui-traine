import React from 'react';
import map from 'lodash/map';
import get from 'lodash/get';
import {Link} from 'react-router-dom';
import Table from 'reactstrap/lib/Table';

export default ({data, columns, headers, onSort}) => (
    <Table striped size="sm" hovered>
        <tr>
            {map(headers, header => (
                <th onClick={() => onSort(header)}>
                    {header.label}
                    {header.sort === 'desc' &&  (<i className="glyphicon glyphicon-menu-down float-right"/>)}
                    {header.sort !== 'desc' && (<i className="glyphicon glyphicon-menu-up float-right"/>)}
                </th>
            ))}
        </tr>
        {map(data, d => (
            <tr key={d.id}>
                {map(columns, column => {
                    if(column === 'actions') {
                        return (<td><Link to={`/country/edit/${d.code}`}> Edicion </Link></td>);
                    }
                    
                    return (<td>{get(d, column)}</td>);
                })}
            </tr>
        ))}
    </Table>
)