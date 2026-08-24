/* ============================================================
   Everleigh Brouse — Acting Portfolio
   Minimal, dependency-free interactivity
   ============================================================ */
(function () {
  "use strict";

  /* ---- Mobile navigation toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    /* Close the menu after tapping a link (mobile) */
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    /* Close on Escape */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("open")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---- Sticky header shadow on scroll ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 12) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Scroll-reveal (skipped when reduced motion is preferred) ---- */
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealables = document.querySelectorAll(".reveal");

  if (!prefersReduced && "IntersectionObserver" in window && revealables.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    /* No observer / reduced motion → show everything immediately */
    revealables.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Slideshow (Hansel & Gretel photo reel) ---- */
  Array.prototype.forEach.call(document.querySelectorAll("[data-slideshow]"), function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll(".slide"));
    if (slides.length < 2) return;

    var dots     = Array.prototype.slice.call(root.querySelectorAll("[data-goto]"));
    var prevBtn  = root.querySelector(".slideshow__nav--prev");
    var nextBtn  = root.querySelector(".slideshow__nav--next");
    var playBtn  = root.querySelector("[data-play]");
    var playLbl  = root.querySelector("[data-play-label]");
    var countEl  = root.querySelector("[data-current]");
    var liveEl   = root.querySelector("[data-live]");
    var reduced  = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var DURATION = 5500;
    var index = 0, timer = null, playing = false, hovered = false, focused = false;

    if (!reduced) root.setAttribute("data-animate", "");

    function captionOf(i) {
      var img = slides[i].querySelector(".slide__img");
      return img && img.alt ? img.alt : "Slide " + (i + 1);
    }

    function render() {
      slides.forEach(function (s, i) {
        var on = i === index;
        s.classList.toggle("is-active", on);
        s.setAttribute("aria-hidden", on ? "false" : "true");
      });
      dots.forEach(function (d, i) {
        d.setAttribute("aria-current", i === index ? "true" : "false");
      });
      if (countEl) countEl.textContent = String(index + 1);
      if (liveEl)  liveEl.textContent = "Slide " + (index + 1) + " of " + slides.length + ": " + captionOf(index);
    }

    function goTo(i, user) {
      index = (i % slides.length + slides.length) % slides.length;
      render();
      if (user && playing) startTimer(); /* reset the countdown after a manual move */
    }
    function next(user) { goTo(index + 1, user); }
    function prev(user) { goTo(index - 1, user); }

    function tick() { if (!hovered && !focused && !document.hidden) next(false); }
    function startTimer() { stopTimer(); if (playing) timer = window.setInterval(tick, DURATION); }
    function stopTimer() { if (timer) { window.clearInterval(timer); timer = null; } }

    function setPlaying(p) {
      playing = p;
      if (playBtn) {
        playBtn.classList.toggle("is-playing", p);
        playBtn.setAttribute("aria-label", p ? "Pause slideshow" : "Play slideshow");
      }
      if (playLbl) playLbl.textContent = p ? "Pause" : "Play";
      if (p) startTimer(); else stopTimer();
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { prev(true); });
    if (nextBtn) nextBtn.addEventListener("click", function () { next(true); });
    dots.forEach(function (d) {
      d.addEventListener("click", function () { goTo(parseInt(d.getAttribute("data-goto"), 10) || 0, true); });
    });
    if (playBtn) playBtn.addEventListener("click", function () { setPlaying(!playing); });

    root.addEventListener("mouseenter", function () { hovered = true; });
    root.addEventListener("mouseleave", function () { hovered = false; });
    root.addEventListener("focusin",  function () { focused = true; });
    root.addEventListener("focusout", function () { focused = false; });
    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft")  { e.preventDefault(); prev(true); }
      else if (e.key === "ArrowRight") { e.preventDefault(); next(true); }
    });

    render();
    setPlaying(!reduced); /* autoplay unless the visitor prefers reduced motion */
  });

  /* ---- Auto-update footer year ---- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
