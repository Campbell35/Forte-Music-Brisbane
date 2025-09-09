document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("musicform");

  if (!form) {
    console.error("Form not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted!");

   const payload = {
  student_first_name: document.getElementById("studentName").value.trim(),
  student_last_name: document.getElementById("studentLastName").value.trim(),
  student_email: document.getElementById("email").value.trim(), // assuming student and parent share this field
  student_primary_phone: document.getElementById("phone").value.trim(),

  parent1_first_name: document.getElementById("name").value.trim(),
  parent1_last_name: document.getElementById("parentLastName").value.trim(),
  parent1_email: document.getElementById("email").value.trim(),
  parent1_primary_phone: document.getElementById("phone").value.trim(),

  student_tags: [
    `instrument:${document.getElementById("instrument").value.trim()}`,
    `location:${document.getElementById("location").value.trim()}`
  ]
};

    console.log("Payload:", payload);

    fetch("https://api.opus1.io/hooks/fortetoowongcoorparoo/5Q9XNlZ7Gcf8VBsmt3l1Mpz5yMo8/people/create", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(() => console.log("Webhook request sent."))
    .catch(err => console.error("Fetch error:", err));
  });
});
