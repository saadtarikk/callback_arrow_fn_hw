const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.isIsogram = function (word) {
    var hash = {}
    word = word.toLowerCase()
    for (var i = 0; i < word.length; i++){
        if(hash[word[i]]){
            return false
        }
        hash[word[i]] = true;
    }
    return true

}

module.exports = IsogramFinder;
