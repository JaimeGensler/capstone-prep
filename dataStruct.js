//Users
User {
    name: String,
    standing: String,
    currentClasses: [String, String, String]
}

const jaime = {
    name: 'Jaime Gensler',
    standing: 'FR',
    currentClasses: ['ENG150 - Literary Analysis', 'PHIL100 - Intro to Philosophy', 'MATH 140 - Calculus I'],
}

//tutors
Tutor {
    name: String,
    standing: String,
    currentClasses: [String, String],
    tutorType: [String, String],
    tutorableClasses: [String, String] //this would be good for both writing and content tutoring
}


//REQUEST POST
{
    classID: String,  //(including 'Other')
    descriptionIfOther: Null || String, //null if class selected (no view for form input), string otherwise
    type: String, // (Writing or Content)
    description: String, // ('I need help with x/y/z')
    preferedLocation: String, //(library, briggs, cafe, ...)
    availableTimes: Unknown, //gotta figure the best way to store this
    status: String, //(PENDING or MATCHED or CLOSED)
}
