const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const grid = document.querySelector(".calendar-grid");

const tasks = {
  "2024-11-01": ["Reunião às 10h"],
  "2024-11-05": ["Apresentação de projeto"],
  "2024-11-12": ["Trabalho de humanas"],
  "2024-11-22": ["Apresentação de projeto"],
};

let currentDate = new Date();

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  monthYear.textContent = currentDate.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
  });

  grid.innerHTML = "";

  for (let i = 0; i < 7; i++) {
    const label = document.createElement("div");
    label.classList.add("day-label");
  }

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("day-cell");
    grid.appendChild(emptyCell);
  }

  for (let day = 1; day <= lastDate; day++) {
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const dayCell = document.createElement("div");
    dayCell.classList.add("day-cell");

    const dateElement = document.createElement("div");
    dateElement.classList.add("date");
    dateElement.textContent = day;

    const taskElement = document.createElement("div");
    taskElement.classList.add("tasks");
    taskElement.textContent = tasks[dateKey]?.join(", ") || "";

    dayCell.appendChild(dateElement);
    dayCell.appendChild(taskElement);
    grid.appendChild(dayCell);
  }
}

prevMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
