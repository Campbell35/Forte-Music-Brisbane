document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("musicform");

if (!form) {
  console.error("Form not found!");
  return;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted!");

  const lessonFor = document.getElementById("lessonFor").value;

  // Always include student fields
  const payload = {
    student_first_name: document.getElementById("studentName").value.trim(),
    student_last_name: document.getElementById("studentLastName").value.trim(),
    student_email: document.getElementById("email").value.trim(),
    student_primary_phone: document.getElementById("phone").value.trim(),
    student_tags: [
      document.getElementById("instrument").value.trim(),
      document.getElementById("location").value.trim()
    ]
  };

  // Conditionally include parent fields if lesson is for a child
  if (lessonFor === "child") {
    payload.parent1_first_name = document.getElementById("name").value.trim();
    payload.parent1_last_name = document.getElementById("parentLastName").value.trim();
    payload.parent1_email = document.getElementById("email").value.trim();
    payload.parent1_primary_phone = document.getElementById("phone").value.trim();
  }

  console.log("Payload:", payload);

  fetch("/.netlify/functions/create-person", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
   .then(() => {
      console.log("Webhook request sent.");
      location.reload(); // 🔄 Refresh the page after submission
    })
    .catch(err => console.error("Fetch error:", err));
  });
});