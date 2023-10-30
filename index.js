let figlet = require('figlet')

figlet('intocode', function(err, data) {
    if(err) {
        return
    }
    console.log(data)
})