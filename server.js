import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// আপনার টেলিগ্রাম টোকেন এবং chat_id বসান
const BOT_TOKEN = "8414254641:AAEWGtazocKKlEuo5BDTu4mVTQlT4-R82qE";
const CHAT_ID = "-1002777193606"; 

app.post("/send", async (req, res) => {
  const { message } = req.body;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown"
    })
  });

  res.json({ status: "✅ Signal Sent to Telegram!" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
