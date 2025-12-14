const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

function setGreeting() {
    const nameEl = document.querySelector("h2.name");
    const name = nameEl.textContent;
    const hour = new Date().getHours();
    const greeting = document.getElementById("greeting");

    if (hour < 12) greeting.textContent = "Good morning, " + name + " 🌞";
    else if (hour < 18) greeting.textContent = "Good afternoon, " + name + " ☀️";
    else greeting.textContent = "Good evening, " + name +  " 🌙";
}
setGreeting();

document.getElementById("editTitleBtn").addEventListener("click", function () {
    let current = document.getElementById("jobTitle").textContent;
    let updated = prompt("Enter your new job title:", current);

    if (updated !== null && updated.trim() !== "") {
        document.getElementById("jobTitle").textContent = updated.trim();
    }
});

document.getElementById("toggleSkillsBtn").addEventListener("click", function () {
    const section = document.getElementById("skillsSection");
    const btn = document.getElementById("toggleSkillsBtn");

    if (section.style.display === "none") {
        section.style.display = "block";
        btn.textContent = "Hide Skills";
    } else {
        section.style.display = "none";
        btn.textContent = "Show Skills";
    }
});

document.getElementById("messageArea").addEventListener("input", function () {
    const count = this.value.length;
    document.getElementById("charCount").textContent = count + " characters";
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();

    if (name === "" || email === "") {
        alert("Email and Name fields cannot be empty.");
        event.preventDefault();
    }
});

function setFooterDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    document.getElementById("footerDate").textContent =
        "Today is " + today.toLocaleDateString(undefined, options);
}
setFooterDate();
