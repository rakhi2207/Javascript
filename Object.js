iphone={
    model:"abc",
    storage:"64gb",
    price:"50000",
    display:"3.5 inches",
    camera:"2 rear camera",
    courseList:[],
    addCourse:function(course)
    {
        this.courseList.push(course);
    },
    getCourse:function()
    {
       return `Course is ${this.courseList}`;
    },

    info: function()
    {
        return `${this.model} ${this.price} ${this.storage} ${this.display} ${this.camera} ${this.courseList} ${this.getCourse()}`;
    }
};

iphone.addCourse("React");
console.log(iphone.getCourse());

// console.table(iphone);
// iphone.addCourse("Java");
// iphone.addCourse("Node");
// iphone.addCourse("React");
// iphone.addCourse("C++");
// console.log(iphone.getCourse());
// console.log(iphone.info())
// for(const n in iphone)
// {
//     console.log(`keys and values are ${n} and ${iphone[n]} respectively`);
// }

