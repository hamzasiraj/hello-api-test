export default async function handler(req, res) {
  try {
    // Fetch gold price from free API
    const response = await fetch("https://api.gold-api.com/v1/latest?base=XAU&currencies=USD");
    const data = await response.json();

    // Return the data
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gold price" });
  }
}
