 // Coorparoo
  var mapCoorparoo = L.map('map-coorparoo').setView([-27.4951401, 153.0573703], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapCoorparoo);
  L.marker([-27.4951401, 153.0573703]).addTo(mapCoorparoo)
    .bindPopup('<b>Forte Music Coorparoo</b><br>262 Old Cleveland Rd, QLD 4151');

  // Toowong
  var mapToowong = L.map('map-toowong').setView([-27.4783843, 152.9901317], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapToowong);
  L.marker([-27.4783843, 152.9901317]).addTo(mapToowong)
    .bindPopup('<b>Forte School of Music Toowong</b><br>524 Milton Rd, QLD 4066');