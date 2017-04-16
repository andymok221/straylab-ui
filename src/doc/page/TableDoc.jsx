import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  Table
} from '../../';

class ProgressDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offCanvas: false,
    }
  }
  render() {
    return (
      <div className="main-content__doc">
        <h1>Table</h1>
        <p>A traditional table component.</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { Table } from 'straylab-ui';`}</SyntaxHighlighter>
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
            <Table.Row>
              <Table.Cell>
                className
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                String
              </Table.Cell>
              <Table.Cell>
                Custom class to be added to input field
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <h2>Highlight</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Table>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Header1</Table.HeaderCell>
      <Table.HeaderCell>Header2</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Content1</Table.Cell>
      <Table.Cell>Content2</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`}</SyntaxHighlighter>
        <Table highlight>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Header1</Table.HeaderCell>
              <Table.HeaderCell>Header2</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Content1</Table.Cell>
              <Table.Cell>Content2</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default ProgressDoc;
