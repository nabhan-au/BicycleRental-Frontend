import Instance from "./Instance"
import React, { useState } from 'react';
import { Table } from "react-bootstrap";

const TableComp = ( {instances} ) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Brand</th>
                    <th>Type</th>
                    <th>Seat</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {instances.map((instance) => (
                    <Instance key={instance.id} instance={instance}/>
                ))}
            </tbody>
            
        </Table>
    )
}

export default TableComp