export type Project = {
  slug: string
  title: string
  year: string
  category: string
  summary: string
  image: string
  alt: string
  role: string
  duration: string
  team: string
  stack: string[]
  links: { label: string; href: string }[]
  overview: string
  challenge: string
  approach: { title: string; detail: string }[]
  architecture: { layer: string; detail: string }[]
  snippet: { filename: string; code: string }
  outcomes: { value: string; label: string }[]
}

export const projects: Project[] = [
  {
    slug: 'ledger',
    title: 'Ledger',
    year: '2025',
    category: 'Fintech · Web & mobile platform',
    summary: 'Rebuilt the core banking front-end and its GraphQL gateway for 2.4 million customers.',
    image: '/images/work-ledger.png',
    alt: 'Banking app shown on a smartphone resting on a stone surface',
    role: 'Lead full-stack engineer',
    duration: '14 months',
    team: '6 engineers, 2 designers',
    stack: ['TypeScript', 'Next.js', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS'],
    links: [
      { label: 'Live site', href: 'https://example.com' },
      { label: 'Engineering write-up', href: 'https://example.com' },
    ],
    overview:
      'Ledger is the customer-facing banking platform of a mid-sized European retail bank. The legacy app was a decade-old monolith that took eleven seconds to show an account balance on a mid-range phone. I led the rebuild of the web client and the API gateway that sits between it and the core banking system.',
    challenge:
      'The core banking system could not be changed, answered in 800 ms on a good day, and rate-limited aggressively. We needed instant-feeling balances and transactions without ever showing a customer a stale or wrong number.',
    approach: [
      {
        title: 'A typed gateway',
        detail:
          'A GraphQL gateway with a schema generated from the core system contracts, so every field the client asks for is typed end to end.',
      },
      {
        title: 'Read-through caching with versioning',
        detail:
          'Redis caches keyed by account version. Any write invalidates by bumping the version, so cached reads are fast and never wrong.',
      },
      {
        title: 'Streaming UI',
        detail:
          'React Server Components stream the shell instantly, while balances resolve inside Suspense boundaries with skeletons that match the final layout.',
      },
    ],
    architecture: [
      { layer: 'Client', detail: 'Next.js App Router, React Server Components, streaming' },
      { layer: 'Gateway', detail: 'GraphQL Yoga, persisted queries, per-field auth directives' },
      { layer: 'Cache', detail: 'Redis cluster with version-keyed entries' },
      { layer: 'Data', detail: 'PostgreSQL for user preferences, core banking via SOAP adapter' },
      { layer: 'Infra', detail: 'AWS ECS, CloudFront, Terraform-managed' },
    ],
    snippet: {
      filename: 'gateway/cache.ts',
      code: `export async function readThrough<T>(
  accountId: string,
  key: string,
  load: () => Promise<T>,
): Promise<T> {
  const version = await redis.get(\`acct:\${accountId}:v\`) ?? '0'
  const cacheKey = \`acct:\${accountId}:\${version}:\${key}\`

  const hit = await redis.get(cacheKey)
  if (hit) return JSON.parse(hit) as T

  const value = await load()
  await redis.set(cacheKey, JSON.stringify(value), 'EX', 300)
  return value
}`,
    },
    outcomes: [
      { value: '11s → 0.9s', label: 'Time to first balance on mid-range Android' },
      { value: '−72%', label: 'Requests reaching the core banking system' },
      { value: '99.98%', label: 'Gateway availability over the first year' },
    ],
  },
  {
    slug: 'atlas-transit',
    title: 'Atlas Transit',
    year: '2025',
    category: 'Real-time systems · Public API',
    summary: 'A real-time departures API powering 1,200 station displays and a public developer API.',
    image: '/images/work-atlas.png',
    alt: 'Metro station wall with large directional arrows and numerals',
    role: 'Backend engineer',
    duration: '9 months',
    team: '4 engineers',
    stack: ['Go', 'PostgreSQL', 'Redis', 'Kubernetes', 'Docker'],
    links: [{ label: 'API documentation', href: 'https://example.com' }],
    overview:
      'Atlas is the real-time departures service for a city metro and tram network. It ingests vehicle positions every second, predicts arrivals, and serves them to station displays, the official app and third-party developers.',
    challenge:
      'Vehicle feeds arrive out of order, duplicated and occasionally hours late. Displays must never show a train that has already left, and the public API had to survive viral traffic spikes during disruptions.',
    approach: [
      {
        title: 'Event-time processing',
        detail:
          'Each vehicle event is ordered by its own timestamp, not arrival time, and late events are reconciled instead of overwriting fresher state.',
      },
      {
        title: 'Fan-out over SSE',
        detail:
          'Displays subscribe to a station over Server-Sent Events. A single Go process holds tens of thousands of connections with tiny per-connection memory.',
      },
      {
        title: 'Load shedding by tier',
        detail:
          'During spikes, public API keys degrade to cached snapshots first, so station displays are always served live data.',
      },
    ],
    architecture: [
      { layer: 'Ingest', detail: 'Go workers consuming GTFS-RT feeds, deduplicated by vehicle + sequence' },
      { layer: 'State', detail: 'Redis streams and sorted sets per station' },
      { layer: 'History', detail: 'PostgreSQL with time-partitioned tables for punctuality reports' },
      { layer: 'Delivery', detail: 'SSE gateway plus a REST API with per-key quotas' },
      { layer: 'Infra', detail: 'Kubernetes with horizontal autoscaling on connection count' },
    ],
    snippet: {
      filename: 'ingest/reconcile.go',
      code: `func (s *State) Apply(ev VehicleEvent) bool {
	s.mu.Lock()
	defer s.mu.Unlock()

	current, ok := s.vehicles[ev.VehicleID]
	if ok && !ev.Timestamp.After(current.Timestamp) {
		return false // stale or duplicate, keep fresher state
	}

	s.vehicles[ev.VehicleID] = ev
	s.dirty[ev.StopID] = struct{}{}
	return true
}`,
    },
    outcomes: [
      { value: '< 2s', label: 'From vehicle event to station display (p99)' },
      { value: '48k', label: 'Concurrent SSE connections per pod' },
      { value: '0', label: 'Ghost departures reported after launch' },
    ],
  },
  {
    slug: 'northwind-studio',
    title: 'Northwind Studio',
    year: '2024',
    category: 'Web platform · Headless CMS',
    summary: 'A content platform and design-token pipeline for an architecture practice.',
    image: '/images/work-northwind.png',
    alt: 'Stationery set with embossed monogram, business cards and envelope',
    role: 'Solo developer',
    duration: '4 months',
    team: 'Solo, with the studio design team',
    stack: ['TypeScript', 'Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
    links: [
      { label: 'Live site', href: 'https://example.com' },
      { label: 'Source', href: 'https://github.com' },
    ],
    overview:
      'Northwind is an architecture practice whose brand lives in print first. I built their website and a small headless CMS so the team could publish projects without breaking the strict typographic system of their identity.',
    challenge:
      'Editors needed freedom to publish image-heavy case studies, but every page had to honour a rigid grid and type scale. Large original photography also had to load fast on any connection.',
    approach: [
      {
        title: 'Constrained content blocks',
        detail:
          'Editors compose pages from a fixed set of typed blocks validated with Zod, so the grid can never be broken from the CMS.',
      },
      {
        title: 'Tokens from one source',
        detail:
          'Design tokens are exported from Figma and compiled into CSS variables and a TypeScript module at build time.',
      },
      {
        title: 'Static by default',
        detail:
          'Every page is statically generated and revalidated on publish, giving instant loads and near-zero hosting cost.',
      },
    ],
    architecture: [
      { layer: 'Site', detail: 'Next.js with static generation and on-demand revalidation' },
      { layer: 'CMS', detail: 'Custom admin with typed blocks, drafts and scheduled publishing' },
      { layer: 'Data', detail: 'PostgreSQL via Prisma' },
      { layer: 'Media', detail: 'Responsive AVIF/WebP derivatives generated on upload' },
      { layer: 'Hosting', detail: 'Vercel with preview deployments per draft' },
    ],
    snippet: {
      filename: 'cms/blocks.ts',
      code: `export const Block = z.discriminatedUnion('type', [
  z.object({ type: z.literal('heading'), text: z.string().max(80) }),
  z.object({ type: z.literal('text'), body: z.string().max(1200) }),
  z.object({
    type: z.literal('image'),
    assetId: z.string().uuid(),
    span: z.enum(['full', 'wide', 'half']),
  }),
])

export type Block = z.infer<typeof Block>`,
    },
    outcomes: [
      { value: '100', label: 'Lighthouse performance score on project pages' },
      { value: '3 min', label: 'Average time to publish a new case study' },
      { value: '$0', label: 'Monthly hosting cost at current traffic' },
    ],
  },
  {
    slug: 'quorum',
    title: 'Quorum',
    year: '2023',
    category: 'Civic tech · Data platform',
    summary: 'An open data platform that makes municipal budgets queryable by every resident.',
    image: '/images/work-quorum.png',
    alt: 'Monitor displaying a data dashboard with charts in a dim office',
    role: 'Full-stack engineer',
    duration: '7 months',
    team: '3 engineers, 1 data analyst',
    stack: ['Python', 'React', 'PostgreSQL', 'Docker', 'Terraform'],
    links: [
      { label: 'Live platform', href: 'https://example.com' },
      { label: 'Source', href: 'https://github.com' },
    ],
    overview:
      'Quorum publishes the full municipal budget of a city of two million people as open data, with an explorer that lets residents trace any line item from the council decision down to individual contracts.',
    challenge:
      'Source data arrived as hundreds of inconsistent spreadsheets every quarter. Residents needed fast drill-down queries across eight years of history without the city running expensive infrastructure.',
    approach: [
      {
        title: 'Reproducible pipeline',
        detail:
          'A Python ETL pipeline normalises every spreadsheet into a versioned schema, with checksums so each published figure is traceable to its source file.',
      },
      {
        title: 'Pre-aggregated cubes',
        detail:
          'PostgreSQL materialised views pre-compute every drill-down level, so the explorer answers in milliseconds.',
      },
      {
        title: 'Accessible charts',
        detail:
          'Every chart has a keyboard-navigable table equivalent and plain-language summaries for screen readers.',
      },
    ],
    architecture: [
      { layer: 'Pipeline', detail: 'Python, pandas and Great Expectations data checks' },
      { layer: 'Warehouse', detail: 'PostgreSQL with materialised views per aggregation level' },
      { layer: 'API', detail: 'FastAPI with cached, CDN-friendly responses' },
      { layer: 'Explorer', detail: 'React with accessible chart and table views' },
      { layer: 'Infra', detail: 'Docker on city-owned servers, provisioned with Terraform' },
    ],
    snippet: {
      filename: 'pipeline/normalise.py',
      code: `def normalise(sheet: pd.DataFrame, source: Path) -> pd.DataFrame:
    df = sheet.rename(columns=COLUMN_ALIASES)
    df = df[REQUIRED_COLUMNS].dropna(subset=["account_code"])

    df["amount_eur"] = df["amount"].map(parse_amount)
    df["source_sha"] = sha256(source.read_bytes()).hexdigest()

    validate(df, suite="budget_line")
    return df`,
    },
    outcomes: [
      { value: '8 years', label: 'Of budget history published as open data' },
      { value: '40 ms', label: 'Median drill-down query time' },
      { value: '310k', label: 'Residents who explored the budget in year one' },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  return projects[(index + 1) % projects.length]
}
