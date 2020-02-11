import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const Title = (props) => {
  const styles = {
    padding: '0.3em',
    background: props.uiColor,
    color: props.changeYellow,
    borderRadius: '0.3em',
    textAlign: 'center',
    fontSize: '50px'
  } 

  console.log(props.children)
  
  return (
  <h1 style={styles}>
      {props.children}
    </h1>
  )
}

class App extends Component {
  state = {
    uiColor: 'purple'
  }
  
  render () {
    return(
    <div>
<Title 
uiColor = {this.state.uiColor}
>
Super <em> Ninja </em>
</Title>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
