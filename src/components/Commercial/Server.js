const express = require("express"); const app = express(); const PDFDocument = require("pdfkit"); const nodemailer = require("nodemailer"); const fs = require("fs");

const db = require("./db");

app.use(express.json());

app.post("/submit-form", (req, res) => { const formData = req.body;

const sql = "INSERT INTO userinfo (natureOfProject, eneoPresence, eneoConnection, projectDetails, fundingSource, fundingOrgName, region, city) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"; const values = [ formData.natureOfProject, formData.eneoPresence, formData.eneoConnection, formData.projectDetails, formData.fundingSource, formData.fundingOrgName, formData.region, formData.city ];

db.query(sql, values, (err, result) => { if (err) { console.log(err); res.status(500).send("Error saving data to database"); } else { console.log("Data saved to database");

 
  // Generate PDF
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("form_data.pdf"));
  doc.fontSize(14).text(JSON.stringify(formData), 100, 100);
  doc.end();

  // Send PDF via email
  const transporter = nodemailer.createTransport();

  const mailOptions = {
    to: "dikubaashley2@gmail.com",
    subject: "Form Submission",
    text: "Please find attached the form submission data.",
    attachments: [
      {
        filename: "form_data.pdf",
        path: "form_data.pdf",
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  
  res.send("Form submitted successfully!");
}
});

});

app.listen(8000, () => { console.log("Server is running on port 8000"); });