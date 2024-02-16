// 1.Movie rating

class Movie{
  constructor(title,studio,rating){
  this.title=title;
  this.studio=studio;
  this.rating=rating || "PG12";
}
getMoviedetails(){
  console.log(`
  Title : ${this.title}
  Studio : ${this.studio}
  Rating : ${this.rating}`)
}
}
const Details= new Movie("Casino Royale","Eon Productions","PG13");
console.log(Details);
Details.getMoviedetails();


// 3.Person Details

class Person{
  constructor(name,age,course_name,course_duration,ph_no){
    this.name = name;
    this.age = age;
    this.course_name = course_name;
    this.course_duration = course_duration;
    this.ph_no = ph_no;
  }
  getPersonDetails(){
    console.log(`
    NAME : ${this.name}
    AGE : ${this.age}
    COURSE NAME : ${this.course_name}
    COURSE DURATION : ${this.course_duration} MONTHS
    PHONE NUMBER : ${this.ph_no}`)
  }
}
const Person1 = new Person("Priya",21,"MERN STACK",6,6743863377);
console.log(Person1)
Person1.getPersonDetails();
const Person2 = new Person("Roshini",19,"AI",10,9838040768);
console.log(Person2)
Person2.getPersonDetails();

// 4.Uber price

class Uber{
  constructor(baseFare,costPerMintus,costPerMile){
    this.baseFare = baseFare;
    this.costPerMintus = costPerMintus;
    this.costPerMile = costPerMile;
  }
  calculatePrice(distanceInMiles,timeInMinutes){
    const fare=this.baseFare + (this.costPerMintus*timeInMinutes) + (this.costPerMile*distanceInMiles)
    return fare;
  }
}
const Uberprice = new Uber(20,1,10)
const Distance = 5 ;
const Time= 15;
const price =Uberprice.calculatePrice(Distance,Time);
console.log("Uber Price :",price)




























