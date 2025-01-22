// Function to generate HTML from EJS template
function generateHtml() {
  const templatePath = path.join(viewsDir, "members.ejs");
  const outputFile = path.join(outputDir, "members.html"); // Save HTML to outputDir

  // Pass all necessary data to the template
  ejs.renderFile(
    templatePath,
    {
      title: "Muirkirk Angling Association Store",
      firstName: "John", // Replace with dynamic data as needed
      lastName: "Doe", // Replace with dynamic data as needed
      permitType: "Full", // Replace with dynamic data as needed
      displayPaymentOption: true, // Replace with dynamic data as needed
      renewalPrice: "50", // Replace with dynamic data as needed
    },
    (err, str) => {
      if (err) {
        console.error("Error rendering EJS:", err);
      } else {
        fs.writeFileSync(outputFile, str);
        console.log("Generated HTML: ", outputFile);
      }
    }
  );
}