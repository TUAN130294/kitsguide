export interface Skill {
  name: string;
  description: string;
  kit: 'engineer' | 'marketing' | 'both';
  category: string;
  usedBy: string[];
  hasScripts: boolean;
  icon: string;
}

export const skills: Skill[] = [
  // === AI & MULTIMODAL ===
  {
    name: 'ai-multimodal',
    description: 'Google Gemini API cho xử lý audio, video, images, PDFs. Hỗ trợ transcription, image generation, video analysis.',
    kit: 'both',
    category: 'AI',
    usedBy: ['/cook', '/bootstrap', '/design:generate', '/design:video'],
    hasScripts: true,
    icon: '🤖'
  },
  {
    name: 'ai-artist',
    description: 'Tối ưu prompts cho AI text/image generation. Bao gồm structure, style keywords, negative prompts, chain-of-thought.',
    kit: 'both',
    category: 'AI',
    usedBy: ['/design:generate'],
    hasScripts: false,
    icon: '🎨'
  },
  {
    name: 'sequential-thinking',
    description: 'Extended thinking và structured analysis. Break down complex problems into steps.',
    kit: 'both',
    category: 'AI',
    usedBy: ['/debug', '/ask'],
    hasScripts: true,
    icon: '🧠'
  },

  // === DEVELOPMENT ===
  {
    name: 'backend-development',
    description: 'Node.js, Python, Go, APIs, databases, authentication, OWASP Top 10 security, performance optimization.',
    kit: 'both',
    category: 'Development',
    usedBy: ['/cook', '/code'],
    hasScripts: false,
    icon: '⚙️'
  },
  {
    name: 'frontend-development',
    description: 'React/TypeScript patterns: Suspense, lazy loading, MUI v7, TanStack Router, performance.',
    kit: 'both',
    category: 'Development',
    usedBy: ['/cook', '/code', '/design'],
    hasScripts: false,
    icon: '🖥️'
  },
  {
    name: 'frontend-design',
    description: 'Production-grade UI interfaces. Extract designs từ screenshots, generate creative code.',
    kit: 'both',
    category: 'Development',
    usedBy: ['/design:fast', '/design:good'],
    hasScripts: false,
    icon: '🎯'
  },
  {
    name: 'mobile-development',
    description: 'React Native / Flutter cross-platform development patterns.',
    kit: 'both',
    category: 'Development',
    usedBy: [],
    hasScripts: false,
    icon: '📱'
  },
  {
    name: 'web-frameworks',
    description: 'React, Vue, Svelte, framework comparison và selection guidance.',
    kit: 'both',
    category: 'Development',
    usedBy: [],
    hasScripts: true,
    icon: '🌐'
  },

  // === DATABASE ===
  {
    name: 'databases',
    description: 'MongoDB và PostgreSQL: schema design, queries, aggregation, indexing, backups, replication.',
    kit: 'both',
    category: 'Database',
    usedBy: [],
    hasScripts: true,
    icon: '🗄️'
  },
  {
    name: 'better-auth',
    description: 'Better Auth framework: OAuth, 2FA, passkeys, RBAC, session management.',
    kit: 'both',
    category: 'Database',
    usedBy: [],
    hasScripts: true,
    icon: '🔐'
  },
  {
    name: 'payment-integration',
    description: 'Stripe, PayPal, Polar, Sepay integration: transactions, webhooks, subscriptions.',
    kit: 'both',
    category: 'Database',
    usedBy: ['/integrate:polar', '/integrate:sepay'],
    hasScripts: true,
    icon: '💳'
  },

  // === DEVOPS ===
  {
    name: 'devops',
    description: 'Cloudflare, Docker, GCP, CI/CD, Kubernetes deployment và management.',
    kit: 'both',
    category: 'DevOps',
    usedBy: ['/fix:ci'],
    hasScripts: false,
    icon: '☁️'
  },
  {
    name: 'chrome-devtools',
    description: 'Puppeteer automation, screenshots, network monitoring, web scraping, performance analysis.',
    kit: 'both',
    category: 'DevOps',
    usedBy: ['/bootstrap', '/design:screenshot', '/marketing:init'],
    hasScripts: true,
    icon: '🔧'
  },

  // === QUALITY & DEBUGGING ===
  {
    name: 'debugging',
    description: 'Systematic debugging: root cause investigation, backward tracing, multi-layer validation.',
    kit: 'both',
    category: 'Quality',
    usedBy: ['/debug', '/fix', '/code'],
    hasScripts: false,
    icon: '🐛'
  },
  {
    name: 'code-review',
    description: 'Code quality verification, technical rigor, verification gates.',
    kit: 'both',
    category: 'Quality',
    usedBy: ['/code', '/cook'],
    hasScripts: false,
    icon: '👁️'
  },

  // === PLANNING & DOCS ===
  {
    name: 'planning',
    description: 'Technical planning: decomposition, working backwards, second-order thinking, capacity planning.',
    kit: 'both',
    category: 'Planning',
    usedBy: ['/plan', '/plan:fast', '/plan:hard'],
    hasScripts: false,
    icon: '📋'
  },
  {
    name: 'brainstorming',
    description: '5-phase brainstorming process: Define → Explore → Evaluate → Select → Plan.',
    kit: 'both',
    category: 'Planning',
    usedBy: ['/brainstorm'],
    hasScripts: false,
    icon: '💡'
  },
  {
    name: 'research',
    description: 'Technology research: query fan-out, source verification, trend analysis.',
    kit: 'both',
    category: 'Planning',
    usedBy: ['/ask', '/plan'],
    hasScripts: false,
    icon: '🔬'
  },
  {
    name: 'problem-solving',
    description: 'Structured problem analysis: root cause, solution brainstorming.',
    kit: 'both',
    category: 'Planning',
    usedBy: [],
    hasScripts: false,
    icon: '🧩'
  },
  {
    name: 'docs-seeker',
    description: 'Automated documentation search via llms.txt và context7. Fetch latest library docs.',
    kit: 'both',
    category: 'Planning',
    usedBy: ['/docs:llms', '/skill:create', '/command:create'],
    hasScripts: true,
    icon: '📖'
  },
  {
    name: 'repomix',
    description: 'Codebase compaction và summarization. Generate XML summary for context.',
    kit: 'both',
    category: 'Planning',
    usedBy: ['/docs:init', '/docs:summarize'],
    hasScripts: true,
    icon: '📦'
  },

  // === DESIGN ===
  {
    name: 'design',
    description: 'Design entry point: routes đến brand-guidelines, design-system, hoặc ui-styling.',
    kit: 'both',
    category: 'Design',
    usedBy: ['/design'],
    hasScripts: false,
    icon: '🎨'
  },
  {
    name: 'design-system',
    description: 'Token architecture, component specs: CSS variables, spacing/typography scales.',
    kit: 'both',
    category: 'Design',
    usedBy: ['/design', '/cook', '/bootstrap', '/slides:create'],
    hasScripts: false,
    icon: '🎯'
  },
  {
    name: 'ui-styling',
    description: 'CSS styling, design tokens implementation, responsive design patterns.',
    kit: 'both',
    category: 'Design',
    usedBy: ['/design', '/fix:ui'],
    hasScripts: true,
    icon: '🖌️'
  },
  {
    name: 'ui-ux-pro-max',
    description: 'Advanced UX/UI design: premium patterns, interaction design, accessibility.',
    kit: 'both',
    category: 'Design',
    usedBy: ['/design:good'],
    hasScripts: false,
    icon: '✨'
  },
  {
    name: 'threejs',
    description: '3D graphics với Three.js: visualization, webGL, interactive graphics.',
    kit: 'both',
    category: 'Design',
    usedBy: ['/design:3d'],
    hasScripts: false,
    icon: '🎮'
  },
  {
    name: 'mermaidjs-v11',
    description: 'Diagram generation: flowcharts, sequence diagrams, graphs.',
    kit: 'both',
    category: 'Design',
    usedBy: [],
    hasScripts: false,
    icon: '📊'
  },
  {
    name: 'media-processing',
    description: 'Image/video/audio processing: format conversion, optimization, editing.',
    kit: 'both',
    category: 'Design',
    usedBy: ['/cook'],
    hasScripts: true,
    icon: '🎬'
  },

  // === MARKETING ===
  {
    name: 'copywriting',
    description: 'Conversion copywriting formulas: AIDA, PAS, BAB, 4Ps, headlines, CTAs.',
    kit: 'marketing',
    category: 'Marketing',
    usedBy: ['/copy:formula', '/email', '/write:fast', '/write:good'],
    hasScripts: false,
    icon: '✍️'
  },
  {
    name: 'brand-guidelines',
    description: 'Brand voice, visual identity, messaging frameworks, asset management.',
    kit: 'marketing',
    category: 'Marketing',
    usedBy: ['/brand:update', '/design', '/copy:formula'],
    hasScripts: true,
    icon: '🏷️'
  },
  {
    name: 'campaign-management',
    description: 'Campaign planning, execution, multi-channel coordination, budget management.',
    kit: 'marketing',
    category: 'Marketing',
    usedBy: ['/campaign', '/funnel'],
    hasScripts: false,
    icon: '📣'
  },
  {
    name: 'email-marketing',
    description: 'Email campaigns, sequences, automation flows, A/B testing, send-time optimization.',
    kit: 'marketing',
    category: 'Marketing',
    usedBy: ['/email', '/email:flow', '/email:sequence'],
    hasScripts: false,
    icon: '📧'
  },
  {
    name: 'social-media',
    description: 'Multi-platform content, content calendars, engagement analysis, trend research.',
    kit: 'marketing',
    category: 'Marketing',
    usedBy: ['/social'],
    hasScripts: false,
    icon: '📱'
  },
  {
    name: 'seo-optimization',
    description: 'Technical SEO, keyword research, content optimization, JSON+LD schemas.',
    kit: 'marketing',
    category: 'Marketing',
    usedBy: ['/seo', '/competitor', '/write:blog', '/write:audit'],
    hasScripts: false,
    icon: '🔎'
  },
  {
    name: 'content-marketing',
    description: 'Content strategy, editorial calendars, content pillar mapping, topic clusters.',
    kit: 'marketing',
    category: 'Marketing',
    usedBy: ['/persona', '/competitor'],
    hasScripts: false,
    icon: '📝'
  },
  {
    name: 'analytics',
    description: 'Marketing analytics, KPI tracking, dashboards, attribution analysis.',
    kit: 'marketing',
    category: 'Marketing',
    usedBy: ['/analyze', '/funnel'],
    hasScripts: false,
    icon: '📈'
  },
  {
    name: 'creativity',
    description: 'Creative direction, style selection, color psychology, visual trends.',
    kit: 'marketing',
    category: 'Marketing',
    usedBy: ['/campaign', '/email', '/social', '/design'],
    hasScripts: false,
    icon: '🎭'
  },
  {
    name: 'ads-management',
    description: 'Google/Meta/LinkedIn/TikTok Ads: ad copy, targeting, budget optimization, ROAS.',
    kit: 'marketing',
    category: 'Marketing',
    usedBy: [],
    hasScripts: false,
    icon: '📢'
  },
  {
    name: 'affiliate-marketing',
    description: 'Affiliate programs, KOL partnerships, commission structures, fraud prevention.',
    kit: 'marketing',
    category: 'Marketing',
    usedBy: [],
    hasScripts: false,
    icon: '🤝'
  },
  {
    name: 'gamification-marketing',
    description: 'Gamified campaigns: points, badges, leaderboards, streaks, challenges.',
    kit: 'marketing',
    category: 'Marketing',
    usedBy: [],
    hasScripts: false,
    icon: '🎮'
  },
  {
    name: 'video-production',
    description: 'Video creation, scripts, storyboards, editing workflows.',
    kit: 'marketing',
    category: 'Marketing',
    usedBy: ['/design:video'],
    hasScripts: false,
    icon: '🎥'
  },
  {
    name: 'youtube-handling',
    description: 'YouTube integration, video marketing, content repurposing.',
    kit: 'marketing',
    category: 'Marketing',
    usedBy: [],
    hasScripts: false,
    icon: '▶️'
  },

  // === UTILITIES & INFRASTRUCTURE ===
  {
    name: 'assets-organizing',
    description: 'Asset management: organize outputs by topics, date format, slugs.',
    kit: 'marketing',
    category: 'Infrastructure',
    usedBy: ['/campaign', '/email', '/funnel', '/persona', '/seo', '/social', '/competitor'],
    hasScripts: false,
    icon: '📁'
  },
  {
    name: 'content-hub',
    description: 'Browser-based asset gallery: visual grid, filter/search, brand context sidebar.',
    kit: 'marketing',
    category: 'Infrastructure',
    usedBy: ['/hub'],
    hasScripts: true,
    icon: '🖼️'
  },
  {
    name: 'marketing-dashboard',
    description: 'Marketing analytics dashboard: real-time metrics, performance tracking.',
    kit: 'marketing',
    category: 'Infrastructure',
    usedBy: ['/dashboard', '/hub'],
    hasScripts: true,
    icon: '📊'
  },
  {
    name: 'plans-kanban',
    description: 'Plan visualization: kanban board với task cards, progress bars, timeline.',
    kit: 'both',
    category: 'Infrastructure',
    usedBy: ['/kanban'],
    hasScripts: true,
    icon: '📋'
  },
  {
    name: 'markdown-novel-viewer',
    description: 'Markdown file viewer với narrative visualization.',
    kit: 'both',
    category: 'Infrastructure',
    usedBy: ['/preview'],
    hasScripts: true,
    icon: '📄'
  },
  {
    name: 's3-client',
    description: 'S3-compatible storage: upload, sync, list, URL generation.',
    kit: 'marketing',
    category: 'Infrastructure',
    usedBy: ['/storage:upload', '/storage:sync', '/storage:list', '/storage:url'],
    hasScripts: true,
    icon: '💾'
  },

  // === MANAGEMENT ===
  {
    name: 'skill-creator',
    description: 'Skill definition và documentation: create SKILL.md, references.',
    kit: 'both',
    category: 'Management',
    usedBy: ['/skill:create', '/skill:update'],
    hasScripts: false,
    icon: '🛠️'
  },
  {
    name: 'kit-builder',
    description: 'ClaudeKit component creation: skills, agents, commands, workflows.',
    kit: 'marketing',
    category: 'Management',
    usedBy: ['/skill:create'],
    hasScripts: false,
    icon: '🧰'
  },
  {
    name: 'claude-code',
    description: 'Claude Code setup: installation, slash commands, MCP servers, hooks.',
    kit: 'both',
    category: 'Management',
    usedBy: ['/skill:create', '/command:create'],
    hasScripts: false,
    icon: '🤖'
  },
  {
    name: 'mcp-builder',
    description: 'MCP server development: Model Context Protocol, external service integration.',
    kit: 'both',
    category: 'Management',
    usedBy: [],
    hasScripts: false,
    icon: '🔌'
  },
  {
    name: 'mcp-management',
    description: 'MCP server operations: tool execution, server coordination.',
    kit: 'both',
    category: 'Management',
    usedBy: ['/use-mcp'],
    hasScripts: true,
    icon: '⚡'
  },
  {
    name: 'context-engineering',
    description: 'Context optimization cho AI conversations.',
    kit: 'both',
    category: 'Management',
    usedBy: [],
    hasScripts: false,
    icon: '🧬'
  },

  // === INTEGRATIONS ===
  {
    name: 'shopify',
    description: 'Shopify platform: e-commerce, theme development, store optimization.',
    kit: 'both',
    category: 'Integration',
    usedBy: [],
    hasScripts: true,
    icon: '🛒'
  },
  {
    name: 'google-adk-python',
    description: 'Google Ads API (Python): campaign management, bid optimization.',
    kit: 'both',
    category: 'Integration',
    usedBy: [],
    hasScripts: true,
    icon: '📊'
  },
];

export const skillCategories = [
  { id: 'AI', name: 'AI & Multimodal', color: 'purple' },
  { id: 'Development', name: 'Development', color: 'blue' },
  { id: 'Database', name: 'Database & Auth', color: 'green' },
  { id: 'DevOps', name: 'DevOps', color: 'orange' },
  { id: 'Quality', name: 'Quality & Debugging', color: 'red' },
  { id: 'Planning', name: 'Planning & Research', color: 'cyan' },
  { id: 'Design', name: 'Design', color: 'pink' },
  { id: 'Marketing', name: 'Marketing', color: 'yellow' },
  { id: 'Infrastructure', name: 'Infrastructure', color: 'slate' },
  { id: 'Management', name: 'Management', color: 'indigo' },
  { id: 'Integration', name: 'Integration', color: 'teal' },
];
