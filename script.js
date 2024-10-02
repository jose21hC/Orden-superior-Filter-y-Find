// Function to filter products by price range
document.getElementById("filter-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the minimum and maximum price input values
    const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
    const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;

    // Get all products in the results list
    const products = document.querySelectorAll("#results li");
    let hasResults = false;

    // Loop through each product and show/hide based on the price range
    products.forEach(product => {
        const price = parseFloat(product.getAttribute("data-price"));
        
        if (price >= minPrice && price <= maxPrice) {
            product.style.display = "block";
            hasResults = true;
        } else {
            product.style.display = "none";
        }
    });

    const messageElement = document.getElementById("results-message");

    // Show a message if no products are found
    if (!hasResults) {
        messageElement.textContent = "No se encontraron productos 😔";
        messageElement.style.color = "red";
        messageElement.style.display = "block";
    } else {
        messageElement.textContent = "Productos encontrados! 🎉";
        messageElement.style.color = "green";
        messageElement.style.display = "block";
    }
});

// Function to search products by name
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the search query and convert it to lowercase
    const searchQuery = document.getElementById("search").value.toLowerCase();

    // Get all products in the results list
    const products = document.querySelectorAll("#results li");
    let hasResults = false;

    // Loop through each product and show/hide based on the name match
    products.forEach(product => {
        const productName = product.getAttribute("data-name").toLowerCase();
        
        if (productName.includes(searchQuery)) {
            product.style.display = "block";
            hasResults = true;
        } else {
            product.style.display = "none";
        }
    });

    const messageElement = document.getElementById("results-message");

    // Show a message if no products are found
    if (!hasResults) {
        messageElement.textContent = "No se encontraron productos 😔";
        messageElement.style.color = "red";
        messageElement.style.display = "block";
    } else {
        messageElement.textContent = "Productos encontrados! 🎉";
        messageElement.style.color = "green";
        messageElement.style.display = "block";
    }
});
