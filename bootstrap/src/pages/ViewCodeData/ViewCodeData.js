export const ChartData = [
    {
      title: "Pie Chart",
      imports: `
        import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
        import { Pie } from "react-chartjs-2";
      `,
      show_content: `
      ChartJS.register(ArcElement, Tooltip, Legend);

      const data = {
        labels: ["Dubai", "Asia", "Europe",],
        datasets: [
          {
            data: [12, 19, 3,],
            backgroundColor: [
              "#5c72fe",
              "#ff0058",
              "#00d4d4"
            ],
            borderColor: [
              "#fff",
              "#fff",
              "#fff"
            ],
            borderWidth: 3,
          },
        ],
      };
      const options = {
        legend: {
          "position": "bottom",
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        offset: true,
      };
    
      <Pie data={data} options={options} height={300} />
      `,
    },

    {
      title: "Doughnut Chart",
      imports: `
        import React, { useState } from "react";
        import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
        import { Doughnut } from "react-chartjs-2";
      `,
      show_content: `
        ChartJS.register(ArcElement, Tooltip, Legend);
        const data = {
            labels: ["Dubai", "Asia", "Europe",],
            datasets: [
            {
                data: [12, 19, 3,],
                backgroundColor: [
                "#5c72fe",
                "#ff0058",
                "#00d4d4"
                ],
                borderColor: [
                "#fff",
                "#fff",
                "#fff"
                ],
                borderWidth: 3,
            },
            ],
        };
        const options = {
            legend: {
            "position": "bottom",
            display: false,
            },
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            offset: true,
        };

        <Doughnut data={data} options={options} height={300} />
        <div className="inner-text">
            <h5 className="font-12 text-primary fw-boldest">
                <span className="text-dark">Total</span> <br /> 0
            </h5>
        </div>
      `,
    },

    {
        title: "Bar Chart",
        imports: `
            import React, { useState } from "react";
            import {
            Chart as ChartJS,
            CategoryScale,
            LinearScale,
            BarElement,
            Title,
            Tooltip,
            Legend,
            } from "chart.js";
            import { Bar } from "react-chartjs-2";
        `,
        show_content: `
        ChartJS.register(
            CategoryScale,
            LinearScale,
            BarElement,
            Title,
            Tooltip,
            Legend
          );
        
          const options = {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                //text: "Chart.js Bar Chart",
              },
            },
          };
          const labels = ["January", "February", "March", "April", "May", "June", "July",];
          const data = {
            labels,
            datasets: [
              {
                datalabels: {
                  color: "#EAEFF5",
                  font: {
                    size: 16,
                    family: "'Poppins', sans-serif",
                    lineHeight: 0.5,
                  },
                },
                label: "In-Progress",
                data: [40, 60, 40, 60, 40, 60],
                backgroundColor: "#002C6A",
                barThickness: 45,
                maxBarThickness: 45,
                borderRadius: {
                  bottomRight: 5,
                  bottomLeft: 5,
                  topRight: 5,
                  topLeft: 5,
                },
              },
              {
                datalabels: {
                  color: "#EAEFF5",
                  font: {
                    size: 16,
                    family: "'Poppins', sans-serif",
                    lineHeight: 0.5,
                  },
                },
                label: "Whole",
                data: [100, 80, 100, 80, 100, 80],
                backgroundColor: "#EAEFF5",
                barThickness: 45,
                maxBarThickness: 45,
                borderRadius: {
                  bottomRight: 0,
                  bottomLeft: 0,
                  topRight: 5,
                  topLeft: 5,
                },
              },
            ],
          };

          <Bar options={options} data={data} />
        `,
      },

      {
        title: "Mixed bar chart",
        imports: `
            import React, { useState } from "react";
            import {
            Chart as ChartJS,
            CategoryScale,
            LinearScale,
            PointElement,
            LineElement,
            Title,
            Tooltip,
            Legend,
            } from "chart.js";
            import { Line } from "react-chartjs-2";
        `,
        show_content: `
        ChartJS.register(
            CategoryScale,
            LinearScale,
            PointElement,
            LineElement,
            Title,
            Tooltip,
            Legend
          );
        
          const options = {
            responsive: true,
            interaction: {
              mode: "index",
              intersect: false,
            },
            stacked: false,
            plugins: {
              title: {
                display: true,
                //text: "Chart.js Line Chart - Multi Axis",
              },
            },
            scales: {
              y: {
                type: "linear",
                display: true,
                position: "left",
              },
              y1: {
                type: "linear",
                display: true,
                position: "right",
                grid: {
                  drawOnChartArea: false,
                },
              },
            },
          };

        const labels = ["January", "February", "March", "April", "May", "June", "July",];

        const data = {
            labels,
            datasets: [
            {
                label: "Dataset 1",
                data: [140, 100, 160, 100, 140, 100,],
                borderColor: "#ff0058",
                backgroundColor: "#ff0058",
                yAxisID: "y",
            },
            {
                label: "Dataset 2",
                data: [160, 200, 140, 100, 160, 200,],
                borderColor: "#00d4d4",
                backgroundColor: "#00d4d4",
                yAxisID: "y1",
            },
            ],
        };

        <Line options={options} data={data} />
        `,
      },

      {
        title: "Stacked Bar Chart",
        imports: `
        import React, { useState } from "react";
        import {
            Chart as ChartJS,
            CategoryScale,
            LinearScale,
            BarElement,
            Title,
            Tooltip,
            Legend,
          } from 'chart.js';
          import { Bar } from 'react-chartjs-2';
        `,
        show_content: `
            ChartJS.register(
                CategoryScale,
                LinearScale,
                BarElement,
                Title,
                Tooltip,
                Legend
            );
            
            const options = {
                plugins: {
                title: {
                    display: true,
                    ///text: 'Chart.js Bar Chart - Stacked',
                },
                },
                responsive: true,
                scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                },
                },
            };
            
            const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
            
            const data = {
                labels,
                datasets: [
                {
                    label: 'Dataset 1',
                    data: [100, 80, 100, 80, 100, 80],
                    backgroundColor: '#00d4d4',
                },
                {
                    label: 'Dataset 2',
                    data: [40, 60, 40, 60, 40, 60],
                    backgroundColor: '#ff0058',
                },
                {
                    label: 'Dataset 3',
                    data: [100, 20, 100, 30, 100, 40],
                    backgroundColor: '#5c72fe',
                },
                ],
            };

            <Bar options={options} data={data} />        
        `,
      },
  ];