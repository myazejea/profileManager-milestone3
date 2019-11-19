var events = [{
  "conId": 1,
  "name": "Submissions",
  "type": "Jui-Jitsu, Wrestiling, Judo, Krav Maga",
  "host": "Great Martial Arts of America",
  "date": "December 1, 2019",
  "detail": "Tournament",
  "time": "5:30pm"
},
{
  "conId": 2,
  "name": "Striking",
  "type": "Boxing, Karate, Wing Shun, Jeet Kune Do ",
  "host": "Great Martial Arts of America",
  "date": "January 1, 2020",
  "detail": "Tournament",
  "time": "5:30pm"
},
{
  "conId": 3,
  "name": "GrecoRoman Wrestling",
  "type": "Wrestling only",
  "host": "Great Martial Arts of America",
  "date": "January 15, 2020",
  "detail": "Tournament",
  "time": "5:30pm"
},
{
  "conId": 4,
  "name": "Weight training",
  "type": "Free weights",
  "host": "Great Martial Arts of America",
  "date": "Monday, Wednesday, Friday",
  "detail": "16 years and older",
  "time": "7pm"
},
{
  "conId": 5,
  "name": "Cardio",
  "type": "Sprints, long distance runs",
  "host": "Great Martial Arts of America",
  "date": "Tuesday, Thursday, Saturday",
  "detail": "10 years and older",
  "time": "4 pm T, TH and 10 am S"
},
{
  "conId": 6,
  "name": "Sparring",
  "type": "Hands/Feet pads required",
  "host": "Great Martial Arts of America",
  "date": "Sunday",
  "detail": "Advanced students only",
  "time": "10 am"
}]

class ConnectDB {

    getEvents(){
        return events;
    }

    getById(conId){
        if (conId !== undefined){
            return events.filter(event => event.conId == conId)[0]; // returning first element, as filter returns an array.
        } else {
            throw new Error("Invalid Connection Id");
        }
    }

    addEvent(event){
        events.push(event); // returning first element, as filter returns an array.
    }

    delById(id){
        events = events.filter(event => event.conId != id); // returning first element, as filter returns an array.
    }
}
// export only class with methods to make sure, other part of this app can't modify hardcoded data.

module.exports = ConnectDB;
