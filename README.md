# Location API

This is a simple Node.js application that provides an API endpoint to greet a visitor and provide weather information based on the visitor's IP address.

## Features

- Greets the visitor with a personalized message.
- Provides the visitor's IP address and location.
- Displays the current temperature in the visitor's city.

## Endpoint

### [GET] /api/hello

This endpoint returns a greeting message along with the visitor's IP address, location, and current temperature in their city.

#### Query Parameters

- `visitor_name` (required): The name of the visitor.

#### Example Request

To greet a visitor named "John", you would use the following request:

[GET] `https://location-api.zeabur.app/api/hello?visitor_name=John`

#### Example Response

```json
{
  "client_ip": "127.0.0.1",
  "location": "Lagos",
  "greeting": "Hello, John!, the temperature is 11 degrees Celsius in Lagos"
}
```
