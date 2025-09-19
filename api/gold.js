export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": "fad784a8c01a5a78e84b8320f621e413",
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch gold price" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error while fetching gold price" });
  }
}
