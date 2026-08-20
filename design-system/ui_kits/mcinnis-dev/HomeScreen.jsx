const { Button, Kicker, SectionHeader, SlantRule, ProjectCard, PostListItem, Tag } = window.McinnisDevDesignSystem_a1d2f2;

function HomeScreen({ onNavigate }) {
  const S = window.SITE;
  return (
    <div>
      {/* ── hero: oversized name, hatch plate, orange slab rail ── */}
      <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-hairline)' }}>
        <HatchField density={11} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -40, right: '6%', bottom: -40, width: 130, background: 'var(--orange-500)', transform: 'skewX(var(--brand-slant))', opacity: .9 }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -40, right: 'calc(6% + 150px)', bottom: -40, width: 26, background: 'var(--orange-700)', transform: 'skewX(var(--brand-slant))' }} />
        <Container style={{ position: 'relative', paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-9)' }}>
          <div style={{ maxWidth: '62%', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <Kicker icon="map-pin" tone="accent">Michigan · 10+ years in IT</Kicker>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-6xl)', fontWeight: 'var(--weight-bold)', letterSpacing: '-.045em', lineHeight: '.94', color: 'var(--text-display)' }}>
              Nick<br />McInnis
            </h1>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-display)', color: 'var(--orange-400)', lineHeight: 'var(--leading-snug)' }}>
              I build things that work — and keep working.
            </p>
            <p style={{ fontFamily: 'var(--font-prose)', fontSize: 'var(--text-xl)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', maxWidth: 'var(--measure-prose)' }}>
              Printers to M365 tenants, PowerShell to production web apps. Right now I'm deep in agentic engineering — building assistants that do real operational work instead of just answering questions.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
              <Button variant="primary" size="lg" icon="arrow-right" onClick={() => onNavigate('projects')}>See the work</Button>
              <Button variant="secondary" size="lg" onClick={() => onNavigate('about')}>About me</Button>
            </div>
            <div style={{ marginTop: 'var(--space-5)', maxWidth: 620 }}>
              <StatRow items={[['10+', 'Years in IT'], ['2', 'Active projects'], ['M365', 'Home turf'], ['2026', 'Agentic focus']]} />
            </div>
          </div>
        </Container>
      </section>

      {/* ── the work: numbered wedge cards ── */}
      <Container style={{ paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        <SectionHeader kicker="Currently building" title="The work"
          action={<Button variant="ghost" size="sm" icon="arrow-right" onClick={() => onNavigate('projects')}>All projects</Button>} />
        <ProjectCard index={1} featured {...S.projects[0]} description={S.projects[0].summary} href="#" onOpen={() => onNavigate('project')} />
        <ProjectCard index={2} {...S.projects[1]} description={S.projects[1].summary} href="#" onOpen={() => onNavigate('project')} />
      </Container>

      {/* ── writing: orange-wash band ── */}
      <section style={{ position: 'relative', background: 'var(--surface-sunken)', borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
        <SlantRule height={10} density={7} />
        <Container style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <SectionHeader kicker="Recent writing" title="Notes from the build"
            action={<Button variant="ghost" size="sm" icon="arrow-right" onClick={() => onNavigate('blog')}>All posts</Button>} />
          {S.posts.map(p => <PostListItem key={p.id} {...p} onOpen={() => onNavigate('post')} />)}
        </Container>
      </section>

      {/* ── contact strip ── */}
      <Container style={{ paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)' }}>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-subtle)', background: 'var(--surface-card)', padding: 'var(--space-7)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-5)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: -20, right: -10, bottom: -20, width: 90, backgroundImage: 'repeating-linear-gradient(108.4deg, var(--border-subtle) 0 1px, transparent 1px 8px)' }} />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Kicker tone="accent">Get in touch</Kicker>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-display)', color: 'var(--text-display)' }}>Working on something interesting?</h2>
          </div>
          <Button variant="secondary" size="lg" icon="mail" iconPosition="left" href="mailto:nick@mcinnis.dev" style={{ position: 'relative' }}>nick@mcinnis.dev</Button>
        </div>
      </Container>
    </div>
  );
}
Object.assign(window, { HomeScreen });
