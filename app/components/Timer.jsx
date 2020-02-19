var React=require('react');
var Clock =require('Clock');
var Controls=require('Controls');
var Timer=React.createClass({
  getInitialState:function(){
return{
  count:0,
  timerStatus:'stopped'
}

},
componentDidUpdate:function(prevProps,prevState){
if(this.state.timerStatus!==prevState.timerStatus){
  switch (this.state.timerStatus) {
    case "started":
      this.handlestartTimer();
      break;
    case "stopped":
      this.setState({count:0});
    case "paused":
    clearInterval(this.timer)
    this.timer=undefined;
    break;

  }
}
},
componentWillUnMount:function(){
  clearInterval(this.timer)
},
handlestartTimer:function(){
  this.timer=setInterval(()=>{
      this.setState({count:this.state.count+1});
  },1000);
},handleStatusChage:function(newStatus){

  this.setState({timerStatus:newStatus});
},
// propTypes:{
//   count:React.PropTypes.number.isRequired;
//   countdownStatus:React.PropTypes.string;
// }
  render:function(){
    var {count,timerStatus}=this.state;
    // var renderControlArea=()=>{
    //   if(countdownStatus==='clear'){
    //       return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChage} />
    //   }
    //
    // };
    return(
      <div>
        <h1 className="page-title">Timer App</h1>
      <Clock totalseconds={count}/>
      <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChage} />
      </div>
    );
  }

});

module.exports=Timer;
