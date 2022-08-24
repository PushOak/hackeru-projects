function fullName(name, lastName) {
    this.name = name;
    this.last_name = lastName;

    this.fname = function() {
        console.log('full name: ', this.name, this.last_name);
    }
}


const obj1 = new fullName('Noam', 'Bob');
const obj2 = new fullName('Ziggy', 'Zagga');

obj1.fname();
obj2.fname();

console.log('obj1', obj1);

export default fullName;