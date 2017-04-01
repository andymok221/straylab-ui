import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  Label,
  Table
} from '../../';

class LabelDoc extends Component {
  render() {
    return (
      <div className="main-content__doc">
        <h1>Label</h1>
        <p>A caption.</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { Label } from 'straylab-ui';`}</SyntaxHighlighter>
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
                size
              </Table.Cell>
              <Table.Cell>sm</Table.Cell>
              <Table.Cell>
                String
              </Table.Cell>
              <Table.Cell>
                Size of label
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
                Custom class to be added to label
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                htmlFor
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                String
              </Table.Cell>
              <Table.Cell>
                The <code className="inline">for</code> attribute
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <h2>Color</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Label>Content</Label>`}</SyntaxHighlighter>
        <p>
          <Label>Content</Label>
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Label primary>Content</Label>`}</SyntaxHighlighter>
        <p>
          <Label primary>Content</Label>
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Label secondary>Content</Label>`}</SyntaxHighlighter>
        <p>
          <Label secondary>Content</Label>
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Label color="red">Content</Label>`}</SyntaxHighlighter>
        <p>
          <Label color="red">Content</Label>
        </p>
        <h2>Size</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Label size="sm">Small</Label>`}</SyntaxHighlighter>
        <p>
          <Label size="sm">Small</Label>
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Label size="md">Medium</Label>`}</SyntaxHighlighter>
        <p>
          <Label size="md">Medium</Label>
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Label size="lg">Large</Label>`}</SyntaxHighlighter>
        <p>
          <Label size="lg">Large</Label>
        </p>
      </div>
    );
  }
}

export default LabelDoc;