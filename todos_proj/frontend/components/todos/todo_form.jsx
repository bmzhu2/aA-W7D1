import Utils from '../../util/utils';
import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    
    super( props );

    this.updateTodoBody = this.updateTodoBody.bind(this);
    this.updateTodoTitle = this.updateTodoTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      id: new Date().getTime(),
      title: "",
      body: "",
      done: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.props.receiveTodo(this.state);
    this.setState({
      id: new Date().getTime(),
      title: "",
      body: "",
      done: false
    });
  }

  updateTodoTitle(e) {
    this.setState({
      title: e.target.value
    });
    console.log(this.state);
  }

  updateTodoBody(e) {
    this.setState({
      body: e.target.value
    });
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

        <input onClick={this.handleSubmit} type="submit" value="Add to list"/>
      </form>
    )
  }

}

export default TodoForm;
