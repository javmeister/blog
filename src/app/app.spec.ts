import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render portfolio navigation and sections', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/');
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.brand')?.textContent).toContain('Javier Lerones');
    expect(compiled.querySelector('nav[aria-label="Primary"] a[href="#work"]')?.textContent).toContain('Work');
    expect(compiled.querySelector('#home h1')?.textContent).toContain('Design-forward frontend work');
    expect(compiled.querySelector('#contact h2')?.textContent).toContain('Static-friendly contact details');
  });
});
