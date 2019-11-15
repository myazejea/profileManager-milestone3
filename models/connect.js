class Connect{

  constructor(conId, connectName, connectType, connectHost, connectDate, connectDetail, connectTime){
    this._conId = conId;
    this._connectName = connectName;
    this._connectType = connectType;
    this._connectHost = connectHost;
    this._connectDate = connectDate;
    this._connectDetial = connectDetail;
    this._connectTime = connectTime;
  }
  get conId(){
    return this._conId;
  }
  set conId(value){
    this._conId = value;
  }
  get connectName(){
    return this._connectName;
  }
  set connectName(value){
    this._connectName = value;
  }
  get connectType(){
    return this._connectType;
  }
  set connectType(value){
    this._connectType = value;
  }
  get connectHost(){
    return this._connectHost;
  }
  set connectHost(value){
    this._connectHost = value;
  }
  get connectDate(){
    return this._connectDate;
  }
  set connectDate(value){
    this._connectDate = value;
  }
  get connectDetail(){
    return this._connectDetail;
  }
  set connectDetail(value){
    this._connectDetail = value;
  }
  get connectTime(){
    return this._connectTime;
  }
  set connectTime(value){
    this._connectTime = value;
  }
}
module.exports = Connect;
