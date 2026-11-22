// ================================
// Student Past Question Upload
// ================================

const PENDING_KEY = "futeshub_pending_questions";
const APPROVED_KEY = "futeshub_approved_questions";
const MAX_FILE_BYTES = 1.5 * 1024 * 1024; // ~1.5 MB for localStorage safety

let selectedFileData = null; // { name, type, dataUrl }

function onFileSelected(input) {
    const file = input.files[0];
    const label = document.getElementById("fileLabelText");
    selectedFileData = null;

    if (!file) {
        label.textContent = "Click to choose PDF or image (max ~1.5 MB)";
        return;
    }

    if (file.size > MAX_FILE_BYTES) {
        alert("File is too large for browser storage (max about 1.5 MB).\nPlease use a smaller file or paste a public link instead.");
        input.value = "";
        label.textContent = "Click to choose PDF or image (max ~1.5 MB)";
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        selectedFileData = {
            name: file.name,
            type: file.type,
            dataUrl: e.target.result
        };
        label.textContent = "Selected: " + file.name + " (" + Math.round(file.size / 1024) + " KB)";
    };
    reader.onerror = function () {
        alert("Could not read the file. Try again or use a link.");
        input.value = "";
    };
    reader.readAsDataURL(file);
}

function getPending() {
    try {
        return JSON.parse(localStorage.getItem(PENDING_KEY)) || [];
    } catch {
        return [];
    }
}

function savePending(list) {
    localStorage.setItem(PENDING_KEY, JSON.stringify(list));
}

function submitQuestion(e) {
    e.preventDefault();

    const courseCode = document.getElementById("upCourseCode").value.trim().toUpperCase();
    const courseTitle = document.getElementById("upCourseTitle").value.trim();
    const department = document.getElementById("upDepartment").value;
    const level = document.getElementById("upLevel").value;
    const session = document.getElementById("upSession").value;
    const semester = document.getElementById("upSemester").value;
    const submitter = document.getElementById("upSubmitter").value.trim();
    const matric = document.getElementById("upMatric").value.trim();
    const fileLink = document.getElementById("upFileLink").value.trim();

    if (!courseCode || !courseTitle || !department || !level || !session || !semester) {
        alert("Please fill in all required fields.");
        return;
    }

    if (!selectedFileData && !fileLink) {
        alert("Please attach a file or paste a file link.");
        return;
    }

    const pending = getPending();
    const id = "sub_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);

    const entry = {
        id: id,
        courseCode: courseCode,
        courseTitle: courseTitle,
        department: department,
        level: level,
        session: session,
        semester: semester,
        year: parseInt(session.split("/")[0], 10) || new Date().getFullYear(),
        submitter: submitter || "Anonymous",
        matric: matric || "",
        fileName: selectedFileData ? selectedFileData.name : "",
        fileType: selectedFileData ? selectedFileData.type : "",
        fileData: selectedFileData ? selectedFileData.dataUrl : "",
        fileLink: fileLink || "",
        status: "pending",
        submittedAt: new Date().toISOString()
    };

    try {
        pending.unshift(entry);
        savePending(pending);
    } catch (err) {
        alert("Could not save (storage may be full). Try a smaller file or use a link only.");
        return;
    }

    document.getElementById("uploadForm").style.display = "none";
    document.getElementById("uploadSuccess").style.display = "block";
}
