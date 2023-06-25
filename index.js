$("#button").on("click", function () {
  getPerson();
});

function getPerson() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const numberOfDays = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((now.getDay() + 1 + numberOfDays) / 7);
  var weekToPerson = weekNumber % 3;
  
  $("#date").html("Heute ist " + now);

  switch (weekToPerson) {
  case 1:
    $("#output").html("Heute putzt Malik Bad. Bedo Diele und Treppen. Göko Küche.");
    break;
  case 2:
    $("#output").html("Heute putzt Malik Diele und Treppen. Bedo Küche. Göko Bad.");
    break;
  case 0:
    $("#output").html("Heute putzt Malik Küche. Bedo Bad. Göko Diele und Treppen.");
    break;
  default:
    break;
}

