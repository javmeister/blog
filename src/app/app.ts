import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <a class="skip-link" href="#main-content">Skip to content</a>

    <div class="shell">
      <header class="shell__header">
        <a href="#home" class="brand" aria-label="Javier Lerones portfolio home">
          Javier Lerones
        </a>

        <nav class="nav" aria-label="Primary">
          @for (item of navItems; track item.href) {
            <a [href]="item.href">{{ item.label }}</a>
          }
        </nav>
      </header>

      <main id="main-content" class="shell__content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100dvh;
      }

      .skip-link {
        background: #f3efe5;
        color: #101010;
        left: 1rem;
        padding: 0.75rem 1rem;
        position: absolute;
        text-decoration: none;
        top: -4rem;
        z-index: 20;
      }

      .skip-link:focus {
        top: 1rem;
      }

      .shell {
        min-height: 100dvh;
      }

      .shell__header {
        align-items: center;
        backdrop-filter: blur(18px);
        background: rgba(10, 10, 10, 0.72);
        border: 1px solid rgba(226, 179, 65, 0.12);
        border-radius: 999px;
        box-sizing: border-box;
        inset: 1rem 1rem auto;
        left: 50%;
        max-width: min(74rem, calc(100% - 2rem));
        padding: 1rem 1.25rem;
        position: sticky;
        top: 1rem;
        transform: translateX(-50%);
        width: calc(100% - 2rem);
        z-index: 10;
      }

      .shell__header,
      .nav {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

      .brand {
        color: var(--color-text);
        font-family: var(--font-display);
        font-size: 1.1rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-decoration: none;
        text-transform: uppercase;
      }

      .nav {
        gap: 1.25rem;
      }

      .nav a {
        color: var(--color-muted);
        font-size: 0.9rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-decoration: none;
      }

      .nav a:hover,
      .nav a:focus-visible {
        color: var(--color-text);
      }

      .shell__content {
        margin: 0 auto;
        max-width: 80rem;
        padding: 0 1.25rem 5rem;
      }

      @media (max-width: 840px) {
        .shell__header {
          border-radius: 1.5rem;
          flex-direction: column;
          gap: 1rem;
          inset: 0.75rem 0.75rem auto;
          transform: translateX(-50%);
          width: calc(100% - 1.5rem);
        }

        .nav {
          flex-wrap: wrap;
          justify-content: center;
        }
      }

      @media (max-width: 640px) {
        .shell__content {
          padding-inline: 1rem;
        }

        .nav {
          gap: 0.75rem 1rem;
        }
      }
    `
  ]
})
export class App {
  protected readonly navItems = NAV_ITEMS;
}
