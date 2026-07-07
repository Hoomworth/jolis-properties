// Properties Database
const PROPERTIES_DATA = [
  {
    id: 1,
    title: "The Vineyard Estate",
    type: "land",
    location: "Epe, Lagos",
    price: 12500000,
    priceLabel: "₦12,500,000",
    size: "500 SQM",
    titleDoc: "Registered Survey",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    features: ["100% Dry Land", "Perimeter Fencing", "Rapid Value Appreciation"],
    badge: "Hot Investment"
  },
  {
    id: 2,
    title: "Oakwood Luxury Terraces",
    type: "residential",
    location: "Sangotedo, Lagos",
    price: 85000000,
    priceLabel: "₦85,000,000",
    size: "4 Bed Terrace + BQ",
    titleDoc: "Governor's Consent",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    features: ["24/7 Clean Power", "Fully Fitted Kitchen", "Gym & Playground"],
    badge: "Selling Fast"
  },
  {
    id: 3,
    title: "The Oasis Commercial Hub",
    type: "commercial",
    location: "Ibeju-Lekki, Lagos",
    price: 45000000,
    priceLabel: "₦45,000,000",
    size: "600 SQM Commercial Plot",
    titleDoc: "Certificate of Occupancy",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    features: ["Express Road Facing", "Perfect for Showroom", "Immediate Physical Allocation"],
    badge: "Best Seller"
  },
  {
    id: 4,
    title: "La Campagne Resort View Estate",
    type: "resort",
    location: "Ibeju-Lekki, Lagos",
    price: 22000000,
    priceLabel: "₦22,000,000",
    size: "500 SQM",
    titleDoc: "Excision & Gazette",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    features: ["Ocean View Proximity", "Eco-friendly Layout", "High Passive Rental ROI"],
    badge: "New Launch"
  },
  {
    id: 5,
    title: "Pinecrest Smart Apartments",
    type: "residential",
    location: "Lekki, Lagos",
    price: 120000000,
    priceLabel: "₦120,000,000",
    size: "3 Bedroom Apartment",
    titleDoc: "Governor's Consent",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
    features: ["Smart Home Automation", "All Rooms En-suite", "Treated Water Facility"],
    badge: "Luxury Living"
  },
  {
    id: 6,
    title: "Prestige Heights Plots",
    type: "land",
    location: "Sangotedo, Lagos",
    price: 35000000,
    priceLabel: "₦35,000,000",
    size: "600 SQM",
    titleDoc: "Certificate of Occupancy",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    features: ["Fully Gated Estate", "Paved Access Road", "Buy and Build Zone"],
    badge: "Top Choice"
  },
  {
    id: 7,
    title: "Alpha Garden City Resort (500 SQM)",
    type: "resort",
    location: "Academy, Ibadan",
    price: 3500000,
    priceLabel: "₦3,500,000",
    size: "500 SQM Plot",
    titleDoc: "Pre-Launch Offer",
    image: "images/property 1.jpeg",
    features: ["Golf, Spa, Gym & Yoga Access", "10-15 Fruit Trees Included", "Price rises to ₦6M in 16 days"],
    badge: "Pre-Launch Promo"
  },
  {
    id: 8,
    title: "Alpha Garden City Resort (1 Acre)",
    type: "resort",
    location: "Academy, Ibadan",
    price: 12500000,
    priceLabel: "₦12,500,000",
    size: "1 Acre (6 Plots)",
    titleDoc: "+1 Plot FREE (Total 7)",
    image: "images/property 2.jpeg",
    features: ["Get 1 Extra Plot FREE", "10-15 Fruit Trees Included", "Price rises to ₦18M in 16 days"],
    badge: "Resort Package"
  },
  {
    id: 9,
    title: "Emerald Advantage Plots",
    type: "land",
    location: "Ogombo, Ajah, Lagos",
    price: 85000000,
    priceLabel: "₦85,000,000",
    size: "300 SQM",
    titleDoc: "Government Allocation C of O",
    image: "images/property 3.jpeg",
    features: ["Buy & Build Estate", "₦20M Initial Deposit", "Saves ₦15M (Pre-Launch price)"],
    badge: "Pre-Launch Offer"
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
          "image": prop.image,
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
      
      const badgeClass = prop.badge.toLowerCase().includes("luxury") || prop.badge.toLowerCase().includes("best") ? "property-badge accent" : "property-badge";

      card.innerHTML = `
        <div class="property-img-wrapper">
          <img class="property-img" src="${prop.image}" alt="${prop.title}" loading="lazy">
          <span class="${badgeClass}">${prop.badge}</span>
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
      listingGrid.appendChild(card);
    });
  }

  // Filter evaluation logic
  function applyFilters() {
    let filtered = PROPERTIES_DATA.filter(prop => {
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

  // Initialize view
  renderProperties(PROPERTIES_DATA);

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
