import React from 'react';
import { Table } from 'native-base';

export const Example = () => {
  return (
    <>
      <Table>
        <Table.Header>
          <Table.HeaderData>Name</Table.HeaderData>
          <Table.HeaderData>Address</Table.HeaderData>
          <Table.HeaderData>Age</Table.HeaderData>
        </Table.Header>
        <Table.Row>
          <Table.Data>Ankit</Table.Data>
          <Table.Data>Gujarat</Table.Data>
          <Table.Data> 21</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>Viraj</Table.Data>
          <Table.Data>Maharashtra</Table.Data>
          <Table.Data>24</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>Sanket</Table.Data>
          <Table.Data>Banglore</Table.Data>
          <Table.Data>26</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>Mayank</Table.Data>
          <Table.Data>Nashik</Table.Data>
          <Table.Data>21</Table.Data>
        </Table.Row>
      </Table>
    </>
  );
};
