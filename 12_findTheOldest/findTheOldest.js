const findTheOldest = function(people) {
    // Go through the entry and return the oldest person based on their birth date and death date.
    let oldestPerson = ''
    let oldestAge = 0

    for (let i = 0; i < people.length; i++){
        // Get the person and their lifespan
        const person = people[i]
        const birthdate = person.yearOfBirth
        const deathdate = person.yearOfDeath

        // If that person is still alive, then get the current date
        if (!deathdate) {
            deathdate = new Date().getFullYear()
        }

        const lifespan = deathdate - birthdate

        // If the person is older, then set their name and update the lifespan of oldest age.
        if (lifespan > oldestAge) {
            oldestPerson = person.Name
            oldestAge = lifespan
        }
    }

    // Return the name of the oldest person.
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
