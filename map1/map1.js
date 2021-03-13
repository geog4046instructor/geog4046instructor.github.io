var map = L.map('map').setView([38, -95], 4);
var basemapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var basemap = L.tileLayer(basemapUrl).addTo(map);
var radarDisplayOptions = {
  layers: 'nexrad-n0r-900913',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
};
var radarUrl = 'http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi';
var radar = L.tileLayer.wms(radarUrl, radarDisplayOptions).addTo(map);
