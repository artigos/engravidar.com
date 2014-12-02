function formatDate(date) {
  return date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear();
}

$(function() {
  $( "#datepicker" ).datepicker({ dateFormat: 'dd.mm.yy' });
  $.datepicker.setDefaults($.datepicker.regional["pt"]);

  $( "#number" )
    .selectmenu()
    .selectmenu( "menuWidget" )
      .addClass( "overflow" );

  $( "input[type=submit]" )
    .button()
    .click(function( event ) {
      event.preventDefault();

      var days = parseInt($("#number option:selected").val()) * 24 * 3600 * 1000;
      var lastMenstruation = $("#datepicker").datepicker('getDate').getTime();

      // next period
      var nextPeriod = new Date();
      nextPeriod.setTime(lastMenstruation + days);

      // first fertile day
      var firstFertileDay = new Date();
      firstFertileDay.setTime(lastMenstruation + (days - 16 * 24 * 3600 * 1000));

      // last fertile day
      var lastFertileDay = new Date();
      lastFertileDay.setTime(lastMenstruation + (days - 12 * 24 * 3600 * 1000));

      // Output
      $( "#ovulation-calculator" ).html( "O seu próximo período está previsto para <strong>" + formatDate(nextPeriod) + "</strong><br/><br/>Com base nos nossos calculos, você estará mais fértil no período de <strong>" + formatDate(firstFertileDay) + "</strong> a <strong>" + formatDate(lastFertileDay) + "</strong>.<br/><br/>O número de dias do seu ciclo é de <strong>" + $("#number option:selected").text() + "</strong> dias" );
    });

});