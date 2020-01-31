// Attraverso una chiamata ajax all’Api di Boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte graﬁca.
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.


$(document).ready(function() {

  $.ajax(
    {
      'url' : 'https://flynn.boolean.careers/exercises/api/array/music',
      'method' : 'GET',
      'success': function(data) {
        console.log(data);
        printData(data.response);

      },
      'error' : function(request, state, errors) {
        alert('Errore' + errors);
      }
    }
  );
    function printData(cds) {
     for (var i = 0; i < cds.length; i++) {
        var cd = cds[i];
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        var html = template(cd);
        $('.cds-container').append(html);
     }
    }
    $(document).on('click', )
});
