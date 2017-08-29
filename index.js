function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
      var member = musicians[i]
      var instrument = instruments[i]
      array.push(`${member} plays ${instrument}`)
    }
  return array
}

function johnLennonFacts(facts) {
  var i = 0
  var newFacts = []
  while (i < facts.length) {
    var fact = facts[0]
    var newFact = fact + "!!!"
    newFacts.push(newFact)
  }
}
