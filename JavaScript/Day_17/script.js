// User Signup
function signup(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.username === username)) {
      alert('Username already exists');
      return;
    }
  
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful!');
    window.location.href = 'index.html';
  }


  // User Login
function login(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = 'inventory.html';
    } else {
      alert('Invalid username or password');
    }
  }

  // Logout
function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
  }

  // Inventory Management
function getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }

  function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
  
    products.forEach((product, index) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3><a href="#" onclick="showProductDetails(${index})">${product.name}</a></h3>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
        <p>Quantity: ${product.quantity}</p>
        <div class="product-actions">
          <a onclick="editProduct(${index})">Edit</a>
          <a onclick="deleteProduct(${index})">Delete</a>
        </div>
      `;
      productList.appendChild(productDiv);
    });
  }

  function saveProduct() {
    const name = document.getElementById('product-name').value;
    const quantity = document.getElementById('product-quantity').value;
    const price = document.getElementById('product-price').value;
    const category = document.getElementById('product-category').value;
    const index = document.getElementById('product-form').dataset.index;
  
    if (!name || !quantity || !price || !category) {
      alert('Please fill all fields');
      return;
    }
  
    const products = getProducts();
    const productData = { name, quantity, price, category };
  
    if (index) {
      products[index] = productData;
    } else {
      products.push(productData);
    }
  
    saveProducts(products);
    renderProducts(products);
    clearForm();
  }

  function editProduct(index) {
    const products = getProducts();
    const product = products[index];
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-quantity').value = product.quantity;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-category').value = product.category;
    document.getElementById('form-title').textContent = 'Edit Product';
    document.getElementById('product-form').dataset.index = index;
  }

  function deleteProduct(index) {
    const products = getProducts();
    products.splice(index, 1);
    saveProducts(products);
    renderProducts(products);
  }