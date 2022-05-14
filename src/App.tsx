import React from 'react';
import './xterm.css';
import './App.css';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

let term;
const fitAddon = new FitAddon();
let terminalLoaded = false;

export default class App extends React.Component {
  componentDidMount() {
    if (!terminalLoaded) {
      term = new Terminal();
      term.loadAddon(fitAddon);
      const terminalEl = document.getElementById('terminal') as HTMLElement;
      term.open(terminalEl);
      term.write('Hello world\r\n');
      term.write('This is a test\r\n');
      fitAddon.fit();
      terminalLoaded = true;
    }
  }

  render() {
    return (
      <div id="terminal"></div>
    );
  }
};
