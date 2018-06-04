import * as ReactDOM from 'react-dom';
import MonacoEditor from 'react-monaco-editor';
import * as React from 'react';

import * as ts from 'typescript';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    }
    this.onCompileButtonClick = this.onCompileButtonClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue, e) {
    this.setState({
      code: newValue
    });
  }

  onCompileButtonClick() {
    const code = (this.state as any).code;
    const compilerOptions = {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS
      }
    };

    const compiledCode = ts.transpileModule(code, compilerOptions).outputText;
    console.log(compiledCode);
  }

  render() {
    console.log('render');

    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div>
        <button onClick={this.onCompileButtonClick}>compile</button>
        <MonacoEditor
          width="800"
          height="600"
          language="typescript"
          theme="vs-dark"
          options={options}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);