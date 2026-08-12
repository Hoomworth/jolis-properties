// Sanity CMS Configuration
const SANITY_PROJECT_ID = "rcaapojl"; // Replace with your Sanity Project ID
const SANITY_DATASET = "production";        // Replace with your dataset (usually production)

// Properties Database
const PROPERTIES_DATA = [
  {
    id: 1,
    title: "Alpha Garden City Resort (500 SQM)",
    type: "resort",
    location: "Academy, Ibadan",
    price: 3500000,
    priceLabel: "₦3,500,000",
    size: "500 SQM Plot",
    titleDoc: "Pre-Launch Offer",
    images: ["images/property 1.jpeg"],
    features: ["Golf, Spa, Gym & Yoga Access", "10-15 Fruit Trees Included", "Price rises to ₦6M in 16 days"],
    badge: "Pre-Launch Promo",
    description: `🚨 PRE-LAUNCH OFFER 🚨\n\nTime is ticking… and so is the price.\n\nAlpha Garden City Resort PRE-LAUNCH OFFER IS ENDING SOON, and this is the lowest price you’ll ever see.\n\nRight now:\n📍 500SQM — ₦3.5M\n📍 1 Acre — ₦12.5M\n+ 1 Plot FREE and 10-15 Fruit Trees\n\n⚠️ In the next 16 Days:\n📍 500SQM — ₦6M\n📍 1 Acre — ₦18M\n\nWhy pay millions more for the same investment?\n\nImagine owning a resort destination with golf course, wellness spa, yoga hall, gym studio and orchard garden.\n\nLocation: Olomi Olunde Road, Academy, Ibadan.\n\nSecure your plot today and save some millions.`
  },
  {
    id: 2,
    title: "Alpha Garden City Resort (1 Acre)",
    type: "resort",
    location: "Academy, Ibadan",
    price: 12500000,
    priceLabel: "₦12,500,000",
    size: "1 Acre (6 Plots)",
    titleDoc: "+1 Plot FREE (Total 7)",
    images: ["images/property 2.jpeg"],
    features: ["Get 1 Extra Plot FREE", "10-15 Fruit Trees Included", "Price rises to ₦18M in 16 days"],
    badge: "Resort Package",
    description: `🚨 PRE-LAUNCH OFFER 🚨\n\nTime is ticking… and so is the price.\n\nAlpha Garden City Resort PRE-LAUNCH OFFER IS ENDING SOON, and this is the lowest price you’ll ever see.\n\nRight now:\n📍 500SQM — ₦3.5M\n📍 1 Acre — ₦12.5M\n+ 1 Plot FREE and 10-15 Fruit Trees\n\n⚠️ In the next 16 Days:\n📍 500SQM — ₦6M\n📍 1 Acre — ₦18M\n\nWhy pay millions more for the same investment?\n\nImagine owning a resort destination with golf course, wellness spa, yoga hall, gym studio and orchard garden.\n\nLocation: Olomi Olunde Road, Academy, Ibadan.\n\nSecure your plot today and save some millions.`
  },
  {
    id: 3,
    title: "Emerald Advantage Plots",
    type: "land",
    location: "Ogombo, Ajah, Lagos",
    price: 85000000,
    priceLabel: "₦85,000,000",
    size: "300 SQM",
    titleDoc: "Government Allocation C of O",
    images: ["images/property 3.jpeg"],
    features: ["Buy & Build Estate", "₦20M Initial Deposit", "Saves ₦15M (Pre-Launch price)"],
    badge: "Pre-Launch Offer",
    description: `🚨 PRE-LAUNCH OFFER 🚨\n\nSome opportunities reward patience. Others reward speed.\n\nThe Emerald Advantage Plots was created for those who understand that the biggest gains come from getting in before everyone else.\n\nFor a limited time, secure a premium 300sqm plot in Ogombo at the exclusive pre-launch price of ₦85M instead of ₦100M, with an initial deposit of just ₦20M.\n\nThis is more than land, it’s an opportunity to secure your place in a strategically positioned Buy & Build Estate before demand rises and prices adjust.\n\nWith limited plots available and the offer ending on July 3rd, the advantage won’t be available for long.\n\nToday’s price is a privilege. Tomorrow’s price is a consequence.\n\n✔ Buy & Build Estate\n✔ 300sqm Premium Plots\n✔ Government Allocation C of O\n✔ ₦85M Pre-launch Price\n✔ ₦20M Initial Deposit\n\nThe plots are limited, The timeline is short. The question is: will you secure yours before the opportunity slips away?`
  },
  {
    id: 4,
    title: "Kingsway Estate (250 SQM)",
    type: "land",
    location: "Ala-Ijebu, Ogun State",
    price: 3500000,
    priceLabel: "₦3,500,000",
    size: "250 SQM",
    titleDoc: "Certificate of Occupancy (C of O)",
    images: [
      "images/property 5 (1).jpeg",
      "images/property 5 (2).jpeg",
      "images/property 5 (3).jpeg"
    ],
    features: ["Fencing & Gatehouse", "Good Road Network", "9-Month No-Interest Plan", "Strategic Growth Area"],
    badge: "Pre-Launch Price",
    description: `Looking to secure your piece of the future?\n*Kingsway Estate* is still selling at *Pre-Launch* price🏡✨\n\nMake the best of the second quarter by positioning yourself early for growth in the next in-demand locations.\n\n📍 Off Epe/ Ijebu expressway, Ogun State.\n\nDesigned for commercial and residential use, and for forward thinkers, KINGSWAY ESTATE offers premium DRY land in a strategic location.\n\nPrices & Sizes:\n▪️ 500sqm - ₦7M\n▪️ 250sqm - ₦3.5M\n\nFlexible Payment Option:\nA 9-month no-interest flexible payment plan is available with a ₦1,000,000 initial deposit.\n\nEstate infrastructure:\n✅ Certificate of Occupancy (C of O)\n✅ Good Road Network\n✅ Fencing and Gatehouse\n✅ Strategic Growth Location\n\nThis is your opportunity to secure a prime location in Ogun State's expanding corridor.\n\nSend us a message now to reserve your plot of Kingsway Estate.`
  },
  {
    id: 5,
    title: "Kingsway Estate (500 SQM)",
    type: "land",
    location: "Ala-Ijebu, Ogun State",
    price: 7000000,
    priceLabel: "₦7,000,000",
    size: "500 SQM",
    titleDoc: "Certificate of Occupancy (C of O)",
    images: [
      "images/property 5 (1).jpeg",
      "images/property 5 (2).jpeg",
      "images/property 5 (3).jpeg"
    ],
    features: ["Fencing & Gatehouse", "Good Road Network", "9-Month No-Interest Plan", "Strategic Growth Area"],
    badge: "Pre-Launch Price",
    description: `Looking to secure your piece of the future?\n*Kingsway Estate* is still selling at *Pre-Launch* price🏡✨\n\nMake the best of the second quarter by positioning yourself early for growth in the next in-demand locations.\n\n📍 Off Epe/ Ijebu expressway, Ogun State.\n\nDesigned for commercial and residential use, and for forward thinkers, KINGSWAY ESTATE offers premium DRY land in a strategic location.\n\nPrices & Sizes:\n▪️ 500sqm - ₦7M\n▪️ 250sqm - ₦3.5M\n\nFlexible Payment Option:\nA 9-month no-interest flexible payment plan is available with a ₦1,000,000 initial deposit.\n\nEstate infrastructure:\n✅ Certificate of Occupancy (C of O)\n✅ Good Road Network\n✅ Fencing and Gatehouse\n✅ Strategic Growth Location\n\nThis is your opportunity to secure a prime location in Ogun State's expanding corridor.\n\nSend us a message now to reserve your plot of Kingsway Estate.`
  },
  {
    id: 6,
    title: "Ayhomes Luxury Villa (Commercial)",
    type: "commercial",
    location: "Omole, Mainland, Lagos",
    price: 700000000,
    priceLabel: "₦700,000,000",
    size: "1000 SQM",
    titleDoc: "Governor's Consent: 189/GC",
    images: ["images/property 6.jpeg"],
    features: ["Well-planned road network", "Efficient drainage system", "Enriching recreational areas", "Consistent electricity supply", "Secure gated community"],
    badge: "Commercial Plot",
    description: `AYHOMES LUXURY VILLA\n(COMMERCIAL PLOT)\n\nLUXURY REDEFINED\n\nLooking for a lucrative investment opportunity? look no further, AyHomes Investments LTD presents an exclusive landed property right here in Lagos State.\n\nWhether you’re looking for a luxurious family home or a high-potential investment, AyHomes Luxury Villa is your ideal choice. Seize this opportunity to own a prestigious property in the heart of Lagos' thriving real estate market.\n\nPrice:\nCommercial 1000SQM - ₦700M\nInitial Deposit: ₦50M\n\nTitle Document:\nGovernor's Consent (189/189/27GC)\n\nOutstanding Amenities:\n• Well-planned road network\n• Efficient drainage system\n• Enriching recreational areas\n• Consistent electricity supply\n• Securely fenced and gated community\n\nNeighborhood landmarks:\n• Ikeja City Mall\n• Westgate Lifecare Mall\n• De Casa Luxuria\n• Darrell Suites\n• Magodo\n• Omole Phase 2`
  }
];

// App Configurations
const WHATSAPP_NUMBER = "2347040305228";

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Hamburger Toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Close mobile menu on clicking any link
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }

  // Listing Grid & Filtering Logic
  const listingGrid = document.getElementById("properties-grid");
  const searchInput = document.getElementById("search-input");
  const locationFilter = document.getElementById("location-filter");
  const priceFilter = document.getElementById("price-filter");
  const categoryContainer = document.getElementById("category-scroll");

  let currentFilters = {
    search: "",
    category: "all",
    location: "all",
    priceRange: "all"
  };

  // Inject dynamic Real Estate Listing ItemList Schema (JSON-LD) for SEO indexing
  function injectSchemaData(properties) {
    let schemaId = "properties-schema";
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = schemaId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    
    const itemListElement = properties.map((prop, idx) => {
      return {
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": prop.type === "land" ? "Place" : "SingleFamilyResidence",
          "name": prop.title,
          "description": prop.features.join(", "),
          "image": prop.images[0],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": prop.location.split(",")[0].trim(),
            "addressRegion": prop.location.split(",")[1]?.trim() || "Lagos",
            "addressCountry": "NG"
          },
          "offers": {
            "@type": "Offer",
            "price": prop.price.toString(),
            "priceCurrency": "NGN",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-07-04"
          }
        }
      };
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "numberOfItems": properties.length,
      "itemListElement": itemListElement
    };

    scriptTag.textContent = JSON.stringify(schema, null, 2);
  }

  // Create Modal element dynamically if it doesn't exist
  let modalOverlay = document.getElementById("property-modal-overlay");
  if (!modalOverlay) {
    modalOverlay = document.createElement("div");
    modalOverlay.id = "property-modal-overlay";
    modalOverlay.className = "modal-overlay";
    document.body.appendChild(modalOverlay);
  }

  let autoPlayInterval = null;

  function openPropertyModal(prop) {
    const waText = encodeURIComponent(
      `Hello Jolis Properties, I am interested in inquiring about "${prop.title}" in ${prop.location} (listed at ${prop.priceLabel}) on your website. Please share more details.`
    );
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

    const featuresHtml = prop.features
      .map(feat => `<li>${feat}</li>`)
      .join("");

    // Check if property has multiple images
    const hasMultipleImages = prop.images && prop.images.length > 1;
    let heroHtml = "";

    if (hasMultipleImages) {
      heroHtml = `
        <div class="modal-carousel" id="modal-carousel-container">
          ${prop.images.map((img, index) => `
            <img src="${img}" class="carousel-slide ${index === 0 ? 'active' : ''}" alt="${prop.title} - Image ${index + 1}">
          `).join("")}
          <button class="carousel-prev" id="carousel-prev-btn" aria-label="Previous image">&lt;</button>
          <button class="carousel-next" id="carousel-next-btn" aria-label="Next image">&gt;</button>
          <div class="carousel-dots">
            ${prop.images.map((_, index) => `
              <span class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
            `).join("")}
          </div>
        </div>
      `;
    } else {
      heroHtml = `<img src="${prop.images[0]}" alt="${prop.title}">`;
    }

    modalOverlay.innerHTML = `
      <div class="modal-container">
        <button class="modal-close" id="modal-close-btn" aria-label="Close modal">&times;</button>
        <div class="modal-hero">
          ${heroHtml}
        </div>
        <div class="modal-body">
          <div class="modal-badge-wrapper">
            <span class="property-badge">${prop.badge || "Hot Deal"}</span>
            <span class="property-type-tag" style="position: static; transform: none; display: inline-block;">${prop.type}</span>
          </div>
          <h2>${prop.title}</h2>
          <div class="modal-location">
            <span>📍</span> ${prop.location}
          </div>
          
          <div class="modal-meta-grid">
            <div class="modal-meta-item">
              <span class="modal-meta-label">Price</span>
              <span class="modal-meta-val" style="color: var(--primary-color);">${prop.priceLabel}</span>
            </div>
            <div class="modal-meta-item">
              <span class="modal-meta-label">Size</span>
              <span class="modal-meta-val">${prop.size}</span>
            </div>
            <div class="modal-meta-item">
              <span class="modal-meta-label">Document</span>
              <span class="modal-meta-val">${prop.titleDoc}</span>
            </div>
          </div>

          <div class="modal-description">
            ${prop.description}
          </div>

          <ul class="modal-features-list">
            ${featuresHtml}
          </ul>

          <a href="${waUrl}" target="_blank" rel="noopener" class="modal-cta-btn btn-primary wa-color" style="display: flex; gap: 8px; justify-content: center; align-items: center; text-decoration: none; color: var(--white); background: #25d366; font-weight: 700; border-radius: 8px; padding: 14px;">
            <span>Book Inspection via WhatsApp</span>
          </a>
        </div>
      </div>
    `;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal

    // Add slider controls if multiple images exist
    if (hasMultipleImages) {
      let currentSlide = 0;
      const slides = modalOverlay.querySelectorAll(".carousel-slide");
      const dots = modalOverlay.querySelectorAll(".carousel-dot");
      const totalSlides = slides.length;

      const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        
        currentSlide = (index + totalSlides) % totalSlides;
        
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
      };

      const prevBtn = modalOverlay.querySelector("#carousel-prev-btn");
      const nextBtn = modalOverlay.querySelector("#carousel-next-btn");

      prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
      nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

      dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
          const idx = parseInt(e.target.dataset.index);
          showSlide(idx);
        });
      });

      // Autoplay slider every 5 seconds
      autoPlayInterval = setInterval(() => {
        showSlide(currentSlide + 1);
      }, 5000);
    }

    // Modal closing logic
    const closeBtn = modalOverlay.querySelector("#modal-close-btn");
    closeBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  function closeModal() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
    modalOverlay.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  }

  // Render properties to HTML
  function renderProperties(properties) {
    if (!listingGrid) return;
    
    listingGrid.innerHTML = "";
    
    // Inject/update SEO schema data dynamically
    injectSchemaData(properties);

    if (properties.length === 0) {
      listingGrid.innerHTML = `
        <div class="no-results">
          <h3>No properties match your selection</h3>
          <p>Try adjusting your filters, search terms, or check back later for new inventory.</p>
        </div>
      `;
      return;
    }

    properties.forEach(prop => {
      // Build dynamic WhatsApp text
      const waText = encodeURIComponent(
        `Hello Jolis Properties, I am interested in inquiring about "${prop.title}" in ${prop.location} (listed at ${prop.priceLabel}) on your website. Please share more details.`
      );
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

      // Build features list html
      const featuresHtml = prop.features
        .map(feat => `<li>• ${feat}</li>`)
        .join("");

      // Render Card
      const card = document.createElement("div");
      card.className = "property-card";
      card.style.cursor = "pointer";
      
      const badgeText = prop.badge || "Hot Deal";
      const badgeClass = badgeText.toLowerCase().includes("luxury") || badgeText.toLowerCase().includes("best") ? "property-badge accent" : "property-badge";

      card.innerHTML = `
        <div class="property-img-wrapper">
          <img class="property-img" src="${prop.images[0]}" alt="${prop.title}" loading="lazy">
          <span class="${badgeClass}">${badgeText}</span>
          <span class="property-type-tag">${prop.type}</span>
        </div>
        <div class="property-info">
          <div class="property-price">${prop.priceLabel}</div>
          <h3 class="property-title">${prop.title}</h3>
          <div class="property-location">
            <span class="location-icon">📍</span> ${prop.location}
          </div>
          <div class="property-details">
            <div class="detail-item">
              <span class="detail-label">Size</span>
              <span class="detail-val">${prop.size}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Type</span>
              <span class="detail-val" style="text-transform: capitalize;">${prop.type}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Location</span>
              <span class="detail-val">${prop.location.split(",")[0]}</span>
            </div>
          </div>
          <div class="property-doc">
            <span>📄</span> Title: ${prop.titleDoc}
          </div>
          <a href="${waUrl}" target="_blank" rel="noopener" class="property-cta">
            Inquire on WhatsApp
          </a>
        </div>
      `;

      // Open details modal on clicking the card (except the WhatsApp CTA)
      card.addEventListener("click", (e) => {
        if (e.target.closest(".property-cta")) {
          return; // Allow WhatsApp button click to function normally
        }
        openPropertyModal(prop);
      });

      listingGrid.appendChild(card);
    });
  }

  // Filter evaluation logic
  function applyFilters() {
    let filtered = activePropertiesList.filter(prop => {
      // 1. Search Query filter (matches title and location)
      const matchesSearch = 
        prop.title.toLowerCase().includes(currentFilters.search.toLowerCase()) ||
        prop.location.toLowerCase().includes(currentFilters.search.toLowerCase());
      
      // 2. Category Filter
      const matchesCategory = 
        currentFilters.category === "all" || 
        prop.type === currentFilters.category;

      // 3. Location Dropdown Filter
      let matchesLocation = true;
      if (currentFilters.location !== "all") {
        matchesLocation = prop.location.toLowerCase().includes(currentFilters.location.toLowerCase());
      }

      // 4. Price Bracket Filter
      let matchesPrice = true;
      if (currentFilters.priceRange !== "all") {
        const price = prop.price;
        if (currentFilters.priceRange === "under-20m") {
          matchesPrice = price < 20000000;
        } else if (currentFilters.priceRange === "20m-50m") {
          matchesPrice = price >= 20000000 && price <= 50000000;
        } else if (currentFilters.priceRange === "50m-150m") {
          matchesPrice = price >= 50000000 && price <= 150000000;
        } else if (currentFilters.priceRange === "over-150m") {
          matchesPrice = price > 150000000;
        }
      }

      return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
    });

    renderProperties(filtered);
  }

  // Category Selector event handling
  if (categoryContainer) {
    categoryContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".category-btn");
      if (!btn) return;

      // Remove active class from sibling buttons
      categoryContainer.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentFilters.category = btn.dataset.category;
      applyFilters();
    });
  }

  // Search input events
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentFilters.search = e.target.value;
      applyFilters();
    });
  }

  // Select filters events
  if (locationFilter) {
    locationFilter.addEventListener("change", (e) => {
      currentFilters.location = e.target.value;
      applyFilters();
    });
  }

  if (priceFilter) {
    priceFilter.addEventListener("change", (e) => {
      currentFilters.priceRange = e.target.value;
      applyFilters();
    });
  }

  // Set up properties list state
  let activePropertiesList = PROPERTIES_DATA;

  // Fetch properties from Sanity or use static fallback
  async function loadProperties() {
    if (SANITY_PROJECT_ID === "YOUR_PROJECT_ID") {
      console.log("Sanity Project ID is at default placeholder. Using static fallback data.");
      activePropertiesList = PROPERTIES_DATA;
      renderProperties(activePropertiesList);
      return;
    }

    const query = encodeURIComponent(`*[_type == "property"]{
      id,
      title,
      type,
      location,
      price,
      priceLabel,
      size,
      titleDoc,
      badge,
      description,
      features,
      "images": images[].asset->url
    }`);
    
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${query}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      
      if (result.result && result.result.length > 0) {
        // Map/sanitize properties from Sanity structure
        activePropertiesList = result.result.map((prop, idx) => ({
          id: prop.id || idx + 1,
          title: prop.title,
          type: prop.type,
          location: prop.location,
          price: prop.price,
          priceLabel: prop.price ? `₦${Number(prop.price).toLocaleString()}` : (prop.priceLabel || "Price on Call"),
          size: prop.size,
          titleDoc: prop.titleDoc,
          badge: prop.badge || "Hot Deal",
          description: prop.description,
          features: prop.features || [],
          images: prop.images && prop.images.length > 0 
            ? prop.images.map(imgUrl => `${imgUrl}?w=800&auto=format`)
            : ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6"]
        }));
        
        console.log("Successfully fetched properties from Sanity.io CDN.");
      } else {
        console.log("Sanity query returned empty. Using static fallback data.");
        activePropertiesList = PROPERTIES_DATA;
      }
    } catch (error) {
      console.error("Failed to fetch from Sanity API, falling back to static database:", error);
      activePropertiesList = PROPERTIES_DATA;
    }
    renderProperties(activePropertiesList);
  }

  // Initialize view by loading properties
  loadProperties();

  // ===== SANITY BLOG INTEGRATION MODULE =====
  let activeBlogPosts = [];

  const articleOverlay = document.getElementById("article-modal-overlay");
  const articleContent = document.getElementById("article-modal-content");
  const articleBackBtn = document.getElementById("article-back-btn");
  const articleCloseBtn = document.getElementById("article-close-btn");
  const blogGrid = document.getElementById("blog-grid");

  // Sanity Image URL Helper
  function getSanityImageUrl(imageObj) {
    if (!imageObj) return '';
    if (typeof imageObj === 'string') return imageObj;
    if (imageObj.url) return imageObj.url;
    if (imageObj.asset && imageObj.asset.url) return imageObj.asset.url;

    const ref = imageObj.asset ? imageObj.asset._ref : imageObj._ref;
    if (!ref) return '';

    const parts = ref.split('-');
    if (parts.length >= 4 && parts[0] === 'image') {
      const assetId = parts[1];
      const dimensions = parts[2];
      const extension = parts[3];
      return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${assetId}-${dimensions}.${extension}`;
    }
    return '';
  }

  // Format Date (e.g. "August 12, 2026")
  function formatPublishedDate(dateStr) {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return '';
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      return dateStr;
    }
  }

  // HTML Entity Escaper
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Extract Short Excerpt from Portable Text Body
  function generateExcerpt(bodyBlocks, maxLength = 160) {
    if (!bodyBlocks || !Array.isArray(bodyBlocks)) return '';

    let fullText = '';
    for (const block of bodyBlocks) {
      if (block && block._type === 'block' && block.children) {
        for (const child of block.children) {
          if (child && child.text) {
            fullText += child.text + ' ';
          }
        }
      }
      if (fullText.length >= maxLength * 1.5) break;
    }

    fullText = fullText.trim().replace(/\s+/g, ' ');
    if (!fullText) return 'Read the complete article for real estate market insights...';
    if (fullText.length <= maxLength) return fullText;

    return fullText.slice(0, maxLength).trim() + '...';
  }

  // Portable Text Block Children Renderer (Inline Marks & Links)
  function renderBlockChildren(block) {
    if (!block.children || !Array.isArray(block.children)) {
      return '';
    }

    const markDefsMap = {};
    if (block.markDefs && Array.isArray(block.markDefs)) {
      block.markDefs.forEach(def => {
        if (def && def._key) {
          markDefsMap[def._key] = def;
        }
      });
    }

    return block.children.map(child => {
      if (!child || typeof child.text !== 'string') return '';
      let text = escapeHtml(child.text).replace(/\n/g, '<br>');

      if (child.marks && Array.isArray(child.marks) && child.marks.length > 0) {
        child.marks.forEach(markKey => {
          if (markKey === 'strong') {
            text = `<strong>${text}</strong>`;
          } else if (markKey === 'em') {
            text = `<em>${text}</em>`;
          } else if (markKey === 'underline') {
            text = `<u>${text}</u>`;
          } else if (markKey === 'code') {
            text = `<code>${text}</code>`;
          } else if (markKey === 'strike-through') {
            text = `<s>${text}</s>`;
          } else if (markDefsMap[markKey]) {
            const markDef = markDefsMap[markKey];
            if (markDef._type === 'link' && markDef.href) {
              const safeHref = escapeHtml(markDef.href);
              text = `<a href="${safeHref}" target="_blank" rel="noopener noreferrer">${text}</a>`;
            }
          }
        });
      }
      return text;
    }).join('');
  }

  // Complete Portable Text Body Renderer
  function portableTextToHTML(blocks) {
    if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
      return '<p>No content available.</p>';
    }

    let html = '';
    let inList = null; // 'bullet' or 'number'

    function closeListIfNeeded(nextListItem) {
      if (inList && inList !== nextListItem) {
        if (inList === 'bullet') {
          html += '</ul>';
        } else if (inList === 'number') {
          html += '</ol>';
        }
        inList = null;
      }
    }

    blocks.forEach(block => {
      if (!block) return;

      // Embedded Images in Portable Text
      if (block._type === 'image') {
        closeListIfNeeded(null);
        const imgUrl = getSanityImageUrl(block);
        if (imgUrl) {
          html += `<figure class="blog-body-image"><img src="${escapeHtml(imgUrl)}" alt="${escapeHtml(block.caption || '')}" loading="lazy">${block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ''}</figure>`;
        }
        return;
      }

      if (block._type !== 'block') {
        return;
      }

      const listItem = block.listItem; // 'bullet' or 'number' or undefined

      // Handle lists
      if (listItem) {
        if (inList !== listItem) {
          closeListIfNeeded(null);
          if (listItem === 'bullet') {
            html += '<ul>';
          } else if (listItem === 'number') {
            html += '<ol>';
          }
          inList = listItem;
        }
        const itemContent = renderBlockChildren(block);
        html += `<li>${itemContent}</li>`;
        return;
      } else {
        closeListIfNeeded(null);
      }

      // Handle regular blocks & headings
      const style = block.style || 'normal';
      const content = renderBlockChildren(block);

      if (!content.trim() && style === 'normal') {
        return;
      }

      switch (style) {
        case 'h1':
          html += `<h1>${content}</h1>`;
          break;
        case 'h2':
          html += `<h2>${content}</h2>`;
          break;
        case 'h3':
          html += `<h3>${content}</h3>`;
          break;
        case 'h4':
          html += `<h4>${content}</h4>`;
          break;
        case 'h5':
          html += `<h5>${content}</h5>`;
          break;
        case 'h6':
          html += `<h6>${content}</h6>`;
          break;
        case 'blockquote':
          html += `<blockquote>${content}</blockquote>`;
          break;
        default:
          html += `<p>${content}</p>`;
          break;
      }
    });

    closeListIfNeeded(null);
    return html;
  }

  // Fetch Published Blog Posts from Sanity using GROQ
  async function loadBlogPosts() {
    if (!blogGrid) return;

    blogGrid.innerHTML = `
      <div class="blog-empty-state" style="grid-column: 1 / -1; padding: 40px;">
        <div class="spinner" style="border-top-color: var(--primary-color); width: 36px; height: 36px; margin: 0 auto 16px;"></div>
        <p>Loading real estate insights...</p>
      </div>
    `;

    const query = encodeURIComponent(`*[_type == "post" && defined(publishedAt) && publishedAt <= now()] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      "featuredImageUrl": featuredImage.asset->url,
      featuredImage,
      body,
      publishedAt
    }`);

    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${query}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch blog posts from Sanity");
      const result = await response.json();

      if (result.result && Array.isArray(result.result)) {
        activeBlogPosts = result.result;
        console.log(`Fetched ${activeBlogPosts.length} published blog post(s) from Sanity.`);
      } else {
        activeBlogPosts = [];
      }
    } catch (err) {
      console.error("Error loading blog posts from Sanity:", err);
      activeBlogPosts = [];
    }

    renderBlogList(activeBlogPosts);
    checkHashRoute();
  }

  // Render Blog Card List
  function renderBlogList(posts) {
    if (!blogGrid) return;
    blogGrid.innerHTML = "";

    if (posts.length === 0) {
      blogGrid.innerHTML = `
        <div class="blog-empty-state">
          <h3>No Blog Posts Published Yet</h3>
          <p>We are preparing insightful real estate guides, market reports, and property investment tips. Check back soon!</p>
        </div>
      `;
      return;
    }

    posts.forEach(post => {
      const imgUrl = post.featuredImageUrl || getSanityImageUrl(post.featuredImage) || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80";
      const formattedDate = formatPublishedDate(post.publishedAt);
      const excerpt = generateExcerpt(post.body);

      const card = document.createElement("article");
      card.className = "blog-card";
      card.innerHTML = `
        <div class="blog-img-wrapper">
          <img class="blog-img" src="${escapeHtml(imgUrl)}" alt="${escapeHtml(post.title)}" loading="lazy">
          <span class="blog-badge">Market Guide</span>
        </div>
        <div class="blog-info">
          ${formattedDate ? `<div class="blog-date">📅 ${escapeHtml(formattedDate)}</div>` : ''}
          <h3 class="blog-title">${escapeHtml(post.title)}</h3>
          <p class="blog-excerpt">${escapeHtml(excerpt)}</p>
          <a href="#blog/${escapeHtml(post.slug)}" class="blog-read-btn">
            Read Article <span>→</span>
          </a>
        </div>
      `;

      card.addEventListener("click", (e) => {
        e.preventDefault();
        openBlogArticle(post.slug);
      });

      blogGrid.appendChild(card);
    });
  }

  // Open Individual Blog Article View
  async function openBlogArticle(slug) {
    if (!articleOverlay || !articleContent) return;

    let post = activeBlogPosts.find(p => p.slug === slug);

    // If post not found in memory (e.g. direct deep link load), query Sanity directly
    if (!post) {
      articleContent.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
          <div class="spinner" style="border-top-color: var(--primary-color); width: 40px; height: 40px; margin: 0 auto 16px;"></div>
          <p>Loading article content...</p>
        </div>
      `;
      articleOverlay.classList.add("active");
      document.body.style.overflow = "hidden";

      const query = encodeURIComponent(`*[_type == "post" && slug.current == "${slug}"][0]{
        _id,
        title,
        "slug": slug.current,
        "featuredImageUrl": featuredImage.asset->url,
        featuredImage,
        body,
        publishedAt
      }`);
      const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${query}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Article fetch failed");
        const result = await response.json();
        post = result.result;
      } catch (e) {
        console.error("Failed to fetch article:", e);
      }
    }

    if (!post) {
      articleContent.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
          <h2>Article Not Found</h2>
          <p>The requested blog article could not be found or has been removed.</p>
        </div>
      `;
      articleOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
      return;
    }

    const imgUrl = post.featuredImageUrl || getSanityImageUrl(post.featuredImage);
    const formattedDate = formatPublishedDate(post.publishedAt);
    const bodyHtml = portableTextToHTML(post.body);

    const waText = encodeURIComponent(
      `Hello Jolis Properties, I just read your article "${post.title}" on your website and would like to learn more about investment opportunities.`
    );
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

    articleContent.innerHTML = `
      <div class="article-meta-bar">
        <span class="article-category-badge">Real Estate Guide</span>
        ${formattedDate ? `<span class="article-date">📅 ${escapeHtml(formattedDate)}</span>` : ''}
      </div>

      <h1 class="article-main-title">${escapeHtml(post.title)}</h1>

      ${imgUrl ? `<img src="${escapeHtml(imgUrl)}" alt="${escapeHtml(post.title)}" class="article-hero-image">` : ''}

      <div class="article-portable-body">
        ${bodyHtml}
      </div>

      <div class="article-cta-box">
        <h3>Ready to Make Smart Real Estate Investments?</h3>
        <p>Talk directly with our experts at Jolis Properties for verified lands, luxury homes, and high-appreciation developments in Lagos & Nigeria.</p>
        <a href="${waUrl}" target="_blank" rel="noopener" class="article-cta-btn">
          💬 Speak With An Investment Advisor
        </a>
      </div>
    `;

    articleOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    // Update hash cleanly without jump
    if (window.location.hash !== `#blog/${post.slug}`) {
      history.pushState(null, "", `#blog/${post.slug}`);
    }
  }

  // Close Individual Blog Article View
  function closeBlogArticle() {
    if (!articleOverlay) return;
    articleOverlay.classList.remove("active");
    document.body.style.overflow = "";

    if (window.location.hash.startsWith("#blog/")) {
      history.pushState(null, "", "#blog");
    }
  }

  // Hash change handler for direct links and browser back/forward
  function checkHashRoute() {
    const hash = window.location.hash;
    if (hash.startsWith("#blog/")) {
      const slug = hash.replace("#blog/", "").trim();
      if (slug) {
        openBlogArticle(slug);
      }
    }
  }

  // Event Listeners for Article Modal
  if (articleBackBtn) {
    articleBackBtn.addEventListener("click", closeBlogArticle);
  }
  if (articleCloseBtn) {
    articleCloseBtn.addEventListener("click", closeBlogArticle);
  }
  if (articleOverlay) {
    articleOverlay.addEventListener("click", (e) => {
      if (e.target === articleOverlay) {
        closeBlogArticle();
      }
    });
  }

  window.addEventListener("hashchange", checkHashRoute);

  // Initialize Blog loading
  loadBlogPosts();

  // Form WhatsApp Redirection Handler
  const contactForm = document.getElementById("lead-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("form-name").value;
      const email = document.getElementById("form-email").value;
      const phone = document.getElementById("form-phone").value;
      const interest = document.getElementById("form-interest").value;
      const message = document.getElementById("form-message").value;

      const waBody = `Hello Jolis Properties! I submitted an inquiry through your website:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Interest: ${interest}
- Message: ${message}`;

      const finalWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waBody)}`;
      window.open(finalWaUrl, "_blank");
    });
  }
});

