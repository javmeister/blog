import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <section class="hero">
      <p class="eyebrow">Static SSR smoke test</p>
      <h1>Plain Angular 21 blog shell</h1>
      <p class="summary">
        This initial page is intentionally minimal so the prerendered GitHub Pages
        deployment can be validated before any blog-specific design or content work.
      </p>
    </section>

    <section class="details">
      <article>
        <h2>What is wired up</h2>
        <p>Standalone routing, static prerendered output, and SSR-safe starter content.</p>
      </article>

      <article>
        <h2>What comes next</h2>
        <p>Real blog layouts, content structure, and richer page components after deployment is proven.</p>
      </article>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .hero {
        padding: 4rem 0 2rem;
      }

      .eyebrow {
        color: #577590;
        font-size: 0.9rem;
        letter-spacing: 0.12em;
        margin: 0 0 0.75rem;
        text-transform: uppercase;
      }

      h1 {
        font-size: clamp(2.5rem, 7vw, 5rem);
        line-height: 0.95;
        margin: 0;
        max-width: 12ch;
      }

      h2 {
        margin-top: 0;
      }

      .summary,
      .details p {
        color: #335c67;
        font-size: 1.05rem;
        line-height: 1.7;
      }

      .summary {
        margin-top: 1.5rem;
        max-width: 40rem;
      }

      .details {
        display: grid;
        gap: 1.25rem;
        grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
        margin-top: 2rem;
      }

      article {
        background: rgba(255, 255, 255, 0.72);
        border: 1px solid rgba(51, 92, 103, 0.12);
        border-radius: 1rem;
        padding: 1.5rem;
      }
    `
  ]
})
export class HomePageComponent {}