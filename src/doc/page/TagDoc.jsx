import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import { Tag, Button, Table } from '../../';

class TagDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offCanvas: false,
    };
  }
  render() {
    return (
      <div className="main-content__doc">
        <h1>Tag</h1>
        <p>A simple tag</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>
          {"import { Tag } from 'straylab-ui';"}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Default</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>primary</Table.Cell>
              <Table.Cell />
              <Table.Cell>Boolean</Table.Cell>
              <Table.Cell>Use it for primary styling</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>secondary</Table.Cell>
              <Table.Cell />
              <Table.Cell>Boolean</Table.Cell>
              <Table.Cell>Use it for secondary styling</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell />
              <Table.Cell>string</Table.Cell>
              <Table.Cell>The color of the tag</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>className</Table.Cell>
              <Table.Cell />
              <Table.Cell>String</Table.Cell>
              <Table.Cell>Custom class to be added to input field</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <h2>Demo</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Tag>
  Something to be put
</Tag>`}</SyntaxHighlighter>
        <p>
          <Tag>Something to be put</Tag>
          <Tag primary>Something to be put</Tag>
          <Tag secondary>Something to be put</Tag>
          <Tag color="green">Something to be put</Tag>
          <Tag color="red">Something to be put</Tag>
        </p>
      </div>
    );
  }
}

export default TagDoc;
