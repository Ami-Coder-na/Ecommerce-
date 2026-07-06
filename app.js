// ----------------------------------------------------
// PRODUCTS DATABASE
// ----------------------------------------------------
const PRODUCTS = [
  {
    id: 1,
    name: "Elan Organic Rainforest Mix Nuts",
    category: "Breakfast",
    price: 44.00,
    oldPrice: 49.00,
    image: "https://images.unsplash.com/photo-1608797178974-15b35a61d121?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    badge: "Sale",
    sold: 80,
    total: 100,
    description: "Elan Organic Rainforest Mix is a delicious combination of raw cashews, almonds, Brazil nuts, and pumpkin seeds. It is organic, gluten-free, non-GMO, and a great source of protein and healthy fats for your daily routine.",
    images: [
      "https://images.unsplash.com/photo-1608797178974-15b35a61d121?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: [
      { author: "Sarah M.", date: "June 12, 2026", rating: 5, text: "Excellent quality and tastes extremely fresh. Highly recommended!" },
      { author: "David K.", date: "July 2, 2026", rating: 4, text: "Very nice mix, but I wish there were slightly more Brazil nuts." }
    ]
  },
  {
    id: 2,
    name: "Seeds & Almond Super Crunchy Granola",
    category: "Snacks",
    price: 28.00,
    oldPrice: 32.00,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d20?w=600&auto=format&fit=crop&q=80",
    rating: 4.0,
    badge: "Sale",
    sold: 65,
    total: 120,
    description: "Get your morning started right with our Super Crunchy Granola! Packed with energy-boosting organic sunflower seeds, flaxseeds, pumpkin seeds, and premium sliced almonds, toasted to a beautiful golden crisp.",
    images: [
      "https://images.unsplash.com/photo-1566478989037-eec170784d20?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517881917431-1065afe77487?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: [
      { author: "Michael B.", date: "May 20, 2026", rating: 4, text: "Super crunchy indeed! Perfect with Greek yogurt." }
    ]
  },
  {
    id: 3,
    name: "Blue Potato Sea Salt Premium Chips",
    category: "Snacks",
    price: 12.50,
    oldPrice: 15.00,
    image: "https://images.unsplash.com/photo-1621447509374-ee54452140bb?w=600&auto=format&fit=crop&q=80",
    rating: 5.0,
    badge: "Hot",
    sold: 110,
    total: 120,
    description: "Premium blue potato chips cooked in small batches with cold-pressed avocado oil and sprinkled with fine Mediterranean sea salt. Crispy, colorful, and naturally delicious.",
    images: [
      "https://images.unsplash.com/photo-1621447509374-ee54452140bb?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: [
      { author: "Emily R.", date: "June 25, 2026", rating: 5, text: "Hands down the best blue potato chips in the market!" }
    ]
  },
  {
    id: 4,
    name: "Red Sweet Organic Pomegranate",
    category: "Fruits",
    price: 18.00,
    oldPrice: 22.00,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    badge: "Hot",
    sold: 45,
    total: 60,
    description: "Hand-picked sweet organic red pomegranates loaded with antioxidant rich, juicy arils. Perfect for fresh juicing, healthy smoothies, or tossing onto summer salads.",
    images: [
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: [
      { author: "Grace T.", date: "July 4, 2026", rating: 5, text: "Insanely sweet and full of juice. Will buy again!" }
    ]
  },
  {
    id: 5,
    name: "Fresh Red Bell Peppers Organically Grown",
    category: "Vegetables",
    price: 4.20,
    oldPrice: 5.00,
    image: "https://images.unsplash.com/photo-1563565042-2411bc48394a?w=600&auto=format&fit=crop&q=80",
    rating: 3.5,
    badge: "Sale",
    sold: 30,
    total: 50,
    description: "Crispy, sweet, and bright red bell peppers harvested daily from local sustainable organic farms. Rich in Vitamin C and perfect for stir-fries, stuffing, or eating raw with dips.",
    images: [
      "https://images.unsplash.com/photo-1563565042-2411bc48394a?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: [
      { author: "Mark L.", date: "June 18, 2026", rating: 3, text: "Good freshness, but some were a bit small." }
    ]
  },
  {
    id: 6,
    name: "Amanda Fruits Mixed Berries Juice",
    category: "Drinks",
    price: 19.00,
    oldPrice: 24.00,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
    rating: 4.2,
    badge: "Sale",
    sold: 72,
    total: 90,
    description: "Amanda Fruits Mixed Berries Juice is a cold-pressed organic juice blend of blueberries, strawberries, raspberries, and wild apples. No added sugars, no preservatives. 100% natural goodness.",
    images: [
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: [
      { author: "Oliver J.", date: "July 1, 2026", rating: 4, text: "Very tasty berry juice. Kids absolutely love it." }
    ]
  },
  {
    id: 7,
    name: "Red Bull Sugar Free Energy Drink Can",
    category: "Drinks",
    price: 2.99,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1622543956221-a596e9926d21?w=600&auto=format&fit=crop&q=80",
    rating: 4.1,
    badge: "New",
    sold: 210,
    total: 300,
    description: "Red Bull Sugarfree is a utility drink to be consumed when you need a boost. Features high-quality ingredients like Caffeine, Taurine, B-group vitamins, and Aspartame.",
    images: [
      "https://images.unsplash.com/photo-1622543956221-a596e9926d21?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: []
  },
  {
    id: 8,
    name: "Organic Grass-Fed Whole Milk 1 Gallon",
    category: "Dairy & Milk",
    price: 5.50,
    oldPrice: 6.20,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&auto=format&fit=crop&q=80",
    rating: 5.0,
    badge: "Popular",
    sold: 90,
    total: 120,
    description: "100% organic pasteurized whole milk sourced from pasture-raised, grass-fed cows. High in omega-3 fatty acids, calcium, and creamy delicious flavor.",
    images: [
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: [
      { author: "Arthur P.", date: "May 29, 2026", rating: 5, text: "Tastes like real farm milk. Outstanding quality!" }
    ]
  },
  {
    id: 9,
    name: "Organic Fresh Butterhead Lettuce",
    category: "Vegetables",
    price: 3.50,
    oldPrice: 4.00,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80",
    rating: 5.0,
    badge: "Popular",
    sold: 45,
    total: 80,
    description: "Deliciously tender organic butterhead lettuce. Leaves are sweet and soft, making it perfect for custom healthy salad bowls or hamburger leaf toppings.",
    images: [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: []
  },
  {
    id: 10,
    name: "Farm Fresh Large Brown Eggs 12ct",
    category: "Breakfast",
    price: 5.20,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    badge: "Popular",
    sold: 95,
    total: 100,
    description: "Cage-free, organic, pasture-raised large brown chicken eggs. Super nutritious golden yolks, harvested with absolute animal care and quality standard packing.",
    images: [
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: []
  },
  {
    id: 11,
    name: "Baby Diaper Premium Pants Ultra",
    category: "Baby Care",
    price: 19.00,
    oldPrice: 22.00,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
    rating: 4.0,
    badge: "New",
    sold: 35,
    total: 50,
    description: "Premium hypoallergenic baby diaper pants designed with a super absorber lock layer to keep your baby's skin dry and smooth for up to 12 hours. Size: Medium, 44 count.",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: []
  },
  {
    id: 12,
    name: "Complete Nutritional Organic Dog Food",
    category: "Pet Food",
    price: 19.00,
    oldPrice: 25.00,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    badge: "Popular",
    sold: 58,
    total: 80,
    description: "Premium grain-free organic dry kibble for dogs. Formulated with real free-range chicken, sweet potatoes, and organic peas to support strong immunity and healthy shinier coats.",
    images: [
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: []
  },
  {
    id: 13,
    name: "Nestle Coffee-Mate Creamer Powder Box",
    category: "Coffee",
    price: 38.00,
    oldPrice: 45.00,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    rating: 4.5,
    badge: "Deal",
    sold: 140,
    total: 200,
    description: "Nestle Coffee-Mate Coffee Creamer is the classic way to create a deliciously rich, velvety cup of coffee. Gluten-free and lactose-free powder dissolves instantly in hot cups.",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: []
  },
  {
    id: 14,
    name: "Organic Strawberry Yogurt Smoothie",
    category: "Breakfast",
    price: 3.20,
    oldPrice: 3.99,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80",
    rating: 4.6,
    badge: "Sale",
    sold: 88,
    total: 100,
    description: "Creamy organic low-fat strawberry yogurt smoothie bottle. Filled with active probiotics to support gut health and fresh sweet strawberry arils.",
    images: [
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: []
  },
  {
    id: 15,
    name: "Citrus Fresh Dishwashing Liquid Spray",
    category: "Household",
    price: 4.50,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&auto=format&fit=crop&q=80",
    rating: 3.2,
    badge: "Popular",
    sold: 40,
    total: 70,
    description: "Get sparkling clean dishes instantly with our Citrus Fresh Spray! Quickly cuts through tough grease while keeping hands soft. Scented with natural lemon oil extract.",
    images: [
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&auto=format&fit=crop&q=80"
    ],
    reviews: []
  }
];

// ----------------------------------------------------
// STATE MANAGEMENT
// ----------------------------------------------------
const state = {
  cart: [
    { product: PRODUCTS.find(p => p.id === 1), quantity: 1, size: "500g" },
    { product: PRODUCTS.find(p => p.id === 8), quantity: 2, size: "1 Gallon" }
  ],
  wishlist: [2, 4],
  compare: [1, 3],
  couponDiscount: 0,
  couponApplied: false,
  appliedCouponCode: "",
  user: JSON.parse(localStorage.getItem('crozvox_user')) || null,
  orders: JSON.parse(localStorage.getItem('crozvox_orders')) || []
};

// ----------------------------------------------------
// INITIALIZATION
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Setup global carousels on page load
  setupGlobalCarousels();

  // Setup routing listener
  window.addEventListener('hashchange', handleRouting);
  
  // Initial page load routing
  handleRouting();

  // Global search suggest initialization
  setupGlobalSearch();

  // Setup countdown deals timer
  setupDealsTimer();
});

// Helper for carousel buttons
const setupGlobalCarousels = () => {
  const setupCarousel = (carouselId, prevBtnId, nextBtnId, scrollStep = 300) => {
    const carousel = document.getElementById(carouselId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    if (carousel && prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
      });
    }
  };

  setupCarousel('categories-carousel', 'cat-prev', 'cat-next', 200);
  setupCarousel('featured-carousel', 'feat-prev', 'feat-next', 300);
  setupCarousel('most-selling-carousel', 'sell-prev', 'sell-next', 420);
};

// ----------------------------------------------------
// HASH ROUTER
// ----------------------------------------------------
function handleRouting() {
  const hash = window.location.hash || '#/';
  
  // Hide all page views
  document.querySelectorAll('.page-view').forEach(view => {
    view.style.display = 'none';
  });

  // Highlight navigation active links
  updateActiveNavigation(hash);

  // Scroll back to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update header item counts
  updateHeaderBadges();

  // Route matching
  if (hash === '#/' || hash === '#') {
    renderHomeView();
  } else if (hash.startsWith('#/shop')) {
    renderShopView(hash);
  } else if (hash.startsWith('#/product/')) {
    const parts = hash.split('/');
    const productId = parseInt(parts[parts.length - 1]);
    renderProductDetailView(productId);
  } else if (hash === '#/cart') {
    renderCartView();
  } else if (hash === '#/checkout') {
    renderCheckoutView();
  } else if (hash.startsWith('#/order-success')) {
    renderOrderSuccessView(hash);
  } else if (hash === '#/account') {
    renderAccountView();
  } else if (hash === '#/about') {
    showPageView('page-about');
  } else if (hash === '#/contact') {
    showPageView('page-contact');
  } else {
    // Default fallback to home
    renderHomeView();
  }

  // Re-render Lucide Icons for dynamic content
  lucide.createIcons();
}

function showPageView(viewId) {
  const view = document.getElementById(viewId);
  if (view) {
    view.style.display = 'block';
  }
}

function updateActiveNavigation(hash) {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => link.classList.remove('active'));

  if (hash === '#/' || hash === '#') {
    document.getElementById('nav-home')?.classList.add('active');
  } else if (hash.startsWith('#/shop')) {
    document.getElementById('nav-shop')?.classList.add('active');
  } else if (hash === '#/about') {
    document.getElementById('nav-about')?.classList.add('active');
  } else if (hash === '#/contact') {
    document.getElementById('nav-contact')?.classList.add('active');
  }
}

function updateHeaderBadges() {
  const cartCount = document.getElementById('cart-count');
  const wishlistCount = document.getElementById('wishlist-count');
  const compareCount = document.getElementById('compare-count');

  if (cartCount) cartCount.textContent = state.cart.reduce((total, item) => total + item.quantity, 0);
  if (wishlistCount) wishlistCount.textContent = state.wishlist.length;
  if (compareCount) compareCount.textContent = state.compare.length;
}

// ----------------------------------------------------
// A. RENDERING HOME VIEW
// ----------------------------------------------------
function renderHomeView() {
  showPageView('page-home');

  // Featured Products slider list
  const featuredCarousel = document.getElementById('featured-carousel');
  if (featuredCarousel) {
    const featuredItems = PRODUCTS.filter(p => p.id <= 5);
    featuredCarousel.innerHTML = featuredItems.map(p => getProductCardHtml(p)).join('');
  }

  // Trending Products Tab Content
  const trendingGrid = document.getElementById('trending-products-grid');
  if (trendingGrid) {
    const trendingItems = PRODUCTS.filter(p => p.id >= 2 && p.id <= 9);
    trendingGrid.innerHTML = trendingItems.map(p => getProductCardHtml(p)).join('');
    setupTrendingTabHandlers();
  }

  // Most Selling Products list
  const mostSellingCarousel = document.getElementById('most-selling-carousel');
  if (mostSellingCarousel) {
    const sellingItems = PRODUCTS.filter(p => p.id === 8 || p.id === 3 || p.id === 9);
    mostSellingCarousel.innerHTML = sellingItems.map(p => getMostSellingCardHtml(p)).join('');
  }

  // Deals of the Day grid
  const dealsGrid = document.getElementById('deals-of-the-day-grid');
  if (dealsGrid) {
    dealsGrid.innerHTML = `
      <!-- Col 1: Top Selling -->
      <div class="deals-column">
        <h4 class="column-title">Top Selling</h4>
        <div class="column-divider"></div>
        ${PRODUCTS.slice(10, 13).map(p => getSmallProductItemHtml(p)).join('')}
      </div>

      <!-- Col 2: Large Deal of the Day Card -->
      <div class="deals-column large-deal-col">
        ${getLargeDealCardHtml(PRODUCTS.find(p => p.id === 13))}
      </div>

      <!-- Col 3: Trending List -->
      <div class="deals-column">
        <h4 class="column-title">Trending Products</h4>
        <div class="column-divider"></div>
        ${PRODUCTS.slice(13, 16).map(p => getSmallProductItemHtml(p)).join('')}
      </div>

      <!-- Col 4: Top Rated List -->
      <div class="deals-column">
        <h4 class="column-title">Top Rated</h4>
        <div class="column-divider"></div>
        ${PRODUCTS.slice(7, 10).map(p => getSmallProductItemHtml(p)).join('')}
      </div>
    `;
  }

  bindProductCardClicks();
}

function setupTrendingTabHandlers() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const trendingGrid = document.getElementById('trending-products-grid');

  if (tabButtons && trendingGrid) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterCat = btn.getAttribute('data-tab');
        const cards = trendingGrid.querySelectorAll('.product-card');

        cards.forEach(card => {
          const cat = card.getAttribute('data-cat');
          if (filterCat === 'all' || cat === filterCat) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
}

// ----------------------------------------------------
// B. RENDERING SHOP VIEW & FILTERS
// ----------------------------------------------------
let activeShopCategory = "all";
let maxPriceLimit = 100;
let activeRatingFilter = null;

function renderShopView(hash) {
  showPageView('page-shop');

  // Parse query categories if clicked from category cards
  if (hash.includes('?cat=')) {
    const catQuery = decodeURIComponent(hash.split('?cat=')[1]);
    activeShopCategory = catQuery;
  }

  const shopCatList = document.getElementById('shop-cat-filter');
  if (shopCatList) {
    shopCatList.querySelectorAll('li').forEach(li => {
      li.classList.remove('active');
      if (li.getAttribute('data-cat') === activeShopCategory) {
        li.classList.add('active');
      }
    });

    // Handle filter clicks
    shopCatList.querySelectorAll('li').forEach(li => {
      li.onclick = (e) => {
        activeShopCategory = li.getAttribute('data-cat');
        renderFilteredShopProducts();
        renderShopView(`#/shop?cat=${activeShopCategory}`);
      };
    });
  }

  // Price slider setup
  const priceSlider = document.getElementById('price-range');
  const priceLimitSpan = document.getElementById('price-limit');
  if (priceSlider && priceLimitSpan) {
    priceSlider.value = maxPriceLimit;
    priceLimitSpan.textContent = maxPriceLimit;

    priceSlider.oninput = (e) => {
      maxPriceLimit = parseInt(e.target.value);
      priceLimitSpan.textContent = maxPriceLimit;
      renderFilteredShopProducts();
    };
  }

  // Stars filter setup
  const ratingFilterList = document.getElementById('shop-rating-filter');
  if (ratingFilterList) {
    ratingFilterList.querySelectorAll('li').forEach(li => {
      li.classList.remove('active');
      const starsVal = parseInt(li.getAttribute('data-stars'));
      if (activeRatingFilter === starsVal) {
        li.classList.add('active');
      }
    });

    ratingFilterList.querySelectorAll('li').forEach(li => {
      li.onclick = () => {
        const starsVal = parseInt(li.getAttribute('data-stars'));
        if (activeRatingFilter === starsVal) {
          activeRatingFilter = null; // Toggle off
        } else {
          activeRatingFilter = starsVal;
        }
        renderShopView(window.location.hash);
        renderFilteredShopProducts();
      };
    });
  }

  // Clear filters setup
  const clearBtn = document.getElementById('clear-filters-btn');
  if (clearBtn) {
    clearBtn.onclick = () => {
      activeShopCategory = "all";
      maxPriceLimit = 100;
      activeRatingFilter = null;
      renderShopView('#/shop');
      renderFilteredShopProducts();
    };
  }

  // Sorting setup
  const sortSelect = document.getElementById('shop-sort');
  if (sortSelect) {
    sortSelect.onchange = () => {
      renderFilteredShopProducts();
    };
  }

  renderFilteredShopProducts();
}

function renderFilteredShopProducts() {
  const grid = document.getElementById('shop-products-grid');
  const itemCountSpan = document.getElementById('shop-item-count');
  const sortVal = document.getElementById('shop-sort')?.value || 'default';

  if (!grid) return;

  // Apply filters
  let filtered = PRODUCTS.filter(p => {
    const matchesCat = activeShopCategory === "all" || p.category === activeShopCategory;
    const matchesPrice = p.price <= maxPriceLimit;
    const matchesRating = activeRatingFilter === null || p.rating >= activeRatingFilter;
    return matchesCat && matchesPrice && matchesRating;
  });

  // Apply sorting
  if (sortVal === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortVal === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortVal === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (itemCountSpan) itemCountSpan.textContent = filtered.length;

  if (filtered.length > 0) {
    grid.innerHTML = filtered.map(p => getProductCardHtml(p)).join('');
  } else {
    grid.innerHTML = `
      <div class="span-2 text-center mt-30" style="grid-column: span 3; padding: 40px 0;">
        <i data-lucide="info" style="width: 48px; height: 48px; color: var(--text-body); margin-bottom: 12px;"></i>
        <h4>No products found matching your search.</h4>
        <p>Try clearing your active filters or adjusting the price slider.</p>
      </div>
    `;
    lucide.createIcons();
  }

  bindProductCardClicks();
  lucide.createIcons();
}

// ----------------------------------------------------
// C. RENDERING PRODUCT DETAIL VIEW
// ----------------------------------------------------
function renderProductDetailView(productId) {
  showPageView('page-product');

  const product = PRODUCTS.find(p => p.id === productId);
  const breadcrumb = document.getElementById('product-breadcrumb');
  const detailsContent = document.getElementById('product-details-content');

  if (!product || !detailsContent) {
    if (detailsContent) {
      detailsContent.innerHTML = `<h4>Product not found.</h4>`;
    }
    return;
  }

  // Render breadcrumb
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="#/"><i data-lucide="home"></i> Home</a>
      <i data-lucide="chevron-right" class="bread-sep"></i>
      <a href="#/shop?cat=${product.category}">${product.category}</a>
      <i data-lucide="chevron-right" class="bread-sep"></i>
      <span>${product.name}</span>
    `;
  }

  // Populate sizes list
  const sizes = ["250g", "500g", "1kg", "2kg"];
  let activeSize = sizes[1];

  // Renders main content
  detailsContent.innerHTML = `
    <!-- Left Gallery -->
    <div class="details-gallery">
      <div class="large-image-wrapper">
        <img src="${product.image}" id="main-product-img" alt="${product.name}">
      </div>
      <div class="thumbnail-list">
        ${(product.images || [product.image]).map((imgUrl, i) => `
          <div class="thumb-item ${i === 0 ? 'active' : ''}" data-url="${imgUrl}">
            <img src="${imgUrl}" alt="thumbnail">
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Right Info -->
    <div class="details-info">
      ${product.badge ? `<span class="card-badge badge-sale">${product.badge}</span>` : ''}
      <h1 class="details-title">${product.name}</h1>
      <div class="rating">
        <div class="stars">
          ${getStarsHtml(product.rating)}
        </div>
        <span class="rating-val">${product.rating}</span>
      </div>
      <div class="details-price-row">
        <span class="details-current-price">$${product.price.toFixed(2)}</span>
        ${product.oldPrice ? `<span class="details-old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
      </div>
      <p class="details-desc">${product.description}</p>
      
      <!-- Size selections -->
      <h5 style="margin-bottom: 10px; color: var(--text-heading);">Pack Size:</h5>
      <div class="size-selectors">
        ${sizes.map(size => `
          <button class="size-btn ${size === activeSize ? 'active' : ''}">${size}</button>
        `).join('')}
      </div>

      <!-- Quantity + Add actions -->
      <div class="qty-actions">
        <div class="qty-selector">
          <div class="qty-btn" id="qty-minus"><i data-lucide="minus"></i></div>
          <input type="text" value="1" readonly class="qty-val" id="qty-input">
          <div class="qty-btn" id="qty-plus"><i data-lucide="plus"></i></div>
        </div>
        <button class="btn btn-primary" id="detail-add-btn">
          <i data-lucide="shopping-cart"></i> Add to Cart
        </button>
        <button class="wishlist-btn" id="detail-wish-btn" style="position: static;">
          <i data-lucide="heart" style="${state.wishlist.includes(product.id) ? 'fill: #FD6E6E; stroke: #FD6E6E;' : ''}"></i>
        </button>
      </div>

      <ul class="meta-details">
        <li><span>Category:</span> ${product.category}</li>
        <li><span>Availability:</span> In Stock (${product.total - product.sold} items left)</li>
        <li><span>Guarantee:</span> 100% Organic & Fresh</li>
      </ul>
    </div>

    <!-- Product description tabs -->
    <div class="product-tabs-wrapper span-2" style="grid-column: span 2; margin-top: 30px;">
      <div class="tabs-nav">
        <span class="tab-nav-btn active" data-tab="tab-desc">Description</span>
        <span class="tab-nav-btn" data-tab="tab-info">Additional Info</span>
        <span class="tab-nav-btn" data-tab="tab-reviews">Reviews (${product.reviews ? product.reviews.length : 0})</span>
      </div>
      
      <!-- Description Tab -->
      <div class="tab-panel active" id="tab-desc">
        <p>${product.description}</p>
        <p class="mt-10">We source our items directly from global sustainable growers to guarantee you obtain pure qualities. Highly nutritious, carefully clean packed, ready for your kitchen tables.</p>
      </div>

      <!-- Additional Info Tab -->
      <div class="tab-panel" id="tab-info">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
          <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 10px 0; font-weight:700; width: 200px;">Weight</td><td style="padding: 10px 0;">${activeSize}</td></tr>
          <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 10px 0; font-weight:700;">Organic Certification</td><td style="padding: 10px 0;">USDA Organic & Fair Trade Certified</td></tr>
          <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 10px 0; font-weight:700;">Shelf Life</td><td style="padding: 10px 0;">12 Months from packing date</td></tr>
        </table>
      </div>

      <!-- Reviews Tab -->
      <div class="tab-panel" id="tab-reviews">
        <div class="reviews-container">
          <div class="reviews-list">
            ${product.reviews && product.reviews.length > 0 ? product.reviews.map(rev => `
              <div class="review-item">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" alt="avatar" class="review-avatar">
                <div class="review-body">
                  <div class="review-header">
                    <span class="reviewer-name">${rev.author}</span>
                    <span class="review-date">${rev.date}</span>
                  </div>
                  <div class="stars" style="margin-bottom: 8px;">
                    ${getStarsHtml(rev.rating)}
                  </div>
                  <p class="review-text">${rev.text}</p>
                </div>
              </div>
            `).join('') : '<p>No reviews yet. Be the first to review this product!</p>'}
          </div>

          <!-- Add Review Form -->
          <form class="add-review-form mt-30" id="detail-review-form">
            <h4>Add a Review</h4>
            <div class="form-row">
              <div class="form-group">
                <label>Name</label>
                <input type="text" id="rev-name" required placeholder="e.g. John Doe">
              </div>
              <div class="form-group">
                <label>Rating</label>
                <select id="rev-rating" required>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>
            </div>
            <div class="form-group mb-15">
              <label>Message</label>
              <textarea rows="4" id="rev-text" required placeholder="Write your review..."></textarea>
            </div>
            <button class="btn btn-primary" type="submit">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  `;

  // Gallery Thumbnail clicks
  detailsContent.querySelectorAll('.thumb-item').forEach(item => {
    item.addEventListener('click', (e) => {
      detailsContent.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
      item.classList.add('active');
      const largeImg = document.getElementById('main-product-img');
      if (largeImg) largeImg.src = item.getAttribute('data-url');
    });
  });

  // Size selections
  detailsContent.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      detailsContent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSize = btn.textContent;
    });
  });

  // Quantity controls
  const qtyInput = document.getElementById('qty-input');
  document.getElementById('qty-minus')?.addEventListener('click', () => {
    let val = parseInt(qtyInput.value) || 1;
    if (val > 1) qtyInput.value = val - 1;
  });
  document.getElementById('qty-plus')?.addEventListener('click', () => {
    let val = parseInt(qtyInput.value) || 1;
    qtyInput.value = val + 1;
  });

  // Add to Cart
  document.getElementById('detail-add-btn')?.addEventListener('click', () => {
    const qty = parseInt(qtyInput.value) || 1;
    addToCart(product, qty, activeSize);
  });

  // Wishlist toggle
  const wishBtn = document.getElementById('detail-wish-btn');
  wishBtn?.addEventListener('click', () => {
    wishBtn.classList.toggle('active');
    const index = state.wishlist.indexOf(product.id);
    const icon = wishBtn.querySelector('svg');

    if (index > -1) {
      state.wishlist.splice(index, 1);
      icon.style.fill = 'none';
      icon.style.stroke = 'currentColor';
      showToast('Item removed from Wishlist!');
    } else {
      state.wishlist.push(product.id);
      icon.style.fill = '#FD6E6E';
      icon.style.stroke = '#FD6E6E';
      showToast('Item added to Wishlist!');
    }
    updateHeaderBadges();
  });

  // Review Form Submit Handler
  document.getElementById('detail-review-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('rev-name');
    const ratingInput = document.getElementById('rev-rating');
    const textInput = document.getElementById('rev-text');

    if (!product.reviews) product.reviews = [];
    
    product.reviews.push({
      author: nameInput.value,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      rating: parseInt(ratingInput.value),
      text: textInput.value
    });

    showToast('Review submitted successfully!');
    renderProductDetailView(product.id);
  });

  // Detail Description Tabs switcher
  const tabBtns = detailsContent.querySelectorAll('.tab-nav-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.getAttribute('data-tab');
      detailsContent.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      document.getElementById(targetTab)?.classList.add('active');
    });
  });

  lucide.createIcons();
}

// ----------------------------------------------------
// D. RENDERING CART VIEW
// ----------------------------------------------------
function renderCartView() {
  showPageView('page-cart');

  const cartLayout = document.getElementById('cart-content-layout');
  if (!cartLayout) return;

  if (state.cart.length === 0) {
    cartLayout.innerHTML = `
      <div class="cart-empty-message text-center w-full" style="grid-column: span 2;">
        <i data-lucide="shopping-basket" style="width: 60px; height: 60px; color: var(--text-body); margin-bottom: 15px;"></i>
        <h3>Your shopping cart is empty!</h3>
        <p>Go to the Shop page and start adding organic food to your box.</p>
        <a href="#/shop" class="btn btn-primary mt-20">Browse Shop</a>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  // Calculate totals
  const subtotal = state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const discount = subtotal * state.couponDiscount;
  const delivery = subtotal >= 50 ? 0 : 5.00;
  const tax = (subtotal - discount) * 0.08;
  const grandTotal = subtotal - discount + delivery + tax;

  cartLayout.innerHTML = `
    <!-- Cart Items list -->
    <div class="cart-table-wrapper">
      <table class="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          ${state.cart.map((item, index) => `
            <tr>
              <td>
                <div class="cart-product clickable" onclick="location.hash='#/product/${item.product.id}'">
                  <img src="${item.product.image}" alt="${item.product.name}">
                  <div>
                    <span class="cart-product-title">${item.product.name}</span>
                    <p style="font-size: 11px; color: var(--text-body); margin-top:4px;">Size: ${item.size}</p>
                  </div>
                </div>
              </td>
              <td>
                <span class="current-price">$${item.product.price.toFixed(2)}</span>
              </td>
              <td>
                <div class="qty-selector">
                  <div class="qty-btn btn-cart-qty" data-index="${index}" data-action="minus"><i data-lucide="minus"></i></div>
                  <span class="qty-val">${item.quantity}</span>
                  <div class="qty-btn btn-cart-qty" data-index="${index}" data-action="plus"><i data-lucide="plus"></i></div>
                </div>
              </td>
              <td>
                <span class="subtotal">$${(item.product.price * item.quantity).toFixed(2)}</span>
              </td>
              <td>
                <i data-lucide="trash-2" class="remove-cart-item" data-index="${index}"></i>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Summary Total list Box -->
    <div class="cart-totals-box">
      <h4>Cart Totals</h4>
      <div class="totals-row">
        <span>Cart Subtotal</span>
        <span class="font-bold">$${subtotal.toFixed(2)}</span>
      </div>
      ${state.couponApplied ? `
        <div class="totals-row text-green">
          <span>Discount (10% Code: ${state.appliedCouponCode})</span>
          <span>-$${discount.toFixed(2)}</span>
        </div>
      ` : ''}
      <div class="totals-row">
        <span>Estimated Tax (8%)</span>
        <span>$${tax.toFixed(2)}</span>
      </div>
      <div class="totals-row">
        <span>Delivery Shipping</span>
        <span>${delivery === 0 ? '<span class="text-green font-bold">FREE</span>' : `$${delivery.toFixed(2)}`}</span>
      </div>
      <div class="totals-row grand-total">
        <span>Grand Total</span>
        <span>$${grandTotal.toFixed(2)}</span>
      </div>

      <!-- Coupon section -->
      <div class="coupon-section">
        <h5>Have a promo code?</h5>
        <div class="coupon-form">
          <input type="text" placeholder="e.g. CROZVOX10" id="coupon-input" value="${state.appliedCouponCode}">
          <button class="btn btn-secondary-outline" id="apply-coupon-btn">Apply</button>
        </div>
      </div>

      <button class="btn btn-primary w-full mt-30" onclick="location.hash='#/checkout'">Proceed to Checkout</button>
    </div>
  `;

  // Cart quantity controls bindings
  cartLayout.querySelectorAll('.btn-cart-qty').forEach(btn => {
    btn.onclick = () => {
      const idx = parseInt(btn.getAttribute('data-index'));
      const action = btn.getAttribute('data-action');
      const item = state.cart[idx];

      if (action === 'minus') {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          // Remove if item quantity drops below 1
          state.cart.splice(idx, 1);
        }
      } else {
        item.quantity++;
      }
      renderCartView();
      updateHeaderBadges();
    };
  });

  // Remove buttons
  cartLayout.querySelectorAll('.remove-cart-item').forEach(btn => {
    btn.onclick = () => {
      const idx = parseInt(btn.getAttribute('data-index'));
      state.cart.splice(idx, 1);
      renderCartView();
      updateHeaderBadges();
      showToast('Item removed from cart!');
    };
  });

  // Coupon apply
  const couponBtn = document.getElementById('apply-coupon-btn');
  const couponInput = document.getElementById('coupon-input');
  if (couponBtn && couponInput) {
    couponBtn.onclick = () => {
      const val = couponInput.value.trim().toUpperCase();
      if (val === 'CROZVOX10') {
        state.couponDiscount = 0.1;
        state.couponApplied = true;
        state.appliedCouponCode = 'CROZVOX10';
        showToast('Promo Coupon applied! 10% Discount saved.');
        renderCartView();
      } else if (val === '') {
        state.couponDiscount = 0;
        state.couponApplied = false;
        state.appliedCouponCode = '';
        renderCartView();
      } else {
        showToast('Invalid Coupon Code! Try CROZVOX10');
      }
    };
  }

  lucide.createIcons();
}

// ----------------------------------------------------
// E. RENDERING CHECKOUT VIEW
// ----------------------------------------------------
function renderCheckoutView() {
  // Guard for empty cart
  if (state.cart.length === 0) {
    location.hash = '#/cart';
    return;
  }

  showPageView('page-checkout');

  if (state.user) {
    document.getElementById('c-name').value = state.user.name || '';
    document.getElementById('c-email').value = state.user.email || '';
    document.getElementById('c-phone').value = state.user.phone || '';
    document.getElementById('c-address').value = state.user.address || '';
    document.getElementById('c-city').value = state.user.city || '';
    document.getElementById('c-zip').value = state.user.zip || '';
  }

  const checkoutItemsList = document.getElementById('checkout-items');
  const checkoutTotals = document.getElementById('checkout-totals');

  // Math totals
  const subtotal = state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const discount = subtotal * state.couponDiscount;
  const delivery = subtotal >= 50 ? 0 : 5.00;
  const tax = (subtotal - discount) * 0.08;
  const grandTotal = subtotal - discount + delivery + tax;

  // Render items bought list
  if (checkoutItemsList) {
    checkoutItemsList.innerHTML = state.cart.map(item => `
      <div class="checkout-item-row">
        <div class="checkout-item-left">
          <img src="${item.product.image}" alt="item">
          <div>
            <span class="checkout-item-name">${item.product.name}</span>
            <p style="font-size: 11px; color: var(--text-body);">Qty: ${item.quantity} | Size: ${item.size}</p>
          </div>
        </div>
        <span class="font-bold" style="color: var(--text-heading);">$${(item.product.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');
  }

  // Render checkout cost calculations
  if (checkoutTotals) {
    checkoutTotals.innerHTML = `
      <div class="totals-row">
        <span>Subtotal</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      ${state.couponApplied ? `
        <div class="totals-row text-green">
          <span>Discount (10% Code: ${state.appliedCouponCode})</span>
          <span>-$${discount.toFixed(2)}</span>
        </div>
      ` : ''}
      <div class="totals-row">
        <span>Estimated Tax (8%)</span>
        <span>$${tax.toFixed(2)}</span>
      </div>
      <div class="totals-row">
        <span>Delivery Shipping</span>
        <span>${delivery === 0 ? 'FREE' : `$${delivery.toFixed(2)}`}</span>
      </div>
      <div class="totals-row grand-total">
        <span>Total</span>
        <span>$${grandTotal.toFixed(2)}</span>
      </div>
    `;
  }

  // Handle Cash on Delivery vs. Credit card visibility
  const codRadio = document.getElementById('pay-cod');
  const cardRadio = document.getElementById('pay-card');
  const cardInputsPanel = document.getElementById('card-inputs-panel');

  const togglePaymentFields = () => {
    if (cardRadio?.checked) {
      cardInputsPanel.style.display = 'block';
    } else {
      cardInputsPanel.style.display = 'none';
    }
  };

  if (codRadio && cardRadio && cardInputsPanel) {
    codRadio.addEventListener('change', togglePaymentFields);
    cardRadio.addEventListener('change', togglePaymentFields);
    togglePaymentFields();
  }

  // Handle Card input keypress updates to graphic preview
  const cardNumInput = document.getElementById('card-num');
  const cardNameInput = document.getElementById('card-name-input');
  const cardExpiryInput = document.getElementById('card-expiry');

  const previewCardNo = document.getElementById('preview-card-no');
  const previewCardHolder = document.getElementById('preview-card-holder');
  const previewCardExpiry = document.getElementById('preview-card-expiry');

  cardNumInput?.addEventListener('input', (e) => {
    // Add spacing format
    let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let matches = val.match(/\d{4,16}/g);
    let match = (matches && matches[0]) || '';
    let parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      e.target.value = parts.join(' ');
    } else {
      e.target.value = val;
    }

    previewCardNo.textContent = e.target.value || "#### #### #### ####";
  });

  cardNameInput?.addEventListener('input', (e) => {
    previewCardHolder.textContent = e.target.value.toUpperCase() || "JOHN DOE";
  });

  cardExpiryInput?.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (val.length >= 2) {
      e.target.value = val.substring(0, 2) + '/' + val.substring(2, 4);
    } else {
      e.target.value = val;
    }
    previewCardExpiry.textContent = e.target.value || "MM/YY";
  });

  // Handle Order Submit button click
  const placeOrderBtn = document.getElementById('place-order-btn');
  placeOrderBtn.onclick = () => {
    // Form verification
    const name = document.getElementById('c-name').value.trim();
    const email = document.getElementById('c-email').value.trim();
    const phone = document.getElementById('c-phone').value.trim();
    const address = document.getElementById('c-address').value.trim();
    const city = document.getElementById('c-city').value.trim();
    const zip = document.getElementById('c-zip').value.trim();

    if (!name || !email || !phone || !address || !city || !zip) {
      alert("Please fill in all the required billing fields (*).");
      return;
    }

    // Card fields verification if credit card is checked
    if (cardRadio?.checked) {
      const cardNum = document.getElementById('card-num').value.trim();
      const cardName = document.getElementById('card-name-input').value.trim();
      const cardExpiry = document.getElementById('card-expiry').value.trim();
      const cardCvv = document.getElementById('card-cvv').value.trim();

      if (!cardNum || !cardName || !cardExpiry || !cardCvv) {
        alert("Please fill in your credit card parameters.");
        return;
      }
    }

    // Success transaction generates receipt code
    const orderId = "CRZ-" + Math.floor(100000 + Math.random() * 900000);
    
    // Save billing data temporarily into local Storage or state for receipt rendering
    const orderDetails = {
      orderId: orderId,
      name: name,
      email: email,
      total: grandTotal,
      tax: tax,
      shipping: delivery,
      itemsCount: state.cart.reduce((sum, item) => sum + item.quantity, 0)
    };

    localStorage.setItem('latestOrder', JSON.stringify(orderDetails));

    // Save to user order history
    state.orders.push(orderDetails);
    localStorage.setItem('crozvox_orders', JSON.stringify(state.orders));

    // Reset shopping cart state
    state.cart = [];
    state.couponDiscount = 0;
    state.couponApplied = false;
    state.appliedCouponCode = "";
    updateHeaderBadges();

    // Redirect to success
    location.hash = `#/order-success?id=${orderId}`;
  };

  lucide.createIcons();
}

// ----------------------------------------------------
// F. RENDERING ORDER SUCCESS VIEW
// ----------------------------------------------------
function renderOrderSuccessView(hash) {
  showPageView('page-order-success');

  const receiptBox = document.getElementById('success-receipt');
  if (!receiptBox) return;

  const data = JSON.parse(localStorage.getItem('latestOrder'));

  if (!data) {
    receiptBox.innerHTML = `<p>Error loading order details.</p>`;
    return;
  }

  receiptBox.innerHTML = `
    <h4 class="receipt-title">Order Receipt</h4>
    <div class="receipt-row">
      <span>Order ID:</span>
      <span class="font-bold">${data.orderId}</span>
    </div>
    <div class="receipt-row">
      <span>Date:</span>
      <span>${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
    </div>
    <div class="receipt-row">
      <span>Customer:</span>
      <span>${data.name}</span>
    </div>
    <div class="receipt-row">
      <span>Items Purchased:</span>
      <span>${data.itemsCount} items</span>
    </div>
    <div class="receipt-row">
      <span>Delivery Shipping Fee:</span>
      <span>${data.shipping === 0 ? 'FREE' : `$${data.shipping.toFixed(2)}`}</span>
    </div>
    <div class="receipt-row">
      <span>Taxes:</span>
      <span>$${data.tax.toFixed(2)}</span>
    </div>
    <div class="receipt-row total-row">
      <span>Total Payment Amount:</span>
      <span>$${data.total.toFixed(2)}</span>
    </div>
  `;
}

// ----------------------------------------------------
// G. RENDERING ACCOUNT / AUTH VIEW
// ----------------------------------------------------
function renderAccountView() {
  showPageView('page-account');
  const container = document.getElementById('page-account');
  if (!container) return;

  if (!state.user) {
    renderAuthForms(container);
  } else {
    renderDashboard(container);
  }
}

function renderAuthForms(container) {
  container.innerHTML = `
    <div class="container account-container">
      <div class="auth-wrapper">
        <div class="auth-tabs">
          <div class="auth-tab active" id="tab-login-btn">Login</div>
          <div class="auth-tab" id="tab-register-btn">Register</div>
        </div>
        
        <!-- Login Form -->
        <form class="auth-form active" id="login-form">
          <div class="form-group mb-15">
            <label for="login-email" style="display:block; margin-bottom:8px; font-weight:600; color:var(--text-heading);">Email Address <span class="required">*</span></label>
            <input type="email" id="login-email" required placeholder="yourname@gmail.com" style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
          </div>
          <div class="form-group mb-15">
            <label for="login-password" style="display:block; margin-bottom:8px; font-weight:600; color:var(--text-heading);">Password <span class="required">*</span></label>
            <input type="password" id="login-password" required placeholder="Password" style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
          </div>
          <button class="btn btn-primary w-full mt-20" type="submit">Log in</button>
        </form>

        <!-- Register Form -->
        <form class="auth-form" id="register-form">
          <div class="form-group mb-15">
            <label for="reg-name" style="display:block; margin-bottom:8px; font-weight:600; color:var(--text-heading);">Full Name <span class="required">*</span></label>
            <input type="text" id="reg-name" required placeholder="John Doe" style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
          </div>
          <div class="form-group mb-15">
            <label for="reg-email" style="display:block; margin-bottom:8px; font-weight:600; color:var(--text-heading);">Email Address <span class="required">*</span></label>
            <input type="email" id="reg-email" required placeholder="john@example.com" style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
          </div>
          <div class="form-group mb-15">
            <label for="reg-password" style="display:block; margin-bottom:8px; font-weight:600; color:var(--text-heading);">Password <span class="required">*</span></label>
            <input type="password" id="reg-password" required placeholder="Min 6 characters" minlength="6" style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
          </div>
          <button class="btn btn-primary w-full mt-20" type="submit">Register</button>
        </form>
      </div>
    </div>
  `;

  // Tab switching
  const tabLogin = document.getElementById('tab-login-btn');
  const tabRegister = document.getElementById('tab-register-btn');
  const formLogin = document.getElementById('login-form');
  const formRegister = document.getElementById('register-form');

  tabLogin.onclick = () => {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    formLogin.classList.add('active');
    formRegister.classList.remove('active');
  };

  tabRegister.onclick = () => {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    formRegister.classList.add('active');
    formLogin.classList.remove('active');
  };

  // Login Submit
  formLogin.onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const pass = document.getElementById('login-password').value;

    // Mock authentication (accept any login, check if user exists in localStorage, else mock one)
    let users = JSON.parse(localStorage.getItem('crozvox_all_users')) || [];
    let user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      // Create a default user profile if first time
      user = {
        name: email.split('@')[0].toUpperCase(),
        email: email,
        phone: '',
        address: '',
        city: '',
        zip: ''
      };
      users.push(user);
      localStorage.setItem('crozvox_all_users', JSON.stringify(users));
    }

    state.user = user;
    localStorage.setItem('crozvox_user', JSON.stringify(user));
    showToast('Logged in successfully!');
    renderAccountView();
  };

  // Register Submit
  formRegister.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const pass = document.getElementById('reg-password').value;

    let users = JSON.parse(localStorage.getItem('crozvox_all_users')) || [];
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (existing) {
      showToast('Email already registered! Please login.');
      tabLogin.click();
      return;
    }

    const user = {
      name: name,
      email: email,
      phone: '',
      address: '',
      city: '',
      zip: ''
    };

    users.push(user);
    localStorage.setItem('crozvox_all_users', JSON.stringify(users));
    state.user = user;
    localStorage.setItem('crozvox_user', JSON.stringify(user));
    showToast('Registration successful! Welcome to Crozvox.');
    renderAccountView();
  };
}

function renderDashboard(container) {
  const userOrders = state.orders.filter(o => o.email.toLowerCase() === state.user.email.toLowerCase());

  container.innerHTML = `
    <div class="container account-container mt-30">
      <div class="dashboard-layout">
        <!-- Sidebar -->
        <aside class="dashboard-sidebar">
          <div class="dashboard-user-info">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" alt="avatar" class="user-avatar">
            <h5>${state.user.name}</h5>
            <p>${state.user.email}</p>
          </div>
          <ul class="dashboard-menu">
            <li class="dashboard-menu-item active" id="menu-dash"><i data-lucide="layout-dashboard"></i> Dashboard</li>
            <li class="dashboard-menu-item" id="menu-profile"><i data-lucide="user"></i> Account Details</li>
            <li class="dashboard-menu-item" id="menu-orders"><i data-lucide="shopping-bag"></i> My Orders</li>
            <li class="dashboard-menu-item" id="menu-logout" style="color:var(--accent-red);"><i data-lucide="log-out" style="color:var(--accent-red);"></i> Log out</li>
          </ul>
        </aside>

        <!-- Content Panel -->
        <main class="dashboard-content">
          <!-- Dashboard Welcome Panel -->
          <div class="dashboard-panel active" id="panel-dash">
            <h3>Dashboard</h3>
            <p class="mt-20">Hello <strong>${state.user.name}</strong> (not <strong>${state.user.name}</strong>? <a href="javascript:void(0)" id="dash-logout-link" style="color:var(--primary); font-weight:600;">Log out</a>)</p>
            <p class="mt-15">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and profile details.</p>
            
            <div class="about-grid mt-30" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
              <div class="value-card" style="padding: 20px; text-align: center; background-color: var(--bg-light); cursor: pointer;" id="dash-card-orders">
                <i data-lucide="shopping-bag" class="val-icon text-green" style="margin: 0 auto 10px;"></i>
                <h4 style="font-size: 24px; margin-bottom: 5px;">${userOrders.length}</h4>
                <p style="font-size: 14px; margin: 0;">Total Orders</p>
              </div>
              <div class="value-card" style="padding: 20px; text-align: center; background-color: var(--bg-light); cursor: pointer;" id="dash-card-profile">
                <i data-lucide="user" class="val-icon text-blue" style="margin: 0 auto 10px;"></i>
                <h4 style="font-size: 16px; margin-bottom: 5px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${state.user.name}</h4>
                <p style="font-size: 14px; margin: 0;">Manage Profile</p>
              </div>
            </div>
          </div>

          <!-- Profile Info Edit Panel -->
          <div class="dashboard-panel" id="panel-profile">
            <h3>Account Details</h3>
            <form id="profile-edit-form" class="mt-20">
              <div class="form-grid">
                <div class="form-group span-2">
                  <label for="prof-name" style="display:block; margin-bottom:8px; font-weight:600; color:var(--text-heading);">Full Name <span class="required">*</span></label>
                  <input type="text" id="prof-name" required value="${state.user.name || ''}" style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
                </div>
                <div class="form-group">
                  <label for="prof-email" style="display:block; margin-bottom:8px; font-weight:600; color:var(--text-heading);">Email Address <span class="required">*</span></label>
                  <input type="email" id="prof-email" readonly value="${state.user.email || ''}" style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-sm); background-color:var(--bg-light); cursor:not-allowed;">
                </div>
                <div class="form-group">
                  <label for="prof-phone" style="display:block; margin-bottom:8px; font-weight:600; color:var(--text-heading);">Phone Number</label>
                  <input type="tel" id="prof-phone" value="${state.user.phone || ''}" placeholder="e.g. +1 555 1234" style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
                </div>
                <div class="form-group span-2">
                  <label for="prof-address" style="display:block; margin-bottom:8px; font-weight:600; color:var(--text-heading);">Shipping Address</label>
                  <input type="text" id="prof-address" value="${state.user.address || ''}" placeholder="House number and street name" style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
                </div>
                <div class="form-group">
                  <label for="prof-city" style="display:block; margin-bottom:8px; font-weight:600; color:var(--text-heading);">City</label>
                  <input type="text" id="prof-city" value="${state.user.city || ''}" placeholder="City name" style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
                </div>
                <div class="form-group">
                  <label for="prof-zip" style="display:block; margin-bottom:8px; font-weight:600; color:var(--text-heading);">ZIP / Postal Code</label>
                  <input type="text" id="prof-zip" value="${state.user.zip || ''}" placeholder="ZIP code" style="width:100%; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
                </div>
              </div>
              <button class="btn btn-primary mt-25" type="submit">Save Changes</button>
            </form>
          </div>

          <!-- Orders List Panel -->
          <div class="dashboard-panel" id="panel-orders">
            <h3>My Orders</h3>
            <div class="mt-20" style="overflow-x:auto;">
              ${userOrders.length === 0 ? `
                <div class="text-center" style="padding: 40px 0;">
                  <i data-lucide="shopping-bag" style="width:48px; height:48px; color:var(--text-body); margin-bottom:12px;"></i>
                  <p>You haven't placed any orders yet.</p>
                  <a href="#/shop" class="btn btn-primary btn-sm mt-15">Go to Shop</a>
                </div>
              ` : `
                <table class="orders-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Items</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${userOrders.map(order => `
                      <tr>
                        <td class="font-bold" style="color:var(--primary);">${order.orderId}</td>
                        <td>${order.date}</td>
                        <td><span class="status-badge status-${order.status || 'pending'}">${order.status || 'pending'}</span></td>
                        <td>${order.itemsCount} items</td>
                        <td class="font-bold" style="color:var(--text-heading);">$${parseFloat(order.total).toFixed(2)}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              `}
            </div>
          </div>
        </main>
      </div>
    </div>
  `;

  // Dashboard panel switching logic
  const menuDash = document.getElementById('menu-dash');
  const menuProfile = document.getElementById('menu-profile');
  const menuOrders = document.getElementById('menu-orders');
  const menuLogout = document.getElementById('menu-logout');
  const logoutLink = document.getElementById('dash-logout-link');

  const panelDash = document.getElementById('panel-dash');
  const panelProfile = document.getElementById('panel-profile');
  const panelOrders = document.getElementById('panel-orders');

  const menuItems = [menuDash, menuProfile, menuOrders];
  const panels = [panelDash, panelProfile, panelOrders];

  function activatePanel(menuItem, panel) {
    menuItems.forEach(item => item.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    menuItem.classList.add('active');
    panel.classList.add('active');
  }

  menuDash.onclick = () => activatePanel(menuDash, panelDash);
  menuProfile.onclick = () => activatePanel(menuProfile, panelProfile);
  menuOrders.onclick = () => activatePanel(menuOrders, panelOrders);

  // Quick cards in dashboard
  document.getElementById('dash-card-orders').onclick = () => menuOrders.click();
  document.getElementById('dash-card-profile').onclick = () => menuProfile.click();

  // Logout handlers
  const handleLogout = () => {
    state.user = null;
    localStorage.removeItem('crozvox_user');
    showToast('Logged out successfully.');
    renderAccountView();
  };

  menuLogout.onclick = handleLogout;
  if (logoutLink) logoutLink.onclick = handleLogout;

  // Profile form save
  const profileForm = document.getElementById('profile-edit-form');
  profileForm.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('prof-name').value.trim();
    const phone = document.getElementById('prof-phone').value.trim();
    const address = document.getElementById('prof-address').value.trim();
    const city = document.getElementById('prof-city').value.trim();
    const zip = document.getElementById('prof-zip').value.trim();

    // Update state
    state.user.name = name;
    state.user.phone = phone;
    state.user.address = address;
    state.user.city = city;
    state.user.zip = zip;

    // Persist in localStorage
    localStorage.setItem('crozvox_user', JSON.stringify(state.user));

    // Update in all users array too
    let users = JSON.parse(localStorage.getItem('crozvox_all_users')) || [];
    const idx = users.findIndex(u => u.email.toLowerCase() === state.user.email.toLowerCase());
    if (idx > -1) {
      users[idx] = state.user;
    } else {
      users.push(state.user);
    }
    localStorage.setItem('crozvox_all_users', JSON.stringify(users));

    showToast('Account details updated successfully!');
    renderAccountView();
  };

  lucide.createIcons();
}

// ----------------------------------------------------
// AUXILIARY COMMON ACTIONS & LOGIC
// ----------------------------------------------------

function addToCart(product, quantity = 1, size = "500g") {
  // Check if product size combination exists
  const existing = state.cart.find(item => item.product.id === product.id && item.size === size);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ product, quantity, size });
  }

  updateHeaderBadges();
  showToast(`Added ${quantity} x ${product.name} to Cart!`);
}

// Bind clicks on any generic product card dynamically to detail page transitions
function bindProductCardClicks() {
  document.querySelectorAll('.product-card').forEach(card => {
    // Only route to details if not clicking on "Add" button or wishlist
    card.onclick = (e) => {
      const isButton = e.target.closest('.add-to-cart-btn') || e.target.closest('.wishlist-btn');
      if (!isButton) {
        const id = card.getAttribute('data-id');
        if (id) location.hash = `#/product/${id}`;
      }
    };

    // Wishlist click handler
    const wishBtn = card.querySelector('.wishlist-btn');
    if (wishBtn) {
      const pid = parseInt(card.getAttribute('data-id'));
      wishBtn.onclick = (e) => {
        e.stopPropagation();
        wishBtn.classList.toggle('active');
        const index = state.wishlist.indexOf(pid);
        const icon = wishBtn.querySelector('svg');

        if (index > -1) {
          state.wishlist.splice(index, 1);
          icon.style.fill = 'none';
          icon.style.stroke = 'currentColor';
          showToast('Removed from Wishlist!');
        } else {
          state.wishlist.push(pid);
          icon.style.fill = '#FD6E6E';
          icon.style.stroke = '#FD6E6E';
          showToast('Added to Wishlist!');
        }
        updateHeaderBadges();
      };
    }

    // Add button click handler
    const addBtn = card.querySelector('.add-to-cart-btn');
    if (addBtn) {
      const pid = parseInt(card.getAttribute('data-id'));
      const product = PRODUCTS.find(p => p.id === pid);
      addBtn.onclick = (e) => {
        e.stopPropagation();
        addToCart(product, 1, "500g");
      };
    }
  });

  // Small list items clicks
  document.querySelectorAll('.small-product-item').forEach(item => {
    item.onclick = () => {
      const id = item.getAttribute('data-id');
      if (id) location.hash = `#/product/${id}`;
    };
  });
}

// Autocomplete search setup
function setupGlobalSearch() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchCatBtn = document.getElementById('search-cat-btn');
  const searchCatMenu = document.getElementById('search-cat-menu');
  const selectedCatSpan = document.getElementById('selected-cat');

  if (searchCatBtn && searchCatMenu) {
    searchCatBtn.onclick = (e) => {
      e.stopPropagation();
      searchCatMenu.style.display = searchCatMenu.style.display === 'block' ? 'none' : 'block';
    };

    document.addEventListener('click', () => {
      searchCatMenu.style.display = 'none';
    });

    searchCatMenu.querySelectorAll('li').forEach(li => {
      li.onclick = (e) => {
        selectedCatSpan.textContent = e.target.textContent;
      };
    });
  }

  if (searchInput && searchResults) {
    searchInput.oninput = (e) => {
      const val = e.target.value.toLowerCase().trim();
      if (val.length > 0) {
        searchResults.style.display = 'block';
        const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(val));
        
        if (filtered.length > 0) {
          searchResults.innerHTML = filtered.map(p => `
            <div class="search-item" data-id="${p.id}">${p.name}</div>
          `).join('');

          searchResults.querySelectorAll('.search-item').forEach(item => {
            item.onclick = () => {
              const pid = item.getAttribute('data-id');
              location.hash = `#/product/${pid}`;
              searchResults.style.display = 'none';
              searchInput.value = '';
            };
          });
        } else {
          searchResults.innerHTML = `<div class="search-item">No products found</div>`;
        }
      } else {
        searchResults.style.display = 'none';
      }
    };

    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
      }
    });
  }
}

// Deals countdown timer setup
function setupDealsTimer() {
  const countdownDuration = (2 * 24 * 60 * 60) + (14 * 60 * 60) + (35 * 60) + 59;
  let timeRemaining = countdownDuration;

  setInterval(() => {
    if (timeRemaining <= 0) timeRemaining = countdownDuration;
    
    const d = Math.floor(timeRemaining / (24 * 3600));
    const h = Math.floor((timeRemaining % (24 * 3600)) / 3600);
    const m = Math.floor((timeRemaining % 3600) / 60);
    const s = timeRemaining % 60;

    const daysVal = document.getElementById('days');
    const hoursVal = document.getElementById('hours');
    const minsVal = document.getElementById('mins');
    const secsVal = document.getElementById('secs');

    if (daysVal) daysVal.textContent = String(d).padStart(2, '0');
    if (hoursVal) hoursVal.textContent = String(h).padStart(2, '0');
    if (minsVal) minsVal.textContent = String(m).padStart(2, '0');
    if (secsVal) secsVal.textContent = String(s).padStart(2, '0');

    timeRemaining--;
  }, 1000);
}

// Create Toast Notification
function showToast(message) {
  const existing = document.querySelector('.toast-notif');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notif';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="toast-icon">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#253D4E',
    color: '#fff',
    padding: '16px 24px',
    borderRadius: '8px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: '1000',
    fontSize: '14px',
    fontWeight: '600',
    animation: 'slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards'
  });

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ----------------------------------------------------
// HTML TEMPLATE RENDERERS
// ----------------------------------------------------
function getProductCardHtml(p) {
  const isWish = state.wishlist.includes(p.id);
  return `
    <div class="product-card" data-id="${p.id}" data-cat="${p.category}">
      ${p.badge ? `<span class="card-badge badge-sale">${p.badge}</span>` : ''}
      <button class="wishlist-btn ${isWish ? 'active' : ''}">
        <i data-lucide="heart" style="${isWish ? 'fill: #FD6E6E; stroke: #FD6E6E;' : ''}"></i>
      </button>
      <div class="product-img-wrapper">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h4 class="product-name">${p.name}</h4>
        <div class="rating">
          <div class="stars">
            ${getStarsHtml(p.rating)}
          </div>
          <span class="rating-val">${p.rating}</span>
        </div>
        <div class="product-bottom">
          <div class="price-container">
            <span class="current-price">$${p.price.toFixed(2)}</span>
            ${p.oldPrice ? `<span class="old-price">$${p.oldPrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="add-to-cart-btn">
            <i data-lucide="shopping-cart"></i> Add
          </button>
        </div>
      </div>
    </div>
  `;
}

function getMostSellingCardHtml(p) {
  const progressPercent = Math.round((p.sold / p.total) * 100);
  return `
    <div class="selling-card" data-id="${p.id}">
      <span class="selling-badge badge-popular">Popular</span>
      <div class="selling-img-wrapper">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="selling-info">
        <span class="product-category">${p.category}</span>
        <h4 class="product-name">${p.name}</h4>
        <div class="rating">
          <div class="stars">
            ${getStarsHtml(p.rating)}
          </div>
          <span class="rating-val">${p.rating}</span>
        </div>
        <div class="selling-progress">
          <div class="progress-bar-label">
            <span>Sold: ${p.sold}/${p.total}</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${progressPercent}%;"></div>
          </div>
        </div>
        <div class="selling-bottom">
          <span class="current-price">$${p.price.toFixed(2)}</span>
          <button class="add-to-cart-btn"><i data-lucide="shopping-cart"></i> Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

function getSmallProductItemHtml(p) {
  return `
    <div class="small-product-item" data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}">
      <div class="item-details">
        <h6>${p.name}</h6>
        <div class="stars">
          ${getStarsHtml(p.rating)}
        </div>
        <span class="item-price">$${p.price.toFixed(2)}</span>
      </div>
    </div>
  `;
}

function getLargeDealCardHtml(p) {
  return `
    <div class="large-deal-card" data-id="${p.id}">
      <span class="card-badge badge-deal">Deal</span>
      <img src="${p.image}" alt="${p.name}" class="deal-img">
      <div class="deal-content">
        <h4 class="deal-title">${p.name}</h4>
        <div class="rating">
          <div class="stars">
            ${getStarsHtml(p.rating)}
          </div>
          <span class="rating-val">${p.rating}</span>
        </div>
        <div class="deal-prices">
          <span class="current-price">$${p.price.toFixed(2)}</span>
          <span class="old-price">$${p.oldPrice.toFixed(2)}</span>
        </div>
        
        <!-- Timer countdown -->
        <div class="countdown-timer">
          <div class="timer-unit">
            <span class="timer-val" id="days">02</span>
            <span class="timer-label">Days</span>
          </div>
          <div class="timer-unit">
            <span class="timer-val" id="hours">14</span>
            <span class="timer-label">Hours</span>
          </div>
          <div class="timer-unit">
            <span class="timer-val" id="mins">35</span>
            <span class="timer-label">Mins</span>
          </div>
          <div class="timer-unit">
            <span class="timer-val" id="secs">59</span>
            <span class="timer-label">Secs</span>
          </div>
        </div>

        <button class="add-to-cart-btn w-full mt-4"><i data-lucide="shopping-cart"></i> Add to Cart</button>
      </div>
    </div>
  `;
}

function getStarsHtml(rating) {
  let html = '';
  const fullStars = Math.floor(rating);
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      html += `<i data-lucide="star" class="star-fill"></i>`;
    } else {
      html += `<i data-lucide="star"></i>`;
    }
  }
  return html;
}
