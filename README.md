# Mangalam HDPE Pipes – Frontend Assignment

A high-performance, responsive landing page for Mangalam HDPE Pipes, built as a technical assignment. This project demonstrates proficiency in vanilla web technologies, focusing on accuracy, performance, and clean code architecture.

---

## 🚀 Key Features

### 1. Interactive Image Gallery & Magnifier
*   **Custom Carousel**: Built from scratch without libraries, supporting both arrow navigation and thumbnail selection.
*   **Precision Zoom**: A lens-based magnification system that allows users to inspect high-resolution product details. It dynamically syncs with the active carousel slide.

### 2. Dynamic Content Architecture
*   **Data-Driven Modules**: Repetitive sections (Merits, Utilities, Feedback, and Solutions) are managed via a centralized data repository in `script.js`.
*   **DOM Optimization**: Uses JavaScript templates to inject content, significantly reducing the `index.html` file size and making content updates seamless.

### 3. Intelligent User Interface
*   **Scroll-Aware Navigation**: A sticky header that intelligently hides/shows based on scroll direction to maximize screen real estate.
*   **Interactive Workflow**: A tabbed manufacturing process section with smooth transitions and coordinated text/image updates.
*   **Validation & Feedback**: Integrated form handling for contact and catalogue requests with immediate UI feedback.

### 4. Responsive & Accessible Design
*   **Mobile-First Approach**: Optimized layouts for every device from 320px to 4K displays.
*   **Semantic HTML**: Proper use of `<header>`, `<main>`, `<footer>`, `<section>`, and `<article>` tags for SEO and assistive technologies.
*   **Accessibility**: ARIA labels, role attributes, and keyboard navigation support for all interactive components.

---

## 🛠️ Technology Stack

*   **HTML5**: Semantic structure and SVG integration.
*   **CSS3**: 
    *   Custom Properties (Variables) for a unified design system.
    *   Flexbox & CSS Grid for complex, fluid layouts.
    *   Intersection Observer API for scroll-triggered animations.
*   **Vanilla JavaScript**: ES6+ logic with zero external dependencies (no jQuery, React, or Bootstrap).

---

## 📁 Project Structure

```text
├── assets/             # Brand logos, product imagery, and UI icons
├── index.html          # Core document structure and empty dynamic containers
├── styles.css          # Design system, layout utilities, and component styles
├── script.js           # Logic for carousels, zoom, tabs, and content injection
└── README.md           # Project documentation and submission details
```

---

## ⚙️ Design System (CSS Variables)

The project utilizes a centralized theme for consistency:
- **Primary Color**: `#1B3DA6` (Deep Blue)
- **Secondary Color**: `#D62B2B` (Accent Red)
- **Typography**: `DM Sans` (Body) & `DM Serif Display` (Headings)
- **Border Radius**: Modular scales (`6px`, `12px`, `20px`)
- **Shadows**: Multi-layered elevations for premium depth.

---

## 🛠️ Local Setup

1.  Clone the repository or extract the ZIP file.
2.  Open `index.html` directly in any modern web browser.
3.  *Note: No build step or local server is required as all assets are linked relatively.*

---

## ✅ Criteria Compliance

This project successfully addresses all submission requirements:
- [x] **Vanilla Implementation**: 100% library-free.
- [x] **Sticky Header**: Scroll-responsive implementation.
- [x] **Carousel & Zoom**: Custom logic for both features.
- [x] **Responsive Design**: Mobile-optimized layouts.
- [x] **Best Practices**: Semantic HTML and modular JS.

---

## 🧠 Application Logic & Flow

### 1. Initialization Flow
When the DOM is fully loaded, the `DOMContentLoaded` event triggers a sequential initialization of all modules:
1.  `populateDynamicModules()`: Injects data into empty HTML containers.
2.  `manageStickyNav()`: Sets up scroll observers for the header.
3.  `setupMobileMenu()`: Binds toggle events for mobile navigation.
4.  `initMagnifier()`: Initializes the zoom lens and coordinate tracking.
5.  `initMediaShowcase()`: Sets up the primary product carousel.
6.  `setupDraggableSlider()`: Initializes dragging logic for utility/feedback sliders.
7.  `handleWorkflowSteps()`: Binds tab-switching logic for the manufacturing section.
8.  `triggerScrollEffects()`: Starts the Intersection Observer for entrance animations.

### 2. Core Functionality

#### `populateDynamicModules()`
Iterates through `MERITS_DATA`, `UTILITIES_DATA`, etc., using `.map()` to generate HTML strings and inject them into the DOM. This ensures that the page content is decoupled from the layout.

#### `initMagnifier()`
- **Logic**: Uses `requestAnimationFrame` to paint the lens position and background offset at 60fps.
- **Sync**: Listens for updates from the carousel to ensure the lens background image always matches the active slide.

#### `initMediaShowcase()`
- **State Management**: Tracks the current slide `pos`.
- **Transformation**: Uses CSS `translateX` for hardware-accelerated slide transitions.
- **Callback**: Automatically triggers `window.syncZoomBackground` on every slide change.

#### `setupDraggableSlider(id)`
- **Behavior**: Implements custom mouse and touch dragging logic.
- **Physics**: Calculates deltas between `mousedown` and `mouseup` to determine if a "swipe" occurred, then snaps to the nearest item using CSS transitions.

#### `triggerScrollEffects()`
- **Observer**: Uses the `IntersectionObserver` API to detect when elements enter the viewport.
- **Animation**: Applies a staggered `translateY` and `opacity` transition for a premium "reveal" effect.

---

---
*Created as part of the GushWork Technical Assessment.*
