import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <Fragment>
    <button type={props.type}
      className={`button ${props.classes}`}>{props.children}</button>
  </Fragment>
);

Button.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.string,
  type: PropTypes.string,
};

export default Button;