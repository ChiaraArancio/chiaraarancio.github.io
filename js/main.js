/* ==========================================================================
   RENDU DES PROJETS ET GALERIES
   --------------------------------------------------------------------------
   Ce fichier lit le tableau PROJECTS (js/projects.js) et construit les blocs
   HTML correspondants dans #projects-list. Il gère aussi la galerie
   horizontale de chaque projet.
   Il n'y a rien à modifier ici pour ajouter un projet : tout se passe dans
   js/projects.js.
   ========================================================================== */

(function () {
  "use strict";

  const list = document.getElementById("projects-list");

  // Sécurité : si le conteneur ou les données n'existent pas, on s'arrête
  // proprement sans casser le reste de la page.
  if (!list || typeof PROJECTS === "undefined" || !Array.isArray(PROJECTS)) {
    return;
  }

  /** Échappe le texte saisi dans les données avant de l'injecter en HTML. */
  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  /** Construit un lien de projet (prototype, PDF, vidéo, LinkedIn…). */
  function renderLink(link, projectName, isSecondary, context) {
    if (!link || !link.url) {
      return "";
    }

    const classes = ["highlight-link"];
    if (isSecondary) {
      classes.push("highlight-link--small");
    }

    const target = link.external ? ' target="_blank" rel="noopener noreferrer"' : "";
    const label = escapeHtml(link.label);
    const contextLabel = context ? ` — ${context}` : "";
    const ariaLabel = `${link.label}${contextLabel} — ${projectName}${link.external ? " (nouvel onglet)" : ""}`;

    return `
      <a
        class="${classes.join(" ")}"
        href="${escapeHtml(link.url)}"
        aria-label="${escapeHtml(ariaLabel)}"${target}
      >${label}</a>`;
  }

  /** Construit une diapositive de la galerie. */
  function renderSlide(image, index, projectName, total, eager, portrait) {
    const width = Number(image.width) || 1600;
    const height = Number(image.height) || 1000;
    const frameRatio = portrait ? 2480 / 3508 : 1102 / 643;
    const imageRatio = width / height;

    // Largeur de la diapositive calculée pour conserver le ratio de l’image
    // dans la hauteur du cadre. Les images verticales occupent donc moins de
    // largeur et plusieurs peuvent être visibles côte à côte.
    const slideWidth = Math.min(100, (imageRatio / frameRatio) * 100);
    const imageStyle = image.fit
      ? ` style="--project-image-fit: ${escapeHtml(image.fit)}"`
      : "";

    return `
      <figure
        class="project__slide"
        role="group"
        aria-roledescription="diapositive"
        aria-label="${index + 1} sur ${total} — ${escapeHtml(projectName)}"
        style="--slide-width: ${slideWidth.toFixed(3)}%"
      >
        <img
          src="${escapeHtml(image.src)}"
          alt="${escapeHtml(image.alt || "")}"
          width="${Number(image.width) || 1600}"
          height="${Number(image.height) || 1000}"
          loading="${eager ? "eager" : "lazy"}"
          decoding="async"${imageStyle}
        >
      </figure>`;
  }

  /** Construit la galerie d'un projet (une ou plusieurs images). */
  function renderGallery(project, isFirstProject) {
    const images = project.images || [];
    const galleryId = `projet-${project.id}-galerie`;
    const total = images.length;
    const hasMultiple = total > 1;

    const slides = images
      .map((image, index) =>
        renderSlide(image, index, project.name, total, isFirstProject && index === 0, project.portrait)
      )
      .join("");

    const nav = hasMultiple
      ? `
        <div class="project__gallery-nav">
          <button
            type="button"
            class="gallery-btn"
            data-gallery-prev
            aria-label="Image précédente"
            aria-controls="${galleryId}"
          >←</button>
          <span class="gallery-count" data-gallery-count aria-live="polite">1 / ${total}</span>
          <button
            type="button"
            class="gallery-btn"
            data-gallery-next
            aria-label="Image suivante"
            aria-controls="${galleryId}"
          >→</button>
        </div>`
      : "";

    /*
     * role="group" + aria-roledescription="carrousel" décrivent la galerie
     * aux lecteurs d'écran. Le défilement reste natif (trackpad, doigt,
     * molette horizontale) ; les boutons ne sont qu'une aide supplémentaire.
     */
    return `
      <div
        class="project__gallery"
        data-gallery
        ${hasMultiple ? `role="group" aria-roledescription="carrousel" aria-label="Galerie du projet ${escapeHtml(project.name)}"` : ""}
      >
        <div
          class="project__slides"
          id="${galleryId}"
          ${hasMultiple ? `tabindex="0" aria-label="Images du projet ${escapeHtml(project.name)} — utilisez les flèches gauche et droite"` : ""}
        >${slides}</div>
        ${nav}
      </div>`;
  }

  /** Construit un moodboard (collage de quelques images). */
  function renderMoodboard(project, firstProject) {
    const images = project.images || [];

    const items = images
      .map(
        (image, index) => `
        <figure class="project__moodboard-item">
          <img
            src="${escapeHtml(image.src)}"
            alt="${escapeHtml(image.alt || "")}"
            width="${Number(image.width) || 1600}"
            height="${Number(image.height) || 1000}"
            loading="${firstProject && index === 0 ? "eager" : "lazy"}"
            decoding="async"
          >
        </figure>`
      )
      .join("");

    return `
      <div
        class="project__moodboard"
        role="group"
        aria-label="Moodboard du projet ${escapeHtml(project.name)}"
      >${items}</div>`;
  }

  /** Construit un projet complet à partir de ses données. */
  function renderProject(project, index) {
    // Dans le titre vertical, on remplace l'apostrophe typographique par une
    // apostrophe droite : en écriture verticale, certains navigateurs donnent
    // à l'apostrophe courbe une largeur proche d'un cadratin, ce qui déforme
    // la longueur du titre. Le texte courant conserve, lui, l'apostrophe
    // typographique.
    const displayTitle = String(project.title || project.name).replaceAll("’", "'");

    if (!project.images || project.images.length === 0) {
      console.warn(`Le projet « ${project.name} » n'a pas d'image.`);
    }

    const paragraphs = (project.description || [])
      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
      .join("");

    const links = project.links || {};
    const linksHtml = [
      renderLink(links.desktop, project.name, false, "version ordinateur"),
      renderLink(links.mobile, project.name, true),
      renderLink(links.pdf, project.name, false),
      renderLink(links.video, project.name, false),
      renderLink(links.linkedin, project.name, false),
    ]
      .filter(Boolean)
      .join("");

    // Taille du titre vertical : la valeur en pixels est convertie en
    // pourcentage de la largeur de la maquette (1512 px) pour rester
    // proportionnelle sur les écrans plus petits.
    const titleSize = Number(project.titleSize) || 130;
    const titleSizeVw = ((titleSize / 1512) * 100).toFixed(3);
    const titleStyle = [
      `--title-size: ${titleSize}px`,
      `--title-size-vw: ${titleSizeVw}vw`,
      `--title-tracking: ${project.titleSpacing || "0.02em"}`,
    ].join("; ");

    const fullName = project.title
      ? `<span class="visually-hidden"> — ${escapeHtml(project.name)}</span>`
      : "";

    let projectClass = "project";
    if (project.portrait) projectClass += " project--portrait";
    if (project.moodboard) projectClass += " project--moodboard";

    const visualContent = project.moodboard
      ? renderMoodboard(project, index === 0)
      : renderGallery(project, index === 0);

    return `
      <article
        class="${projectClass}"
        id="projet-${escapeHtml(project.id)}"
        aria-labelledby="projet-${escapeHtml(project.id)}-titre"
      >
        <div class="project__visual">
          <div class="project__figure">
            ${visualContent}
          </div>

          <div class="project__title-wrap">
            <h3
              class="project__title"
              id="projet-${escapeHtml(project.id)}-titre"
              style="${titleStyle}"
            >${escapeHtml(displayTitle)}${fullName}</h3>
          </div>
        </div>

        <div class="project__content">
          <p class="project__meta">${escapeHtml(project.meta || "")}</p>
          <div class="project__text">${paragraphs}</div>
          ${linksHtml ? `<div class="project__links">${linksHtml}</div>` : ""}
        </div>
      </article>`;
  }

  /* ========================================================================
     GALERIES
     ======================================================================== */

  function initGalleries() {
    const prefersReducedMotion = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

    document.querySelectorAll("[data-gallery]").forEach((gallery) => {
      const scroller = gallery.querySelector(".project__slides");
      const slides = Array.from(gallery.querySelectorAll(".project__slide"));
      const prev = gallery.querySelector("[data-gallery-prev]");
      const next = gallery.querySelector("[data-gallery-next]");
      const count = gallery.querySelector("[data-gallery-count]");

      if (!scroller || !prev || !next || !count || slides.length < 2) {
        return;
      }

      let ticking = false;

      function getCurrentIndex() {
        const left = scroller.getBoundingClientRect().left;
        let bestIndex = 0;
        let bestDistance = Infinity;

        slides.forEach((slide, index) => {
          const distance = Math.abs(slide.getBoundingClientRect().left - left);
          if (distance < bestDistance) {
            bestDistance = distance;
            bestIndex = index;
          }
        });

        return bestIndex;
      }

      function update() {
        ticking = false;
        const atEnd =
          scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth - 2;
        const index = atEnd ? slides.length - 1 : getCurrentIndex();
        count.textContent = `${index + 1} / ${slides.length}`;
        prev.disabled = scroller.scrollLeft <= 2;
        next.disabled = atEnd;

        // Si toutes les images tiennent dans le cadre, les flèches sont inutiles.
        gallery.classList.toggle(
          "project__gallery--static",
          scroller.scrollWidth <= scroller.clientWidth + 2
        );
      }

      function requestUpdate() {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(update);
        }
      }

      function goTo(index) {
        const target = slides[Math.max(0, Math.min(index, slides.length - 1))];
        if (!target) {
          return;
        }

        const delta =
          target.getBoundingClientRect().left - scroller.getBoundingClientRect().left;

        scroller.scrollTo({
          left: scroller.scrollLeft + delta,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      }

      function go(direction) {
        goTo(getCurrentIndex() + direction);
      }

      prev.addEventListener("click", () => go(-1));
      next.addEventListener("click", () => go(1));

      scroller.addEventListener("scroll", requestUpdate, { passive: true });
      scroller.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(-1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          go(1);
        }
      });

      window.addEventListener("resize", requestUpdate, { passive: true });
      window.addEventListener("load", requestUpdate, { once: true });

      update();
    });
  }

  list.innerHTML = PROJECTS.map(renderProject).join("");
  initGalleries();

  // Année automatique dans le footer.
  const year = document.getElementById("current-year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
