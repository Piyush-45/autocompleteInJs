// ! 👉🏻Step 1: Define Sample Suggestions
const suggestions = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Banana2",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon"
];

//!👉🏻 Step 2: Get DOM Elements

const searchInput = document.getElementById("searchInput");
const suggestionList = document.getElementById("suggestions")
let timeoutId;
// !👉🏻 Step 3: Add Input Event Listener

searchInput.addEventListener('input', function () {
  const userInput = searchInput.value.toLowerCase();
// !👉🏻 Step 4: Filter Suggestions and adding debouncing
  timeoutId = setTimeout(()=>{
    const filteredList = suggestions.filter((suggestion) => 
    suggestion.toLowerCase().startsWith(userInput)
  );
  displaySuggestions(filteredList) //CLOSURE
},1000) // 
})
// !👉🏻Step 5: Display Suggestions
function displaySuggestions(suggestions){
  suggestionList.innerHTML = ''
  suggestions.forEach(suggestion=>{
   const li  = document.createElement('li');
   li.textContent = suggestion;
   suggestionList.appendChild(li)
  })
}