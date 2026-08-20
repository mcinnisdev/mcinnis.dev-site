const { Kicker, StatusBadge, Tag, Button, Card, Callout, TextLink, SlantRule } = window.McinnisDevDesignSystem_a1d2f2;

function ProjectDetailScreen({ onNavigate }) {
  const p = window.SITE.projects[0];
  const [name, ...restParts] = p.title.split(' — ');
  return (
    <div>
      <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-hairline)' }}>
        <HatchField density={11} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -40, right: '4%', bottom: -40, width: 96, background: 'var(--orange-500)', transform: 'skewX(var(--brand-slant))', opacity: .85 }} />
        <Container style={{ position: 'relative', paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Button variant="ghost" size="sm" icon="arrow-left" iconPosition="left" onClick={() => onNavigate('projects')} style={{ alignSelf: 'flex-start', marginLeft: 'calc(var(--space-4) * -1)' }}>All projects</Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-medium)', color: 'var(--orange-400)' }}>01</span>
            <StatusBadge status={p.status} />
            <Kicker>Internal tool · Castle Rock Sky · 2025</Kicker>
          </div>
          <div style={{ maxWidth: '68%' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-5xl)', fontWeight: 'var(--weight-bold)', letterSpacing: '-.04em', lineHeight: '.98', color: 'var(--text-display)' }}>{name}</h1>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-regular)', color: 'var(--text-muted)', letterSpacing: 'var(--tracking-tight)', marginTop: 'var(--space-2)' }}>{restParts.join(' — ')}</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>{p.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
        </Container>
      </section>

      <Container style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-10)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 300px', gap: 'var(--space-8)' }}>
          <article style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', fontFamily: 'var(--font-prose)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)', maxWidth: 'var(--measure-prose)' }}>
            <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-display)' }}>{p.summary}</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', marginTop: 'var(--space-3)', color: 'var(--text-display)' }}>What it does</h2>
            <p>SkyOps pulls the pieces of an MSP toolchain into one operational view: tenant health from Graph, ticket volume, monitoring alerts, and billing reconciliation. Reports that used to be assembled by hand each month are generated on a schedule, and the common remediations run themselves.</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', marginTop: 'var(--space-3)', color: 'var(--text-display)' }}>How it's built</h2>
            <p>Azure Functions handle the scheduled and event-driven work; an Azure Static Web App serves the operator UI. Authentication and tenant access run through Entra, and everything that touches M365 goes through Graph — or PowerShell, where Graph has gaps.</p>
            <Callout tone="note" title="Internal tool">SkyOps runs inside Castle Rock Sky, so there's no public demo. The write-ups here cover architecture and the automation patterns.</Callout>
            <p>Source and deeper notes: <TextLink href="https://github.com/mcinnisdev" external>github.com/mcinnisdev</TextLink>.</p>
          </article>

          <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', position: 'sticky', top: 'calc(var(--nav-height) + var(--space-5))', alignSelf: 'start' }}>
            <Card variant="sunken" padding="var(--space-4)">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {[['Status', 'Active'], ['Role', 'Service Desk Manager'], ['Org', 'Castle Rock Sky'], ['Since', '2025'], ['Stack', 'Azure · Graph · PS']].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>
                    <span style={{ color: 'var(--text-meta)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)' }}>{k}</span>
                    <span style={{ color: 'var(--text-body)' }}>{v}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card variant="accent" padding="var(--space-4)">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <Kicker tone="accent">Related writing</Kicker>
                {window.SITE.posts.map(post => (
                  <a key={post.id} href="#" onClick={e => { e.preventDefault(); onNavigate('post'); }} style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)', color: 'var(--text-display)', textDecoration: 'none', lineHeight: 'var(--leading-snug)' }}>{post.title}</a>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </Container>
    </div>
  );
}
Object.assign(window, { ProjectDetailScreen });
