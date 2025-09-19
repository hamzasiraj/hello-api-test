export default async function handler(req, res) {
  try {
    // Free API from CoinGecko for gold price in USD
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=gold&vs_currencies=usd"
    );
    const data = await response.json();

    res.status(200).json(data); // Example: { "gold": { "usd": 1930.55 } }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gold prrice" });
  }
}
