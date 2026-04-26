import { Component } from '@angular/core';

interface HeroStat {
  value: string;
  label: string;
}

interface FeatureMention {
  name: string;
}

interface ExpertiseItem {
  title: string;
  description: string;
  tags: string[];
}

interface ProjectItem {
  title: string;
  category: string;
  summary: string;
  metrics: string[];
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  stack: string[];
}

interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
}

interface ContactLink {
  label: string;
  value: string;
  href: string;
}

const HERO_STATS: HeroStat[] = [
  { value: '08+', label: 'placeholder years building digital products' },
  { value: '24', label: 'sample launches across web and mobile' },
  { value: '100%', label: 'static, prerender-friendly Angular output' }
];

const FEATURE_MENTIONS: FeatureMention[] = [
  { name: 'Placeholder Journal' },
  { name: 'Studio Notes' },
  { name: 'Frontend Digest' },
  { name: 'Product Weekly' }
];

const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    title: 'Interface Systems',
    description:
      'Placeholder copy for translating product direction into cohesive component systems, interaction rules, and resilient responsive layouts.',
    tags: ['Design systems', 'Accessibility', 'Responsive UI']
  },
  {
    title: 'Frontend Engineering',
    description:
      'Placeholder copy for implementing performant web applications with modern frameworks, strong information architecture, and maintainable state boundaries.',
    tags: ['Angular', 'TypeScript', 'Static SSR']
  },
  {
    title: 'Product Storytelling',
    description:
      'Placeholder copy for turning portfolios, launches, and product surfaces into narrative-driven experiences with clear hierarchy and momentum.',
    tags: ['Content strategy', 'Motion direction', 'Landing pages']
  }
];

const PROJECT_ITEMS: ProjectItem[] = [
  {
    title: 'Atlas Commerce Placeholder',
    category: 'Featured Project',
    summary:
      'Placeholder case-study summary describing a polished multi-surface commerce experience with strong visual hierarchy and conversion-minded interaction design.',
    metrics: ['Placeholder dashboard visuals', 'Static image frame', 'Launch story block']
  },
  {
    title: 'Northstar Platform Concept',
    category: 'Product Design System',
    summary:
      'Placeholder summary for a component-led product platform bringing together editorial marketing pages and authenticated app surfaces.',
    metrics: ['Token system', 'Cross-team handoff', 'Content modules']
  },
  {
    title: 'Signal Mobile Experience',
    category: 'App Experience',
    summary:
      'Placeholder summary for a mobile-first service experience with simplified flows, strong onboarding cues, and scalable UI primitives.',
    metrics: ['Mobile-first flows', 'Service blueprints', 'Prototype-ready layouts']
  }
];

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: 'Lead Frontend Engineer',
    company: 'Placeholder Studio',
    period: '2023 - Present',
    location: 'Remote',
    summary:
      'Placeholder summary for leading UI architecture, mentoring engineering teams, and shipping branded digital products across multiple release cycles.',
    stack: ['Angular', 'Design systems', 'Performance']
  },
  {
    role: 'Senior Product Developer',
    company: 'North Coast Lab',
    period: '2020 - 2023',
    location: 'Hybrid',
    summary:
      'Placeholder summary for building user-facing applications, evolving internal tooling, and aligning product direction with engineering delivery.',
    stack: ['TypeScript', 'SSR', 'UI architecture']
  },
  {
    role: 'Frontend Developer',
    company: 'Signal Workshop',
    period: '2018 - 2020',
    location: 'On-site',
    summary:
      'Placeholder summary for crafting launch sites, customer dashboards, and reusable component patterns while collaborating closely with designers.',
    stack: ['HTML/CSS', 'JavaScript', 'Component libraries']
  }
];

const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    quote:
      'Placeholder testimonial about strong product instincts, reliable delivery, and a rare ability to make complex work feel direct and calm.',
    name: 'Jordan Example',
    title: 'Product Director, Placeholder Studio'
  },
  {
    quote:
      'Placeholder testimonial describing thoughtful collaboration, clear technical judgment, and visuals that feel intentional instead of generic.',
    name: 'Avery Sample',
    title: 'Creative Lead, North Coast Lab'
  },
  {
    quote:
      'Placeholder testimonial focused on frontend rigor, accessibility awareness, and the ability to turn loose ideas into usable interfaces.',
    name: 'Morgan Demo',
    title: 'Founder, Signal Workshop'
  }
];

const CONTACT_LINKS: ContactLink[] = [
  { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
  { label: 'LinkedIn', value: '/in/placeholder-profile', href: '#' },
  { label: 'GitHub', value: '@placeholder-handle', href: '#' }
];

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <section id="home" class="hero section">
      <div class="hero__copy surface surface--ghost">
        <p class="eyebrow">Developer portfolio template</p>
        <h1>Design-forward frontend work, rebuilt for your own story.</h1>
        <p class="summary">
          This homepage recreates the pacing and visual confidence of the reference
          portfolio while keeping every line of copy and every visual asset as an
          obvious placeholder for your future personal information.
        </p>

        <div class="hero__actions">
          <a class="button button--primary" href="#work">Explore placeholder work</a>
          <a class="button button--secondary" href="#contact">Swap in real details later</a>
        </div>

        <dl class="hero__stats" aria-label="Portfolio highlights">
          @for (stat of heroStats; track stat.label) {
            <div>
              <dt>{{ stat.value }}</dt>
              <dd>{{ stat.label }}</dd>
            </div>
          }
        </dl>
      </div>

      <div class="hero__media surface">
        <div class="portrait-placeholder">
          <span>Portrait placeholder</span>
        </div>
        <div class="hero__note">
          <p class="eyebrow">Current direction</p>
          <p>
            Static Angular portfolio with section anchors, editorial contrast, and
            placeholder content ready to be replaced with your own biography, project
            details, and contact links.
          </p>
        </div>
      </div>
    </section>

    <section class="mentions section section--compact" aria-labelledby="mentions-title">
      <div class="section-heading">
        <p class="eyebrow">Credibility strip</p>
        <h2 id="mentions-title">As seen in placeholder publications.</h2>
      </div>

      <div class="mentions__grid surface surface--ghost">
        @for (mention of featureMentions; track mention.name) {
          <span>{{ mention.name }}</span>
        }
      </div>
    </section>

    <section id="expertise" class="section" aria-labelledby="expertise-title">
      <div class="section-heading">
        <p class="eyebrow">Expertise</p>
        <h2 id="expertise-title">A portfolio structure built around what you do, not just where you worked.</h2>
      </div>

      <div class="card-grid">
        @for (item of expertiseItems; track item.title) {
          <article class="surface card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <ul class="tag-list" aria-label="Expertise tags">
              @for (tag of item.tags; track tag) {
                <li>{{ tag }}</li>
              }
            </ul>
          </article>
        }
      </div>
    </section>

    <section id="work" class="section" aria-labelledby="work-title">
      <div class="section-heading">
        <p class="eyebrow">Selected work</p>
        <h2 id="work-title">Project placeholders sized for future case studies.</h2>
      </div>

      <article class="featured-project surface">
        <div class="featured-project__visual">
          <span>Project image placeholder</span>
        </div>

        <div class="featured-project__copy">
          <p class="eyebrow">{{ projectItems[0].category }}</p>
          <h3>{{ projectItems[0].title }}</h3>
          <p>{{ projectItems[0].summary }}</p>
          <ul class="tag-list" aria-label="Featured project highlights">
            @for (metric of projectItems[0].metrics; track metric) {
              <li>{{ metric }}</li>
            }
          </ul>
        </div>
      </article>

      <div class="card-grid card-grid--projects">
        @for (item of projectItems.slice(1); track item.title) {
          <article class="surface card card--project">
            <p class="eyebrow">{{ item.category }}</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.summary }}</p>
            <ul class="tag-list" aria-label="Project highlights">
              @for (metric of item.metrics; track metric) {
                <li>{{ metric }}</li>
              }
            </ul>
          </article>
        }
      </div>
    </section>

    <section id="experience" class="section" aria-labelledby="experience-title">
      <div class="section-heading">
        <p class="eyebrow">Experience</p>
        <h2 id="experience-title">A timeline ready for your actual roles, clients, and results.</h2>
      </div>

      <div class="timeline">
        @for (item of experienceItems; track item.role + item.company) {
          <article class="surface timeline__item">
            <div class="timeline__meta">
              <p>{{ item.period }}</p>
              <span>{{ item.location }}</span>
            </div>
            <div class="timeline__content">
              <h3>{{ item.role }}</h3>
              <p class="timeline__company">{{ item.company }}</p>
              <p>{{ item.summary }}</p>
              <ul class="tag-list" aria-label="Role technologies">
                @for (tag of item.stack; track tag) {
                  <li>{{ tag }}</li>
                }
              </ul>
            </div>
          </article>
        }
      </div>
    </section>

    <section class="section" aria-labelledby="testimonials-title">
      <div class="section-heading">
        <p class="eyebrow">Social proof</p>
        <h2 id="testimonials-title">Testimonials stay as placeholders until you want to personalize them.</h2>
      </div>

      <div class="card-grid">
        @for (item of testimonialItems; track item.name) {
          <blockquote class="surface testimonial">
            <p>“{{ item.quote }}”</p>
            <footer>
              <strong>{{ item.name }}</strong>
              <span>{{ item.title }}</span>
            </footer>
          </blockquote>
        }
      </div>
    </section>

    <section id="contact" class="section section--compact" aria-labelledby="contact-title">
      <article class="contact surface">
        <div class="section-heading section-heading--tight">
          <p class="eyebrow">Contact</p>
          <h2 id="contact-title">Static-friendly contact details that can later become your real call to action.</h2>
        </div>

        <div class="contact__grid">
          @for (item of contactLinks; track item.label) {
            <a class="contact__item" [href]="item.href">
              <span>{{ item.label }}</span>
              <strong>{{ item.value }}</strong>
            </a>
          }
        </div>
      </article>
    </section>

    <footer class="footer">
      <p>Portfolio template for Javier Lerones. Replace every placeholder with real project, bio, and contact content.</p>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-top: 8rem;
      }

      .section {
        padding: 0 0 5rem;
      }

      .section--compact {
        padding-bottom: 4rem;
      }

      .hero {
        align-items: stretch;
        display: grid;
        gap: 1.5rem;
        grid-template-columns: minmax(0, 1.3fr) minmax(18rem, 0.85fr);
        padding-bottom: 4rem;
      }

      .surface {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
        border: 1px solid rgba(226, 179, 65, 0.16);
        border-radius: 2rem;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.24);
      }

      .surface--ghost {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01));
      }

      .hero__copy,
      .hero__media,
      .featured-project,
      .contact {
        padding: clamp(1.5rem, 3vw, 2.5rem);
      }

      .eyebrow {
        color: var(--color-accent);
        font-size: 0.82rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        margin: 0;
        text-transform: uppercase;
      }

      h1,
      h2,
      h3,
      p,
      dl,
      dd,
      dt,
      ul,
      blockquote {
        margin: 0;
      }

      h1,
      h2,
      h3 {
        color: var(--color-text);
        font-family: var(--font-display);
        line-height: 0.95;
      }

      h1 {
        font-size: clamp(3.6rem, 10vw, 7.25rem);
        margin-top: 1rem;
        max-width: 10ch;
      }

      h2 {
        font-size: clamp(2rem, 5vw, 3.5rem);
        margin-top: 0.85rem;
        max-width: 15ch;
      }

      h3 {
        font-size: clamp(1.45rem, 3vw, 2rem);
      }

      p {
        color: var(--color-muted);
        line-height: 1.7;
      }

      .summary {
        font-size: 1.08rem;
        margin-top: 1.5rem;
        max-width: 40rem;
      }

      .hero__actions {
        display: grid;
        gap: 0.9rem;
        grid-template-columns: repeat(auto-fit, minmax(15rem, max-content));
        margin-top: 2rem;
      }

      .button {
        border-radius: 999px;
        display: inline-flex;
        justify-content: center;
        padding: 0.95rem 1.3rem;
        text-decoration: none;
        transition: transform 180ms ease, background-color 180ms ease, color 180ms ease;
      }

      .button:hover,
      .button:focus-visible {
        transform: translateY(-2px);
      }

      .button--primary {
        background: var(--color-accent);
        color: #101010;
        font-weight: 700;
      }

      .button--secondary {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.12);
        color: var(--color-text);
      }

      .hero__stats {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
        margin-top: 2rem;
      }

      .hero__stats div {
        border-top: 1px solid rgba(255, 255, 255, 0.12);
        padding-top: 1rem;
      }

      dt {
        color: var(--color-text);
        font-family: var(--font-display);
        font-size: 2rem;
      }

      dd {
        color: var(--color-muted);
        margin-top: 0.35rem;
      }

      .hero__media {
        display: grid;
        gap: 1.25rem;
      }

      .portrait-placeholder,
      .featured-project__visual {
        align-items: center;
        aspect-ratio: 4 / 5;
        background:
          radial-gradient(circle at top, rgba(226, 179, 65, 0.35), transparent 34%),
          linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 1.5rem;
        display: flex;
        justify-content: center;
        overflow: hidden;
        position: relative;
      }

      .portrait-placeholder::after,
      .featured-project__visual::after {
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.09), transparent);
        content: '';
        inset: 0;
        position: absolute;
        transform: translateX(-100%);
        animation: shimmer 4s linear infinite;
      }

      .portrait-placeholder span,
      .featured-project__visual span {
        color: var(--color-text);
        font-family: var(--font-display);
        font-size: 1.2rem;
        letter-spacing: 0.08em;
        position: relative;
        text-transform: uppercase;
        z-index: 1;
      }

      .hero__note {
        display: grid;
        gap: 0.8rem;
      }

      .section-heading {
        margin-bottom: 1.5rem;
      }

      .section-heading--tight {
        margin-bottom: 2rem;
      }

      .mentions__grid,
      .card-grid,
      .contact__grid {
        display: grid;
        gap: 1rem;
      }

      .mentions__grid {
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
        padding: 1.2rem;
      }

      .mentions__grid span {
        color: var(--color-text);
        font-family: var(--font-display);
        font-size: 1.2rem;
        opacity: 0.84;
        text-align: center;
      }

      .card-grid {
        grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
      }

      .card {
        display: grid;
        gap: 1rem;
        min-height: 100%;
        padding: 1.5rem;
      }

      .tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.7rem;
        list-style: none;
        padding: 0;
      }

      .tag-list li {
        background: rgba(243, 239, 229, 0.08);
        border: 1px solid rgba(243, 239, 229, 0.12);
        border-radius: 999px;
        color: var(--color-text);
        font-size: 0.86rem;
        padding: 0.45rem 0.8rem;
      }

      .featured-project {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: minmax(16rem, 1fr) minmax(0, 1.1fr);
        margin-bottom: 1rem;
      }

      .featured-project__copy {
        display: grid;
        gap: 1rem;
        align-content: center;
      }

      .featured-project__visual {
        aspect-ratio: 16 / 11;
      }

      .timeline {
        display: grid;
        gap: 1rem;
      }

      .timeline__item {
        display: grid;
        gap: 1.25rem;
        grid-template-columns: minmax(9rem, 0.42fr) minmax(0, 1fr);
        padding: 1.5rem;
      }

      .timeline__meta p,
      .timeline__company,
      .testimonial footer span,
      .contact__item span,
      .footer p {
        color: var(--color-muted);
      }

      .timeline__meta span {
        color: var(--color-text);
        display: block;
        margin-top: 0.35rem;
      }

      .timeline__content {
        display: grid;
        gap: 0.9rem;
      }

      .testimonial {
        display: grid;
        gap: 1.5rem;
        padding: 1.5rem;
      }

      .testimonial p {
        color: var(--color-text);
        font-size: 1.02rem;
      }

      .testimonial footer {
        display: grid;
        gap: 0.3rem;
      }

      .contact__grid {
        grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
      }

      .contact__item {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 1.25rem;
        display: grid;
        gap: 0.35rem;
        padding: 1rem;
        text-decoration: none;
      }

      .contact__item strong {
        color: var(--color-text);
        font-size: 1.1rem;
      }

      .footer {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding: 1rem 0 0;
      }

      @keyframes shimmer {
        to {
          transform: translateX(100%);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .portrait-placeholder::after,
        .featured-project__visual::after,
        .button {
          animation: none;
          transition: none;
        }
      }

      @media (max-width: 960px) {
        :host {
          padding-top: 10rem;
        }

        .hero,
        .featured-project,
        .timeline__item {
          grid-template-columns: 1fr;
        }

        h1 {
          max-width: 11ch;
        }
      }

      @media (max-width: 640px) {
        :host {
          padding-top: 11rem;
        }

        .section {
          padding-bottom: 4rem;
        }

        .hero__actions {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class HomePageComponent {
  protected readonly contactLinks = CONTACT_LINKS;
  protected readonly experienceItems = EXPERIENCE_ITEMS;
  protected readonly expertiseItems = EXPERTISE_ITEMS;
  protected readonly featureMentions = FEATURE_MENTIONS;
  protected readonly heroStats = HERO_STATS;
  protected readonly projectItems = PROJECT_ITEMS;
  protected readonly testimonialItems = TESTIMONIAL_ITEMS;
}