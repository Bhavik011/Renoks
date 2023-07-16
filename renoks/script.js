document.getElementById("downloadBtn").addEventListener("click", function() {
    var link = document.createElement("a");
    link.href = "files/Renoks_O_Ring.pdf";  // Replace with the actual path to your PDF file
    link.download = "products.pdf";  // Replace with the desired filename for the downloaded PDF
    link.click();
  });
  