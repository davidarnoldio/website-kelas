document.addEventListener("DOMContentLoaded", () => {
  const studentGrid = document.querySelector(".student-grid");

  // 38 unique students with names and photos
  const students = [
    {
      name: "Moreno Putra Pratama",
      photo: "https://i.ibb.co/bbfyHHx/reno.jpg",
    },
    {
      name: "Muhammad Daffa Athaya",
      photo: "https://i.ibb.co/48hSK37/dapa.jpg",
    },
    { name: "Vivi", photo: "https://i.ibb.co/2dTxrPN/vivi2.jpg" },
    {
      name: "Dian",
      photo:
        "https://i.ibb.co/C9fmYRz/Whats-App-Image-2024-10-23-at-09-47-07-e876587f.jpg",
    },
    { name: "Aliya", photo: "https://i.ibb.co/bWQmPkJ/aliya.jpg" },
    { name: "Manda", photo: "https://i.ibb.co/FWFBLQn/manda.jpg" },
  ];

  while (students.length < 38) {
    students.push({
      name: `Student ${students.length + 1}`,
      photo: `https://i.pravatar.cc/150?u=${students.length}`,
    });
  }

  students.forEach((student) => {
    const studentCard = document.createElement("div");
    studentCard.classList.add("student-card");

    const img = document.createElement("img");
    img.src = student.photo;
    img.alt = student.name;

    const name = document.createElement("h3");
    name.textContent = student.name;

    studentCard.appendChild(img);
    studentCard.appendChild(name);

    studentGrid.appendChild(studentCard);
  });
});
