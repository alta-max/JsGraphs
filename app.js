var ctx = document.getElementById("myChart").getContext("2d");
// Creating Chart Class Object
var myChart = new Chart(ctx, {
    // Type of Chart - bar, line, pie, doughnut, radar, polarArea
    type: "bar",

    // The data for our dataset
    data: {
        // Data Labels
        labels: ["Python", "JavaScript", "PHP", "Java", "C#", "C++"],

        datasets: [
            // Data Set
            {
                //  Chart Label
                label: "Programming Languages",

                // Actual Data
                data: [13, 15, 5, 10, 9, 10],

                // Background Color
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                    "rgba(255, 159, 64, 0.6)",
                ],

                // Border Color
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],

                // Border Width
                borderWidth: 1,
            },
        ],
    },

    // Configuration=
    options: {
        plugins: {
            title: {
                display: true,
                text: "Custom Chart Title",
                position: "bottom",
                fontSize: 25,
                fontFamily: "Comic Sans MS",
                fontColor: "red",
                fontStyle: "bold italic",
                padding: 20,
                lineHeight: 5,
            },

            legend: {
                display: true,
                position: "bottom", // top left bottom right
                align: "end",
                labels: {
                    fontColor: "red",
                    fontSize: 16,
                    boxWidth: 20,
                },
            },
        },
        animation: {
            duration: 5000,
            easing: "easeInOutBounce",
        },
    },
});