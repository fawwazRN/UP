const garisX = ["UMKM sekitar", "skill anda"];
const garisY = [100, 70];
const warnaGaris = ["#25C971", "#3369FF"];

new Chart("dataUMKM", {
  type: "bar",
  data: {
    labels: garisX,
    datasets: [
      {
        backgroundColor: warnaGaris,
        data: garisY,
      },
    ],
  },
  // Untuk Chart.js versi 2 atau lebih lama:
  options: {
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      yAxes: [
        {
          ticks: {
            // Ini menggantikan 'min: 0' pada versi baru
            min: 20,
          },
        },
      ],
    },
  },
});
