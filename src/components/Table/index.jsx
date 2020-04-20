import React from 'react';
import {Link} from 'react-router-dom';

const Table = ({documents, headers, linkTo}) => (
    <table>
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
                        <td> {document[header.key]}</td>
                    ))}
                    {linkTo && (<td> <Link to={`${linkTo}/${document.id}`}> Editar </Link> </td>)}
            </tr>
            ))}
        </tbody>
    </table>
);

export default Table;
