import React from 'react';
// even though we allowed the app to have access to the store, we still need to connect them
// that is why we need connect from react reduxx
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleDelete } from '../actions/todo'
 
const List = (props) => {
  const { arr } = props; // destructuring
  return (
    <div>
      <ul>
        {arr.map((ele, i) => {
          return <li key={i}>{ele}</li>
        })}
      </ul>
    </div>
  )
}
 
const mapStateToProps = (state) => {
  return {
    arr: state.todo.arr,
    currentText: state.todo.currentText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleDelete
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

