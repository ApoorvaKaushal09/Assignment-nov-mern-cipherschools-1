import React from 'react';
import {Component} from 'react';
import Card from './Card';

class App extends Component
{
  state={
    no:0,
    c:'#00000',
  }

  plus=()=>{
    let newcount=this.state.no+1;
    var x = Math. floor(Math. random() * 256);
    var y = Math. floor(Math. random() * 256);
    var z = Math. floor(Math. random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      this.setState({
        no:newcount,
        c:bgColor
      })
  }
  minus=()=>{
    let newcount=this.state.no-1;
    var x = Math. floor(Math. random() * 256);
    var y = Math. floor(Math. random() * 256);
    var z = Math. floor(Math. random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      this.setState({
        no:newcount,
        c:bgColor
    })
}
refresh=()=>{
  let newcount=0;
  this.setState({
    no:newcount,
    c:"white"
  })
}
  render(){
    return(
      <div>
        <Card number={this.state.no} plus={this.plus} minus={this.minus} refresh={this.refresh} col={this.state.c}></Card>
      </div>
    )
  }
}

export default App;
