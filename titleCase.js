// capitalize the characters of every word in a sentence 

const titleCase = function(text) {
  // when text is empty, return empty
  if(text === "") {
    return "";
  }
  const splited = text.split(" ");
  let changed = [];
  
  // console.log(splited);
  for (let word of splited){
    word = word[0].toUpperCase() + word.slice(1).toLowerCase();
    changed.push(word);
  }
  return changed.join(" ");
}

module.exports = titleCase;
