import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  Pagination,
  Table
} from '../../';

class PaginationDoc extends Component {
  render() {
    return (
      <div className="main-content__doc">
        <h1>Pagination</h1>
        <p>A component for generating pagination</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { Pagination } from 'straylab-ui';`}</SyntaxHighlighter>
        <h2>Props</h2>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                Name
              </Table.HeaderCell>
              <Table.HeaderCell>
                Default
              </Table.HeaderCell>
              <Table.HeaderCell>
                Type
              </Table.HeaderCell>
              <Table.HeaderCell>
                Description
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          </Table.Body>
        </Table>
        <h2>State</h2>
        <h3>Active</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Pagination>
  <Pagination.Item>Prev</Pagination.Item>
  <Pagination.Item active>1</Pagination.Item>
  <Pagination.Item>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item>Next</Pagination.Item>
</Pagination>`}</SyntaxHighlighter>
        <Pagination>
          <Pagination.Item>Prev</Pagination.Item>
          <Pagination.Item active>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>Next</Pagination.Item>
        </Pagination>
        <h3>Disabled</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Pagination>
  <Pagination.Item>Prev</Pagination.Item>
  <Pagination.Item disabled>...</Pagination.Item>
  <Pagination.Item>5</Pagination.Item>
  <Pagination.Item>6</Pagination.Item>
  <Pagination.Item>Next</Pagination.Item>
</Pagination>`}</SyntaxHighlighter>
        <Pagination>
          <Pagination.Item>Prev</Pagination.Item>
          <Pagination.Item disabled>...</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Item>6</Pagination.Item>
          <Pagination.Item>Next</Pagination.Item>
        </Pagination>
      </div>
    );
  }
}

export default PaginationDoc;
