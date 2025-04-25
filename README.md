[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Vfk6Jper)
# MP2: Interactive Web Component

**Due Date: April 25th, End of Day**

## Objective

Create a reusable interactive web component using HTML, CSS, Bootstrap, and vanilla JavaScript (no frameworks). Your application should consume data from a public API and provide an engaging user experience with interactive elements.

## Requirements

### Technical Requirements

- **HTML & CSS**
  - Use semantic HTML5 elements
  - Implement Bootstrap 5 for responsive design
  - Create a visually appealing interface with consistent styling
  - Ensure responsive behavior across different screen sizes (mobile, tablet, desktop)

- **JavaScript**
  - Use vanilla JavaScript only (no jQuery, React, Angular, Vue, etc.)
  - Fetch and display data from at least one public API
  - Implement interactive elements (filtering, sorting, pagination, etc.)
  - Include user controls to manipulate or filter data
  - Handle loading states and potential errors gracefully
  - Use ES6+ features where appropriate

- **Functionality**
  - Application should be fully functional with no console errors
  - All interactive elements should work as expected
  - Implement proper event handling
  - Include at least one complex interactive component (carousel, accordion, tabs, etc.)

- **Accessibility**
  - Ensure proper keyboard navigation
  - Use appropriate ARIA attributes where needed
  - Maintain sufficient color contrast
  - Include descriptive alt text for images

- **Code Quality**
  - Well-organized file structure
  - Clean, commented code
  - Meaningful variable and function names
  - Separation of concerns (HTML for structure, CSS for presentation, JS for behavior)

### Optional Enhancements

- Integration of a visualization library like Chart.js for data visualization
- Implementation of local storage to persist user data
- Advanced animations or transitions for a polished feel
- Multiple API integrations that work together
- Dark/light mode toggle

## Project Ideas

Choose ONE of the following project ideas:

1. **Interactive Photo Gallery**
   - Fetch images from an API (e.g., Unsplash, Pexels, Flickr)
   - Implement filtering by categories or search functionality
   - Create a lightbox for enlarged image viewing
   - Add lazy loading for performance
   - Provide sorting options (date, popularity, etc.)

2. **Quiz Application**
   - Fetch questions from a trivia API (e.g., Open Trivia DB)
   - Track and display user scores
   - Implement a timer for each question
   - Show correct/incorrect feedback
   - Display final results with performance summary
   - Allow category selection

3. **Interactive Pricing Calculator**
   - Create a calculator for a fictional service
   - Include multiple options affecting the price
   - Show real-time price updates as users adjust options
   - Implement sliders, toggles, or other interactive input methods
   - Provide a summary of selected options
   - Optional: Compare different pricing tiers

4. **Weather Dashboard**
   - Use a weather API (e.g., OpenWeatherMap, WeatherAPI)
   - Display current weather and forecasts
   - Allow location search or geolocation
   - Visualize data with appropriate icons and/or charts
   - Include multiple data points (temperature, humidity, wind, etc.)
   - Add unit conversion (Celsius/Fahrenheit)

5. **Recipe Finder**
   - Integrate with a recipe API (e.g., Spoonacular, Edamam)
   - Implement filtering by ingredients, diet, cuisine, etc.
   - Display recipe details including ingredients and instructions
   - Allow users to save favorite recipes (local storage)
   - Include nutritional information where available
   - Implement responsive card layout for search results

6. **Todo List Application**
   - Create, read, update, and delete tasks
   - Categorize tasks and filter by category
   - Implement due dates and priority levels
   - Sort tasks by different criteria
   - Use local storage to persist data
   - Add drag-and-drop functionality for reordering

7. **Memory Card Game**
   - Create a grid of cards with hidden images/content
   - Fetch card content from an API (images, facts, etc.)
   - Implement matching logic and score tracking
   - Add timer and move counter
   - Create different difficulty levels
   - Display win condition and game statistics

8. **Interactive Form with Validation**
   - Create a multi-step form with different field types
   - Implement real-time validation with visual feedback
   - Use API for address verification, email validation, etc.
   - Show progress indicator
   - Summarize inputs before final submission
   - Optional: Save progress in local storage

**Feel free to propose your own idea** if none of these appeal to you.

## Suggested Public APIs

Here are some free, public APIs you can use for your project:

| Category | API | Description | URL |
|----------|-----|-------------|-----|
| General | JSON Placeholder | Fake data for testing | https://jsonplaceholder.typicode.com/ |
| Images | Unsplash API | High-quality images | https://unsplash.com/developers |
| Weather | OpenWeatherMap | Weather data and forecasts | https://openweathermap.org/api |
| Movies | OMDB API | Movie information | https://www.omdbapi.com/ |
| Trivia | Open Trivia DB | Multiple-choice trivia questions | https://opentdb.com/api_config.php |
| Food | Spoonacular | Recipe and food data | https://spoonacular.com/food-api |
| News | News API | Headlines and articles | https://newsapi.org/ |
| Finance | Alpha Vantage | Stock market data | https://www.alphavantage.co/ |
| Sports | SportsDB | Sports statistics | https://www.thesportsdb.com/api.php |
| Geography | RestCountries | Country information | https://restcountries.com/ |

**Note**: Some APIs may require registration for an API key. This is typically free and straightforward.

## Getting Started

### Setting Up Your Project

1. Create a new GitHub repository
2. Clone the repository to your local machine
3. Set up your file structure:
   ```
   project-folder/
   │
   ├── index.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   ├── app.js
   │   └── api.js (optional)
   └── assets/
       └── images/
   ```
4. Link Bootstrap via CDN in your HTML:
   ```html
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
   ```

### HTML Structure Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Project Title</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Your custom CSS -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Header Section -->
    <header class="container-fluid bg-primary text-white py-3">
        <div class="container">
            <h1>Your Project Title</h1>
            <p class="lead">A brief description of your project</p>
        </div>
    </header>
    
    <!-- Main Content -->
    <main class="container my-4">
        <!-- Search/Filter Controls -->
        <section class="row mb-4">
            <div class="col-md-6">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search..." id="searchInput">
                    <button class="btn btn-outline-secondary" type="button" id="searchButton">Search</button>
                </div>
            </div>
            <div class="col-md-6">
                <select class="form-select" id="filterSelect">
                    <option selected>Filter options...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </section>
        
        <!-- Loading Indicator -->
        <div id="loadingIndicator" class="text-center d-none">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        
        <!-- Error Message -->
        <div id="errorMessage" class="alert alert-danger d-none" role="alert">
            Something went wrong. Please try again later.
        </div>
        
        <!-- Results Container -->
        <section class="row" id="resultsContainer">
            <!-- Content will be dynamically inserted here -->
        </section>
    </main>
    
    <!-- Footer -->
    <footer class="container-fluid bg-dark text-white py-3 mt-5">
        <div class="container text-center">
            <p>&copy; 2025 Your Name</p>
        </div>
    </footer>
    
    <!-- Bootstrap JS Bundle (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Your custom JavaScript -->
    <script src="js/app.js"></script>
</body>
</html>
```

### JavaScript API Fetching Example

```javascript
// app.js

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const filterSelect = document.getElementById('filterSelect');
const resultsContainer = document.getElementById('resultsContainer');
const loadingIndicator = document.getElementById('loadingIndicator');
const errorMessage = document.getElementById('errorMessage');

// API Configuration
const API_URL = 'https://api.example.com/data'; // Replace with your actual API URL
const API_KEY = 'your_api_key'; // If needed

// Event Listeners
document.addEventListener('DOMContentLoaded', init);
searchButton.addEventListener('click', performSearch);
filterSelect.addEventListener('change', applyFilter);

// Initialize the application
function init() {
    fetchDefaultData();
}

// Fetch data from the API
async function fetchData(url) {
    showLoading(true);
    hideError();
    
    try {
        const response = await fetch(url);
        
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        showError(error.message);
        return null;
    } finally {
        showLoading(false);
    }
}

// Fetch default data on page load
function fetchDefaultData() {
    fetchData(API_URL)
        .then(data => {
            if (data) {
                displayResults(data);
            }
        });
}

// Perform search based on user input
function performSearch() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') return;
    
    const searchUrl = `${API_URL}?search=${encodeURIComponent(searchTerm)}`;
    fetchData(searchUrl)
        .then(data => {
            if (data) {
                displayResults(data);
            }
        });
}

// Apply filter based on select dropdown
function applyFilter() {
    const filterValue = filterSelect.value;
    if (filterValue === 'Filter options...') return;
    
    const filterUrl = `${API_URL}?filter=${encodeURIComponent(filterValue)}`;
    fetchData(filterUrl)
        .then(data => {
            if (data) {
                displayResults(data);
            }
        });
}

// Display results in the container
function displayResults(data) {
    // Clear previous results
    resultsContainer.innerHTML = '';
    
    // Check if data is empty
    if (!data || data.length === 0) {
        resultsContainer.innerHTML = `
            <div class="col-12 text-center">
                <p>No results found. Try different search terms.</p>
            </div>
        `;
        return;
    }
    
    // Create HTML for each item in the data
    data.forEach(item => {
        const itemElement = createItemElement(item);
        resultsContainer.appendChild(itemElement);
    });
}

// Create HTML element for a single data item
function createItemElement(item) {
    // Create a column with a card for each item
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    
    col.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">${item.title || 'No Title'}</h5>
                <p class="card-text">${item.description || 'No Description'}</p>
                <button class="btn btn-primary item-details-btn" data-id="${item.id}">View Details</button>
            </div>
        </div>
    `;
    
    // Add event listener to the button
    const button = col.querySelector('.item-details-btn');
    button.addEventListener('click', () => showItemDetails(item.id));
    
    return col;
}

// Show details for a specific item
function showItemDetails(itemId) {
    // Fetch and display detailed information for the selected item
    const detailUrl = `${API_URL}/${itemId}`;
    fetchData(detailUrl)
        .then(data => {
            if (data) {
                // Show the details in a modal or dedicated section
                console.log('Item details:', data);
                // Implement modal display or other presentation logic
            }
        });
}

// Show or hide loading indicator
function showLoading(show) {
    if (show) {
        loadingIndicator.classList.remove('d-none');
    } else {
        loadingIndicator.classList.add('d-none');
    }
}

// Show error message
function showError(message) {
    errorMessage.textContent = `Error: ${message}`;
    errorMessage.classList.remove('d-none');
}

// Hide error message
function hideError() {
    errorMessage.classList.add('d-none');
}
```

### Using Chart.js (Optional)

If you want to add data visualization to your project, Chart.js is a great option. Here's how to set it up:

1. Add Chart.js to your HTML:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
   ```

2. Create a canvas element for your chart:
   ```html
   <canvas id="myChart"></canvas>
   ```

3. Initialize and populate the chart in your JavaScript:
   ```javascript
   // Create a chart
   function createChart(data) {
       const ctx = document.getElementById('myChart').getContext('2d');
       
       const chart = new Chart(ctx, {
           type: 'bar', // or 'line', 'pie', 'doughnut', etc.
           data: {
               labels: data.map(item => item.label),
               datasets: [{
                   label: 'My Dataset',
                   data: data.map(item => item.value),
                   backgroundColor: 'rgba(75, 192, 192, 0.2)',
                   borderColor: 'rgba(75, 192, 192, 1)',
                   borderWidth: 1
               }]
           },
           options: {
               responsive: true,
               scales: {
                   y: {
                       beginAtZero: true
                   }
               }
           }
       });
       
       return chart;
   }
   ```

## Accessibility Considerations

Ensure your project is accessible by following these guidelines:

- Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, etc.)
- Include proper focus states for interactive elements
- Ensure keyboard navigation works for all interactive components
- Add appropriate ARIA labels and roles where needed
- Maintain sufficient color contrast (use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/))
- Provide text alternatives for non-text content
- Test tabbing through your interface to ensure logical order

## Bootstrap Components You Might Use

Bootstrap provides many ready-to-use components that can enhance your project:

- [Navbar](https://getbootstrap.com/docs/5.3/components/navbar/) - For navigation menus
- [Cards](https://getbootstrap.com/docs/5.3/components/card/) - For displaying content in a flexible container
- [Modals](https://getbootstrap.com/docs/5.3/components/modal/) - For dialogs and popovers
- [Carousel](https://getbootstrap.com/docs/5.3/components/carousel/) - For cycling through elements
- [Accordion](https://getbootstrap.com/docs/5.3/components/accordion/) - For collapsible content
- [Tabs](https://getbootstrap.com/docs/5.3/components/navs-tabs/) - For tabbed interfaces
- [Spinners](https://getbootstrap.com/docs/5.3/components/spinners/) - For loading states
- [Forms](https://getbootstrap.com/docs/5.3/forms/overview/) - For input controls
- [Tooltips](https://getbootstrap.com/docs/5.3/components/tooltips/) - For additional information on hover
- [Pagination](https://getbootstrap.com/docs/5.3/components/pagination/) - For paged content

## Evaluation Criteria

Your assignment will be evaluated based on the following criteria:

### JavaScript Implementation (50%)
- Proper use of vanilla JavaScript
- Successful API integration
- Handling of asynchronous operations
- Event handling and DOM manipulation
- Error handling and edge cases

### User Experience and Interactivity (40%)
- Intuitive user interface
- Usage of Bootstrap or any other UI library of your choice
- Responsive design across devices
- Smooth interactions and transitions
- Visual appeal and design consistency

### Accessibility Compliance (5%)
- Keyboard navigation
- Screen reader compatibility
- Proper use of ARIA attributes
- Sufficient color contrast
- Text alternatives for non-text content

### Code Organization and Comments (5%)
- Clean, well-organized code
- Meaningful variable and function names
- Comprehensive comments explaining logic
- Separation of concerns
- File structure and organization

## Submission Instructions

1. Push your final code to your GitHub repository
2. Submit the following on Canvas:
   - Link to your GitHub repository
   - Link to your deployed project
   - Brief explanation of:
     - Which project idea you chose
     - Which API(s) you used
     - Any challenges you faced and how you overcame them
     - Any additional features or enhancements you implemented

## Tips for Success

- **Plan before coding**: Sketch your UI and plan your JavaScript structure
- **Start with API integration**: Ensure you can fetch and display data before adding complex interactivity
- **Test across devices**: Check your responsive design on multiple screen sizes
- **Commit regularly**: Make frequent, small commits with clear messages
- **Handle errors gracefully**: Always provide feedback when something goes wrong
- **Don't wait until the last minute**: This project requires more time than MP1

## Resources

### JavaScript & API Resources
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/) - Modern JavaScript Tutorial
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Public APIs List](https://github.com/public-apis/public-apis)

### Bootstrap Resources
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

### Data Visualization
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [Chart.js Examples](https://www.chartjs.org/docs/latest/samples/information.html)
- [D3.js](https://d3js.org/) (for more advanced visualizations)

### Accessibility Resources
- [WebAIM](https://webaim.org/)
- [A11Y Project Checklist](https://www.a11yproject.com/checklist/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)

Good luck with your interactive web component project!
