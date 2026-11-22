// ================================
// SAMPLE PAST QUESTIONS DATA (FUTES-IYIN)
// All 34 official undergraduate programmes represented
// ================================

const pastQuestions = [
    // Faculty of Computing and Information Technology
    { id: 1, courseCode: "CSC101", courseTitle: "Introduction to Computer Science", department: "Computer Science", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 2, courseCode: "CSC201", courseTitle: "Data Structures & Algorithms", department: "Computer Science", level: "200", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 3, courseCode: "CSC301", courseTitle: "Operating Systems", department: "Computer Science", level: "300", session: "2026/2027", semester: "Second Semester", year: 2026 },
    { id: 4, courseCode: "CSC401", courseTitle: "Artificial Intelligence", department: "Computer Science", level: "400", session: "2026/2027", semester: "First Semester", year: 2026 },
    { id: 5, courseCode: "SWE101", courseTitle: "Introduction to Software Engineering", department: "Software Engineering", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 6, courseCode: "CYB101", courseTitle: "Fundamentals of Cyber Security", department: "Cyber Security", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 7, courseCode: "DSC101", courseTitle: "Introduction to Data Science", department: "Data Science", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 8, courseCode: "ICT101", courseTitle: "Fundamentals of ICT", department: "Information and Communication Technology", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },

    // Faculty of Engineering and Technology
    { id: 9, courseCode: "MEE101", courseTitle: "Engineering Drawing", department: "Mechanical Engineering", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 10, courseCode: "MEE201", courseTitle: "Thermodynamics", department: "Mechanical Engineering", level: "200", session: "2026/2027", semester: "First Semester", year: 2026 },
    { id: 11, courseCode: "CVE101", courseTitle: "Introduction to Civil Engineering", department: "Civil and Environmental Engineering", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 12, courseCode: "EEE101", courseTitle: "Basic Electrical Engineering", department: "Electrical and Electronics Engineering", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 13, courseCode: "EEE201", courseTitle: "Circuit Theory", department: "Electrical and Electronics Engineering", level: "200", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 14, courseCode: "CPE101", courseTitle: "Introduction to Computer Engineering", department: "Computer Engineering", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 15, courseCode: "MTE101", courseTitle: "Introduction to Mechatronics", department: "Mechatronics Engineering", level: "100", session: "2026/2027", semester: "First Semester", year: 2026 },
    { id: 16, courseCode: "ABE101", courseTitle: "Introduction to Agricultural Engineering", department: "Agricultural and Biosystems Engineering", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 17, courseCode: "BME101", courseTitle: "Introduction to Biomedical Engineering", department: "Biomedical Engineering", level: "100", session: "2026/2027", semester: "First Semester", year: 2026 },
    { id: 18, courseCode: "MNE101", courseTitle: "Introduction to Mining Engineering", department: "Mining Engineering", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },

    // Faculty of Natural and Applied Sciences
    { id: 19, courseCode: "MTH101", courseTitle: "Elementary Mathematics I", department: "Mathematics", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 20, courseCode: "PHY101", courseTitle: "General Physics I", department: "Physics", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 21, courseCode: "CHM101", courseTitle: "General Chemistry I", department: "Chemistry", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 22, courseCode: "BIO101", courseTitle: "General Biology I", department: "Biology", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 23, courseCode: "BCH101", courseTitle: "Introductory Biochemistry", department: "Biochemistry", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 24, courseCode: "BCH201", courseTitle: "Biomolecules", department: "Biochemistry", level: "200", session: "2026/2027", semester: "First Semester", year: 2026 },
    { id: 25, courseCode: "MCB101", courseTitle: "Introduction to Microbiology", department: "Microbiology", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 26, courseCode: "MCB201", courseTitle: "General Microbiology", department: "Microbiology", level: "200", session: "2025/2026", semester: "Second Semester", year: 2026 },
    { id: 27, courseCode: "GLY101", courseTitle: "Introduction to Geology", department: "Geology", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 28, courseCode: "STA101", courseTitle: "Introduction to Statistics", department: "Statistics", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 29, courseCode: "FRS101", courseTitle: "Introduction to Forensic Science", department: "Forensic Science", level: "100", session: "2026/2027", semester: "First Semester", year: 2026 },
    { id: 30, courseCode: "AEB101", courseTitle: "Introduction to Animal & Environmental Biology", department: "Animal and Environmental Biology", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 31, courseCode: "BTH101", courseTitle: "Introduction to Biotechnology", department: "Biotechnology", level: "100", session: "2026/2027", semester: "First Semester", year: 2026 },
    { id: 32, courseCode: "SLT101", courseTitle: "Introduction to Science Laboratory Technology", department: "Science Laboratory Technology", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 33, courseCode: "EMT101", courseTitle: "Introduction to Environmental Management", department: "Environmental Management and Toxicology", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },

    // Faculty of Environmental Sciences
    { id: 34, courseCode: "ARC101", courseTitle: "Introduction to Architecture", department: "Architecture", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 35, courseCode: "BLD101", courseTitle: "Introduction to Building Technology", department: "Building Technology", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 36, courseCode: "ESM101", courseTitle: "Introduction to Estate Management", department: "Estate Management", level: "100", session: "2026/2027", semester: "First Semester", year: 2026 },
    { id: 37, courseCode: "ENV101", courseTitle: "Principles of Environmental Science", department: "Environmental Science and Management", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 38, courseCode: "IND101", courseTitle: "Introduction to Industrial Design", department: "Industrial Design", level: "100", session: "2026/2027", semester: "First Semester", year: 2026 },
    { id: 39, courseCode: "QSV101", courseTitle: "Introduction to Quantity Surveying", department: "Quantity Surveying", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 40, courseCode: "SVG101", courseTitle: "Introduction to Surveying", department: "Surveying and Geoinformatics", level: "100", session: "2025/2026", semester: "First Semester", year: 2025 },
    { id: 41, courseCode: "URP101", courseTitle: "Introduction to Urban & Regional Planning", department: "Urban and Regional Planning", level: "100", session: "2026/2027", semester: "First Semester", year: 2026 }
];


function displayQuestions(questions) {
    const list = document.getElementById("questionsList");
    const countText = document.getElementById("resultCount");
    list.innerHTML = "";

    if (questions.length === 0) {
        list.innerHTML = `
            <div class="no-results">
                <h3>No past questions found</h3>
                <p>Try changing your filters or search term.</p>
            </div>
        `;
        countText.textContent = "No results found";
        return;
    }

    countText.textContent = `Showing ${questions.length} past question${questions.length > 1 ? "s" : ""}`;

    questions.forEach(function (q) {
        list.innerHTML += `
            <div class="question-card">
                <div class="question-header">
                    <h3>${q.courseCode}</h3>
                    <span class="level-badge">${q.level} Level</span>
                </div>
                ${q.isUserUpload ? '<span class="upload-badge">Student upload</span>' : ''}
                <p class="course-title">${q.courseTitle}</p>
                <div class="question-meta">
                    <span><img src="icons/folder.svg" alt="" class="meta-icon"> ${q.department}</span>
                    <span><img src="icons/calendar.svg" alt="" class="meta-icon"> ${q.session}</span>
                    <span><img src="icons/book-open.svg" alt="" class="meta-icon"> ${q.semester}</span>
                </div>
                <button class="view-btn" onclick="viewQuestion(${q.id})">
                    View Past Question
                </button>
            </div>
        `;
    });
}


function filterQuestions() {
    const department = document.getElementById("department").value;
    const level = document.getElementById("level").value;
    const search = document.getElementById("searchCourse").value.trim().toUpperCase();
    const session = document.getElementById("sessionFilter").value;

    let filtered = pastQuestions.filter(function (q) {
        const matchDept = department === "" || q.department === department;
        const matchLevel = level === "" || q.level === level;
        const matchSession = session === "" || q.session === session;
        const matchSearch = search === "" ||
            q.courseCode.toUpperCase().includes(search) ||
            q.courseTitle.toUpperCase().includes(search);
        return matchDept && matchLevel && matchSession && matchSearch;
    });

    displayQuestions(filtered);
}


function resetFilters() {
    document.getElementById("department").value = "";
    document.getElementById("level").value = "";
    document.getElementById("searchCourse").value = "";
    document.getElementById("sessionFilter").value = "";
    
// ================================
// MERGE APPROVED USER UPLOADS
// ================================

function getApprovedUploads() {
    try {
        return JSON.parse(localStorage.getItem("futeshub_approved_questions")) || [];
    } catch {
        return [];
    }
}

function getAllQuestions() {
    const approved = getApprovedUploads().map(function (q) {
        return {
            id: q.id,
            courseCode: q.courseCode,
            courseTitle: q.courseTitle,
            department: q.department,
            level: q.level,
            session: q.session,
            semester: q.semester,
            year: q.year,
            fileData: q.fileData || "",
            fileLink: q.fileLink || "",
            fileName: q.fileName || "",
            isUserUpload: true
        };
    });
    // User-approved first, then built-in samples
    return approved.concat(pastQuestions);
}

// Override view to support downloaded/linked files
function viewQuestion(id) {
    const all = getAllQuestions();
    const question = all.find(q => String(q.id) === String(id));
    if (!question) return;

    if (question.fileLink) {
        if (confirm("Open the file link for this past question?")) {
            window.open(question.fileLink, "_blank");
        }
        return;
    }
    if (question.fileData) {
        const w = window.open("");
        if (w) {
            if (question.fileData.indexOf("application/pdf") !== -1 || (question.fileName && question.fileName.toLowerCase().endsWith(".pdf"))) {
                w.document.write('<iframe src="' + question.fileData + '" style="width:100%;height:100%;border:none;"></iframe>');
            } else if (question.fileData.indexOf("image/") !== -1) {
                w.document.write('<img src="' + question.fileData + '" style="max-width:100%;">');
            } else {
                w.location.href = question.fileData;
            }
        }
        return;
    }

    alert(
        "Past Question Selected:\n\n" +
        "Course: " + question.courseCode + " - " + question.courseTitle + "\n" +
        "Department: " + question.department + "\n" +
        "Level: " + question.level + "\n" +
        "Session: " + question.session + "\n" +
        "Semester: " + question.semester + "\n\n" +
        (question.isUserUpload ? "(User-uploaded – no file stored)" : "(Sample entry – PDF not attached in demo)")
    );
}

// Patch filter to use merged list
const _origFilter = filterQuestions;
filterQuestions = function () {
    const department = document.getElementById("department").value;
    const level = document.getElementById("level").value;
    const search = document.getElementById("searchCourse").value.trim().toUpperCase();
    const session = document.getElementById("sessionFilter").value;
    const all = getAllQuestions();

    const filtered = all.filter(function (q) {
        const matchDept = department === "" || q.department === department;
        const matchLevel = level === "" || q.level === level;
        const matchSession = session === "" || q.session === session;
        const matchSearch = search === "" ||
            q.courseCode.toUpperCase().includes(search) ||
            q.courseTitle.toUpperCase().includes(search);
        return matchDept && matchLevel && matchSession && matchSearch;
    });
    displayQuestions(filtered);
};

resetFilters = function () {
    document.getElementById("department").value = "";
    document.getElementById("level").value = "";
    document.getElementById("searchCourse").value = "";
    document.getElementById("sessionFilter").value = "";
    displayQuestions(getAllQuestions());
};

displayQuestions(getAllQuestions());

}


function viewQuestion(id) {
    const question = pastQuestions.find(q => q.id === id);
    if (question) {
        alert(
            `Past Question Selected:\n\n` +
            `Course: ${question.courseCode} - ${question.courseTitle}\n` +
            `Department: ${question.department}\n` +
            `Level: ${question.level}\n` +
            `Session: ${question.session}\n` +
            `Semester: ${question.semester}\n\n` +
            `(In a real app, this would open or download the PDF)`
        );
    }
}



// ================================
// MERGE APPROVED USER UPLOADS
// ================================

function getApprovedUploads() {
    try {
        return JSON.parse(localStorage.getItem("futeshub_approved_questions")) || [];
    } catch {
        return [];
    }
}

function getAllQuestions() {
    const approved = getApprovedUploads().map(function (q) {
        return {
            id: q.id,
            courseCode: q.courseCode,
            courseTitle: q.courseTitle,
            department: q.department,
            level: q.level,
            session: q.session,
            semester: q.semester,
            year: q.year,
            fileData: q.fileData || "",
            fileLink: q.fileLink || "",
            fileName: q.fileName || "",
            isUserUpload: true
        };
    });
    // User-approved first, then built-in samples
    return approved.concat(pastQuestions);
}

// Override view to support downloaded/linked files
function viewQuestion(id) {
    const all = getAllQuestions();
    const question = all.find(q => String(q.id) === String(id));
    if (!question) return;

    if (question.fileLink) {
        if (confirm("Open the file link for this past question?")) {
            window.open(question.fileLink, "_blank");
        }
        return;
    }
    if (question.fileData) {
        const w = window.open("");
        if (w) {
            if (question.fileData.indexOf("application/pdf") !== -1 || (question.fileName && question.fileName.toLowerCase().endsWith(".pdf"))) {
                w.document.write('<iframe src="' + question.fileData + '" style="width:100%;height:100%;border:none;"></iframe>');
            } else if (question.fileData.indexOf("image/") !== -1) {
                w.document.write('<img src="' + question.fileData + '" style="max-width:100%;">');
            } else {
                w.location.href = question.fileData;
            }
        }
        return;
    }

    alert(
        "Past Question Selected:\n\n" +
        "Course: " + question.courseCode + " - " + question.courseTitle + "\n" +
        "Department: " + question.department + "\n" +
        "Level: " + question.level + "\n" +
        "Session: " + question.session + "\n" +
        "Semester: " + question.semester + "\n\n" +
        (question.isUserUpload ? "(User-uploaded – no file stored)" : "(Sample entry – PDF not attached in demo)")
    );
}

// Patch filter to use merged list
const _origFilter = filterQuestions;
filterQuestions = function () {
    const department = document.getElementById("department").value;
    const level = document.getElementById("level").value;
    const search = document.getElementById("searchCourse").value.trim().toUpperCase();
    const session = document.getElementById("sessionFilter").value;
    const all = getAllQuestions();

    const filtered = all.filter(function (q) {
        const matchDept = department === "" || q.department === department;
        const matchLevel = level === "" || q.level === level;
        const matchSession = session === "" || q.session === session;
        const matchSearch = search === "" ||
            q.courseCode.toUpperCase().includes(search) ||
            q.courseTitle.toUpperCase().includes(search);
        return matchDept && matchLevel && matchSession && matchSearch;
    });
    displayQuestions(filtered);
};

resetFilters = function () {
    document.getElementById("department").value = "";
    document.getElementById("level").value = "";
    document.getElementById("searchCourse").value = "";
    document.getElementById("sessionFilter").value = "";
    displayQuestions(getAllQuestions());
};

displayQuestions(getAllQuestions());

