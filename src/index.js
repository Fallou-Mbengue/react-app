const person = {
    name: 'fallou',
    walk() {
        console.log(this);
    }
};

person.walk();

const walk = person.walk.bind(person);
walk();

class Teacher {
    teach() {
        console.log("teach");
    }
}