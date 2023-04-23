// Lấy thẻ canvas từ HTML
const pHCanvas = document.getElementById('pHChart');
const temperatureCanvas = document.getElementById('temperatureChart');
const humidityCanvas = document.getElementById('humidityChart');
const soilMoistureCanvas = document.getElementById('soilMoistureChart');

// Định nghĩa dữ liệu cho biểu đồ
const pHdata = {
  labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], // Nhãn trục x (tương ứng với mỗi phút)
  datasets: [{
    label: 'pH', // Tên của dòng dữ liệu
    data: [7.2, 7.4, 7.1, 7.3, 7.5, 7.0, 7.1, 7.8, 7.5, 7.0, 7.0 ], // Giá trị pH tương ứng với mỗi phút
    fill: false, // Không tô màu dưới đường
    borderColor: '#9334B5', // Màu đường
    tension: 0.5 // Độ cong của đường
  }]
};

const Temperaturedata = {
  labels: ['0', '1', '2', '3', '4', '5'], // Nhãn trục x (tương ứng với mỗi phút)
  datasets: [{
    label: 'Temperature', // Tên của dòng dữ liệu
    data: [30,29,28,29,31,30], // Giá trị nhiệt độ tương ứng với mỗi phút
    fill: false, // Không tô màu dưới đường
    borderColor: '#00FFD1', // Màu đường
    tension: 0.1 // Độ cong của đường
  }]
};

const Humiditydata = {
  labels: ['0', '1', '2', '3', '4', '5'], // Nhãn trục x (tương ứng với mỗi phút)
  datasets: [{
    label: 'Air humidity', // Tên của dòng dữ liệu
    data: [60,57,59,58,61,65], // Giá trị độ ẩm không khí tương ứng với mỗi phút
    fill: false, // Không tô màu dưới đường
    borderColor: '#FF9029', // Màu đường
    tension: 0.1 // Độ cong của đường
  }]
};

const Soilmoisturedata = {
  labels: ['0', '1', '2', '3', '4', '5'], // Nhãn trục x (tương ứng với mỗi phút)
  datasets: [{
    label: 'Soil moisture', // Tên của dòng dữ liệu
    data: [40, 45, 38, 42, 43, 39], // Giá trị độ ẩm đất tương ứng với mỗi phút
    fill: false, // Không tô màu dưới đường
    borderColor: 'rgb(75, 192, 192)', // Màu đường
    tension: 0.1 // Độ cong của đường
  }]
};

// Định nghĩa cấu hình cho biểu đồ
const pHconfig = {
  type: 'line',
  data: pHdata,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Vị trí của chú thích
      },
      title: {
        display: false,
      }
    },
    scales: {
	   x: {
        display: false // Tắt trục x
      },
      y: {
        suggestedMin: 6.5, // Giá trị nhỏ nhất của trục y
        suggestedMax: 7.5, // Giá trị lớn nhất của trục y
		padding: {
          top: 30 // Giảm khoảng cách trục y và biên của biểu đồ
        }
      }
    }
  },
};

const Temperatureconfig = {
  type: 'line',
  data: Temperaturedata,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Vị trí của chú thích
      },
      title: {
        display: false,
      }
    },
    scales: {
	   x: {
        display: false // Tắt trục x
      },
      y: {
        suggestedMin: 25, // Giá trị nhỏ nhất của trục y
        suggestedMax: 35 // Giá trị lớn nhất của trục y
      }
    }
  },
};
const Humidityconfig = {
  type: 'line',
  data: Humiditydata,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Vị trí của chú thích
      },
      title: {
        display: false,
      }
    },
    scales: {
	   x: {
        display: false // Tắt trục x
      },
      y: {
        suggestedMin: 50, // Giá trị nhỏ nhất của trục y
        suggestedMax: 70 // Giá trị lớn nhất của trục y
      }
    }
  },
};
const Soilmoistureconfig = {
  type: 'line',
  data: Soilmoisturedata,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Vị trí của chú thích
      },
      title: {
        display: false,
      }
    },
    scales: {
	   x: {
        display: false // Tắt trục x
      },
      y: {
        suggestedMin: 35, // Giá trị nhỏ nhất của trục y
        suggestedMax: 50 // Giá trị lớn nhất của trục y
      }
    }
  },
};

// Tạo biểu đồ
const pHChart = new Chart(pHCanvas, pHconfig);
const TemperatureChart = new Chart(temperatureCanvas, Temperatureconfig);
const HumidityChart = new Chart(humidityCanvas, Humidityconfig);
const SoilmoistureChart = new Chart(soilMoistureCanvas, Soilmoistureconfig);
