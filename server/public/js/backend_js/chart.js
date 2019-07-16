let myChart = document.getElementById('myChart').getContext('2d');

let massPopChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: ['1', '2', '3' ,'4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets:[{
            label: 'Hóa đơn',
            data: [
                10,
                20,
                5,
                15,
                30,
                6,
                8,
                11,
                27,
                12,
                11,
                18,
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
        }],
    },
    option: {
        title: {
            display: true,
            text: 'Biểu Đồ Hóa Đơn Qua Từng Tháng'
        }
    }
});