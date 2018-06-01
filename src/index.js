import React from 'react';
import ReactDOM from 'react-dom';
const title = 'My Minimal React Webpack Babel Setup';
import MonacoEditor from 'react-monaco-editor';
import * as typescript from 'typescript';

const fs = require('fs');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    fs.writeFileSync('D:/file.js', JSON.stringify(newValue));
    console.log('onChange', newValue, e);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);