var React =require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jQuery');
var TestUtils=require('react-addons-test-utils');

var Timer=require('Timer');

describe('Timer',()=>{
  it('it should Exist',()=>{
    expect(Timer).toExist();
  });

  describe('render',()=>{
    it('should start count on started status',(done)=>{
      var timer=TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChage('started');
      expect(timer.state.count).toBe(0);
      setTimeout(()=>{
        expect(timer.state.count).toBe(2);
        expect(timer.state.timerStatus).toBe('started');
        done();
      },2001);
    })


  it('should pause count on paused status',(done)=>{
    var timer=TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count:10});
    timer.handleStatusChage('started');
    timer.handleStatusChage('paused');
    setTimeout(()=>{
      expect(timer.state.count).toBe(10);
      expect(timer.state.timerStatus).toBe('paused');
      done();
    },2001);
  });


  it('should clear count on stopped status',(done)=>{
    var timer=TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count:10});
    timer.handleStatusChage('started');
    timer.handleStatusChage('stopped');
    setTimeout(()=>{
      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('stopped');
      done();
    },2001);
  });

});

});
