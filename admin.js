// ================================
// Admin: Approve / Reject uploads
// ================================

const PENDING_KEY = "futeshub_pending_questions";
const APPROVED_KEY = "futeshub_approved_questions";
const REJECTED_KEY = "futeshub_rejected_questions";
const PIN_KEY = "futeshub_admin_pin";
const AUTH_KEY = "futeshub_admin_auth";
const DEFAULT_PIN = "futesadmin";

function getPin() {
    return localStorage.getItem(PIN_KEY) || DEFAULT_PIN;
}

function getList(key) {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
        return [];
    }
}

function setList(key, list) {
    localStorage.setItem(key, JSON.stringify(list));
}

function isAuthed() {
    return sessionStorage.getItem(AUTH_KEY) === "1";
}

function adminLogin() {
    const pin = document.getElementById("adminPin").value;
    if (pin === getPin()) {
        sessionStorage.setItem(AUTH_KEY, "1");
        showPanel();
    } else {
        alert("Incorrect PIN.");
    }
}

function adminLogout() {
    sessionStorage.removeItem(AUTH_KEY);
    document.getElementById("adminPanel").style.display = "none";
    document.getElementById("adminLogin").style.display = "block";
    document.getElementById("logoutBtn").style.display = "none";
    document.getElementById("adminPin").value = "";
}

function changePin() {
    const np = document.getElementById("newPin").value.trim();
    if (np.length < 4) {
        alert("PIN must be at least 4 characters.");
        return;
    }
    localStorage.setItem(PIN_KEY, np);
    document.getElementById("newPin").value = "";
    alert("Admin PIN updated.");
}

function showPanel() {
    document.getElementById("adminLogin").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    document.getElementById("logoutBtn").style.display = "inline-block";
    renderAdmin();
}

function renderAdmin() {
    const pending = getList(PENDING_KEY);
    const approved = getList(APPROVED_KEY);
    const rejected = getList(REJECTED_KEY);

    document.getElementById("countPending").textContent = pending.length;
    document.getElementById("countApproved").textContent = approved.length;
    document.getElementById("countRejected").textContent = rejected.length;

    const pendingEl = document.getElementById("pendingList");
    if (pending.length === 0) {
        pendingEl.innerHTML = '<p style="color:#64748b;font-size:14px;">No pending submissions.</p>';
    } else {
        pendingEl.innerHTML = pending.map(q => `
            <div class="admin-item">
                <div class="admin-item-main">
                    <strong>${escapeHtml(q.courseCode)}</strong> — ${escapeHtml(q.courseTitle)}
                    <div class="admin-meta">
                        ${escapeHtml(q.department)} · ${q.level} Level · ${escapeHtml(q.session)} · ${escapeHtml(q.semester)}
                    </div>
                    <div class="admin-meta">
                        By: ${escapeHtml(q.submitter)}${q.matric ? " (" + escapeHtml(q.matric) + ")" : ""} ·
                        ${formatDate(q.submittedAt)}
                        ${q.fileName ? " · File: " + escapeHtml(q.fileName) : ""}
                        ${q.fileLink ? " · Link attached" : ""}
                    </div>
                </div>
                <div class="admin-actions">
                    <button class="btn-view" onclick="previewSubmission('${q.id}')">View</button>
                    <button class="btn-approve" onclick="approveSubmission('${q.id}')">Approve</button>
                    <button class="btn-reject" onclick="rejectSubmission('${q.id}')">Reject</button>
                </div>
            </div>
        `).join("");
    }

    const approvedEl = document.getElementById("approvedList");
    if (approved.length === 0) {
        approvedEl.innerHTML = '<p style="color:#64748b;font-size:14px;">None yet.</p>';
    } else {
        approvedEl.innerHTML = approved.slice(0, 20).map(q => `
            <div class="admin-item">
                <div class="admin-item-main">
                    <strong>${escapeHtml(q.courseCode)}</strong> — ${escapeHtml(q.courseTitle)}
                    <div class="admin-meta">${escapeHtml(q.department)} · ${q.level}L · Approved ${formatDate(q.approvedAt)}</div>
                </div>
                <div class="admin-actions">
                    <button class="btn-reject" onclick="unpublish('${q.id}')">Unpublish</button>
                </div>
            </div>
        `).join("");
    }
}

function escapeHtml(s) {
    if (!s) return "";
    return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function formatDate(iso) {
    if (!iso) return "";
    try {
        return new Date(iso).toLocaleString();
    } catch {
        return iso;
    }
}

function findPending(id) {
    return getList(PENDING_KEY).find(q => q.id === id);
}

function previewSubmission(id) {
    const q = findPending(id);
    if (!q) return;

    let fileSection = "<p><em>No file attached.</em></p>";
    if (q.fileData) {
        if (q.fileType && q.fileType.startsWith("image/")) {
            fileSection = `<img src="${q.fileData}" alt="Preview" style="max-width:100%;border-radius:8px;border:1px solid #e2e8f0;">`;
        } else if (q.fileType === "application/pdf") {
            fileSection = `<iframe src="${q.fileData}" style="width:100%;height:360px;border:1px solid #e2e8f0;border-radius:8px;"></iframe>
                <p style="margin-top:8px;"><a href="${q.fileData}" download="${escapeHtml(q.fileName || "question.pdf")}">Download PDF</a></p>`;
        } else {
            fileSection = `<a href="${q.fileData}" download="${escapeHtml(q.fileName || "file")}">Download file</a>`;
        }
    } else if (q.fileLink) {
        fileSection = `<p><a href="${escapeHtml(q.fileLink)}" target="_blank" rel="noopener">Open external link</a></p>`;
    }

    document.getElementById("previewBody").innerHTML = `
        <p><strong>Course:</strong> ${escapeHtml(q.courseCode)} — ${escapeHtml(q.courseTitle)}</p>
        <p><strong>Programme:</strong> ${escapeHtml(q.department)}</p>
        <p><strong>Level / Session:</strong> ${q.level} · ${escapeHtml(q.session)} · ${escapeHtml(q.semester)}</p>
        <p><strong>Submitted by:</strong> ${escapeHtml(q.submitter)} ${q.matric ? "(" + escapeHtml(q.matric) + ")" : ""}</p>
        <p><strong>Date:</strong> ${formatDate(q.submittedAt)}</p>
        <hr style="margin:14px 0;border:none;border-top:1px solid #e2e8f0;">
        ${fileSection}
        <div class="modal-actions" style="margin-top:16px;">
            <button class="btn-approve" style="flex:1;padding:12px;border:none;border-radius:8px;cursor:pointer;color:white;background:#059669;font-weight:600;" onclick="approveSubmission('${q.id}');closePreview();">Approve & Publish</button>
            <button class="btn-reject" style="flex:1;padding:12px;border:none;border-radius:8px;cursor:pointer;color:white;background:#dc2626;font-weight:600;" onclick="rejectSubmission('${q.id}');closePreview();">Reject</button>
        </div>
    `;
    document.getElementById("previewModal").classList.add("open");
}

function closePreview() {
    document.getElementById("previewModal").classList.remove("open");
}

function approveSubmission(id) {
    let pending = getList(PENDING_KEY);
    const idx = pending.findIndex(q => q.id === id);
    if (idx === -1) return;

    const item = pending[idx];
    item.status = "approved";
    item.approvedAt = new Date().toISOString();

    pending.splice(idx, 1);
    setList(PENDING_KEY, pending);

    const approved = getList(APPROVED_KEY);
    approved.unshift(item);
    setList(APPROVED_KEY, approved);

    renderAdmin();
}

function rejectSubmission(id) {
    if (!confirm("Reject this submission? It will be removed from pending.")) return;

    let pending = getList(PENDING_KEY);
    const idx = pending.findIndex(q => q.id === id);
    if (idx === -1) return;

    const item = pending[idx];
    item.status = "rejected";
    item.rejectedAt = new Date().toISOString();
    // Drop heavy file data on reject to save space
    item.fileData = "";

    pending.splice(idx, 1);
    setList(PENDING_KEY, pending);

    const rejected = getList(REJECTED_KEY);
    rejected.unshift(item);
    setList(REJECTED_KEY, rejected.slice(0, 50));

    renderAdmin();
}

function unpublish(id) {
    if (!confirm("Remove this question from the public Past Questions list?")) return;
    let approved = getList(APPROVED_KEY);
    approved = approved.filter(q => q.id !== id);
    setList(APPROVED_KEY, approved);
    renderAdmin();
}

document.getElementById("previewModal").addEventListener("click", function (e) {
    if (e.target === this) closePreview();
});

document.getElementById("adminPin").addEventListener("keydown", function (e) {
    if (e.key === "Enter") adminLogin();
});

if (isAuthed()) {
    showPanel();
}
