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
