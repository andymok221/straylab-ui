import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  Progress,
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
        <h1>Progress</h1>
        <p>A component for indicating a progress.</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { Progress } from 'straylab-ui';`}</SyntaxHighlighter>
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
        <h2>Color</h2>
        <h3>Default</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Progress percentage={50} />`}</SyntaxHighlighter>
        <Progress percentage={50} />
        <h3>Primary</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Progress primary percentage={50} />`}</SyntaxHighlighter>
        <Progress primary percentage={50} />
        <h3>Secondary</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Progress secondary percentage={50} />`}</SyntaxHighlighter>
        <Progress secondary percentage={50} />
        <h3>Red</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Progress color="red" percentage={50} />`}</SyntaxHighlighter>
        <Progress color="red" percentage={50} />
      </div>
    );
  }
}

export default ProgressDoc;
