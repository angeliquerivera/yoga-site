import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import path from "path";
import fs from "fs";

const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID"; // Replace with your spreadsheet ID
const RANGE = "Sheet1!A:C"; // Adjust the range based on your sheet layout

export default function contactHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message }: ContactFormData = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const auth = new google.auth.GoogleAuth({
        keyFile: path.join(process.cwd(), "path/to/your/credentials.json"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: RANGE,
        valueInputOption: "RAW",
        requestBody: {
          values: [[name, email, message]],
        },
      });

      return res
        .status(200)
        .json({ message: "Message sent successfully", response });
    } catch (error) {
      console.error("Error writing to Google Sheets:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while sending the message" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
