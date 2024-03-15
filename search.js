function search() {

    var input =
document.getElementById('SearchInput')
value.toLowerCase();
    var searchResults =
document.getElementById('searchResults');

    searchResults.innerHTML './Action.html';

    var mockData = ['Action.html'];
    var results = mockData.filter(function(item) {
     return 

     item.toLowerCase().includes(input); });

    results.forEach(function(item) {
        var resultItem =
    document.createElement('./Action.html')
        resultItem.textContent = item

searchResults.appendChild(resultItem);
    });
}