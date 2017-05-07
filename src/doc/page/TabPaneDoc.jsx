import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
import {
  TabPane,
  Table
} from '../../';

class TabPaneDoc extends Component {
  render() {
    return (
      <div className="main-content__doc">
        <h1>Tab Pane</h1>
        <p>A modal is used for important action or message.</p>
        <h2>Usage</h2>
        <SyntaxHighlighter language="javascript" style={github}>{`import { Modal } from 'straylab-ui';`}</SyntaxHighlighter>
        <h2>Props</h2>
        <TabPane className="basic" defaultActiveTab="two">
          <TabPane.Tab tab="one">
            Tab 1
          </TabPane.Tab>
          <TabPane.Tab tab="two">
            Tab 2
          </TabPane.Tab>
          <TabPane.Tab disabled tab="disabled">
            Disabled
          </TabPane.Tab>
          <TabPane.Pane tab="one">
            Tab 1
          </TabPane.Pane>
          <TabPane.Pane tab="two">
            Tab 2
          </TabPane.Pane>
        </TabPane>
      </div>
    );
  }
}

export default TabPaneDoc;
