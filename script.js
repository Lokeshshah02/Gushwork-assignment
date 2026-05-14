'use strict';

// 1. DATA REPOSITORY - Consolidation of repetitive content

const MERITS_DATA = [
  { icon: 'Bag_icon.png', title: 'Superior Chemical Resistance', desc: 'HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won\'t corrode, rust, or scale, ensuring pure water quality.' },
  { icon: 'Needle_icon.png', title: 'Exceptional Flexibility & Durability', desc: 'Outstanding adaptability against mechanical stress, ensuring zero breakdown even in aggressive or shifting soil environments.' },
  { icon: 'Package_icon.png', title: 'Leak-Proof Fusion Welding', desc: 'Thermal fusion techniques eliminate potential leak points and offer completely seamless long-distance infrastructure solutions.' },
  { icon: 'Vector_setting_icon.png', title: 'Cost-Effective Long-Term Solution', desc: 'A lower lifecycle cost due to high resilience against fatigue and minimal maintenance over decades of active service.' },
  { icon: 'Vector_setting_icon.png', title: 'Environmentally Sustainable', desc: 'Non-toxic and 100% recyclable material with absolutely minimal environmental footprint during and post-installation.' },
  { icon: 'Vector_setting_icon.png', title: 'Certified Quality Assurance', desc: 'Adhering strictly to ISO and BIS standards. Every pipe batch goes through severe hydrostatic and material compliance testing.' }
];

const UTILITIES_DATA = [
  { img: 'versatile_section_carousal_image.png', title: 'Fishnet Manufacturing', desc: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads.' },
  { img: 'versatile_section_carousal_image.png', title: 'Water Distribution', desc: 'High-performance networks for municipal water supplies ensuring safe, clean, and durable transmission.' },
  { img: 'versatile_section_carousal_image.png', title: 'Industrial Applications', desc: 'Chemical resistant lines built to convey aggressive chemicals safely and efficiently across plants.' },
  { img: 'versatile_section_carousal_image.png', title: 'Thermal Operations', desc: 'Heat resistance and stability catering perfectly to demanding thermal load environments.' }
];

const FEEDBACK_DATA = [
  { name: 'Johann Mueller', role: 'Production Director', text: 'The durability and performance of Meera\'s fishnet processing equipment has significantly improved our marine product quality.' },
  { name: 'Carlos Mendoza', role: 'Operations Manager', text: 'Excellent support for specialized applications. The equipment has been running flawlessly for over 2 years.' },
  { name: 'Rajesh Patel', role: 'Infrastructure Director', text: 'BIS and ISO certifications gave us the confidence we needed. The technical documentation and support team were exceptional.' }
];

const SOLUTIONS_DATA = [
  { img: 'hdpe_fitting_section_image.jpg', title: 'HDPE Fittings & Accessories', desc: 'Complete range of electrofusion and butt fusion fittings for seamless pipe connections.' },
  { img: 'professional_installation_service_image.jpg', title: 'Professional Installation Services', desc: 'Expert installation ensuring optimal system performance and compliance with standards.' },
  { img: 'pe-rt-hitting_pipes_imag.jpg', title: 'PE-RT Heating Pipes', desc: 'Polyethylene of Raised Temperature resistance pipes ideal for thermal connections.' }
];



//  2. CORE UTILITIES


const select = (sel, ctx = document) => ctx.querySelector(sel);
const selectAll = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];


///3. DYNAMIC RENDERING - Eliminating HTML Redundancy


function populateDynamicModules() {
  // Render Merits (Features)
  const meritsGrid = select('.merit-grid');
  if (meritsGrid) {
    meritsGrid.innerHTML = MERITS_DATA.map(m => `
      <article class="merit-card animate-in">
        <img src="assets/${m.icon}" alt="" class="merit-icon" width="32" loading="lazy" />
        <h3>${m.title}</h3>
        <p>${m.desc}</p>
      </article>
    `).join('');
  }

  // Render Utilities (Applications)
  const utilitySlider = select('.utility-slider');
  if (utilitySlider) {
    utilitySlider.innerHTML = UTILITIES_DATA.map(u => `
      <figure class="utility-item">
        <img src="assets/${u.img}" alt="${u.title}" loading="lazy" class="app-card-img" />
        <figcaption>
          <h3>${u.title}</h3>
          <p>${u.desc}</p>
        </figcaption>
      </figure>
    `).join('');
  }

  // Render Feedback (Testimonials)
  const reviewSlider = select('.review-slider');
  if (reviewSlider) {
    reviewSlider.innerHTML = FEEDBACK_DATA.map(f => `
      <article class="review-item">
        <img src="assets/trusted_performance_inverted_comma_icon.svg" alt="" class="quote-icon" aria-hidden="true" width="40" height="40" />
        <h3>${f.text.split('.')[0]}.</h3>
        <p>${f.text}</p>
        <footer class="review-author">
          <div class="author-avatar" aria-hidden="true"></div>
          <div>
            <p class="author-name">${f.name}</p>
            <p class="author-role">${f.role}</p>
          </div>
        </footer>
      </article>
    `).join('');
  }

  // Render Solutions (Portfolio)
  const solutionsGrid = select('.solutions-grid');
  if (solutionsGrid) {
    solutionsGrid.innerHTML = SOLUTIONS_DATA.map(s => `
      <article class="product-card animate-in">
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <figure>
          <img src="assets/${s.img}" alt="${s.title}" loading="lazy" class="portfolio-img" />
        </figure>
        <a href="#" class="btn btn-outline-blue w-full" aria-label="Learn more about ${s.title}">Learn More</a>
      </article>
    `).join('');
  }
}


// 4. UI COMPONENTS & LOGIC


// Handle Sticky Navigation
function manageStickyNav() {
  const header        = select('#siteHeader');
  const hero          = select('#hero');
  if (!header || !hero) return;

  let lastY = window.scrollY;
  let ticking = false;

  function handleScroll() {
    const currentY = window.scrollY;
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const scrollingDown = currentY > lastY;

    if (currentY > heroBottom) {
      if (scrollingDown) header.classList.add('is-visible');
      else header.classList.remove('is-visible');
    } else {
      header.classList.remove('is-visible');
    }

    lastY = currentY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });
}

// Handle Mobile Menu Interaction
function setupMobileMenu() {
  const trigger = select('#hamburgerBtn');
  const overlay = select('#mobileMenu');
  const heroTrigger = select('#hamburgerHeroBtn');
  
  if (!overlay) return;

  const toggleMenu = () => {
    const isActive = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!isActive));
    overlay.hidden = isActive;
  };

  trigger?.addEventListener('click', toggleMenu);
  heroTrigger?.addEventListener('click', toggleMenu);
}

// Image Zoom Effect (Lens + Magnification)
function initMagnifier() {
  const stage = select('#galleryWrapper');
  const lens  = select('#zoomLens');
  if (!stage || !lens) return;

  const ZOOM_FACTOR = 2.5;
  let activeSrc = '';

  function refreshZoomMedia(src) {
    activeSrc = src;
    lens.style.backgroundImage = `url('${src}')`;
  }
  window.syncZoomBackground = refreshZoomMedia;
  
  const startImg = stage.querySelector('.display-slide img');
  if (startImg) {
    refreshZoomMedia(startImg.currentSrc || startImg.src);
  }

  let frameId = null;
  let posX = 0;
  let posY = 0;
  let active = false;

  function paint() {
    if (!active) return;
    
    const bounds = stage.getBoundingClientRect();
    let x = posX - bounds.left;
    let y = posY - bounds.top;
    
    x = Math.max(0, Math.min(x, bounds.width));
    y = Math.max(0, Math.min(y, bounds.height));
    
    const size = lens.offsetWidth || 150;
    const half = size / 2;
    
    lens.style.transform = `translate3d(${x - half}px, ${y - half}px, 0)`;
    
    const bw = bounds.width * ZOOM_FACTOR;
    const bh = bounds.height * ZOOM_FACTOR;
    lens.style.backgroundSize = `${bw}px ${bh}px`;
    
    const bx = -((x * ZOOM_FACTOR) - half);
    const by = -((y * ZOOM_FACTOR) - half);
    lens.style.backgroundPosition = `${bx}px ${by}px`;
    
    frameId = requestAnimationFrame(paint);
  }

  stage.addEventListener('mousemove', (e) => {
    posX = e.clientX;
    posY = e.clientY;
  }, { passive: true });
  
  stage.addEventListener('mouseenter', (e) => {
    posX = e.clientX;
    posY = e.clientY;
    active = true;
    lens.style.display = 'block';
    if (frameId) cancelAnimationFrame(frameId);
    frameId = requestAnimationFrame(paint);
  });
  
  stage.addEventListener('mouseleave', () => {
    active = false;
    lens.style.display = 'none';
    if (frameId) cancelAnimationFrame(frameId);
  });
}

// Product Media Showcase
function initMediaShowcase() {
  const track = select('#galleryTrack');
  const prev  = select('#prevBtn');
  const next  = select('#nextBtn');
  const thumbs = selectAll('.preview-btn');
  const wrapper = select('#galleryWrapper');
  
  if (!track || !thumbs.length) return;

  const slides = selectAll('.display-slide', track);
  let pos = 0;

  function goTo(index) {
    pos = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${pos * 100}%)`;

    const img = slides[pos].querySelector('img');
    if (img && window.syncZoomBackground) window.syncZoomBackground(img.currentSrc || img.src);

    thumbs.forEach((t, idx) => {
      t.classList.toggle('active', idx === pos);
      t.setAttribute('aria-pressed', String(idx === pos));
    });
  }

  prev?.addEventListener('click', () => goTo(pos - 1));
  next?.addEventListener('click', () => goTo(pos + 1));
  thumbs.forEach((t, i) => t.addEventListener('click', () => goTo(i)));
}

// Generic Slider for Apps and Feedback
function setupDraggableSlider(id, options = {}) {
  const container = select(id);
  if (!container) return;

  const bPrev = options.prevBtn ? select(options.prevBtn) : null;
  const bNext = options.nextBtn ? select(options.nextBtn) : null;
  
  const getItems = () => selectAll('.utility-item, .review-item', container);
  
  let currentOffset = 0;
  let activeDrag = false;
  let originX = 0;
  let lastX = 0;

  container.style.touchAction = 'pan-y';

  function stepWidth() {
    const items = getItems();
    if (!items.length) return 0;
    const gap = parseFloat(window.getComputedStyle(container).columnGap) || 0;
    return items[0].offsetWidth + gap;
  }

  function limit() {
    return Math.max(0, container.scrollWidth - container.parentElement.offsetWidth);
  }

  function applyMove(val, anim) {
    const max = limit();
    currentOffset = Math.max(0, Math.min(val, max));
    container.style.transition = anim ? 'transform 0.4s ease-out' : 'none';
    container.style.transform = `translateX(-${currentOffset}px)`;
    lastX = -currentOffset;
  }

  const shift = (dir) => applyMove((Math.round(currentOffset / stepWidth()) + dir) * stepWidth(), true);

  bPrev?.addEventListener('click', () => shift(-1));
  bNext?.addEventListener('click', () => shift(1));

  container.addEventListener('mousedown', e => {
    if (e.target.closest('button, a')) return;
    activeDrag = true;
    originX = e.clientX;
    container.style.transition = 'none';
    container.style.cursor = 'grabbing';
    lastX = (new DOMMatrixReadOnly(window.getComputedStyle(container).transform)).m41;
  });

  window.addEventListener('mousemove', e => {
    if (!activeDrag) return;
    const delta = e.clientX - originX;
    container.style.transform = `translateX(${lastX + delta}px)`;
  });

  window.addEventListener('mouseup', e => {
    if (!activeDrag) return;
    activeDrag = false;
    container.style.cursor = '';
    const diff = e.clientX - originX;
    let idx = Math.round(-lastX / stepWidth());
    if (Math.abs(diff) > 40) idx += (diff < 0 ? 1 : -1);
    applyMove(idx * stepWidth(), true);
  });
}

// Manufacturing Workflow Steps
function handleWorkflowSteps() {
  const triggers = selectAll('.step-trigger');
  const textBox = select('#processText');
  if (!triggers.length || !textBox) return;

  const dataMap = {
    raw:      { title: 'High-Grade Raw Material Selection',  body: 'Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.', points: ['PE100 grade material', 'Optimal molecular weight distribution'] },
    extrusion:{ title: 'Precision Extrusion Process',        body: 'Our twin-screw extruders provide homogeneous melt temperature and pressure for consistent wall thickness across all pipe diameters.', points: ['Twin-screw extruder technology', 'Computerized melt monitoring'] },
    cooling:  { title: 'Controlled Cooling & Calibration',   body: 'Multi-stage cooling lines with vacuum calibration ensure dimensional accuracy and stress relief throughout the pipe cross-section.', points: ['Vacuum calibration sleeves', 'Gradual temperature reduction'] },
    sizing:   { title: 'Dimensional Sizing & Tolerance',     body: 'Laser measurement systems continuously verify outer diameter, wall thickness and ovality to ISO 4427 tolerances.', points: ['±0.2mm diameter tolerance', 'Real-time laser gauging'] },
    quality:  { title: 'In-Line Quality Control',            body: 'Each production run undergoes hydrostatic pressure testing, impact resistance evaluation, and surface finish inspection.', points: ['Hydrostatic pressure test', '100% visual inspection'] },
    marking:  { title: 'Permanent Pipe Marking',             body: 'Inkjet and embossed marking systems apply permanent identification covering standard, pressure rating, date and production batch.', points: ['ISO 4427 compliant marking', 'UV-resistant inks'] },
    cutting:  { title: 'Precision Saw Cutting',              body: 'Automated saw units provide clean, burr-free cuts at exact specified lengths with squareness tolerances within 0.5°.', points: ['Automated cutting system', 'Burr-free finish'] },
    packaging:{ title: 'Protective Packaging & Dispatch',    body: 'Pipes are bundled, strapped and capped to prevent contamination during transit and storage, meeting export packaging standards.', points: ['End-cap protection', 'Moisture-proof bundling'] }
  };

  triggers.forEach(tr => {
    tr.addEventListener('click', () => {
      triggers.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tr.classList.add('active');
      tr.setAttribute('aria-selected', 'true');

      const info = dataMap[tr.dataset.tab];
      if (!info) return;

      textBox.style.opacity = '0';
      textBox.style.transform = 'translateY(8px)';
      setTimeout(() => {
        textBox.innerHTML = `
          <h3>${info.title}</h3>
          <p>${info.body}</p>
          <ul class="process-points">
            ${info.points.map(p => `<li><span class="dot dot-blue" aria-hidden="true"></span> ${p}</li>`).join('')}
          </ul>
        `;
        textBox.style.opacity = '1';
        textBox.style.transform = 'translateY(0)';
      }, 180);
    });
  });

  const pBack = select('#processPrevBtn');
  const pNext = select('#processNextBtn');

  if (pBack && pNext) {
    pBack.addEventListener('click', () => {
      const cur = triggers.findIndex(t => t.classList.contains('active'));
      triggers[(cur - 1 + triggers.length) % triggers.length].click();
    });
    pNext.addEventListener('click', () => {
      const cur = triggers.findIndex(t => t.classList.contains('active'));
      triggers[(cur + 1) % triggers.length].click();
    });
  }
}

// Viewport Intersection Animations
function triggerScrollEffects() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const entries = selectAll('.merit-card, .product-card, .review-item, .resource-item, .question-box, .section-header');
  
  entries.forEach((node, i) => {
    node.style.opacity = '0';
    node.style.transform = 'translateY(20px)';
    node.style.transition = `opacity 0.4s ease ${(i % 4) * 50}ms, transform 0.4s ease ${(i % 4) * 50}ms`;
  });

  const watcher = new IntersectionObserver(found => {
    found.forEach(f => {
      if (f.isIntersecting) {
        f.target.style.opacity = '1';
        f.target.style.transform = 'translateY(0)';
        watcher.unobserve(f.target);
      }
    });
  }, { threshold: 0.1 });

  entries.forEach(e => watcher.observe(e));
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
  populateDynamicModules();
  manageStickyNav();
  setupMobileMenu();
  initMagnifier();
  initMediaShowcase();
  setupDraggableSlider('.utility-slider', { prevBtn: '#appsPrev', nextBtn: '#appsNext' });
  setupDraggableSlider('.review-slider');
  handleWorkflowSteps();
  triggerScrollEffects();
});
