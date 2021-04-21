import React from 'react';
import PropTypes from 'prop-types';

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} alt="Cute guinea pigs"/>
      </div>
    );
  }
}

GuineaPigs.propTypes = {
  src: PropTypes.string.isRequired
}