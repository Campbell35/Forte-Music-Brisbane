const fetch = require('node-fetch');

exports.handler = async function (event) {
  const payload = JSON.parse(event.body);

  const response = await fetch("https://api.opus1.io/hooks/fortetoowongcoorparoo/5Q9XNlZ7Gcf8VBsmt3l1Mpz5yMo8/people/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const text = await response.text(); // Use .json() if you're sure
  return {
    statusCode: response.status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type"
    },
    body: text
  };
};
