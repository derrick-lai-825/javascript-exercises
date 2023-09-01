const getTheTitles = function(entries) {

    let titles = []
    for (let i = 0; i < entries.length; i++) {
        titles.push(entries[i].title)
    }

    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
