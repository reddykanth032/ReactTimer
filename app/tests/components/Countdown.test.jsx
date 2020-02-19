var React =require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jQuery');
var TestUtils=require('react-addons-test-utils');

var Countdown=require('Countdown');

describe('Countdown',()=>{
  it('should exist',()=>{
    expect(Countdown).toExist();
  });
  describe('handleSetCountdown',()=>{
    it('it should set state to started and countdown starts',(done)=>{
      var countdown=TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      setTimeout(()=>{
        expect(countdown.state.count).toBe(9);
        done();
      },1000);
    });

    it('it should set count to zero',(done)=>{
      var countdown=TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      expect(countdown.state.count).toBe(1);
      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        done();
      },3000);
    });

    it('it should pause count',(done)=>{
      var countdown=TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChage('paused');
      setTimeout(()=>{
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      },2000);
    });

    it('it should stop count',(done)=>{
      var countdown=TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChage('stopped');
      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      },2000);
    });
  });
});
