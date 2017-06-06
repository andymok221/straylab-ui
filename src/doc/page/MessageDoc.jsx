import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  Message,
  Table
} from '../../';

class MessageDoc extends Component {
  render() {
    return (
      <div className="main-content__doc">
        <h1>Message</h1>
        <p>A component for notifying users.</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { Message } from 'straylab-ui';`}</SyntaxHighlighter>
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
                primary
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                Boolean
              </Table.Cell>
              <Table.Cell>
                Use it for primary styling
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                secondary
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                Boolean
              </Table.Cell>
              <Table.Cell>
                Use it for secondary styling
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                color
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                String
              </Table.Cell>
              <Table.Cell>
                Use it for other color styling
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                header
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                String
              </Table.Cell>
              <Table.Cell>
                Header of message
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                className
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                String
              </Table.Cell>
              <Table.Cell>
                Custom class to be added to message
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <h2>Color</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Message header="Default">Content</Message>`}</SyntaxHighlighter>
        <Message header="Default">Content</Message>
        <SyntaxHighlighter language="html" style={github}>{`<Message primary header="Primary">Content</Message>`}</SyntaxHighlighter>
        <Message primary header="Primary">Content</Message>
        <SyntaxHighlighter language="html" style={github}>{`<Message secondary header="Secondary">Content</Message>`}</SyntaxHighlighter>
        <Message secondary header="Secondary">Content</Message>
        <SyntaxHighlighter language="html" style={github}>{`<Message color="red" header="Red">Content</Message>`}</SyntaxHighlighter>
        <Message color="red" header="Red">Content</Message>
        <SyntaxHighlighter language="html" style={github}>{`<Message color="green" header="Green">Content</Message>`}</SyntaxHighlighter>
        <Message color="green" header="Green">Content</Message>
      </div>
    );
  }
}

export default MessageDoc;