var User = require('./fan');
var FanConnection = require('./fan-conection');
var Connection = require('./connect');

class FanProfile{
  user;
  fanConnections = [];
  constructor(user, fanConnections){
    this.user = user;
    this.fanConnections = fanConnections;
  }
  addConnection(connection, rspv){
    if(connection instanceof Connection){
      for(let i = 0; i < fanConnections.length; i++){
        if(this.fanConnections[i].connection.connectionName === connection.connectionName()){
          throw new Error('Connection ${connection.connectionName()}exists');
        }
      }
      let newFanConnection = new FanConnection(connection, rspv);
      this.fanConnections.push(newFanConnection);
    }else{
      throw new Error("This connection should be an Object");
    }
  }
  removeConnection(connection){
    if(connection instanceof Connection){
      for(let j = 0; j < fanConnections.length; j++){
        if(this.fanConnections[i].connection.connectionName === connection.connectionName()){
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
          if(this.fanConnections[i].connection.connectionName === connection.connectionName()){
            this.fanConnections[k] = fanConnection;
            break;
        }
      }
    }else{
      throw new Error("fanConnection should equal an object");
    }
  }
}

module.exports = FanProfile