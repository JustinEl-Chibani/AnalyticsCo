document.addEventListener('DOMContentLoaded', function () {
    initQuantitySpinner();
    // Initialize all charts
    initCharts();
});

// Toggle sidebar
document.getElementById('sidebarToggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('hidden');
    document.getElementById('content').classList.toggle('expanded');
});

// Toggle sidebar
document.getElementById('sidebarclose').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('hidden');
    document.getElementById('content').classList.toggle('expanded');
});

function initCharts() {
    createChart("revenueChart", {
    type: "line",
    data: {
        labels: ["2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"],
        datasets: [
        {
            label: "USA (L/personne/an)",
            data: [3,4,5,6,7,9,12,15,17,18.9],
            borderColor: "#F39C12",
            backgroundColor: "#F9F5EE",
            borderWidth: 2,
            fill: true,
            tension: 0.3,
        },
                {
            label: "Canada (L/personne/an)",
            data: [75,78,80,82,84,85,87,90,92,95],
            borderColor: "#88B267",
            backgroundColor: "#EEF3E9",
            borderWidth: 2,
            fill: true,
            tension: 0.3,
        },

        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
        legend: { position: "top" },
        },
        scales: {
        y: {
            beginAtZero: true,
            suggestedMax : 100,
            title: {
            display: true,
            text: "Litres de thé par personne et par an",
            },
        },
        x: { grid: { display: false } },
        },
    },
    });

    createChart("ageChart", {
        type: "doughnut",
        data: {
            labels: ["0-17", "18-29", "30-44", "45-59", "60+"],
            datasets: [
                {
                    data: [5, 20, 30, 25, 20],  // approximate % engagement
                    backgroundColor: ["#F6C7B6", "#F28D6D", "#FFD07B", "#A4D4EF", "#C1E1C1"],
                    borderWidth: 0,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "15%",
            plugins: { legend: { position: "bottom" } },
        },
    });
}

function createChart(id, config) {
    const ctx = document.getElementById(id);
    if (!ctx) {
        console.error(`Canvas element with id '${id}' not found`);
        return;
    }

    if (ctx.chart) {
        ctx.chart.destroy();
    }

    ctx.chart = new Chart(ctx, config);
}

function initQuantitySpinner() {
    const productQtyElements = document.querySelectorAll('.product-qty');

    productQtyElements.forEach(function (productEl) {
      const quantityInput = productEl.querySelector('.quantity');
      const plusButton = productEl.querySelector('.quantity-right-plus');
      const minusButton = productEl.querySelector('.quantity-left-minus');

      plusButton.addEventListener('click', function (e) {
        e.preventDefault();
        let quantity = parseInt(quantityInput.value) || 0;
        quantityInput.value = quantity + 1;
      });

      minusButton.addEventListener('click', function (e) {
        e.preventDefault();
        let quantity = parseInt(quantityInput.value) || 0;
        if (quantity > 0) {
          quantityInput.value = quantity - 1;
        }
      });
    });
  }
