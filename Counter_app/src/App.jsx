import React from 'react'

class Counter extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      count : 0
    }
  }
  increment() {
    this.setState({
      count : this.state.count + 1
    })

  }
  decrement() { 

    if (this.state.count > 0) {
      
      this.setState({
        count : this.state.count - 1
      })
    }
  }

  render() {
    return (<>
      <div ><h1 id='count'>{this.state.count}</h1></div>
      <div className='button_div'>
        <button onClick={() => this.increment()}>+</button>
        
        <h4 onClick={() => {
          this.setState({
            count : 0
          })
        }}>Reset</h4>
      <button onClick={()=> this.decrement()}>-</button>
      </div>
    </>
    )
  }
}

export default Counter