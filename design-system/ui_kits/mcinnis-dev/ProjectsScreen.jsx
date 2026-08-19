const { SectionHeader, ProjectCard, Kicker, SlantRule } = window.McinnisDevDesignSystem_a1d2f2;

function ProjectsScreen({ onNavigate }) {
  const S = window.SITE;
  return (
    <div>
      <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-hairline)' }}>
        <HatchField density={11} />
        <Container style={{ position: 'relative', paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-7)' }}>
          <Kicker tone="accent">Projects</Kicker>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-5xl)', fontWeight: 'var(--weight-bold)', letterSpacing: '-.04em', lineHeight: 'var(--leading-tight)', color: 'var(--text-display)', marginTop: 'var(--space-3)' }}>Things I'm building</h1>
          <p style={{ fontFamily: 'var(--font-prose)', fontSize: 'var(--text-xl)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', maxWidth: 'var(--measure-prose)', marginTop: 'var(--space-4)' }}>
            Shipped, in flight, and retired. The failures stay up too — they're part of how I learn.
          </p>
        </Container>
      </section>

      <Container style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-10)', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <SectionHeader kicker="Active" title="In flight" />
          {S.projects.map((p, i) => <ProjectCard key={p.id} index={i + 1} featured={i === 0} {...p} description={p.summary} href="#" onOpen={() => onNavigate('project')} />)}
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <SectionHeader kicker="Archived" title="Retired experiments" />
          {S.archived.map((p, i) => <ProjectCard key={p.id} index={S.projects.length + i + 1} {...p} description={p.summary} href="#" onOpen={() => onNavigate('project')} />)}
        </section>

        <section style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-card)', border: '1px dashed var(--border-strong)', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <SlantRule height={8} density={9} style={{ position: 'absolute', inset: '0 0 auto 0' }} />
          <Kicker>More coming</Kicker>
          <p style={{ fontFamily: 'var(--font-prose)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', maxWidth: 'var(--measure-prose)' }}>
            Ten-plus years produces a lot of half-documented work — web apps, desktop tools, automations, M365 tenancy plumbing. The interesting ones get written up here over time.
          </p>
        </section>
      </Container>
    </div>
  );
}
Object.assign(window, { ProjectsScreen });
