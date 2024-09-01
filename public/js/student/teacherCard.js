const profilePhoto = document.getElementById("profile-photo");
const profileMenu = document.getElementById("profile-menu");

console.log("abc");

profilePhoto.addEventListener("click", () => {
  profileMenu.style.display =
    profileMenu.style.display === "block" ? "none" : "block";
});

// Close the menu when clicking outside
window.addEventListener("click", (event) => {
  if (
    !profilePhoto.contains(event.target) &&
    !profileMenu.contains(event.target)
  ) {
    profileMenu.style.display = "none";
  }
});

function copyToClipboard(teacher) {
  const email = document.getElementById(`email-${teacher}`).textContent;
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert(`Email copied: ${email}`);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

function showPopup(teacher) {
  const popup = document.getElementById(`popup-${teacher}`);
  popup.classList.add("show");

  // Close the popup if clicked outside of the popup content
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      closePopup(teacher);
    }
  });
}

function closePopup(teacher) {
  const popup = document.getElementById(`popup-${teacher}`);
  popup.classList.remove("show");
}
