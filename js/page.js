// Charts

let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');


let monthlySales = Array.of(12,9,3);
let monthlyLabel = Array.of('Oct', 'Nov', 'Dec');

let deptLabels = Array.of('Hiking', 'Running', 'Hunting');
let deptSales = Array.of(12,9,3);

// Bar

var monthlySalesCart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: monthlyLabel,
    datasets: [{
      label: '# of Sales',
      data: monthlySales,
      backgroundColor: [
        'rgba(238, 184, 104, 1)',
        'rgba(75, 166, 223, 1)',
        'rgba(239, 118, 122, 1)',
      ],
      borderWidth: 0
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// pie 
 var depSalesCart = new Chart(pieCtx, {
   type: 'pie',
   data: {
     labels: deptSales,
     datasets: [{
       label: '# of Sales',
       data: [12, 19, 3],
       backgroundColor: [
         'rgba(238, 184, 1)',
         'rgba(75, 166, 223, 1)',
         'rgba(239, 118, 122, 1)'
       ],
       borderWidth: 0
     }]
   },
   options: {

   }
 })