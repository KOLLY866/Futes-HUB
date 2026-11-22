console.log("CampusHub is working!");

// ================================
// COURSE DATA
// ================================

let courses = [];


// ================================
// ADD COURSE
// ================================

function addCourse() {

    const course =
        document.getElementById("course").value.trim();

    const unit =
        Number(document.getElementById("unit").value);

    const score =
        Number(document.getElementById("score").value);


    // Validate input

    if (
        course === "" ||
        unit <= 0 ||
        !Number.isFinite(unit) ||
        !Number.isFinite(score) ||
        score < 0 ||
        score > 100
    ) {

        alert("Please enter valid course information.");

        return;
    }


    let grade;
    let point;


    // ================================
    // GRADING SYSTEM
    // ================================

    if (score >= 70) {

        grade = "A";
        point = 5;

    } else if (score >= 60) {

        grade = "B";
        point = 4;

    } else if (score >= 50) {

        grade = "C";
        point = 3;

    } else if (score >= 45) {

        grade = "D";
        point = 2;

    } else if (score >= 40) {

        grade = "E";
        point = 1;

    } else {

        grade = "F";
        point = 0;

    }


    // Add course to array

    courses.push({

        course: course,
        unit: unit,
        score: score,
        grade: grade,
        point: point

    });


    displayCourses();


    // Clear inputs

    document.getElementById("course").value = "";
    document.getElementById("unit").value = "";
    document.getElementById("score").value = "";

    document.getElementById("course").focus();

}


// ================================
// DISPLAY COURSES
// ================================

function displayCourses() {

    const courseList = document.getElementById("courseList");

    courseList.innerHTML = "";

    courses.forEach(function (item, index) {

        courseList.innerHTML += `
    <tr>
        <td>${item.course}</td>
        <td>${item.unit}</td>
        <td>${item.score}</td>
        <td>${item.grade}</td>
        <td>${item.point}</td>
        <td>
            <button onclick="removeCourse(${index})">
                Remove
            </button>
        </td>
    </tr>
`;

    });

}


// ================================
// REMOVE COURSE
// ================================

function removeCourse(index) {

    courses.splice(index, 1);

    displayCourses();

}


// ================================
// DEGREE CLASSIFICATION
// ================================

function getDegreeClass(cgpa) {

    if (cgpa >= 4.50) {

        return "First Class";

    } else if (cgpa >= 3.50) {

        return "Second Class Upper";

    } else if (cgpa >= 2.40) {

        return "Second Class Lower";

    } else if (cgpa >= 1.50) {

        return "Third Class";

    } else if (cgpa >= 1.00) {

        return "Pass";

    } else {

        return "Fail";

    }

}


// ================================
// CALCULATE GPA AND CGPA
// ================================

function calculateGPA() {

    let totalUnits = 0;

    let totalPoints = 0;


    courses.forEach(function (item) {

        totalUnits += item.unit;

        totalPoints +=
            item.unit * item.point;

    });


    if (totalUnits === 0) {

        alert("Please add at least one course.");

        return;
    }


    // Calculate GPA

    const gpa =
        totalPoints / totalUnits;


    // Get previous CGPA

    const previousCGPA =
        parseFloat(
            document.getElementById(
                "previousCGPA"
            ).value
        ) || 0;


    // Get previous total units

    const previousUnits =
        parseFloat(
            document.getElementById(
                "previousUnits"
            ).value
        ) || 0;


    // Validate previous CGPA

    if (
        previousCGPA < 0 ||
        previousCGPA > 5
    ) {

        alert(
            "Previous CGPA must be between 0 and 5."
        );

        return;

    }


    // Calculate overall CGPA

    const totalQualityPoints =

        (previousCGPA * previousUnits) +
        totalPoints;


    const totalCGPAUnits =

        previousUnits +
        totalUnits;


    const cgpa =

        totalCGPAUnits > 0

            ? totalQualityPoints /
              totalCGPAUnits

            : gpa;


    // Get degree classification

    const degreeClass =
        getDegreeClass(cgpa);


    // ================================
    // DISPLAY STUDENT INFORMATION
    // ================================

    document.getElementById(
        "resultName"
    ).textContent =

        document.getElementById(
            "studentName"
        ).value || "-";


    document.getElementById(
        "resultMatric"
    ).textContent =

        document.getElementById(
            "matricNumber"
        ).value || "-";


    document.getElementById(
        "resultSession"
    ).textContent =

        document.getElementById(
            "session"
        ).value || "-";


    document.getElementById(
        "resultSemester"
    ).textContent =

        document.getElementById(
            "semester"
        ).value || "-";


    // ================================
    // DISPLAY RESULTS
    // ================================

    document.getElementById(
        "gpa"
    ).textContent =

        gpa.toFixed(2);


    document.getElementById(
        "totalUnit"
    ).textContent =

        "Total Units: " +
        totalUnits;


    document.getElementById(
        "displayPreviousCGPA"
    ).textContent =

        previousCGPA.toFixed(2);


    document.getElementById(
        "displayCurrentGPA"
    ).textContent =

        gpa.toFixed(2);


    document.getElementById(
        "cgpa"
    ).textContent =

        cgpa.toFixed(2) +
        " / 5.00";


    document.getElementById(
        "degreeClass"
    ).textContent =

        degreeClass;

}


// ================================
// RESET CALCULATOR
// ================================

function resetCalculator() {

    courses = [];


    // Clear table

    displayCourses();


    // Clear student information

    document.getElementById(
        "studentName"
    ).value = "";


    document.getElementById(
        "matricNumber"
    ).value = "";


    document.getElementById(
        "previousCGPA"
    ).value = "";


    document.getElementById(
        "previousUnits"
    ).value = "";


    document.getElementById(
        "session"
    ).value = "";


    document.getElementById(
        "semester"
    ).value = "";


    // Reset results

    document.getElementById(
        "gpa"
    ).textContent = "0.00";


    document.getElementById(
        "totalUnit"
    ).textContent =
        "Total Units: 0";


    document.getElementById(
        "displayPreviousCGPA"
    ).textContent =
        "0.00";


    document.getElementById(
        "displayCurrentGPA"
    ).textContent =
        "0.00";


    document.getElementById(
        "cgpa"
    ).textContent =
        "0.00 / 5.00";


    document.getElementById(
        "degreeClass"
    ).textContent =
        "-";


    document.getElementById(
        "resultName"
    ).textContent =
        "-";


    document.getElementById(
        "resultMatric"
    ).textContent =
        "-";


    document.getElementById(
        "resultSession"
    ).textContent =
        "-";


    document.getElementById(
        "resultSemester"
    ).textContent =
        "-";

}


// ================================
// SAVE TO DASHBOARD (localStorage)
// ================================

function saveToDashboard() {
    const gpaText = document.getElementById("gpa").textContent;
    const cgpaText = document.getElementById("cgpa").textContent;
    const unitsText = document.getElementById("totalUnit").textContent;

    const gpa = parseFloat(gpaText) || 0;
    const cgpaMatch = cgpaText.match(/[\d.]+/);
    const cgpa = cgpaMatch ? parseFloat(cgpaMatch[0]) : 0;
    const unitsMatch = unitsText.match(/\d+/);
    const currentUnits = unitsMatch ? parseInt(unitsMatch[0], 10) : 0;

    const name = document.getElementById("studentName").value.trim();
    const matric = document.getElementById("matricNumber").value.trim();
    const prevUnits = parseFloat(document.getElementById("previousUnits").value) || 0;

    if (gpa === 0 && cgpa === 0) {
        alert("Please calculate your GPA first.");
        return;
    }

    const key = "futeshub_student";
    let student = {};
    try {
        student = JSON.parse(localStorage.getItem(key)) || {};
    } catch (e) {
        student = {};
    }

    const today = new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short"
    });

    const activity = student.activity || [];
    activity.unshift({
        date: today,
        text: "Calculated GPA: " + gpa.toFixed(2) + " · CGPA: " + cgpa.toFixed(2)
    });

    student.name = name || student.name || "Student";
    student.matric = matric || student.matric || "";
    student.lastGpa = gpa;
    student.cgpa = cgpa;
    student.units = prevUnits + currentUnits;
    student.activity = activity.slice(0, 10);

    localStorage.setItem(key, JSON.stringify(student));
    alert("Results saved to your Dashboard!");
    window.location.href = "dashboard.html";
}

// Prefill name/matric from dashboard profile if available
(function prefillFromDashboard() {
    try {
        const raw = localStorage.getItem("futeshub_student");
        if (!raw) return;
        const s = JSON.parse(raw);
        if (s.name && document.getElementById("studentName")) {
            document.getElementById("studentName").value = s.name;
        }
        if (s.matric && document.getElementById("matricNumber")) {
            document.getElementById("matricNumber").value = s.matric;
        }
        if (s.cgpa && document.getElementById("previousCGPA")) {
            document.getElementById("previousCGPA").value = s.cgpa;
        }
        if (s.units && document.getElementById("previousUnits")) {
            document.getElementById("previousUnits").value = s.units;
        }
    } catch (e) {}
})();
