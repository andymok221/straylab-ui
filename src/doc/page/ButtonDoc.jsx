import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  Button,
  Table
} from '../../';

class ButtonDoc extends Component {
  render() {
    return (
      <div className="main-content__doc">
        <h1>Button</h1>
        <p>A button for indicting user action.</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { Button } from 'straylab-ui';`}</SyntaxHighlighter>
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
                className
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                String
              </Table.Cell>
              <Table.Cell>
                Custom class to be added to button
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
                Size of button
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                type
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                String
              </Table.Cell>
              <Table.Cell>
                Type of button
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                onClick
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                Function
              </Table.Cell>
              <Table.Cell>
                The function to be called when clicking button
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <h2>Color</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Button>default</Button>`}</SyntaxHighlighter>
        <p>
          <Button>default</Button>
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Button primary>primary</Button>`}</SyntaxHighlighter>
        <p>
          <Button primary>primary</Button>
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Button secondary>secondary</Button>`}</SyntaxHighlighter>
        <p>
          <Button secondary>secondary</Button>
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Button color="red">red</Button>`}</SyntaxHighlighter>
        <p>
          <Button color="red">red</Button>
        </p>
        <h2>Size</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Button size="sm" primary>small</Button>`}</SyntaxHighlighter>
        <p>
          <Button size="sm" primary>small</Button>
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Button size="md" primary>medium</Button>`}</SyntaxHighlighter>
        <p>
          <Button size="md" primary>medium</Button>
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Button size="lg" primary>large</Button>`}</SyntaxHighlighter>
        <p>
          <Button size="lg" primary>large</Button>
        </p>
        <h2>Button Group</h2>
        <p>Work In Progress...</p>
      </div>
    );
  }
}

export default ButtonDoc;