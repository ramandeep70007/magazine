const bcrypt = require('bcrypt');

//! Comparing the password 
const comparePassword= async function(candidatePassword , savedPassword){
    const isMatch = await bcrypt.compare(candidatePassword,savedPassword)
    return isMatch
}

module.exports = {
    comparePassword
}



