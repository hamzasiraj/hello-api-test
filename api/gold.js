export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.goldapi.io/api/XAU/USD",
      {
        headers: {
          "x-access-token": "YOUR_API_KEY_HERE", // replace with your actual key
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gold price" });
  }
}
