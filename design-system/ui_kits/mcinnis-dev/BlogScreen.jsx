const { SectionHeader, PostListItem, Kicker } = window.McinnisDevDesignSystem_a1d2f2;

function BlogScreen({ onNavigate }) {
  return (
    <div>
      <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-hairline)' }}>
        <HatchField density={11} />
        <Container style={{ position: 'relative', paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-7)' }}>
          <Kicker tone="accent">Writing</Kicker>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-5xl)', fontWeight: 'var(--weight-bold)', letterSpacing: '-.04em', lineHeight: 'var(--leading-tight)', color: 'var(--text-display)', marginTop: 'var(--space-3)' }}>Notes from the build</h1>
          <p style={{ fontFamily: 'var(--font-prose)', fontSize: 'var(--text-xl)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', maxWidth: 'var(--measure-prose)', marginTop: 'var(--space-4)' }}>
            Automation, agentic engineering, and the occasional detour into IT operations.
          </p>
        </Container>
      </section>
      <Container width="var(--container-prose)" style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-10)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        <div>{window.SITE.posts.map(p => <PostListItem key={p.id} {...p} onOpen={() => onNavigate('post')} />)}</div>
        <Kicker>Older posts land here as they're written</Kicker>
      </Container>
    </div>
  );
}

function PostScreen({ onNavigate }) {
  const post = window.SITE.posts[1];
  const { Button, Tag, Callout, TextLink } = window.McinnisDevDesignSystem_a1d2f2;
  return (
    <div>
      <Container width="var(--container-prose)" style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <Button variant="ghost" size="sm" icon="arrow-left" iconPosition="left" onClick={() => onNavigate('blog')} style={{ alignSelf: 'flex-start', marginLeft: 'calc(var(--space-4) * -1)' }}>All posts</Button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-meta)' }}>
          <span>{post.date}</span><span style={{ color: 'var(--text-accent)' }}>{post.project}</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-bold)', letterSpacing: '-.04em', lineHeight: 'var(--leading-snug)', color: 'var(--text-display)' }}>{post.title}</h1>
      </Container>
      <Container width="var(--container-prose)" style={{ paddingBottom: 'var(--space-10)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        <article style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', fontFamily: 'var(--font-prose)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)' }}>
          <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-display)' }}>{post.excerpt}</p>
          <p>Every site Ink builds reads its look from one file of CSS custom properties. Colours, type families, the spacing scale, radii — all of it sits in a single token sheet that the templates reference and never hard-code.</p>
          <Callout tone="accent" title="The practical upshot">Rebranding a site is editing one file. No template archaeology, no find-and-replace across partials.</Callout>
          <p>The trick is discipline about aliases. Base values name the raw material; semantic aliases name the job. Templates only ever reference the job, which is what makes a swap safe.</p>
          <p>The full token sheet ships with the starter — see <TextLink href="https://github.com/mcinnisdev" external>the repo</TextLink>.</p>
        </article>
        <div style={{ display: 'flex', gap: 'var(--space-2)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-hairline)' }}>
          <Tag>Eleventy v3</Tag><Tag>Design tokens</Tag><Tag tone="accent">ink</Tag>
        </div>
      </Container>
    </div>
  );
}
Object.assign(window, { BlogScreen, PostScreen });
