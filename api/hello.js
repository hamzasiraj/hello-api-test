export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.gold-api.com/get_price?symbol=XAU");
    
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch gold price" });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Server error while fetching gold price" });
  }
}
