import React, { Component } from 'react';
import { render } from 'react-dom';

import Reveal from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <Reveal />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
