var monitor = require('product-monitor');
var server = monitor({
  "serverPort": 8080,
  "productInformation": {
    "title": "Portfolio Dashboard",
  },
  "userContentPath": "dashboard-config"
});
