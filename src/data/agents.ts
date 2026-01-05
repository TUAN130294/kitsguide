export interface Agent {
  name: string;
  role: string;
  description: string;
  kit: 'engineer' | 'marketing' | 'both';
  capabilities: string[];
  usedBy: string[];
  icon: string;
}

export const agents: Agent[] = [
  // === CORE PLANNING AGENTS ===
  {
    name: 'planner',
    role: 'Kiến trúc sư kỹ thuật',
    description: 'Nghiên cứu và tạo kế hoạch triển khai toàn diện. Phân tích trade-offs kiến trúc, spawn nhiều researcher agents song song.',
    kit: 'both',
    capabilities: [
      'Nghiên cứu cách tiếp cận kỹ thuật',
      'Tạo kế hoạch triển khai chi tiết',
      'Phân tích trade-offs kiến trúc',
      'Điều phối researcher agents',
      'Đánh giá rủi ro và khả thi'
    ],
    usedBy: ['/plan', '/cook', '/bootstrap', '/skill:plan'],
    icon: '📐'
  },
  {
    name: 'researcher',
    role: 'Chuyên gia nghiên cứu',
    description: 'Điều tra công nghệ, frameworks và best practices. Phân tích solutions hiện có và đưa ra recommendations.',
    kit: 'both',
    capabilities: [
      'Nghiên cứu công nghệ mới',
      'Phân tích competitive solutions',
      'Tìm best practices',
      'Đánh giá packages/libraries',
      'Tổng hợp findings chi tiết'
    ],
    usedBy: ['/plan', '/cook', '/bootstrap', '/competitor', '/persona'],
    icon: '🔬'
  },

  // === DEVELOPMENT AGENTS ===
  {
    name: 'fullstack-developer',
    role: 'Lập trình viên fullstack',
    description: 'Thực thi các phases triển khai từ parallel plans. Xử lý backend, frontend và infrastructure với file ownership boundaries.',
    kit: 'engineer',
    capabilities: [
      'Backend development (Node.js, APIs)',
      'Frontend development (React, TypeScript)',
      'Database integration',
      'Infrastructure setup',
      'Parallel execution với strict boundaries'
    ],
    usedBy: ['/code:parallel', '/cook:auto:parallel'],
    icon: '💻'
  },
  {
    name: 'tester',
    role: 'QA Engineer',
    description: 'Tạo và chạy comprehensive test suites. Validate functionality, performance và cross-platform compatibility.',
    kit: 'both',
    capabilities: [
      'Viết unit/integration/e2e tests',
      'Phân tích test coverage',
      'Performance validation',
      'Cross-platform testing',
      'Report quality metrics'
    ],
    usedBy: ['/test', '/code', '/cook', '/bootstrap'],
    icon: '🧪'
  },
  {
    name: 'code-reviewer',
    role: 'Code Quality Expert',
    description: 'Phân tích code quality, enforce standards, identify security vulnerabilities theo OWASP Top 10.',
    kit: 'both',
    capabilities: [
      'Code quality analysis',
      'Security vulnerability scanning',
      'Performance review',
      'Standards enforcement',
      'Improvement recommendations'
    ],
    usedBy: ['/code', '/cook', '/bootstrap'],
    icon: '👁️'
  },
  {
    name: 'debugger',
    role: 'Chuyên gia Debug',
    description: 'Phân tích logs, diagnose performance bottlenecks, investigate CI/CD issues và tìm root cause.',
    kit: 'both',
    capabilities: [
      'Log analysis',
      'Performance profiling',
      'CI/CD troubleshooting',
      'Root cause analysis',
      'Error diagnosis'
    ],
    usedBy: ['/debug', '/fix', '/fix:logs', '/fix:ci'],
    icon: '🔍'
  },

  // === DOCUMENTATION & PROJECT AGENTS ===
  {
    name: 'docs-manager',
    role: 'Technical Writer',
    description: 'Duy trì synchronized technical documentation. Tự động update API docs và codebase summaries.',
    kit: 'both',
    capabilities: [
      'Documentation generation',
      'API docs maintenance',
      'Codebase summarization',
      'Style consistency',
      'Content accuracy verification'
    ],
    usedBy: ['/docs:init', '/docs:update', '/docs:summarize', '/code', '/cook'],
    icon: '📝'
  },
  {
    name: 'project-manager',
    role: 'Project Manager',
    description: 'Track development progress, update roadmaps, manage task completion và maintain project health metrics.',
    kit: 'both',
    capabilities: [
      'Progress tracking',
      'Roadmap management',
      'Task coordination',
      'Status reporting',
      'Team coordination'
    ],
    usedBy: ['/watzup', '/code', '/cook', '/bootstrap'],
    icon: '📊'
  },
  {
    name: 'git-manager',
    role: 'Version Control Expert',
    description: 'Tạo clean conventional commits, manage branching strategies và handle version control workflows.',
    kit: 'both',
    capabilities: [
      'Conventional commit generation',
      'Branch management',
      'PR creation',
      'Merge handling',
      'Git history maintenance'
    ],
    usedBy: ['/git:cm', '/git:cp', '/git:pr', '/worktree'],
    icon: '📦'
  },

  // === DESIGN AGENTS ===
  {
    name: 'ui-ux-designer',
    role: 'UI/UX Designer',
    description: 'Tạo design specifications, develop visual components, ensure design system consistency.',
    kit: 'both',
    capabilities: [
      'UI design & wireframing',
      'Design system creation',
      'Component specifications',
      'Accessibility review',
      'User experience analysis'
    ],
    usedBy: ['/design', '/cook', '/bootstrap'],
    icon: '🎨'
  },
  {
    name: 'copywriter',
    role: 'Conversion Copywriter',
    description: 'Tạo high-converting marketing và technical content. Optimize copy cho conversion và clarity.',
    kit: 'both',
    capabilities: [
      'Headlines & taglines',
      'Email copy',
      'Landing page content',
      'Social media copy',
      'A/B testing suggestions'
    ],
    usedBy: ['/email', '/social', '/write:fast', '/write:good', '/copy:formula'],
    icon: '✍️'
  },

  // === EXPLORATION AGENTS ===
  {
    name: 'scout',
    role: 'Codebase Explorer',
    description: 'Parallel codebase exploration. Analyze code patterns, identify optimization opportunities, map component relationships.',
    kit: 'both',
    capabilities: [
      'File pattern matching',
      'Code search',
      'Relationship mapping',
      'Pattern identification',
      'Parallel exploration'
    ],
    usedBy: ['/scout', '/docs:init'],
    icon: '🔭'
  },
  {
    name: 'scout-external',
    role: 'External Codebase Explorer',
    description: 'Tìm kiếm files sử dụng external agentic tools (Gemini, OpenCode). Nhanh hơn scout thường.',
    kit: 'both',
    capabilities: [
      'External tool integration',
      'Fast parallel search',
      'Large codebase handling',
      'Multi-directory scanning'
    ],
    usedBy: ['/scout:ext'],
    icon: '🚀'
  },

  // === MARKETING SPECIFIC AGENTS ===
  {
    name: 'campaign-manager',
    role: 'Campaign Manager',
    description: 'Điều phối multi-channel marketing campaigns. Planning, tracking, budget allocation và timeline management.',
    kit: 'marketing',
    capabilities: [
      'Campaign planning',
      'Multi-channel coordination',
      'Budget management',
      'Timeline tracking',
      'Campaign briefs'
    ],
    usedBy: ['/campaign', '/campaign:create'],
    icon: '📣'
  },
  {
    name: 'funnel-architect',
    role: 'Funnel Architect',
    description: 'Thiết kế sales funnels, optimize conversion rates, A/B test planning theo Hormozi model.',
    kit: 'marketing',
    capabilities: [
      'Funnel stage design',
      'Conversion optimization',
      'Bottleneck identification',
      'A/B test recommendations',
      'Attribution modeling'
    ],
    usedBy: ['/funnel', '/campaign', '/analyze'],
    icon: '🎯'
  },
  {
    name: 'email-wizard',
    role: 'Email Marketing Expert',
    description: 'Điều phối email campaigns. Sequence templates, dynamic content, send-time optimization.',
    kit: 'marketing',
    capabilities: [
      'Email sequence design',
      'Subject line optimization',
      'Drip campaign architecture',
      'A/B testing',
      'Personalization'
    ],
    usedBy: ['/email', '/email:flow', '/email:sequence'],
    icon: '📧'
  },
  {
    name: 'seo-specialist',
    role: 'SEO Expert',
    description: 'Technical SEO audit, content optimization, keyword analysis, JSON+LD generation.',
    kit: 'marketing',
    capabilities: [
      'Technical SEO audit',
      'Keyword research',
      'Content optimization',
      'Schema markup',
      'Competitor SEO analysis'
    ],
    usedBy: ['/seo', '/seo:audit', '/seo:keywords', '/write:blog'],
    icon: '🔎'
  },
  {
    name: 'social-media-manager',
    role: 'Social Media Manager',
    description: 'Multi-platform post generation, content calendar, engagement analysis, trend research.',
    kit: 'marketing',
    capabilities: [
      'Multi-platform content',
      'Content calendar',
      'Engagement analysis',
      'Trend research',
      'Platform-specific adaptation'
    ],
    usedBy: ['/social'],
    icon: '📱'
  },
  {
    name: 'analytics-analyst',
    role: 'Marketing Analyst',
    description: 'Performance reporting, traffic analysis, conversion tracking, custom event analysis.',
    kit: 'marketing',
    capabilities: [
      'Campaign performance reports',
      'Traffic analysis',
      'Conversion tracking',
      'Trend identification',
      'ROI calculation'
    ],
    usedBy: ['/analyze', '/campaign', '/funnel', '/persona'],
    icon: '📈'
  },
  {
    name: 'attraction-specialist',
    role: 'Lead Generation Expert',
    description: 'Top-of-funnel content, keyword gap analysis, landing page content, lead magnet ideation.',
    kit: 'marketing',
    capabilities: [
      'Lead generation strategy',
      'Keyword gap analysis',
      'Landing page content',
      'Programmatic SEO',
      'Lead magnet ideation'
    ],
    usedBy: ['/seo', '/competitor'],
    icon: '🧲'
  },
  {
    name: 'lead-qualifier',
    role: 'Lead Qualification Expert',
    description: 'Intent detection, lead scoring, behavioral analysis, sales readiness prediction.',
    kit: 'marketing',
    capabilities: [
      'Lead scoring models',
      'Intent detection',
      'Behavioral analysis',
      'Sales readiness prediction',
      'Qualification criteria'
    ],
    usedBy: ['/persona'],
    icon: '🎖️'
  },
  {
    name: 'content-creator',
    role: 'Content Creator',
    description: 'Tạo marketing content đa dạng: blog posts, social media, video scripts, ad copy.',
    kit: 'marketing',
    capabilities: [
      'Blog content',
      'Social media posts',
      'Video scripts',
      'Ad copy',
      'Newsletter content'
    ],
    usedBy: ['/social', '/write:blog'],
    icon: '🖊️'
  },
  {
    name: 'sale-enabler',
    role: 'Sales Enablement Expert',
    description: 'Sales collateral, personalized pitches, objection handling, proposal templates.',
    kit: 'marketing',
    capabilities: [
      'Sales pitch generation',
      'Objection handling guides',
      'Proposal templates',
      'Case study generation',
      'Social proof matching'
    ],
    usedBy: ['/funnel'],
    icon: '💼'
  },
  {
    name: 'upsell-maximizer',
    role: 'Revenue Expansion Expert',
    description: 'Upsell opportunities, product recommendations, pricing tier optimization.',
    kit: 'marketing',
    capabilities: [
      'Upsell identification',
      'Cross-sell sequences',
      'Pricing optimization',
      'Feature adoption tracking',
      'Expansion forecasting'
    ],
    usedBy: [],
    icon: '💰'
  },
  {
    name: 'campaign-debugger',
    role: 'Campaign Troubleshooter',
    description: 'Diagnose underperforming campaigns, analyze conversion bottlenecks, tracking issues.',
    kit: 'marketing',
    capabilities: [
      'Campaign diagnostics',
      'Conversion analysis',
      'Tracking debugging',
      'Performance bottlenecks',
      'A/B test analysis'
    ],
    usedBy: ['/campaign'],
    icon: '🔧'
  },
  {
    name: 'community-manager',
    role: 'Community Manager',
    description: 'Discord/Slack moderation, sentiment analysis, engagement metrics, FAQ generation.',
    kit: 'marketing',
    capabilities: [
      'Community moderation',
      'Sentiment analysis',
      'Response drafting',
      'Engagement metrics',
      'FAQ generation'
    ],
    usedBy: [],
    icon: '👥'
  },
  {
    name: 'continuity-specialist',
    role: 'Customer Retention Expert',
    description: 'Churn risk detection, re-engagement campaigns, NPS automation, customer health scoring.',
    kit: 'marketing',
    capabilities: [
      'Churn prediction',
      'Re-engagement campaigns',
      'NPS automation',
      'Testimonial requests',
      'Health scoring'
    ],
    usedBy: [],
    icon: '🔄'
  },
  {
    name: 'content-reviewer',
    role: 'Content Quality Expert',
    description: 'Content audit, brand consistency, SEO review, conversion optimization assessment.',
    kit: 'marketing',
    capabilities: [
      'Content quality audit',
      'Brand alignment check',
      'SEO optimization review',
      'Conversion assessment',
      'Style consistency'
    ],
    usedBy: ['/write:audit'],
    icon: '✅'
  },

  // === SPECIAL AGENTS ===
  {
    name: 'journal-writer',
    role: 'Technical Diarist',
    description: 'Document development decisions, technical explorations, lessons learned với emotional honesty.',
    kit: 'both',
    capabilities: [
      'Decision documentation',
      'Failure analysis',
      'Lessons learned capture',
      'Emotional context',
      'Knowledge preservation'
    ],
    usedBy: ['/journal'],
    icon: '📔'
  },
  {
    name: 'mcp-manager',
    role: 'MCP Integration Expert',
    description: 'Manage MCP server integrations, discover tools/prompts/resources, execute MCP capabilities.',
    kit: 'both',
    capabilities: [
      'Tool discovery',
      'MCP configuration',
      'Capability execution',
      'Resource management',
      'Server coordination'
    ],
    usedBy: ['/use-mcp'],
    icon: '🔌'
  },
  {
    name: 'database-admin',
    role: 'Database Administrator',
    description: 'Database operations, migrations, optimization, backup strategies, schema design.',
    kit: 'both',
    capabilities: [
      'Query optimization',
      'Schema design',
      'Backup/restore',
      'Replication setup',
      'Performance tuning'
    ],
    usedBy: [],
    icon: '🗄️'
  },
  {
    name: 'brainstormer',
    role: 'Solution Architect',
    description: 'System architecture design, technical decision-making, YAGNI/KISS/DRY principles.',
    kit: 'both',
    capabilities: [
      'Architecture brainstorming',
      'Trade-off analysis',
      'Risk assessment',
      'Alternative exploration',
      'Decision facilitation'
    ],
    usedBy: ['/brainstorm', '/ask'],
    icon: '💡'
  },
];

export const agentCategories = [
  { id: 'planning', name: 'Planning & Research', agents: ['planner', 'researcher', 'brainstormer'] },
  { id: 'development', name: 'Development', agents: ['fullstack-developer', 'tester', 'code-reviewer', 'debugger'] },
  { id: 'documentation', name: 'Documentation & Project', agents: ['docs-manager', 'project-manager', 'git-manager', 'journal-writer'] },
  { id: 'design', name: 'Design & Content', agents: ['ui-ux-designer', 'copywriter', 'content-creator', 'content-reviewer'] },
  { id: 'exploration', name: 'Exploration', agents: ['scout', 'scout-external'] },
  { id: 'marketing', name: 'Marketing', agents: ['campaign-manager', 'funnel-architect', 'email-wizard', 'seo-specialist', 'social-media-manager', 'analytics-analyst'] },
  { id: 'sales', name: 'Sales & Growth', agents: ['attraction-specialist', 'lead-qualifier', 'sale-enabler', 'upsell-maximizer', 'continuity-specialist'] },
  { id: 'operations', name: 'Operations', agents: ['campaign-debugger', 'community-manager', 'database-admin', 'mcp-manager'] },
];
