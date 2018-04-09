$(document).ready(function () {
    
    const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

    const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

    let searchTerm = ""
    let numResults = 0;
    let startYear = 0;
    let endYear = 0;

    $('#submit-button').on('click', function (event) {

        event.preventDefault();


        searchTerm = $('#search-term').val().trim().toLowerCase();
        numResults = $('#number-of-records').val();
        startYear = $('#start-year').val().trim();
        endYear = $('#end-year').val().trim();

        console.log('searchTerm', searchTerm);
        console.log('numResults', numResults);
        console.log('startYear', startYear);
        console.log('endYear', endYear);

        let queryUrl = `${baseURL}&q=${searchTerm}`;

        if (parseInt(startYear)) {
            console.log('Start year');
            queryUrl += `&begin_date=${startYear}0101`
        }

        if (parseInt(endYear)) {
            console.log('End year');
            queryUrl += `&end_date=${endYear}0101`
        }

        

        ajaxRequest(queryUrl);

    });

    $('#clear-button').on('click', function (event) {
        $('#search-term').val('');
        $('#number-of-records').val('');
        $('#start-year').val('');
        $('#end-year').val('');

        $('#article-list').empty();

    });


    function ajaxRequest(queryUrl){
        console.log(queryUrl);

        
        $.ajax({
            url: queryUrl,
            method: "GET"
          })
          .done(function(response) {
              console.log(response);
              let articles = response.response.docs;

              for (let i = 0; i < numResults; i++) {
                  $('#article-list').append(`<li class="list-group-item">${articles[i].headline.main}</li>`);
              }

          
            });
    }


  

});