import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  Tooltip,
  Button,
  Table
} from '../../';

class TooltipDoc extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-content__doc">
        <h1>Tooltip</h1>
        <p>A component that shows message when you hover on a attached component. This component is built on top of Tether Tooltip.</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { Tooltip } from 'straylab-ui';`}</SyntaxHighlighter>
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
        <h2>Trigger Method</h2>
        <h3>Hover</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Tooltip
    openOn="hover"
    position="bottom center"
    content="hello"
    trigger={<Button>Hover me</Button>}
/>`}</SyntaxHighlighter>
        <p>
          <Tooltip openOn="hover" position="bottom center" content="hello" trigger={<Button>Hover me</Button>} />
        </p>
        <h3>Click</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Tooltip
    openOn="click"
    position="bottom center"
    content="hello"
    trigger={<Button>Click me</Button>}
/>`}</SyntaxHighlighter>
        <p>
          <Tooltip openOn="click" position="bottom center" content="hello" trigger={<Button>Click me</Button>} />
        </p>
        <h3>Always</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Tooltip
    openOn="always"
    position="right middle"
    content="hello"
    trigger={<Button>Click me</Button>}
/>`}</SyntaxHighlighter>
        <p>
          <Tooltip openOn="always" position="right middle" content="hello" trigger={<Button>Click me</Button>} />
        </p>
        <h3>Focus</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Tooltip
    openOn="focus"
    position="bottom center"
    content="hello"
    trigger={<Button>Click me</Button>}
/>`}</SyntaxHighlighter>
        <p>
          <Tooltip openOn="focus" position="bottom center" content="hello" trigger={<Button>Click me</Button>} />
        </p>
      </div>
    );
  }
}

export default TooltipDoc;
