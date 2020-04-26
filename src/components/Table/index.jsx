import React from 'react';
import {Link} from 'react-router-dom';
import {Table, Button, Media, ButtonGroup} from 'reactstrap';

const TableComponent = ({documents, headers, linkTo, onDelete, primaryKey = 'id'}) => (
    <Table striped bordered responsive>
        <thead>
            <tr>
                {headers && headers.map(header => (<th>{header.label}</th>))}
                {linkTo && (<th> Acciones </th>)}
            </tr>
        </thead>
        <tbody>
            {documents && headers && documents.map(document => (
                <tr>
                    {headers.map(header => (
                        <td>
                            {header.media && (<Media src={document[header.key]}/>)}
                            {!header.media && document[header.key]}
                        </td>
                    ))}
                    <td>
                        <ButtonGroup>
                        {linkTo && (<Button size="sm" color="primary" tag={Link} to={`${linkTo}/${document[primaryKey]}`}> Editar </Button>)}
                        {onDelete && (<Button size="sm" onClick={() => onDelete(document[primaryKey])}> Borrar </Button>)}
                        </ButtonGroup>
                    </td>
            </tr>
            ))}
        </tbody>
    </Table>
);

export default TableComponent;
