document.addEventListener('DOMContentLoaded', () => {
    const fetchAndDisplaySoilMoisture = async () => {
      // Simulate fetching soil moisture data (replace with actual data fetching)
      const soilMoisture = (Math.random() * 100).toFixed(2);
      const soilMoistureResult = document.getElementById('soilMoistureResult');
      soilMoistureResult.innerHTML = `<p>Current Soil Moisture Level: ${soilMoisture}%</p>`;
    };
  
    const fetchAndDisplayWeatherForecast = async () => {
      // Simulate fetching weather forecast data (replace with actual data fetching)
      const weatherForecast = 'Sunny with a chance of rain tomorrow';
      const weatherForecastResult = document.getElementById('weatherForecastResult');
      weatherForecastResult.innerHTML = `<p>Weather Forecast: ${weatherForecast}</p>`;
    };
  
    const fetchAndDisplaySoilPh = async () => {
      // Simulate fetching soil pH data (replace with actual data fetching)
      const soilPh = (Math.random() * (8.0 - 5.0) + 5.0).toFixed(2);
      const soilPhResult = document.getElementById('soilPhResult');
      soilPhResult.innerHTML = `<p>Soil pH Level: ${soilPh}</p>`;
    };
  
    const fetchAndDisplayCropHealth = async (imageFile) => {
      const analysisResult = await simulateImageAnalysis(imageFile);
      const cropHealthResult = document.getElementById('cropHealthResult');
      cropHealthResult.innerHTML = `<p>Crop Health Analysis: ${analysisResult}</p>`;
    };
  
    document.getElementById('soilMoistureButton').addEventListener('click', () => {
      fetchAndDisplaySoilMoisture();
    });
  
    document.getElementById('weatherForecastButton').addEventListener('click', () => {
      fetchAndDisplayWeatherForecast();
    });
  
    document.getElementById('soilPhButton').addEventListener('click', () => {
      fetchAndDisplaySoilPh();
    });
  
    document.getElementById('cropHealthButton').addEventListener('click', () => {
      const imageInput = document.getElementById('cropImageInput');
      const selectedImage = imageInput.files[0];
  
      if (selectedImage) {
        fetchAndDisplayCropHealth(selectedImage);
      } else {
        alert('Please select an image to analyze.');
      }
    });
  });
  
  async function simulateImageAnalysis(imageFile) {
    // Simulate image analysis API call (replace with actual API call)
    return new Promise((resolve) => {
      setTimeout(() => {
        const analysisResult = 'Crops appear healthy with no signs of disease.';
        resolve(analysisResult);
      }, 2000); // Simulating a delay for API response
    });
  }
  