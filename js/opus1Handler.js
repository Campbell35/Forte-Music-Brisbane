document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("musicform");
  const button = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const spinner = document.getElementById("spinner");
  const redirectMsg = document.getElementById("redirectMsg");

  if (!form) {
    console.error("Form not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted!");

    // Show sending signal
    button.disabled = true;
    btnText.textContent = "Sending...";
    spinner.style.display = "inline";
    redirectMsg.style.display = "block";

   const lessonFor = document.getElementById("lessonFor").value;

   const payload = {
  student_first_name: document.getElementById("studentName").value.trim(),
  student_last_name: document.getElementById("studentLastName").value.trim(),
  student_email: document.getElementById("email").value.trim(),
  student_status: "Online Prospect",
  student_tags: [
    "Web Prospect", // 👈 global tag added here
    document.getElementById("instrument").value.trim(),
    document.getElementById("location").value.trim(),
    document.getElementById("age").value.trim()
  ]
};


// Only include student phone if lesson is not for a child
if (lessonFor !== "child") {
  payload.student_primary_phone = document.getElementById("phone").value.trim();
}

if (lessonFor === "child") {
  payload.parent1_first_name = document.getElementById("name").value.trim();
  payload.parent1_last_name = document.getElementById("parentLastName").value.trim();
  payload.parent1_email = document.getElementById("email").value.trim();
  payload.parent1_primary_phone = document.getElementById("phone").value.trim();
  payload.parent1_status = "Online Prospect";
}
  console.log("Payload:", payload);

  const newWindow = window.open("", "_blank");

if (newWindow) {
  const doc = newWindow.document;

  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redirecting…</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background: #fafafa;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #333;
          }
          .card {
            background: white;
            padding: 50px 40px;
            border-radius: 14px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.08);
            text-align: center;
            max-width: 460px;
            width: 90%;
          }
          .spinner {
            width: 48px;
            height: 48px;
            border: 4px solid #e0e0e0;
            border-top-color: #0078ff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>Preparing Your Booking…</h2>
          <p>Thanks for submitting your details. We’re getting everything ready and will redirect you shortly.</p>
          <div class="spinner"></div>
        </div>
      </body>
    </html>
  `);
  doc.close();
}


  fetch("/.netlify/functions/proxy", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => {
  console.log(data);
  // Wait 2 seconds before redirecting
  setTimeout(() => {
    newWindow.location.href = "https://fortetoowongcoorparoo.opus1.io/m/trial";
  }, 2000); // 2000 milliseconds = 2 seconds
})
.catch(err => console.error(err));

});

// close DOMContentLoaded listener
});
