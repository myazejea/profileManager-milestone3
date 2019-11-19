class User{
  constructor(userId, firstName, lastName, email ){
    this._userId = userId;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
  }
  get userId(){
    return this._userId;
  }
  get firstName(){
    return this._firstName;
  }
  get lastName(){
    return this._lastName;
  }
  get email(){
    return this._email;
  }
  set userId(value){
   this._userId = value;
 }
   set firstName(value){
    this._firstName = value;
}
set lastName(value){
  this._lastName = value;
}
set email(value){
 this._email = value;
}
}
module.exports = User;
