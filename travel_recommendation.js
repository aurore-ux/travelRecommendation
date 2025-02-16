// Sample API Data (Replace this with actual API call in production)
const data = {
    "countries": [
      {
        "id": 1,
        "name": "Australia",
        "cities": [
          {
            "name": "Sydney, Australia",
            "imageUrl": "sydney.png",
            "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
          },
          {
            "name": "Melbourne, Australia",
            "imageUrl": "enter_your_image_for_melbourne.jpg",
            "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
          }
        ]
      },
      {
        "id": 2,
        "name": "Japan",
        "cities": [
          {
            "name": "Tokyo, Japan",
            "imageUrl": "enter_your_image_for_tokyo.jpg",
            "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
          },
          {
            "name": "Kyoto, Japan",
            "imageUrl": "enter_your_image_for_kyoto.jpg",
            "description": "Known for its historic temples, gardens, and traditional tea houses."
          }
        ]
      },
      {
        "id": 3,
        "name": "Brazil",
        "cities": [
          {
            "name": "Rio de Janeiro, Brazil",
            "imageUrl": "bra.png",
            "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
          },
          {
            "name": "São Paulo, Brazil",
            "imageUrl": "enter_your_image_for_sao-paulo.jpg",
            "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
          }
        ]
      }
    ],
    "temples": [
      {
        "id": 1,
        "name": "Angkor Wat, Cambodia",
        "imageUrl": "enter_your_image_for_angkor-wat.jpg",
        "description": "A UNESCO World Heritage site and the largest religious monument in the world."
      },
      {
        "id": 2,
        "name": "Taj Mahal, India",
        "imageUrl": "enter_your_image_for_taj-mahal.jpg",
        "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
      }
    ],
    "beaches": [
      {
        "id": 1,
        "name": "Bora Bora, French Polynesia",
        "imageUrl": "enter_your_image_for_bora-bora.jpg",
        "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
      },
      {
        "id": 2,
        "name": "Copacabana Beach, Brazil",
        "imageUrl": "enter_your_image_for_copacabana.jpg",
        "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
      }
    ]
  };
  
  // Function to search for places based on input
  function searchPlaces() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const resultsSection = document.getElementById("results");
  
    // Clear previous results
    resultsSection.innerHTML = '';
  
    // Filter cities, temples, and beaches based on search term
    const results = [];
  
    // Search in countries/cities
    data.countries.forEach(country => {
      country.cities.forEach(city => {
        if (city.name.toLowerCase().includes(searchTerm) || city.description.toLowerCase().includes(searchTerm)) {
          results.push({ type: 'city', ...city });
        }
      });
    });
  
    // Search in temples
    data.temples.forEach(temple => {
      if (temple.name.toLowerCase().includes(searchTerm) || temple.description.toLowerCase().includes(searchTerm)) {
        results.push({ type: 'temple', ...temple });
      }
    });
  
    // Search in beaches
    data.beaches.forEach(beach => {
      if (beach.name.toLowerCase().includes(searchTerm) || beach.description.toLowerCase().includes(searchTerm)) {
        results.push({ type: 'beach', ...beach });
      }
    });
  
    // Display the results
    if (results.length > 0) {
      results.forEach(result => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");
  
        // Create title and description
        const resultTitle = document.createElement("h3");
        resultTitle.textContent = result.name;
        resultItem.appendChild(resultTitle);
  
        const resultDescription = document.createElement("p");
        resultDescription.textContent = result.description;
        resultItem.appendChild(resultDescription);
  
        // Create image if available
        if (result.imageUrl) {
          const resultImage = document.createElement("img");
          resultImage.src = result.imageUrl;
          resultImage.alt = result.name;
          resultImage.classList.add("result-image");
          resultItem.appendChild(resultImage);
        }
  
        // Add to results section
        resultsSection.appendChild(resultItem);
      });
    } else {
      resultsSection.innerHTML = "<p>No destinations found matching your search.</p>";
    }
  }
  
  // Function to clear search results
  function clearResults() {
    document.getElementById("searchBar").value = '';  // Clear the search bar
    document.getElementById("results").innerHTML = '';  // Clear the results section
  }
  