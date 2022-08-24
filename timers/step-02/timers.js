// this

const fullName = {
    name: 'moshe',
    last_name: 'rabeno',
    fname: function() {
        console.log('full name', this.name, this.last_name);
    }
}

fullName.fname();

export default fullName;
