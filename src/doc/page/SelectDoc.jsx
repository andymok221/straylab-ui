import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  Select
} from '../../';

class SelectDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'one'
    };
  }
  render() {
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];
    return (
      <div className="main-content__doc">
        <h1>Select</h1>
        <p>This component is a wrapper of a famous select component react-select.</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { Select } from 'straylab-ui';`}</SyntaxHighlighter>
        <h2>Props</h2>
        <p>Please refer to react-select <a href="https://github.com/JedWatson/react-select">documentation.</a></p>
        <h2>State</h2>
        <h3>Default</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Select
    value={this.state.value}
    onChange={(value) => {this.setState({ value })}}
    options={options}
/>`}</SyntaxHighlighter>
        <Select value={this.state.value} onChange={(value) => {this.setState({ value })}} options={options} />
        <h3>Error</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Select
    error
    value={this.state.value}
    onChange={(value) => {this.setState({ value })}}
    options={options}
/>`}</SyntaxHighlighter>
        <Select error value={this.state.value} onChange={(value) => {this.setState({ value })}} options={options} />
        <h3>Disabled</h3>
        <SyntaxHighlighter language="html" style={github}>{`<Select
    disabled
    value={this.state.value}
    onChange={(value) => {this.setState({ value })}}
    options={options}
/>`}</SyntaxHighlighter>
        <Select disabled value={this.state.value} onChange={(value) => {this.setState({ value })}} options={options} />
      </div>
    );
  }
}

export default SelectDoc;
