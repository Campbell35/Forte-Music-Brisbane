document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("musicform");
  const button = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const spinner = document.getElementById("spinner");

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

    const lessonFor = document.getElementById("lessonFor").value;

    const payload = {
      student_first_name: document.getElementById("studentName").value.trim(),
      student_last_name: document.getElementById("studentLastName").value.trim(),
      student_email: document.getElementById("email").value.trim(),
      student_primary_phone: document.getElementById("phone").value.trim(),
      student_status: "Online Prospect",
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
      payload.parent1_status = "Online Prospect";
    }

    console.log("Payload:", payload);

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
    window.location.href = "https://fortetoowongcoorparoo.opus1.io/m/trial";
  }, 5000); // 2000 milliseconds = 2 seconds
})
.catch(err => console.error(err));

});

// close DOMContentLoaded listener
});
