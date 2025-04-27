function loadDashboard() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || currentUser.email !== "admin@quiz.com") {
        window.location.href = "index.html";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const container = document.getElementById("user-scores");

    if (users.length === 0) {
        container.innerHTML = "<h2>No users found.</h2>";
        return;
    }

    const table = document.createElement("table");

    const header = document.createElement("tr");
    header.innerHTML = `
        <th>#</th>
        <th>Email</th>
        <th>Scores</th>
    `;
    table.appendChild(header);

    users.forEach((user, index) => {
        const row = document.createElement("tr");

        let scoresText = "No scores yet";
        if (user.scores) {
            const scoresArr = Object.entries(user.scores).map(
                ([quizTitle, score]) => `${quizTitle}: ${score}`
            );
            scoresText = scoresArr.join(" | ");
        }

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.email}</td>
            <td>${scoresText}</td>
        `;

        table.appendChild(row);
    });

    container.appendChild(table);
}
