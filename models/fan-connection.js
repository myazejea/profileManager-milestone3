var Connect = require('./connect');

class FanConnection{
  constructor(connect, rspv){
    if(connect instanceof Connect){
      this._connect = connect;
    }else{
      throw new Error('connect should be object');
    }
    this._rspv = rspv;
  }
  get connect(){
    return this._connect;
  }
  set connect(value){
    if(value instanceof Connect){
      this._connect = value;
    }else{
      throw new Error('connect should be object');
    }
  }
  get rspv(){
    return this._rspv;
  }
  set rspv(value){
    this._rspv = value;
  }
}

module.exports = FanConnection;
