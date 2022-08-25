function searchLocation() {

    var x = document.getElementById("search-input");

    var searchText = x.value;



    switch (searchText) {

        case 'ladronka':

            window.location.href = "sablona.html";

            break;

        case 'parukarka':

            window.location.href = "parukarka.html";

            break;

        case 'divoka sarka':

            window.location.href = "divokasarka.html";

            break;

        case 'grebovka':

            window.location.href = "havlickovysady.html";

            break;


        case 'havlickovy sady':

            window.location.href = "havlickovysady.html";

            break;


        case 'hvezda':

            window.location.href = "hvezda.html";

            break;


        case 'petrin':

            window.location.href = "petrin.html";

            break;


        case 'riegrovy sady':

            window.location.href = "rigrac.html";

            break;


        case 'stromovka':

            window.location.href = "stromovka.html";

            break;


        case 'letenske sady':

            window.location.href = "letna.html";

            break;


        case 'letna':

            window.location.href = "letna.html";

            break;
    }
}