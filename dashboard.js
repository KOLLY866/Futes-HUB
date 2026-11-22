// ================================
// FutesHub Student Dashboard
// ================================

const STORAGE_KEY = "futeshub_student";

function getStudent() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

function saveStudent(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getDegreeClass(cgpa) {
    if (cgpa >= 4.50) return "First Class";
    if (cgpa >= 3.50) return "Second Class Upper";
    if (cgpa >= 2.40) return "Second Class Lower";
    if (cgpa >= 1.50) return "Third Class";
    if (cgpa >= 1.00) return "Pass";
    return "—";
}

function initials(name) {
    if (!name) return "ST";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function loadDashboard() {
    const student = getStudent();

    if (!student) {
        // First visit – open profile modal so they can set up
        openProfileEdit();
        return;
    }

    // Header
    document.getElementById("dashName").textContent = student.name || "Student";
    document.getElementById("navUserName").textContent = student.name || "Student";
    document.getElementById("dashMatric").textContent =
        (student.matric ? "Matric: " + student.matric : "Matric: —") + " · FUTES-IYIN";

    // Profile card
    document.getElementById("profileName").textContent = student.name || "—";
    document.getElementById("profileMatric").textContent = student.matric || "—";
    document.getElementById("profileDept").textContent = student.department || "—";
    document.getElementById("profileLevel").textContent = (student.level || "100") + " Level";
    document.getElementById("profileEmail").textContent = student.email || "—";
    document.getElementById("avatarInitials").textContent = initials(student.name);

    // Stats
    const cgpa = parseFloat(student.cgpa) || 0;
    const gpa = parseFloat(student.lastGpa) || 0;
    const units = parseInt(student.units, 10) || 0;
    const level = student.level || "100";

    document.getElementById("statCGPA").textContent = cgpa.toFixed(2);
    document.getElementById("statClass").textContent = getDegreeClass(cgpa);
    document.getElementById("statGPA").textContent = gpa.toFixed(2);
    document.getElementById("statUnits").textContent = units;
    document.getElementById("statLevel").textContent = level;

    // Progress bars
    const cgpaPct = Math.min(100, Math.round((cgpa / 4.5) * 100));
    document.getElementById("progressPercent").textContent = cgpaPct + "%";
    document.getElementById("progressFill").style.width = cgpaPct + "%";

    const unitsPct = Math.min(100, Math.round((units / 160) * 100));
    document.getElementById("unitsProgress").textContent = units + " / 160";
    document.getElementById("unitsFill").style.width = unitsPct + "%";

    if (cgpa > 0) {
        document.getElementById("progressNote").textContent =
            "You are currently on " + getDegreeClass(cgpa) + ". Keep going!";
    }

    // Activity
    const activity = student.activity || [];
    const list = document.getElementById("activityList");
    if (activity.length === 0) {
        list.innerHTML = "<li>No recent activity yet. Start by calculating your CGPA or browsing past questions.</li>";
    } else {
        list.innerHTML = activity
            .slice(0, 5)
            .map(a => `<li><span class="ann-date">${a.date}</span> ${a.text}</li>`)
            .join("");
    }
}

function openProfileEdit() {
    const student = getStudent() || {};
    document.getElementById("editName").value = student.name || "";
    document.getElementById("editMatric").value = student.matric || "";
    document.getElementById("editDept").value = student.department || "Computer Science";
    document.getElementById("editLevel").value = student.level || "100";
    document.getElementById("editEmail").value = student.email || "";
    document.getElementById("editCGPA").value = student.cgpa || "";
    document.getElementById("editUnits").value = student.units || "";
    document.getElementById("profileModal").classList.add("open");
}

function closeProfileEdit() {
    document.getElementById("profileModal").classList.remove("open");
}

function saveProfile(e) {
    e.preventDefault();

    const existing = getStudent() || {};
    const name = document.getElementById("editName").value.trim();
    const matric = document.getElementById("editMatric").value.trim();
    const department = document.getElementById("editDept").value;
    const level = document.getElementById("editLevel").value;
    const email = document.getElementById("editEmail").value.trim();
    const cgpa = parseFloat(document.getElementById("editCGPA").value) || 0;
    const units = parseInt(document.getElementById("editUnits").value, 10) || 0;

    const today = new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short"
    });

    const activity = existing.activity || [];
    activity.unshift({
        date: today,
        text: existing.name ? "Profile updated" : "Profile created — welcome to FutesHub!"
    });

    const data = {
        name,
        matric,
        department,
        level,
        email,
        cgpa,
        units,
        lastGpa: existing.lastGpa || 0,
        activity: activity.slice(0, 10)
    };

    saveStudent(data);
    closeProfileEdit();
    loadDashboard();
}

function logout() {
    if (confirm("Log out and clear your local profile data?")) {
        localStorage.removeItem(STORAGE_KEY);
        window.location.href = "index.html";
    }
}

// Close modal on overlay click
document.getElementById("profileModal").addEventListener("click", function (e) {
    if (e.target === this) closeProfileEdit();
});

// Load on start
loadDashboard();
