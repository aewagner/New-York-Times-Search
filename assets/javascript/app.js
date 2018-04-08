$(document).ready(function () {
    
    const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

    const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

    let searchTerm = ""
    let numResults = 0;
    let startYear = 0;
    let endYear = 0;

    $('#submit-button').on('click', function (event) {

        event.preventDefault();


        searchTerm = $('#search-term').val().trim();
        numResults = $('#number-of-records').val();
        startYear = $('#start-year').val().trim();
        endYear = $('#end-year').val().trim();

        console.log('searchTerm', searchTerm);
        console.log('numResults', numResults);
        console.log('startYear', startYear);
        console.log('endYear', endYear);

        let queryUrl = `${baseURL}&q=${searchTerm}`;

        ajaxRequest(queryUrl);


    });


    function ajaxRequest(queryUrl){
        console.log(queryUrl);

        
        $.ajax({
            url: queryUrl,
            method: "GET"
          })
          .done(function(response) {
              console.log(response);
          });
    }


  

});