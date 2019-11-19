class User{
  constructor(userId, firstName, lastName, email ){
    this._userId = userId;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._password = password;
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
  get password(){
    return this._password;
  }
  set password(value){
    this._password = value;
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
