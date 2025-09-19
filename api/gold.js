export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": "goldapi-3zcg8sma2ah6mp-io",
        "Content-Type": "application/json"
      }
    });

    const text = await response.text(); // show raw text
    res.status(200).send(text);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
