// Charts

let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal');


let monthlySales = Array.of(500,9000,3000);
let monthlyLabel = Array.of('Oct', 'Nov', 'Dec');

let deptLabels = Array.of('Hiking', 'Running', 'Hunting');
let deptSales = Array.of(12,9,3);

function addYearlyTotal(a,b,c) {
  return a+b+c;
}

let octNums = Array.of(500,1000,9000);
let novNums = Array.of(1100,2000,9000);
let decNums = Array.of(4000,1000,5000);

let total = Array.of(addYearlyTotal(...octNums), addYearlyTotal(...novNums), addYearlyTotal(...decNums));

let yearlyTotal = addYearlyTotal(...monthlySales);
yearlyLabel.innerHTML = "$" + yearlyTotal;

function findOver1000() {
  let firstThousand = monthlySales.findIdex(element => element > 1000);
  alert(firstThousand);
}

function ResetNum() {
  monthlySales.fill(0);
  monthlySalesChart.update();
}

// Bar

var monthlySalesChart = new Chart(ctx, {
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
 var depSalesChart = new Chart(pieCtx, {
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