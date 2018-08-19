
$('#submit-btn').click(function() { // target and 'click()' function

  let city = $('#city-type').val(); // gets value from input and save it in a variable

  if (city === 'New York' || city === 'New York City' || city === 'NYC') { // checks if user submits NY
    $('body').removeClass().addClass('nyc'); //changes background photo
  }
  else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') { // checks if user submits SF
    $('body').removeClass().addClass('sf'); //changes background photo
  }
  else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') { // checks if user submits LA
    $('body').removeClass().addClass('la'); //changes background photo
  }
  else if (city === 'Austin' || city === 'ATX') { // checks if user submits ATX
    $('body').removeClass().addClass('austin'); //changes background photo
  }
  else if (city === 'Sydney' || city === 'SYD') { // checks if user submits SYD
    $('body').removeClass().addClass('sydney'); //changes background photo
  }
  else {
    $('body').removeClass().addClass('citipix');
  }

  city = $('#city-type').val(''); // clear input field

  event.preventDefault(); // prevents default browser behavior
  
});
