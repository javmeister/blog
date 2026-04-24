import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  template: `
    <section class="page">
      <p class="eyebrow">About this setup</p>
      <h1>Static output, server-first structure</h1>
      <p>
        The app keeps Angular SSR enabled so pages can be prerendered at build time,
        but the deployment target is static hosting on GitHub Pages rather than a
        live Node server.
      </p>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .page {
        max-width: 42rem;
        padding: 4rem 0;
      }

      .eyebrow {
        color: #577590;
        font-size: 0.9rem;
        letter-spacing: 0.12em;
        margin: 0 0 0.75rem;
        text-transform: uppercase;
      }

      h1 {
        font-size: clamp(2rem, 6vw, 4rem);
        line-height: 1;
        margin: 0 0 1.25rem;
      }

      p {
        color: #335c67;
        font-size: 1.05rem;
        line-height: 1.7;
        margin: 0;
      }
    `
  ]
})
export class AboutPageComponent {}