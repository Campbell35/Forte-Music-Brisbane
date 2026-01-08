const bookingLinks = {
  Jungle_music: "https://fortetoowongcoorparoo.opus1.io/w/babies",
  music_is_fun: "https://fortetoowongcoorparoo.opus1.io/w/classes",
  Piano_keys: "https://fortetoowongcoorparoo.opus1.io/w/classes",
  Junior_keys: "https://fortetoowongcoorparoo.opus1.io/w/classes",
  Instruments: "https://fortetoowongcoorparoo.opus1.io/w/twprivate",
  Piano: "https://fortetoowongcoorparoo.opus1.io/w/pianotrial",
  Guitar: "https://fortetoowongcoorparoo.opus1.io/w/gtrtrial",
  Drums: "https://fortetoowongcoorparoo.opus1.io/w/drumtrial",
  Violin: "https://fortetoowongcoorparoo.opus1.io/w/violin"
};

// 2️⃣ Then add your form submission logic BELOW it
document.getElementById("musicform").addEventListener("submit", function(e) {
  e.preventDefault();

  const instrument = document.getElementById("instrument").value;

  const link = bookingLinks[instrument];

  if (!link) {
    alert("Please select a valid course or instrument.");
    return;
  }

  const container = document.getElementById("bookingLinkContainer");
  const bookingLink = document.getElementById("bookingLink");

  bookingLink.href = link;
  bookingLink.textContent = `Book your ${instrument.replace(/_/g, " ")} trial`;

  container.style.display = "block";
});
