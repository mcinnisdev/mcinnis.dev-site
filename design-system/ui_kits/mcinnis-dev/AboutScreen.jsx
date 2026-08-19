const { TextLink, Card, Kicker, IconButton, SlantRule, Icon } = window.McinnisDevDesignSystem_a1d2f2;

function AboutScreen({ onNavigate }) {
  return (
    <div>
      <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-hairline)' }}>
        <HatchField density={11} />
        <Container style={{ position: 'relative', paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-8)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '280px minmax(0,1fr)', gap: 'var(--space-8)', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <PortraitSlot />
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <IconButton icon="github" label="GitHub" variant="outline" href="https://github.com/mcinnisdev" />
                <IconButton icon="mail" label="Email" variant="outline" href="mailto:nick@mcinnis.dev" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <Kicker tone="accent">Nick McInnis · Michigan</Kicker>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-bold)', letterSpacing: '-.04em', lineHeight: 'var(--leading-tight)', color: 'var(--text-display)' }}>
                Ten years of fixing it,<br />then building it properly.
              </h1>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', fontFamily: 'var(--font-prose)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)', maxWidth: 'var(--measure-prose)' }}>
                <p>I've been working in IT for over 10 years. I've touched just about everything — printers, M365 administration, network infrastructure, automations, complex web and desktop applications, and a lot of things in between that I'm probably forgetting.</p>
                <p>These days I'm most interested in building things that actually work and last: practical tools, useful automations, and infrastructure that makes other work easier. I do a fair amount of work in the agentic AI space too, building assistants that do real operational work rather than just answer questions.</p>
                <p>This site is a landing pad for the kind of work I do. Some of it is current, some of it is archived experiments — both stay here because both are part of how I learn. The <TextLink href="#" onClick={e => { e.preventDefault(); onNavigate('projects'); }}>projects page</TextLink> has the details.</p>
              </div>
              <StatRow items={[['10+', 'Years in IT'], ['M365', 'Home turf'], ['Michigan', 'Based in']]} />
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
Object.assign(window, { AboutScreen });
