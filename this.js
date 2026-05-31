
const persons = {
    name: ['Porosh', 'Wsif', 'azmir'],
    greeting: 'hello',
    showName() {
        // console.log('hello'+' '+ this.name[0]);

        this.name.forEach( function(el){
            console.log( this.greeting +' '+ el);


        },this)

        this.name.forEach((el) => {
            console.log(this.greeting + el);
        })

    }
}

persons.showName();