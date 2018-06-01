import * as ReactDOM from 'react-dom';
import MonacoEditor from 'react-monaco-editor';
import * as React from 'react';

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
    console.log('onChange', newValue, e);
  }
  render() {
    const code = (this.state as any).code;
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
  <App/>,
  document.getElementById('app')
);