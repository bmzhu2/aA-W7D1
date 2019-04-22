import Utils from '../../util/utils';
import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);

    this.state({})
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.receiveTodo(this.state);
    this.setState()
  }

  render() {
    return (
      <form>
        <label htmlFor="title">Title: 
          <input 
            type="text"
            value={this.state.title}
            onChange = {this.updateTodoTitle}
          />
        </label>
        <label htmlFor="body">Body:
          <input
            type="text"
            value={this.state.body}
            onChange={this.updateTodoBody}
          />
        </label>

        <input type="submit" value="Add to list"/>
      </form>
    )
  }

}

export default TodoForm;
