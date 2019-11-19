var User = require('./user');
var FanConnection = require('./fan-conection');
var Connect = require('./connect');

class UserFan{
  user;
  fanConnections = [];
  constructor(user, fanConnections){
    this.user = user;
    this.fanConnections = fanConnections;
  }
  addConnection(connect, rspv){
  if(connect instanceof Connect){
    for(let i = 0; i < fanConnections.length; i++){
      if(this.fanConnections[i].connect.connectName === connect.connectName()){
        throw new Error('Connect ${connect.connectName()}exists');
      }
    }
    let  newFanConnection = new FanConnection(connect, rspv);
    this.fanConnections.push(newFanConnection);
  }else{
    throw new Error("This connection should be an Object");
  }
}
removeConnection(connect){
if(connection instanceof Connect){
  for(let j = 0; j < fanConnections.length; j++){
    if(this.fanConnections[i].connect.connectName === connect.connectName()){
      this.fanConnections.splice(j, 1);
      break;
    }
  }
  }else{
  throw new Error("This connection should be an Object");
}
}
getConnections(){
  return this.fanConnections;
}
emptyFan(){
  delete this.user;
  this.fanConnections = new Array();
}
updateConnection(fanConnection){
  if(fanConnection instanceof fanConnection){
    for(let k = 0; k < fanConnections.length; k++){
      if(this.fanConnections[i].connect.connectName === connect.connectName()){
        this.fanConnections[k] = fanConnection;
        break;
    }
  }
}else{
  throw new Error("fanConnection should equal an object");
}
}
}
