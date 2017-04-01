import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  Radio,
  Table
} from '../../';

class RadioDoc extends Component {
  render() {
    return (
      <div className="main-content__doc">
        <h1>Radio</h1>
        <p>A radio input allowing user to select one option.</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { Radio } from 'straylab-ui';`}</SyntaxHighlighter>
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
                string
              </Table.Cell>
              <Table.Cell>
                The id of radio input
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                name
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                string
              </Table.Cell>
              <Table.Cell>
                The name of radio input
              </Table.Cell>
            </Table.Row>
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
                checked
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                Boolean
              </Table.Cell>
              <Table.Cell>
                Indicate the state of radio input
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                value*
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                String
              </Table.Cell>
              <Table.Cell>
                The value of radio input
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
                Whether the radio input is disabled
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
                Whether the radio input is required
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
                The function to be called when clicking radio input
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                label
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                String
              </Table.Cell>
              <Table.Cell>
                The label of radio input
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <h2>Color</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Radio label="Default" value="default" />`}</SyntaxHighlighter>
        <p>
          <Radio label="Default" value="default" />
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Radio label="Primary" primary value="primary" />`}</SyntaxHighlighter>
        <p>
          <Radio label="Primary" primary value="primary" />
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Radio label="Secondary" secondary value="secondary" />`}</SyntaxHighlighter>
        <p>
          <Radio label="Secondary" secondary value="secondary" />
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Radio label="Secondary" secondary value="secondary" />`}</SyntaxHighlighter>
        <p>
          <Radio color="red" label="Red" value="red" />
        </p>
        <h2>Size</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Radio size="sm" label="Small" value="small" />`}</SyntaxHighlighter>
        <p>
          <Radio size="sm" label="Small" value="small" />
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Radio size="md" label="Medium" value="medium" />`}</SyntaxHighlighter>
        <p>
          <Radio size="md" label="Medium" value="medium" />
        </p>
        <SyntaxHighlighter language="html" style={github}>{`<Radio size="lg" label="Large" value="large" />`}</SyntaxHighlighter>
        <p>
          <Radio size="lg" label="Large" value="large" />
        </p>
        <h2>Disabled</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Radio disabled label="Default" value="default" />`}</SyntaxHighlighter>
        <p>
          <Radio disabled label="Default" value="default" />
        </p>
      </div>
    );
  }
}

export default RadioDoc;
