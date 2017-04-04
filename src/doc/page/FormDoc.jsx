import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  Form,
  Input,
  Radio,
  Checkbox,
  Select,
  Table
} from '../../';

class FormDoc extends Component {
  render() {
    return (
      <div className="main-content__doc">
        <h1>Form</h1>
        <p>A component for collecting user's information.</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { Form } from 'straylab-ui';`}</SyntaxHighlighter>
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
        <h2>Form Group</h2>
        <SyntaxHighlighter language="html" style={github}>{`<Form>
  <Form.Group>
    <label htmlFor="name">Name</label>
    <Input
      id="name"
      name="test"
      type="text"
    />
  </Form.Group>
  <Form.Group>
    <label>Gender</label>
    <Radio value="male" name="gender" label="Male" />
    <Radio value="female" name="gender" label="Female" />
  </Form.Group>
  <Form.Group>
    <label>Checkbox</label>
    <Checkbox value="true" name="agree" label="I agree" />
  </Form.Group>
  <Form.Group>
    <label>Checkbox</label>
    <Select />
  </Form.Group>
</Form>`}</SyntaxHighlighter>
        <Form>
          <Form.Group>
            <label htmlFor="name">Name</label>
            <Input
              id="name"
              name="test"
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <label>Gender</label>
            <Radio value="male" name="gender" label="Male" />
            <Radio value="female" name="gender" label="Female" />
          </Form.Group>
          <Form.Group>
            <label>Checkbox</label>
            <Checkbox value="true" name="agree" label="I agree" />
          </Form.Group>
          <Form.Group>
            <label>Checkbox</label>
            <Select />
          </Form.Group>
        </Form>
        <h2>State</h2>
        <h3>Error</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Form>
  <Form.Group error>
    <label htmlFor="name">Name</label>
    <Input
      name="test"
      type="text"
    />
  </Form.Group>
</Form>`}</SyntaxHighlighter>
        <Form>
          <Form.Group error>
            <label htmlFor="name">Name</label>
            <Input
              name="test"
              type="text"
            />
          </Form.Group>
        </Form>
        <h3>Focus</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Form>
  <Form.Group focus>
    <label htmlFor="name">Name</label>
    <Input
      name="test"
      type="text"
    />
  </Form.Group>
</Form>`}</SyntaxHighlighter>
        <Form>
          <Form.Group focus>
            <label htmlFor="name">Name</label>
            <Input
              name="test"
              type="text"
            />
          </Form.Group>
        </Form>
        <h3>Disabled</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Form>
  <Form.Group disabled>
    <label htmlFor="name">Name</label>
    <Input
      name="test"
      type="text"
    />
  </Form.Group>
</Form>`}</SyntaxHighlighter>
        <Form>
          <Form.Group disabled>
            <label htmlFor="name">Name</label>
            <Input
              disabled
              name="test"
              type="text"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default FormDoc;
