const axios = require("axios");
const geoip = require("geoip-lite");

const getLocationTemp = async (req, res) => {
  const visitorName = req.query.visitor_name;
  let ipAddress =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  if (ipAddress.includes(",")) {
    ipAddress = ipAddress.split(",")[0];
  }
  if (ipAddress.includes("::ffff:")) {
    ipAddress = ipAddress.split("::ffff:")[1];
  }
  const location = geoip.lookup(ipAddress);
  const city = location?.city || "Lagos";

  const weatherApiKey = process.env.API_KEY;
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`;

  try {
    const weatherResponse = await axios.get(weatherApiUrl);
    const temperature = weatherResponse.data.main.temp;

    res.status(200).json({
      client_ip: ipAddress,
      location: city,
      greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${city}`,
    });
  } catch (error) {
    res.status(500).json({ message: `An error occured: ${error.message}` });
  }
};

module.exports = { getLocationTemp };
