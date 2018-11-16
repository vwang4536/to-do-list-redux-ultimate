import React from 'react';

import { connect } from 'react-redux';
import { handleChange, handleSubmit } from '../actions/todo';

import { bindActionCreators } from 'redux';

const Form = (props) => {
  const { currentText, handleChange, handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={currentText}/>
        {currentText}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    currentText: state.todo.currentText
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleChange,
    handleSubmit,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
// if there wasn't a mapstatetoprops; this would be written as
// export default connect(null, mapDispatchToProps)(Form)
