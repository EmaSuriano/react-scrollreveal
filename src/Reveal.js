import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal();

const DEFAULT_CONFIG = {
  origin: 'right',
  duration: 1000,
  delay: 150,
  distance: '500px',
  scale: 1,
  easing: 'ease',
};

export default class Reveal extends Component {
  componentDidMount = () => {
    const { children, ...revealOptions } = this.props;
    const config = {
      ...DEFAULT_CONFIG,
      ...revealOptions,
    };
    sr.reveal(this.refs.r, config);
  };

  render() {
    return <div ref="r">{this.props.children}</div>;
  }
}
