import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="shell">
      <header class="shell__header">
        <a routerLink="/" class="brand">Javier Lerones</a>

        <nav class="nav" aria-label="Primary">
          <a
            routerLink="/"
            routerLinkActive="is-active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            Home
          </a>
          <a routerLink="/about" routerLinkActive="is-active">About</a>
        </nav>
      </header>

      <main class="shell__content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [
    `
      :host {
        color: #13293d;
        display: block;
        min-height: 100dvh;
      }

      .shell {
        min-height: 100dvh;
        background:
          radial-gradient(circle at top left, rgba(161, 227, 255, 0.5), transparent 28%),
          linear-gradient(180deg, #f8fbff 0%, #eef4f7 100%);
      }

      .shell__header {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 64rem;
        padding: 1.5rem;
      }

      .brand {
        color: inherit;
        font-size: 1.125rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-decoration: none;
        text-transform: uppercase;
      }

      .nav {
        display: flex;
        gap: 1rem;
      }

      .nav a {
        border-bottom: 2px solid transparent;
        color: #335c67;
        padding-bottom: 0.2rem;
        text-decoration: none;
      }

      .nav a.is-active {
        border-bottom-color: #335c67;
      }

      .shell__content {
        margin: 0 auto;
        max-width: 64rem;
        padding: 1.5rem 1.5rem 4rem;
      }

      @media (max-width: 640px) {
        .shell__header {
          align-items: flex-start;
          flex-direction: column;
          gap: 1rem;
        }
      }
    `
  ]
})
export class App {}
