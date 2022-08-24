
// constructor function used as a Template of creating objects
function fullName(name, lastName) {
    this.name = name;
    this.last_name = lastName;

    this.fname = function() {
        console.log('full name: ', this.name, this.last_name);
    }
}

// create new object with fullName constructor function
const obj1 = new fullName('Noam', 'Bob');
//create another object
const obj2 = new fullName('Ziggy', 'Zagga');

// calling the fname() function of the object
obj1.fname();
obj2.fname();

console.log('obj1', obj1);

export default fullName;