import { connect } from 'react-redux';
import GlobalStyle from './styles/base';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import React from 'react';

const App = () => (
  <>
    <GlobalStyle />
  </>
);

App.propTypes = {
};

const mapStateToProps = ({ }) => ({

});

export default connect(mapStateToProps, null)(hot(module)(App));
