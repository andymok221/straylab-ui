import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  Modal,
  Button,
  Table
} from '../../';

class MessageDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      modal3:false
    }
  }
  render() {
    return (
      <div className="main-content__doc">
        <h1>Modal</h1>
        <p>A modal is used for important action or message.</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { Modal } from 'straylab-ui';`}</SyntaxHighlighter>
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
        <h2>Size</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Modal size="sm" open={state} onClose={...}>test</Modal>`}</SyntaxHighlighter>
        <p>
          <Button primary onClick={() => this.setState({ modal1: true })}>Small</Button>
        </p>
        <Modal size="sm" open={this.state.modal1} onClose={() => this.setState({ modal1: false })}>test</Modal>
        <SyntaxHighlighter language="html" style={github}>{`<Modal size="md" open={state} onClose={...}>test</Modal>`}</SyntaxHighlighter>
        <p>
          <Button primary onClick={() => this.setState({ modal2: true })}>Medium</Button>
        </p>
        <Modal size="md" open={this.state.modal2} onClose={() => this.setState({ modal2: false })}>test</Modal>
        <SyntaxHighlighter language="html" style={github}>{`<Modal size="lg" open={state} onClose={...}>test</Modal>`}</SyntaxHighlighter>
        <p>
          <Button primary onClick={() => this.setState({ modal3: true })}>Large</Button>
        </p>
        <Modal size="lg" open={this.state.modal3} onClose={() => this.setState({ modal3: false })}>test</Modal>
      </div>
    );
  }
}

export default MessageDoc;