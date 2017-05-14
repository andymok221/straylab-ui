import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  Pie,
  Table
} from '../../';

class PieDoc extends Component {
  render() {
    return (
      <div className="main-content__doc">
        <h1>Pie</h1>
        <p>An alternative to <code className="inline">Progress</code> for indicating progress.</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { Pie } from 'straylab-ui';`}</SyntaxHighlighter>
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
        </Table>
        <h2>Color</h2>
        <h3>Default</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Pie percentage={50} />`}</SyntaxHighlighter>
        <Pie percentage={50} />
        <h3>Primary</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Pie primary percentage={50} />`}</SyntaxHighlighter>
        <Pie primary percentage={50} />
        <h3>Secondary</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Pie secondary percentage={50} />`}</SyntaxHighlighter>
        <Pie secondary percentage={50} />
        <h3>Red</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Pie color="red" percentage={50} />`}</SyntaxHighlighter>
        <Pie color="red" percentage={50} />
        <h2>Size</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Pie size={100} percentage={30} />`}</SyntaxHighlighter>
        <Pie size={100} percentage={30} />
        <h2>Border</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Pie border={6} percentage={70} />`}</SyntaxHighlighter>
        <Pie border={6} percentage={70} />
      </div>
    );
  }
}

export default PieDoc;
