'use strict'
function learn()
{
    console.log(this.name+" says your hii ");
}

let user={
    name:"john"
};

user.learn=learn;
user.learn();