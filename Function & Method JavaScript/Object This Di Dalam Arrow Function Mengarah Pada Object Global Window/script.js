const person = {
    firstName : 'John',
    LastName : 'Doe',
    fullName : function () {
        console.log(this)
        return `${this.firstName} ${this.LastName}`
},

panggilNanti : function(){
    setTimeout(function(){
        console.log(this);
        console.log(this.fullName)
    }, 3000)
}
};