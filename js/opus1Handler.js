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
  student_status: "Online Prospects",
  student_tags: [
    document.getElementById("instrument").value.trim(),
    document.getElementById("location").value.trim(),
    document.getElementById("age").value.trim()
  ]
};

if (lessonFor === "child") {
  payload.parent1_first_name = document.getElementById("name").value.trim();
  payload.parent1_last_name = document.getElementById("parentLastName").value.trim();
  payload.parent1_email = document.getElementById("email").value.trim();
  payload.parent1_primary_phone = document.getElementById("phone").value.trim();
  payload.parent1_status = "Online Prospects";
}

  console.log("Payload:", payload);

 fetch("https://api.opus1.io/hooks/fortetoowongcoorparoo/5Q9XNlZ7Gcf8VBsmt3l1Mpz5yMo8/people/create", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})
.then(() => {
  console.log("Webhook request sent.");
  window.location.href = "https://fortetoowongcoorparoo.opus1.io/m/trial"; // 🔁 Redirect after submission
})
.catch(err => console.error("Fetch error:", err));
});
});