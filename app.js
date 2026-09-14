/**
 * MR CORPORATION - CORPORATE ECOSYSTEM JAVASCRIPT ENGINE
 * Powered by digitCare ERP Architecture
 */

// --- PRODUCT DATABASE (All 5 Brand Verticals) ---
const PRODUCTS_DATA = [
  {
    id: 'prod-01',
    name: 'Solar-Dried Organic Mango Powder',
    brand: 'FARMINO',
    category: 'Fruit Powders',
    symbol: '🥭',
    desc: '100% natural, nutrient-dense mango powder processed via clean solar-drying. Zero additives, pure flavor.',
    origin: 'Rajshahi, Bangladesh',
    moq: '500 KG',
    hsCode: '1106.30.00',
    shelfLife: '24 Months',
    packaging: '25kg Food-Grade Nitrogen Flush Bags',
    certifications: ['HACCP', 'ISO 22000', 'Halal', 'Organic'],
    exportReady: true,
    leadTime: '14 Days'
  },
  {
    id: 'prod-02',
    name: 'Dehydrated Dragon Fruit Chips',
    brand: 'FARMINO',
    category: 'Healthy Snacks',
    symbol: '🐉',
    desc: 'Crispy, antioxidant-rich dragon fruit slices dried with low-temperature solar tech by women-led agro units.',
    origin: 'Natore, Bangladesh',
    moq: '250 KG',
    hsCode: '0813.40.90',
    shelfLife: '18 Months',
    packaging: 'Vacuum Sealed Foil Pouches (Bulk/Retail)',
    certifications: ['HACCP', 'Halal', 'Fair Trade'],
    exportReady: true,
    leadTime: '10 Days'
  },
  {
    id: 'prod-03',
    name: 'Premium Aromatic Chinigura Rice',
    brand: 'MRS Foods',
    category: 'Agro-Commodities',
    symbol: '🌾',
    desc: 'Export-grade aromatic short-grain rice sourced directly from verified farming clusters under fair-trade contracts.',
    origin: 'Dinajpur, Bangladesh',
    moq: '5 Metric Tons (1x20ft FCL)',
    hsCode: '1006.30.10',
    shelfLife: '24 Months',
    packaging: '25kg / 50kg PP & Jute Bags',
    certifications: ['ISO 22000', 'HACCP', 'GMP', 'Halal'],
    exportReady: true,
    leadTime: '21 Days'
  },
  {
    id: 'prod-04',
    name: 'Refined Mustard Oil (Cold Pressed)',
    brand: 'MRS Foods',
    category: 'Processed Foods',
    symbol: '🌻',
    desc: 'High-pungency, premium cold-pressed virgin mustard oil for institutional, government and retail distribution.',
    origin: 'Pabna, Bangladesh',
    moq: '2,000 Liters',
    hsCode: '1514.91.00',
    shelfLife: '12 Months',
    packaging: '5L / 10L / 200L Food-Grade Drums',
    certifications: ['BSTI', 'ISO 22000', 'Halal'],
    exportReady: true,
    leadTime: '7 Days'
  },
  {
    id: 'prod-05',
    name: 'Fresh Cavendish Banana (Cluster Pack)',
    brand: 'MR Fresh',
    category: 'Fresh Produce',
    symbol: '🍌',
    desc: 'GAP-certified plantation grown Cavendish bananas. Cleaned, treated, and cold-chain calibrated for long transit.',
    origin: 'Kushtia, Bangladesh',
    moq: '1 Reefer Container (18 MT)',
    hsCode: '0803.90.10',
    shelfLife: '35 Days (Cold Chain 13°C)',
    packaging: '13.5kg / 18kg Telescopic Export Cartons',
    certifications: ['GlobalGAP', 'Phytosanitary Certified'],
    exportReady: true,
    leadTime: '5 Days'
  },
  {
    id: 'prod-06',
    name: 'Organic Greenhouse Bell Peppers',
    brand: 'MR Fresh',
    category: 'Fresh Produce',
    symbol: '🫑',
    desc: 'Pesticide-free red and yellow bell peppers harvested fresh from climate-controlled smart farming tunnels.',
    origin: 'Bogura, Bangladesh',
    moq: '1,000 KG',
    hsCode: '0709.60.00',
    shelfLife: '21 Days (Cold Chain)',
    packaging: '5kg Ventilated Corrugated Boxes',
    certifications: ['GAP Certified', 'Traceable Batch QR'],
    exportReady: true,
    leadTime: '3 Days'
  },
  {
    id: 'prod-07',
    name: 'Sustainable Organic Cotton Workwear',
    brand: 'Mr & Mrs',
    category: 'Fashion & Apparel',
    symbol: '👕',
    desc: 'High-durability corporate & industrial uniforms manufactured under OEKO-TEX & WRAP certified ethical factories.',
    origin: 'Gazipur, Bangladesh',
    moq: '1,000 Pieces',
    hsCode: '6203.22.00',
    shelfLife: 'N/A',
    packaging: 'Individual Polybag + Master Export Carton',
    certifications: ['OEKO-TEX 100', 'WRAP Gold', 'GOTS'],
    exportReady: true,
    leadTime: '45 Days'
  },
  {
    id: 'prod-08',
    name: 'Institutional UN & NGO Ration Packs',
    brand: 'MR Corporation',
    category: 'Institutional Supply',
    symbol: '📦',
    desc: 'High-energy, customized emergency food and non-food humanitarian kits formatted to UN/WFP international specs.',
    origin: 'Central Hub, Dhaka',
    moq: '5,000 Kits',
    hsCode: '2106.90.99',
    shelfLife: '36 Months',
    packaging: 'Weather-Proof Heavy Duty UN Boxes',
    certifications: ['UN Sourcing Compliant', 'ISO 9001', 'ISO 22000'],
    exportReady: true,
    leadTime: '15 Days'
  }
];

// --- ECOSYSTEM BRANDS INFO ---
const ECOSYSTEM_DATA = {
  'mrcorp': {
    name: 'MR Corporation',
    tagline: 'Global Trading, Sourcing & Institutional Procurement',
    symbol: '🌐',
    badgeClass: 'btn-primary',
    desc: 'The corporate backbone managing cross-border trade, national supply chains, government tenders, and UN humanitarian aid programs.',
    stats: [
      { label: 'Global Trade Hubs', val: '12+ Ports' },
      { label: 'Institutional Lead Time', val: '< 14 Days' },
      { label: 'Annual Tonnage', val: '75,000+ MT' },
      { label: 'Compliance Index', val: '100% Audit Ready' }
    ],
    features: [
      'Government & Defense Food Supply',
      'UN / WFP Humanitarian Rations',
      'International B2B Bulk Sourcing',
      'Integrated Cold-Chain Logistics',
      'Trade Finance & Structured LC Support',
      'Fair Price Retail Networks'
    ]
  },
  'mrsfoods': {
    name: 'MRS Foods',
    tagline: 'Agro-Commodities & Value-Added Food Manufacturing',
    symbol: '🌾',
    badgeClass: 'btn-emerald',
    desc: 'Specialized in high-grade staple food grains, cold-pressed oils, spices, and packaged food products for domestic retail and global export.',
    stats: [
      { label: 'Processing Mills', val: '3 Facilities' },
      { label: 'ISO 22000 & Halal', val: 'Certified' },
      { label: 'Monthly Output', val: '6,500 MT' },
      { label: 'Export Destinations', val: '18 Countries' }
    ],
    features: [
      'Aromatic Rice & Grain Milling',
      'Cold-Pressed Mustard & Seed Oils',
      'Private-Label OEM Manufacturing',
      'Bulk Commercial Packaging',
      'Automated Quality Sorting',
      'HACCP & Traceability Tested'
    ]
  },
  'farmino': {
    name: 'FARMINO',
    tagline: 'Solar-Drying, Dehydrated Superfoods & Zero Waste',
    symbol: '☀️',
    badgeClass: 'btn-emerald',
    desc: 'Pioneering clean renewable solar drying tech to convert surplus seasonal harvests into high-value fruit powders and healthy snacks with 0% waste.',
    stats: [
      { label: 'Women-Led Units', val: '80% Female Staff' },
      { label: 'Clean Energy', val: '100% Solar Powered' },
      { label: 'Post-Harvest Loss Cut', val: '45% Less Waste' },
      { label: 'Nutrient Retention', val: '94.8% Preserved' }
    ],
    features: [
      'Dehydrated Mango & Tropical Powders',
      'Crispy Fruit & Veggie Chips',
      'Women Rural Entrepreneurship',
      'Zero Carbon Solar Processing',
      'No Artificial Preservatives',
      'Direct-from-Farmer Fair Pricing'
    ]
  },
  'mrfresh': {
    name: 'MR Fresh',
    tagline: 'Farm-to-Fork Fresh Produce & Livestock Logistics',
    symbol: '🥬',
    badgeClass: 'btn-emerald',
    desc: 'Bridging modern farm management with direct supply networks for fresh fruits, vegetables, greenhouse crops, and ethically raised livestock.',
    stats: [
      { label: 'Contracted Farms', val: '1,200+ Acres' },
      { label: 'Farmer Partners', val: '3,500+ Growers' },
      { label: 'Cold Storage Capacity', val: '5,000 MT' },
      { label: 'Harvest to Dispatch', val: '< 6 Hours' }
    ],
    features: [
      'GAP Certified Fresh Produce',
      'Greenhouse Tunnel Cultivation',
      'Traceable Batch QR Labels',
      'Temperature Controlled Logistics',
      'Livestock & Dairy Management',
      'Youth Agro-Incubation Programs'
    ]
  },
  'mrandmrs': {
    name: 'Mr & Mrs',
    tagline: 'Sustainable Fashion, Workwear & Garment Sourcing',
    symbol: '🧵',
    badgeClass: 'btn-primary',
    desc: 'Ethical apparel manufacturing delivering premium corporate uniforms, organic cotton basics, and international private label garment collections.',
    stats: [
      { label: 'Sewing Lines', val: '24 Modern Lines' },
      { label: 'Monthly Capacity', val: '450,000 Pcs' },
      { label: 'Eco Fabrics', val: 'GOTS Organic' },
      { label: 'Safety Rating', val: 'Accord Compliant' }
    ],
    features: [
      'Industrial & Hospital Workwear',
      'Organic Cotton Retail Fashion',
      'Custom Pattern Sourcing',
      'Sustainable Fabric Dyeing',
      'Fast Turnaround Prototyping',
      'Worldwide Sea/Air Dispatch'
    ]
  }
};

// --- RFQ CART STATE ---
let rfqCart = [];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(PRODUCTS_DATA);
  setupEcosystemTabs();
  setupFilterControls();
  setupRFQDrawer();
  setupAIChat();
  setupFairPriceCalculator();
  setupThemeToggle();
  setupCMSDock();
  registerServiceWorker();
});

// --- RENDER PRODUCTS ---
function renderProducts(items) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  
  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">🔍 No matching products found.</p>
        <p style="font-size: 0.9rem;">Try changing your brand filter or search keyword.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(p => `
    <div class="product-card" data-brand="${p.brand}" data-id="${p.id}">
      <div class="product-image-container">
        <div class="product-badge-overlay">
          <span class="brand-chip">${p.brand}</span>
          ${p.exportReady ? '<span class="brand-chip" style="background: rgba(16, 185, 129, 0.85);">Export Ready</span>' : ''}
        </div>
        <div class="product-image-symbol">${p.symbol}</div>
      </div>
      <div class="product-content">
        <h4 class="product-title">${p.name}</h4>
        <p class="product-desc">${p.desc}</p>
        
        <div class="product-meta-specs">
          <div class="meta-spec-row">
            <span class="meta-spec-k">HS Code</span>
            <span class="meta-spec-v">${p.hsCode}</span>
          </div>
          <div class="meta-spec-row">
            <span class="meta-spec-k">Min Order (MOQ)</span>
            <span class="meta-spec-v">${p.moq}</span>
          </div>
          <div class="meta-spec-row">
            <span class="meta-spec-k">Origin</span>
            <span class="meta-spec-v">${p.origin}</span>
          </div>
          <div class="meta-spec-row">
            <span class="meta-spec-k">Shelf Life</span>
            <span class="meta-spec-v">${p.shelfLife}</span>
          </div>
        </div>

        <div class="product-card-footer">
          <button class="btn btn-outline" style="flex: 1; padding: 0.55rem 0.8rem; font-size: 0.825rem;" onclick="viewProductDetails('${p.id}')">
            Specs & Docs
          </button>
          <button class="btn btn-primary" style="flex: 1.2; padding: 0.55rem 0.8rem; font-size: 0.825rem;" onclick="addToRFQ('${p.id}')">
            + Request Quote
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// --- FILTER CONTROLS ---
function setupFilterControls() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('product-search-input');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      applyFilters();
    });
  }
}

function applyFilters() {
  const activeBtn = document.querySelector('.filter-btn.active');
  const selectedBrand = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
  const searchInput = document.getElementById('product-search-input');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = PRODUCTS_DATA.filter(item => {
    const matchBrand = (selectedBrand === 'all') || (item.brand.toLowerCase().replace(/\s+/g, '') === selectedBrand.toLowerCase().replace(/\s+/g, ''));
    const matchQuery = item.name.toLowerCase().includes(query) ||
                       item.desc.toLowerCase().includes(query) ||
                       item.category.toLowerCase().includes(query) ||
                       item.hsCode.toLowerCase().includes(query);
    return matchBrand && matchQuery;
  });

  renderProducts(filtered);
}

// --- ECOSYSTEM TABS ---
function setupEcosystemTabs() {
  const tabBtns = document.querySelectorAll('.eco-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.getAttribute('data-tab');
      renderEcosystemCard(key);
    });
  });
}

function renderEcosystemCard(key) {
  const data = ECOSYSTEM_DATA[key];
  if (!data) return;

  const container = document.getElementById('ecosystem-card-target');
  if (!container) return;

  container.innerHTML = `
    <div class="eco-tab-content-card">
      <div>
        <span class="eco-brand-badge ${data.badgeClass}">${data.symbol} ${data.name}</span>
        <h3 style="font-size: 2rem; margin-bottom: 0.75rem;">${data.tagline}</h3>
        <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.6;">${data.desc}</p>
        
        <ul class="eco-feature-list">
          ${data.features.map(f => `
            <li class="eco-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              ${f}
            </li>
          `).join('')}
        </ul>

        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
          <a href="#catalogue" class="btn btn-primary" onclick="filterByBrandShortcut('${data.name}')">
            Explore ${data.name} Products
          </a>
          <button class="btn btn-outline" onclick="openRFQWithChannel('${data.name}')">
            Direct Enquiry
          </button>
        </div>
      </div>

      <div class="eco-card-preview">
        <h4 style="font-size: 1.15rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem;">
          Operational Benchmark & Metrics
        </h4>
        <div class="spec-grid">
          ${data.stats.map(s => `
            <div class="spec-box">
              <div class="spec-label">${s.label}</div>
              <div class="spec-val">${s.val}</div>
            </div>
          `).join('')}
        </div>
        
        <div style="margin-top: 1.5rem; padding: 1rem; background: var(--bg-surface-elevated); border-radius: var(--radius-sm); font-size: 0.825rem; color: var(--text-secondary); border-left: 3px solid var(--primary);">
          <strong>ERP Integration:</strong> Linked to digitCare smart manufacturing & live traceability ledger.
        </div>
      </div>
    </div>
  `;
}

function filterByBrandShortcut(brandName) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    if (btn.textContent.toLowerCase().includes(brandName.toLowerCase())) {
      btn.click();
    }
  });
}

// --- RFQ CART SYSTEM ---
function addToRFQ(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = rfqCart.find(item => item.id === productId);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    rfqCart.push({
      ...product,
      quantity: 1,
      targetDestination: 'Chittagong / Global Port'
    });
  }

  updateRFQBadge();
  showToast(`Added "${product.name}" to Quotation Basket!`);
}

function removeFromRFQ(productId) {
  rfqCart = rfqCart.filter(item => item.id !== productId);
  updateRFQBadge();
  renderRFQDrawerItems();
}

function updateRFQBadge() {
  const badge = document.getElementById('rfq-badge-count');
  if (badge) {
    badge.textContent = rfqCart.length;
    badge.style.display = rfqCart.length > 0 ? 'grid' : 'none';
  }
}

function setupRFQDrawer() {
  const openBtn = document.getElementById('open-rfq-drawer-btn');
  const closeBtn = document.getElementById('close-rfq-drawer-btn');
  const drawer = document.getElementById('rfq-drawer');
  const backdrop = document.getElementById('rfq-backdrop');
  const rfqForm = document.getElementById('rfq-submission-form');

  const toggle = (open) => {
    if (drawer && backdrop) {
      if (open) {
        renderRFQDrawerItems();
        drawer.classList.add('open');
        backdrop.classList.add('open');
      } else {
        drawer.classList.remove('open');
        backdrop.classList.remove('open');
      }
    }
  };

  if (openBtn) openBtn.addEventListener('click', () => toggle(true));
  if (closeBtn) closeBtn.addEventListener('click', () => toggle(false));
  if (backdrop) backdrop.addEventListener('click', () => toggle(false));

  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const channel = document.getElementById('rfq-channel-select')?.value || 'B2B Importer';
      const company = document.getElementById('rfq-company-name')?.value || 'Client Entity';
      
      const quoteRef = 'MRQ-' + Math.floor(100000 + Math.random() * 900000);
      
      showModal(
        'Quotation Request Submitted Successfully! 🎉',
        `
        <div style="text-align: center; padding: 1.5rem 0;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">📋</div>
          <h4 style="color: var(--emerald); font-size: 1.3rem; margin-bottom: 0.5rem;">Reference ID: <strong>${quoteRef}</strong></h4>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
            Thank you, <strong>${company}</strong>. Your requirement has been routed via the <strong>${channel}</strong> channel directly to the MR Corporation commercial desk and digitCare ERP CRM.
          </p>
          <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-sm); text-align: left; font-size: 0.85rem; margin-bottom: 1.5rem;">
            <div><strong>Items Requested:</strong> ${rfqCart.length > 0 ? rfqCart.map(i => i.name).join(', ') : 'General Product Portfolio'}</div>
            <div><strong>Estimated Response:</strong> Within 4 Business Hours</div>
            <div><strong>Dedicated Desk Officer:</strong> Assigned</div>
          </div>
          <button class="btn btn-primary" onclick="closeModal(); document.getElementById('close-rfq-drawer-btn').click();">
            Done & Return to Catalogue
          </button>
        </div>
        `
      );

      rfqCart = [];
      updateRFQBadge();
      rfqForm.reset();
    });
  }
}

function renderRFQDrawerItems() {
  const container = document.getElementById('rfq-items-container');
  if (!container) return;

  if (rfqCart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted); background: var(--bg-surface-elevated); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
        <p style="font-size: 1.8rem; margin-bottom: 0.5rem;">📦</p>
        <p style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.25rem;">Quotation Basket is Empty</p>
        <p style="font-size: 0.825rem;">Browse our product catalogue and click "+ Request Quote" on any item to build your multi-product enquiry.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="margin-bottom: 0.75rem; font-size: 0.85rem; font-weight: 700; color: var(--text-primary); display: flex; justify-content: space-between;">
      <span>Selected Products (${rfqCart.length})</span>
      <span style="color: var(--primary);">Official B2B Channel</span>
    </div>
    <div class="rfq-items-list">
      ${rfqCart.map(item => `
        <div class="rfq-item-row">
          <div>
            <div style="font-weight: 700; font-size: 0.9rem;">${item.symbol} ${item.name}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${item.brand} • MOQ: ${item.moq} • HS: ${item.hsCode}</div>
          </div>
          <button onclick="removeFromRFQ('${item.id}')" style="background: none; border: none; color: var(--rose); cursor: pointer; padding: 0.3rem 0.6rem; font-size: 0.8rem;">
            ✕ Remove
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

function openRFQWithChannel(channelName) {
  const openBtn = document.getElementById('open-rfq-drawer-btn');
  const select = document.getElementById('rfq-channel-select');
  if (select) {
    for (let opt of select.options) {
      if (opt.text.toLowerCase().includes(channelName.toLowerCase())) {
        select.value = opt.value;
        break;
      }
    }
  }
  if (openBtn) openBtn.click();
}

// --- PRODUCT DETAILS MODAL ---
function viewProductDetails(productId) {
  const p = PRODUCTS_DATA.find(item => item.id === productId);
  if (!p) return;

  showModal(
    `${p.symbol} ${p.name} - Technical Specification`,
    `
    <div>
      <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem;">
        <span class="brand-chip">${p.brand}</span>
        <span class="brand-chip" style="background: rgba(14, 165, 233, 0.2); color: var(--primary);">${p.category}</span>
        ${p.exportReady ? '<span class="brand-chip" style="background: rgba(16, 185, 129, 0.2); color: var(--emerald);">Export Ready</span>' : ''}
      </div>

      <p style="color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.6;">${p.desc}</p>

      <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem; margin-bottom: 1.5rem;">
        <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 0.6rem 0; color: var(--text-muted); width: 40%;">HS Code</td><td style="font-weight: 600;">${p.hsCode}</td></tr>
        <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 0.6rem 0; color: var(--text-muted);">Country of Origin</td><td style="font-weight: 600;">${p.origin}</td></tr>
        <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 0.6rem 0; color: var(--text-muted);">Standard Packaging</td><td style="font-weight: 600;">${p.packaging}</td></tr>
        <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 0.6rem 0; color: var(--text-muted);">Minimum Order (MOQ)</td><td style="font-weight: 600;">${p.moq}</td></tr>
        <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 0.6rem 0; color: var(--text-muted);">Shelf Life / Transit Temp</td><td style="font-weight: 600;">${p.shelfLife}</td></tr>
        <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 0.6rem 0; color: var(--text-muted);">Est. Lead Time</td><td style="font-weight: 600;">${p.leadTime}</td></tr>
        <tr><td style="padding: 0.6rem 0; color: var(--text-muted);">Certifications</td><td style="font-weight: 600; color: var(--emerald);">${p.certifications.join(', ')}</td></tr>
      </table>

      <div style="display: flex; gap: 1rem; justify-content: flex-end;">
        <button class="btn btn-outline" onclick="downloadSpecSheet('${p.name}')">
          📥 Download Data Sheet
        </button>
        <button class="btn btn-primary" onclick="addToRFQ('${p.id}'); closeModal();">
          + Add to Quotation Basket
        </button>
      </div>
    </div>
    `
  );
}

// --- FAIR PRICE CALCULATOR ---
function setupFairPriceCalculator() {
  const workersInput = document.getElementById('fps-workers-input');
  const daysInput = document.getElementById('fps-days-input');
  const resultDisplay = document.getElementById('fps-calc-result');
  const workersLabel = document.getElementById('fps-workers-val');

  const calculate = () => {
    if (!workersInput || !resultDisplay) return;
    const workers = parseInt(workersInput.value, 10);
    const monthlySavingsPerWorker = 1850; // BDT subsidy average
    const totalMonthly = (workers * monthlySavingsPerWorker).toLocaleString();
    
    if (workersLabel) workersLabel.textContent = `${workers.toLocaleString()} Workers`;
    resultDisplay.textContent = `BDT ${totalMonthly} / month`;
  };

  if (workersInput) {
    workersInput.addEventListener('input', calculate);
    calculate();
  }
}

// --- AI PROCUREMENT ASSISTANT (CHAT ENGINE) ---
function setupAIChat() {
  const bubble = document.getElementById('ai-bubble-btn');
  const windowElem = document.getElementById('ai-chat-window');
  const closeBtn = document.getElementById('close-ai-chat-btn');
  const input = document.getElementById('ai-user-input');
  const sendBtn = document.getElementById('ai-send-btn');
  const chips = document.querySelectorAll('.quick-chip');

  const toggle = () => {
    if (windowElem) windowElem.classList.toggle('open');
  };

  if (bubble) bubble.addEventListener('click', toggle);
  if (closeBtn) closeBtn.addEventListener('click', toggle);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    appendAIMessage(text, 'user');
    if (input) input.value = '';

    setTimeout(() => {
      const reply = generateAIResponse(text);
      appendAIMessage(reply, 'bot');
    }, 600);
  };

  if (sendBtn && input) {
    sendBtn.addEventListener('click', () => sendMessage(input.value));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendMessage(input.value);
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      sendMessage(chip.textContent);
    });
  });
}

function appendAIMessage(msg, sender) {
  const container = document.getElementById('ai-messages-list');
  if (!container) return;

  const div = document.createElement('div');
  div.className = `ai-msg ${sender}`;
  div.innerHTML = msg;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function generateAIResponse(query) {
  const q = query.toLowerCase();

  if (q.includes('farmino') || q.includes('solar') || q.includes('powder')) {
    return `<strong>FARMINO Division:</strong> We specialize in 100% solar-dried fruit powders (Mango, Dragon Fruit, Banana) and crispy snacks. All facilities are women-led with HACCP and Halal compliance. Standard MOQ is 250kg - 500kg. Would you like me to add Mango Powder to your RFQ?`;
  }
  if (q.includes('moq') || q.includes('minimum order')) {
    return `<strong>MOQ Guidelines:</strong><br>• Agro Commodities (MRS Foods): 5 MT - 1 FCL<br>• FARMINO Powders: 250 KG - 500 KG<br>• Fresh Produce (MR Fresh): 1 Reefer Container (18 MT)<br>• Apparel (Mr & Mrs): 1,000 Pcs.`;
  }
  if (q.includes('export') || q.includes('incoterm') || q.includes('port')) {
    return `<strong>Global Trade Capabilities:</strong> We export under FOB Chittagong / Mongla, CIF, and CFR terms. All shipments include Phytosanitary, Certificate of Origin, ISO 22000 / HACCP lab testing, and custom barcode labeling.`;
  }
  if (q.includes('un') || q.includes('ngo') || q.includes('government') || q.includes('tender')) {
    return `<strong>Institutional & UN Procurement:</strong> MR Corporation is a pre-qualified vendor for high-energy rations, staple grain reserves, and disaster relief kits conforming strictly to UN/WFP and DG Food specifications.`;
  }
  if (q.includes('rfq') || q.includes('quote') || q.includes('price')) {
    return `You can use our interactive <strong>Quotation Basket</strong> at the top right, or tell me which products and volumes you need, and I'll route an instant ticket to our commercial desk!`;
  }

  return `Hello! I am the <strong>MR Corporation AI Procurement Assistant</strong>. I can assist with export specifications, HS codes, MOQ requirements, Halal/ISO compliance, and instant RFQ submissions across all 5 brands (MR Corp, MRS Foods, FARMINO, MR Fresh, Mr & Mrs). How may I assist your organization today?`;
}

// --- CMS & ADMIN LIVE PREVIEW DOCK ---
function setupCMSDock() {
  const toggleBtn = document.getElementById('cms-dock-toggle-btn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    showModal(
      'digitCare ERP - Corporate CMS Live Control Panel',
      `
      <div>
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem;">
          <span class="brand-chip" style="background: #ea580c; color: white;">digitCare CMS v4.2</span>
          <span class="brand-chip">Admin Role: Shayaduzzaman (CEO)</span>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
          <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Active RFQ Inquiries</div>
            <div style="font-size: 1.5rem; font-weight: 800; color: var(--primary);">28 Pending</div>
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Published Catalogue Items</div>
            <div style="font-size: 1.5rem; font-weight: 800; color: var(--emerald);">142 Active</div>
          </div>
        </div>

        <h5 style="margin-bottom: 0.75rem;">Quick Management Modules:</h5>
        <div style="display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.85rem;">
          <div style="padding: 0.75rem; background: var(--bg-surface-elevated); border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
            <span>📁 B2B RFQ Lead Management & Routing</span>
            <button class="btn btn-outline" style="padding: 0.25rem 0.65rem; font-size: 0.75rem;" onclick="showToast('Opened RFQ Leads Database')">Manage Leads</button>
          </div>
          <div style="padding: 0.75rem; background: var(--bg-surface-elevated); border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
            <span>🏷️ 5-Brand Product & Spec Editor</span>
            <button class="btn btn-outline" style="padding: 0.25rem 0.65rem; font-size: 0.75rem;" onclick="showToast('Catalogue CMS Sync Active')">Edit Catalogue</button>
          </div>
          <div style="padding: 0.75rem; background: var(--bg-surface-elevated); border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
            <span>🌱 SDG Impact & Sustainability Verified Metrics</span>
            <button class="btn btn-outline" style="padding: 0.25rem 0.65rem; font-size: 0.75rem;" onclick="showToast('SDG Impact Ledger Updated')">Update SDG Data</button>
          </div>
        </div>
      </div>
      `
    );
  });
}

// --- DOCUMENT CENTRE PREVIEW & DOWNLOAD ---
function downloadResource(docName) {
  showToast(`Downloading official document: "${docName}"...`);
  setTimeout(() => {
    showToast(`"${docName}" downloaded successfully!`);
  }, 1200);
}

function downloadSpecSheet(productName) {
  showToast(`Generated Technical Spec Sheet for: ${productName}`);
}

// --- MODAL UTILITIES ---
function showModal(title, bodyHtml) {
  const overlay = document.getElementById('global-modal-overlay');
  const titleElem = document.getElementById('modal-title');
  const bodyElem = document.getElementById('modal-body-content');

  if (overlay && titleElem && bodyElem) {
    titleElem.innerHTML = title;
    bodyElem.innerHTML = bodyHtml;
    overlay.classList.add('open');
  }
}

function closeModal() {
  const overlay = document.getElementById('global-modal-overlay');
  if (overlay) overlay.classList.remove('open');
}

// --- TOAST NOTIFICATION ---
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="font-size: 1.1rem; color: var(--emerald);">✓</span>
    <span style="font-size: 0.85rem; font-weight: 600;">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- THEME SWITCHER ---
function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    toggleBtn.textContent = next === 'dark' ? '🌙' : '☀️';
  });
}

// --- SERVICE WORKER REGISTRATION ---
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('MR Corp PWA Service Worker Registered', reg))
      .catch(err => console.log('SW Registration error:', err));
  }
}
