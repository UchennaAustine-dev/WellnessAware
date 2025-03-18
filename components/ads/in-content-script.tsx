"use client";

import { useEffect } from "react";

export function InContentScript() {
  useEffect(() => {
    // Find the in-content ad placeholders and inject ads
    const adPlaceholders = document.querySelectorAll('[id^="in-content-ad-"]');

    adPlaceholders.forEach((placeholder, index) => {
      // Create a container for the ad
      const adContainer = document.createElement("div");
      adContainer.className = "my-8 flex justify-center";

      // Create a label
      const label = document.createElement("div");
      label.className = "text-xs text-muted-foreground mb-1 text-center";
      label.textContent = "Advertisement";

      // Create the ad element
      const adElement = document.createElement("div");
      adElement.innerHTML = `
        <script type="text/javascript">(function(a) { if (!document.getElementById(a)) { const s = document.createElement("script"); s.id = a; s.async = true; s.src = ["https://fstatic.netpub.media/static/", a, ".min.js?", Date.now()].join(""); document.head.appendChild(s); } })("6ab7f04dbd574119581a67a94b51cec0");</script>
        <ins class="adv-6ab7f04dbd574119581a67a94b51cec0" data-sizes-desktop="200x200,250x250,300x250,336x280" data-sizes-mobile="200x200,250x250,300x250,336x280" data-slot="${
          index + 1
        }"></ins>
      `;

      // Assemble the ad container
      adContainer.appendChild(label);
      adContainer.appendChild(adElement);

      // Replace the placeholder with the ad
      placeholder.parentNode?.replaceChild(adContainer, placeholder);
    });
  }, []);

  return null;
}
