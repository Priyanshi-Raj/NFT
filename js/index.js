
  
//   const data = {
//     labels: labels,
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     }]
//   };
//   var myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );
const ctx = document.getElementById('myChart').getContext("2d");
let gradient = ctx.createLinearGradient(0 , 0 ,0 ,400);
gradient.addColorStop( 0 , "rgba(58, 123, 213, 1");
gradient.addColorStop(1, "rgba(0 , 210 ,255, 0.3)");
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const data = {
      labels ,
      datasets: [{
          data:[3.10 , 5.20 ,1.3, 3.50 ,4.20,3.70,5.00,3.76 ,4.15],
          label: "Ethereum",
          fill: "true",
          backgroundcolor: gradient,
          borderColor: "purple",
      } ,],
  };
  const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
    }
  };
  const myChart = new Chart(ctx ,config);