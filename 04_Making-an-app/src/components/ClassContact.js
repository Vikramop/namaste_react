import React from 'react';

class ClassContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 10,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-info">
        <h1>{name}</h1>
        <h3>{location}</h3>
        <h3>{count}</h3>
        <h3>{count2}</h3>
        <button
          onClick={() => {
            // NEVER DO THE BELOW METHOD i.e. DIRECTLY UPDATING THE STATE
            // this.state.count = this.state.count +1;

            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Update
        </button>
      </div>
    );
  }
}

export default ClassContact;
