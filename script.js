/* =========================================================
   AdiCart – Main JavaScript
   ========================================================= */

/* ---------- TRANSLATIONS ---------- */
const translations = {
  en: {
    searchPlaceholder:"Search for products, brands and more...",
    account:"Account", wishlist:"Wishlist", cart:"Cart",
    navCategories:"Categories", navDeals:"Today's Deals",
    navNewArrivals:"New Arrivals", navSellers:"Sell on AdiCart",
    navOffers:"Offers", navSupport:"Support",
    heroBadge1:"🔥 Limited Time", heroTitle1:"Today's Mega Deals",
    heroDesc1:"Up to 70% off on top brands. Don't miss out!",
    heroBtn1:"Shop Now", heroBtn2:"View All Deals",
    hrs:"Hrs", mins:"Mins", secs:"Secs",
    heroProduct1Name:"Samsung Galaxy S25",
    heroBadge2:"✨ New Season", heroTitle2:"New Arrivals",
    heroDesc2:"Explore latest trends in Fashion & Electronics.",
    heroBtn3:"Explore Now", heroBtn4:"View Catalogue",
    heroProduct2Name:"Trendy Collection",
    heroBadge3:"🏠 Home Fest", heroTitle3:"Dream Home Deals",
    heroDesc3:"Premium furniture at unbeatable prices.",
    heroBtn5:"Shop Home", heroBtn6:"Interior Ideas",
    heroProduct3Name:"Luxury Sofa Set",
    trust1Title:"Free Delivery", trust1Sub:"On orders above ₹499",
    trust2Title:"Easy Returns", trust2Sub:"7-day return policy",
    trust3Title:"Secure Payment", trust3Sub:"100% safe transactions",
    trust4Title:"24/7 Support", trust4Sub:"Always here to help",
    categoriesTitle:"Shop by Category", seeAll:"See All",
    catElectronics:"Electronics", catFashion:"Fashion",
    catHome:"Home", catBeauty:"Beauty", catSports:"Sports",
    catBooks:"Books", catToys:"Toys", catGrocery:"Grocery",
    productsTitle:"Featured Products",
    filterAll:"All", filterElectronics:"Electronics",
    filterFashion:"Fashion", filterHome:"Home", filterBeauty:"Beauty",
    addToCart:"Add to Cart", buyNow:"Buy Now", loadMore:"Load More Products",
    promoTitle:"Become an AdiCart Seller",
    promoDesc:"Reach millions of customers. Start free today!",
    promoBtn:"Start Selling",
    footerDesc:"Your trusted online shopping destination across India.",
    footerLinks:"Quick Links", footerAbout:"About Us",
    footerCareers:"Careers", footerPress:"Press",
    footerBlog:"Blog", footerAffiliate:"Affiliate",
    footerCustomer:"Customer Service", footerContact:"Contact Us",
    footerFaq:"FAQ", footerReturns:"Returns",
    footerTracking:"Track Order", footerPrivacy:"Privacy Policy",
    footerContactInfo:"Contact Info",
    footerAddress:"123 Commerce Street, New Delhi, India",
    footerAppStore:"App Store", footerPlayStore:"Play Store",
    footerCopy:"© 2025 AdiCart. All rights reserved.",
    cartTitle:"Your Cart", cartEmpty:"Your cart is empty!",
    cartShopNow:"Shop Now", cartTotal:"Total:",
    checkoutBtn:"Proceed to Checkout",
    toastAdded:"✓ Added to cart!", toastRemoved:"Removed from cart",
    toastWishlist:"Added to wishlist ♥",
  },
  hi: {
    searchPlaceholder:"उत्पाद, ब्रांड और अधिक खोजें...",
    account:"खाता", wishlist:"पसंदीदा", cart:"कार्ट",
    navCategories:"श्रेणियाँ", navDeals:"आज के सौदे",
    navNewArrivals:"नए आगमन", navSellers:"AdiCart पर बेचें",
    navOffers:"ऑफर", navSupport:"सहायता",
    heroBadge1:"🔥 सीमित समय", heroTitle1:"आज के मेगा सौदे",
    heroDesc1:"शीर्ष ब्रांड पर 70% तक की छूट। मौका मत चूकें!",
    heroBtn1:"अभी खरीदें", heroBtn2:"सभी सौदे देखें",
    hrs:"घंटे", mins:"मिनट", secs:"सेकंड",
    heroProduct1Name:"Samsung Galaxy S25",
    heroBadge2:"✨ नया सीज़न", heroTitle2:"नए आगमन",
    heroDesc2:"फैशन और इलेक्ट्रॉनिक्स में नवीनतम ट्रेंड देखें।",
    heroBtn3:"अभी एक्सप्लोर करें", heroBtn4:"कैटलॉग देखें",
    heroProduct2Name:"ट्रेंडी कलेक्शन",
    heroBadge3:"🏠 होम फेस्ट", heroTitle3:"ड्रीम होम सौदे",
    heroDesc3:"बेजोड़ कीमतों पर प्रीमियम फर्नीचर।",
    heroBtn5:"होम शॉप करें", heroBtn6:"इंटीरियर आइडिया",
    heroProduct3Name:"लग्जरी सोफा सेट",
    trust1Title:"मुफ्त डिलीवरी", trust1Sub:"₹499 से ऊपर के ऑर्डर पर",
    trust2Title:"आसान वापसी", trust2Sub:"7-दिन वापसी नीति",
    trust3Title:"सुरक्षित भुगतान", trust3Sub:"100% सुरक्षित लेनदेन",
    trust4Title:"24/7 सहायता", trust4Sub:"हमेशा मदद के लिए",
    categoriesTitle:"श्रेणी के अनुसार खरीदें", seeAll:"सभी देखें",
    catElectronics:"इलेक्ट्रॉनिक्स", catFashion:"फैशन",
    catHome:"घर", catBeauty:"सौंदर्य", catSports:"खेल",
    catBooks:"किताबें", catToys:"खिलौने", catGrocery:"किराना",
    productsTitle:"विशेष उत्पाद",
    filterAll:"सभी", filterElectronics:"इलेक्ट्रॉनिक्स",
    filterFashion:"फैशन", filterHome:"घर", filterBeauty:"सौंदर्य",
    addToCart:"कार्ट में जोड़ें", buyNow:"अभी खरीदें",
    loadMore:"और उत्पाद लोड करें",
    promoTitle:"AdiCart विक्रेता बनें",
    promoDesc:"लाखों ग्राहकों तक पहुंचें। आज मुफ्त में शुरू करें!",
    promoBtn:"बेचना शुरू करें",
    footerDesc:"भारत भर में आपका विश्वसनीय ऑनलाइन शॉपिंग गंतव्य।",
    footerLinks:"त्वरित लिंक", footerAbout:"हमारे बारे में",
    footerCareers:"करियर", footerPress:"प्रेस",
    footerBlog:"ब्लॉग", footerAffiliate:"एफिलिएट",
    footerCustomer:"ग्राहक सेवा", footerContact:"संपर्क करें",
    footerFaq:"FAQ", footerReturns:"वापसी",
    footerTracking:"ऑर्डर ट्रैक करें", footerPrivacy:"गोपनीयता नीति",
    footerContactInfo:"संपर्क जानकारी",
    footerAddress:"123 कॉमर्स स्ट्रीट, नई दिल्ली, भारत",
    footerAppStore:"ऐप स्टोर", footerPlayStore:"प्ले स्टोर",
    footerCopy:"© 2025 AdiCart. सर्वाधिकार सुरक्षित।",
    cartTitle:"आपकी कार्ट", cartEmpty:"आपकी कार्ट खाली है!",
    cartShopNow:"अभी खरीदें", cartTotal:"कुल:",
    checkoutBtn:"चेकआउट करें",
    toastAdded:"✓ कार्ट में जोड़ा गया!", toastRemoved:"कार्ट से हटाया गया",
    toastWishlist:"पसंदीदा में जोड़ा गया ♥",
  }
};

/* ---------- PRODUCTS DATA ---------- */
const products = [
  {id:1,name:"Samsung Galaxy S25 Ultra",nameHi:"Samsung Galaxy S25 Ultra",category:"electronics",price:89999,original:129999,rating:4.8,reviews:2847,discount:31,badge:"sale",emoji:"📱"},
  {id:2,name:"Apple AirPods Pro 3",nameHi:"Apple AirPods Pro 3",category:"electronics",price:24999,original:29999,rating:4.7,reviews:1923,discount:17,badge:"new",emoji:"🎧"},
  {id:3,name:"Sony 4K OLED TV 55\"",nameHi:"Sony 4K OLED TV 55\"",category:"electronics",price:89999,original:120000,rating:4.6,reviews:876,discount:25,badge:"sale",emoji:"📺"},
  {id:4,name:"Dell XPS 15 Laptop",nameHi:"Dell XPS 15 लैपटॉप",category:"electronics",price:119999,original:149999,rating:4.9,reviews:654,discount:20,badge:"hot",emoji:"💻"},
  {id:5,name:"Floral Summer Dress",nameHi:"फ्लोरल समर ड्रेस",category:"fashion",price:1299,original:2999,rating:4.5,reviews:3241,discount:57,badge:"sale",emoji:"👗"},
  {id:6,name:"Men's Slim Fit Blazer",nameHi:"मेन्स स्लिम फिट ब्लेजर",category:"fashion",price:2499,original:5999,rating:4.4,reviews:1567,discount:58,badge:"sale",emoji:"🧥"},
  {id:7,name:"Running Shoes Pro X",nameHi:"रनिंग शूज प्रो X",category:"fashion",price:3499,original:6999,rating:4.6,reviews:2109,discount:50,badge:"hot",emoji:"👟"},
  {id:8,name:"Designer Handbag",nameHi:"डिज़ाइनर हैंडबैग",category:"fashion",price:4999,original:12000,rating:4.3,reviews:876,discount:58,badge:"new",emoji:"👜"},
  {id:9,name:"Smart LED Desk Lamp",nameHi:"स्मार्ट LED डेस्क लैम्प",category:"home",price:1899,original:3499,rating:4.5,reviews:2341,discount:46,badge:"new",emoji:"💡"},
  {id:10,name:"Air Purifier HEPA",nameHi:"Air Purifier HEPA",category:"home",price:12999,original:19999,rating:4.7,reviews:1234,discount:35,badge:"sale",emoji:"🌬️"},
  {id:11,name:"Non-Stick Cookware Set",nameHi:"नॉन-स्टिक कुकवेयर सेट",category:"home",price:3999,original:7999,rating:4.6,reviews:3456,discount:50,badge:"hot",emoji:"🍳"},
  {id:12,name:"Memory Foam Pillow",nameHi:"मेमोरी फोम तकिया",category:"home",price:1499,original:2999,rating:4.4,reviews:987,discount:50,badge:"new",emoji:"🛏️"},
  {id:13,name:"Vitamin C Serum",nameHi:"विटामिन C सीरम",category:"beauty",price:699,original:1499,rating:4.6,reviews:5678,discount:53,badge:"hot",emoji:"✨"},
  {id:14,name:"Luxury Perfume Set",nameHi:"लग्जरी परफ्यूम सेट",category:"beauty",price:2999,original:5999,rating:4.5,reviews:1234,discount:50,badge:"sale",emoji:"🌸"},
  {id:15,name:"Hair Dryer Pro 2000W",nameHi:"हेयर ड्रायर प्रो 2000W",category:"beauty",price:2499,original:4999,rating:4.4,reviews:2109,discount:50,badge:"new",emoji:"💇"},
  {id:16,name:"Skincare Ritual Kit",nameHi:"स्किनकेयर रिचुअल किट",category:"beauty",price:1999,original:3999,rating:4.7,reviews:876,discount:50,badge:"hot",emoji:"🧴"},
];

/* ---------- STATE ---------- */
let currentLang = 'en';
let cart = JSON.parse(localStorage.getItem('adicart_cart') || '[]');
let currentFilter = 'all';
let heroInterval;
let currentSlide = 0;
let timerInterval;
let countdownEnd = Date.now() + 5.5*3600*1000;

/* ---------- DOM READY ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartBadge();
  initHeroSlider();
  initCountdown();
  initLangToggle();
  initHamburger();
  initCategoryScroll();
  initCartSidebar();
  initScrollTop();
  initFilters();
  initSearch();
  initCategoryCards();
  applyTranslations();
});

/* ---------- LANGUAGE ---------- */
function initLangToggle() {
  const toggle = document.getElementById('lang-toggle');
  const slider = document.getElementById('lang-slider');
  toggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    slider.style.background = currentLang === 'hi' ? '#ff6b35' : '#ff6b35';
    document.getElementById('lang-en').style.opacity = currentLang === 'en' ? '1' : '0.5';
    document.getElementById('lang-hi').style.opacity = currentLang === 'hi' ? '1' : '0.5';
    applyTranslations();
    renderProducts();
  });
  toggle.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' ') toggle.click(); });
}

function applyTranslations() {
  const t = translations[currentLang];
  // data-key elements
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT') el.placeholder = t[key];
      else el.textContent = t[key];
    }
  });
  // placeholder
  const si = document.getElementById('search-input');
  if (si) si.placeholder = t.searchPlaceholder;
  // filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const key = btn.getAttribute('data-key');
    if (key && t[key]) btn.textContent = t[key];
  });
}

/* ---------- HERO SLIDER ---------- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  function goTo(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }
  document.getElementById('slider-next').addEventListener('click', () => { clearInterval(heroInterval); goTo(currentSlide+1); startAuto(); });
  document.getElementById('slider-prev').addEventListener('click', () => { clearInterval(heroInterval); goTo(currentSlide-1); startAuto(); });
  dots.forEach(dot => dot.addEventListener('click', () => { clearInterval(heroInterval); goTo(+dot.dataset.slide); startAuto(); }));
  function startAuto() { heroInterval = setInterval(() => goTo(currentSlide+1), 4000); }
  startAuto();
}

/* ---------- COUNTDOWN ---------- */
function initCountdown() {
  function tick() {
    const diff = Math.max(0, countdownEnd - Date.now());
    const h = Math.floor(diff/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    const fmt = n => String(n).padStart(2,'0');
    const h1 = document.getElementById('h1');
    const m1 = document.getElementById('m1');
    const s1 = document.getElementById('s1');
    if(h1) h1.textContent = fmt(h);
    if(m1) m1.textContent = fmt(m);
    if(s1) s1.textContent = fmt(s);
  }
  tick();
  timerInterval = setInterval(tick, 1000);
}

/* ---------- HAMBURGER ---------- */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('navbar');
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.classList.toggle('active');
  });
}

/* ---------- CATEGORY SCROLL ---------- */
function initCategoryScroll() {
  const track = document.getElementById('categories-track');
  document.getElementById('cat-left').addEventListener('click', () => track.scrollBy({left:-200,behavior:'smooth'}));
  document.getElementById('cat-right').addEventListener('click', () => track.scrollBy({left:200,behavior:'smooth'}));
}

/* ---------- CART SIDEBAR ---------- */
function initCartSidebar() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  const cartLink = document.getElementById('cart-icon-link');
  const closeBtn = document.getElementById('cart-close');
  function openCart() { sidebar.classList.add('open'); overlay.classList.add('open'); renderCart(); }
  function closeCart() { sidebar.classList.remove('open'); overlay.classList.remove('open'); }
  cartLink.addEventListener('click', e => { e.preventDefault(); openCart(); });
  closeBtn.addEventListener('click', closeCart);
  overlay.addEventListener('click', closeCart);
  document.getElementById('checkout-btn').addEventListener('click', () => showToast('🎉 Checkout coming soon!', 'success'));
}

/* ---------- SCROLL TOP ---------- */
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
}

/* ---------- FILTERS ---------- */
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      filterProducts(currentFilter);
    });
  });
}

function filterProducts(filter) {
  document.querySelectorAll('.product-card').forEach(card => {
    const match = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('hidden', !match);
  });
}

/* ---------- SEARCH ---------- */
function initSearch() {
  const input = document.getElementById('search-input');
  const btn = document.getElementById('search-btn');
  function doSearch() {
    const q = input.value.toLowerCase().trim();
    if (!q) { filterProducts(currentFilter); return; }
    document.querySelectorAll('.product-card').forEach(card => {
      const title = card.querySelector('.product-title').textContent.toLowerCase();
      card.classList.toggle('hidden', !title.includes(q));
    });
  }
  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', e => { if(e.key === 'Enter') doSearch(); });
}

/* ---------- CATEGORY CARDS ---------- */
function initCategoryCards() {
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active-filter'));
      card.classList.add('active-filter');
      const filter = card.dataset.filter;
      currentFilter = filter;
      const filterBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
      if (filterBtn) { document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); filterBtn.classList.add('active'); }
      else { document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); document.querySelector('.filter-btn[data-filter="all"]').classList.add('active'); currentFilter = 'all'; }
      filterProducts(currentFilter);
      document.getElementById('products').scrollIntoView({behavior:'smooth'});
    });
  });
}

/* ---------- RENDER PRODUCTS ---------- */
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const t = translations[currentLang];
  grid.innerHTML = products.map(p => {
    const name = currentLang === 'hi' ? p.nameHi : p.name;
    const stars = renderStars(p.rating);
    const inWish = false;
    return `
    <div class="product-card" data-id="${p.id}" data-category="${p.category}" ${currentFilter !== 'all' && p.category !== currentFilter ? 'class="product-card hidden"' : ''}>
      <span class="product-badge badge-${p.badge}">${p.badge === 'sale' ? 'SALE' : p.badge === 'new' ? 'NEW' : 'HOT'}</span>
      <button class="product-wishlist" data-id="${p.id}" aria-label="Add to wishlist"><i class="fas fa-heart"></i></button>
      <div class="product-image">${p.emoji}</div>
      <div class="product-body">
        <span class="product-category">${t['cat'+p.category.charAt(0).toUpperCase()+p.category.slice(1)] || p.category}</span>
        <p class="product-title">${name}</p>
        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price">
          <span class="price-current">₹${p.price.toLocaleString('en-IN')}</span>
          <span class="price-original">₹${p.original.toLocaleString('en-IN')}</span>
          <span class="price-discount">${p.discount}% off</span>
        </div>
      </div>
      <div class="product-footer">
        <button class="btn-cart" data-id="${p.id}">${t.addToCart}</button>
        <button class="btn-buy" data-id="${p.id}">${t.buyNow}</button>
      </div>
    </div>`;
  }).join('');

  // rebind events
  grid.querySelectorAll('.btn-cart').forEach(btn => btn.addEventListener('click', () => addToCart(+btn.dataset.id)));
  grid.querySelectorAll('.btn-buy').forEach(btn => btn.addEventListener('click', () => { addToCart(+btn.dataset.id); showToast('🛍️ Proceeding to checkout...','success'); }));
  grid.querySelectorAll('.product-wishlist').forEach(btn => btn.addEventListener('click', () => { btn.classList.toggle('active'); showToast(translations[currentLang].toastWishlist, 'success'); }));

  // Load More
  document.getElementById('load-more-btn').addEventListener('click', () => showToast('More products coming soon!','success'));
}

function renderStars(rating) {
  let s = '';
  for(let i=1;i<=5;i++) {
    if(i<=Math.floor(rating)) s += '★';
    else if(i-0.5<=rating) s += '⭐';
    else s += '☆';
  }
  return s;
}

/* ---------- CART LOGIC ---------- */
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({...product, qty:1});
  saveCart();
  updateCartBadge();
  showToast(translations[currentLang].toastAdded, 'success');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartBadge();
  renderCart();
  showToast(translations[currentLang].toastRemoved);
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartBadge();
  renderCart();
}

function saveCart() { localStorage.setItem('adicart_cart', JSON.stringify(cart)); }

function updateCartBadge() {
  const total = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cart-badge').textContent = total;
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const empty = document.getElementById('cart-empty');
  const footer = document.getElementById('cart-footer');
  const t = translations[currentLang];
  if (cart.length === 0) {
    empty.style.display = 'flex';
    footer.style.display = 'none';
    container.innerHTML = '';
    container.appendChild(empty);
    return;
  }
  empty.style.display = 'none';
  footer.style.display = 'block';
  container.innerHTML = cart.map(item => {
    const name = currentLang === 'hi' ? item.nameHi : item.name;
    return `
    <div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div class="cart-item-info">
        <p class="cart-item-name">${name}</p>
        <p class="cart-item-price">₹${(item.price*item.qty).toLocaleString('en-IN')}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
    </div>`;
  }).join('');
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  document.getElementById('cart-total-price').textContent = '₹'+total.toLocaleString('en-IN');
}

/* ---------- TOAST ---------- */
function showToast(msg, type='') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast' + (type ? ' '+type : '');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
