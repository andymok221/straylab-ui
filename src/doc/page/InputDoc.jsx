import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  Input,
  Table
} from '../../';

class InputDoc extends Component {
  render() {
    return (
      <div className="main-content__doc">
        <h1>Input</h1>
        <p>A input field for user to input texts.</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { Input } from 'straylab-ui';`}</SyntaxHighlighter>
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
                id
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                String
              </Table.Cell>
              <Table.Cell>
                The id of input field
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                name
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                String
              </Table.Cell>
              <Table.Cell>
                The name of input field
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
                The size of input field
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                type
              </Table.Cell>
              <Table.Cell>text</Table.Cell>
              <Table.Cell>
                String
              </Table.Cell>
              <Table.Cell>
                The type of input field
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                required
              </Table.Cell>
              <Table.Cell><code className="inline">false</code></Table.Cell>
              <Table.Cell>
                Boolean
              </Table.Cell>
              <Table.Cell>
                Indicate if input field is required
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
                Custom class to be added to input field
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                defaultValue
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                Any
              </Table.Cell>
              <Table.Cell>
                Default value of input field
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                value
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                Any
              </Table.Cell>
              <Table.Cell>
                Value of input field
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                focus
              </Table.Cell>
              <Table.Cell><code className="inline">false</code></Table.Cell>
              <Table.Cell>
                Boolean
              </Table.Cell>
              <Table.Cell>
                Indicate if input field is in state of focused
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                error
              </Table.Cell>
              <Table.Cell><code className="inline">false</code></Table.Cell>
              <Table.Cell>
                Boolean
              </Table.Cell>
              <Table.Cell>
                Indicate if input field is in state of error
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                disabled
              </Table.Cell>
              <Table.Cell><code className="inline">false</code></Table.Cell>
              <Table.Cell>
                Boolean
              </Table.Cell>
              <Table.Cell>
                Indicate if input field is disabled
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                onChange
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                Function
              </Table.Cell>
              <Table.Cell>
                Function to be called when value of input field changes
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <h2>State</h2>
        <h3>Normal</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Input placeholder="Normal"/>`}</SyntaxHighlighter>
        <p>
          <Input placeholder="Normal"/>
        </p>
        <h3>Focus</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Input placeholder="Focus" focus />`}</SyntaxHighlighter>
        <p>
          <Input placeholder="Focus" focus />
        </p>
        <h3>Error</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Input placeholder="Error" error />`}</SyntaxHighlighter>
        <p>
          <Input placeholder="Error" error />
        </p>
        <h3>Disabled</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Input placeholder="Disabled" disabled />`}</SyntaxHighlighter>
        <p>
          <Input placeholder="Disabled" disabled />
        </p>
        <h2>Size</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Input size="sm" placeholder="Small" />`}</SyntaxHighlighter>
        <p>
          <Input size="sm" placeholder="Small" />
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Input size="md" placeholder="Medium" />`}</SyntaxHighlighter>
        <p>
          <Input size="md" placeholder="Medium" />
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Input size="lg" placeholder="Large "/>`}</SyntaxHighlighter>
        <p>
          <Input size="lg" placeholder="Large "/>
        </p>
      </div>
    );
  }
}

export default InputDoc;