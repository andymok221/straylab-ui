import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  OffCanvas,
  Button,
  Table
} from '../../';

class OffCanvasDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offCanvas: false,
    }
  }
  render() {
    return (
      <div className="main-content__doc">
        <h1>Off Canvas</h1>
        <p>An area which which slides in upon activation</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { OffCanvas } from 'straylab-ui';`}</SyntaxHighlighter>
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
                open*
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                Boolean
              </Table.Cell>
              <Table.Cell>
                Whether the off canvas is shown
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                onClose*
              </Table.Cell>
              <Table.Cell />
              <Table.Cell>
                Function
              </Table.Cell>
              <Table.Cell>
                Function to be called when closing
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
          </Table.Body>
        </Table>
        <h2>Demo</h2>
        <SyntaxHighlighter language="html" style={github}>{`<OffCanvas
  open={this.state.offCanvas}
  onClose={() => this.setState({ offCanvas: false })}
>
  Something to be put
</OffCanvas>`}</SyntaxHighlighter>
        <p>
          <Button primary onClick={() => this.setState({ offCanvas: true })}>Open</Button>
        </p>
        <OffCanvas open={this.state.offCanvas} onClose={() => this.setState({ offCanvas: false })}>Something to be put</OffCanvas>
      </div>
    );
  }
}

export default OffCanvasDoc;
