export interface Command {
  name: string;
  description: string;
  kit: 'engineer' | 'marketing' | 'both';
  category: string;
  agents: string[];
  skills: string[];
  workflow: string;
  subcommands?: string[];
  example?: string;
}

export const commands: Command[] = [
  // === PLANNING & IMPLEMENTATION ===
  {
    name: '/plan',
    description: 'Tạo kế hoạch triển khai thông minh với prompt enhancement',
    kit: 'both',
    category: 'Planning',
    agents: ['planner', 'researcher'],
    skills: ['planning'],
    workflow: 'Phân tích task → Quyết định fast/hard → Tạo plan chi tiết',
    subcommands: ['/plan:fast', '/plan:hard', '/plan:validate', '/plan:ci', '/plan:archive'],
    example: '/plan "implement user authentication"'
  },
  {
    name: '/cook',
    description: 'Triển khai tính năng từ A-Z: plan → code → test → review → docs',
    kit: 'both',
    category: 'Planning',
    agents: ['researcher', 'planner', 'ui-ux-designer', 'tester', 'code-reviewer', 'project-manager', 'docs-manager'],
    skills: ['ai-multimodal', 'design-system', 'planning'],
    workflow: 'Hỏi → Nghiên cứu → Lên kế hoạch → Code → Test → Review → Docs → Onboarding',
    subcommands: ['/cook:auto', '/cook:auto:fast', '/cook:auto:parallel'],
    example: '/cook "add dark mode toggle"'
  },
  {
    name: '/code',
    description: 'Bắt đầu coding & testing theo plan có sẵn',
    kit: 'both',
    category: 'Planning',
    agents: ['tester', 'code-reviewer', 'project-manager', 'docs-manager', 'debugger'],
    skills: ['debugging', 'code-review'],
    workflow: 'Detect plan → Phân tích → Implement → Test → Review → User approval',
    subcommands: ['/code:auto', '/code:no-test', '/code:parallel'],
    example: '/code ./plans/240115-auth-feature/'
  },
  {
    name: '/bootstrap',
    description: 'Khởi tạo dự án mới hoàn chỉnh từ đầu',
    kit: 'both',
    category: 'Planning',
    agents: ['git-manager', 'researcher', 'planner', 'ui-ux-designer', 'tester', 'code-reviewer', 'docs-manager', 'project-manager'],
    skills: ['ai-multimodal', 'chrome-devtools', 'assets-organizing', 'design-system'],
    workflow: 'Git init → Research → Tech stack → Design → Implement → Test → Docs',
    subcommands: ['/bootstrap:auto', '/bootstrap:auto:fast', '/bootstrap:auto:parallel'],
    example: '/bootstrap "e-commerce platform with Next.js"'
  },

  // === DEBUGGING & FIXING ===
  {
    name: '/fix',
    description: 'Phân tích và sửa lỗi thông minh (tự động route)',
    kit: 'both',
    category: 'Debugging',
    agents: ['debugger', 'tester', 'code-reviewer'],
    skills: ['debugging'],
    workflow: 'Phân tích loại lỗi → Route đến command chuyên biệt',
    subcommands: ['/fix:fast', '/fix:hard', '/fix:types', '/fix:ui', '/fix:test', '/fix:logs', '/fix:ci', '/fix:parallel'],
    example: '/fix "login button not working"'
  },
  {
    name: '/debug',
    description: 'Debug vấn đề kỹ thuật, phân tích logs',
    kit: 'both',
    category: 'Debugging',
    agents: ['debugger'],
    skills: ['debugging', 'sequential-thinking'],
    workflow: 'Root cause analysis → Tạo báo cáo → Đề xuất giải pháp (không tự fix)',
    example: '/debug "slow database queries"'
  },

  // === TESTING ===
  {
    name: '/test',
    description: 'Chạy tests và phân tích kết quả',
    kit: 'both',
    category: 'Testing',
    agents: ['tester'],
    skills: ['debugging'],
    workflow: 'Chạy tests → Phân tích báo cáo → Report kết quả',
    example: '/test'
  },

  // === GIT & VERSION CONTROL ===
  {
    name: '/git:cm',
    description: 'Stage tất cả files và tạo commit',
    kit: 'both',
    category: 'Git',
    agents: ['git-manager'],
    skills: [],
    workflow: 'Stage all → Tạo commit message theo conventional commits',
    example: '/git:cm'
  },
  {
    name: '/git:cp',
    description: 'Commit và push lên remote',
    kit: 'both',
    category: 'Git',
    agents: ['git-manager'],
    skills: [],
    workflow: 'Stage → Commit → Push',
    example: '/git:cp'
  },
  {
    name: '/git:pr',
    description: 'Tạo Pull Request trên GitHub',
    kit: 'both',
    category: 'Git',
    agents: ['git-manager'],
    skills: [],
    workflow: 'Sync remote → Analyze diff → Tạo PR với description',
    example: '/git:pr main feature/new-login'
  },

  // === DOCUMENTATION ===
  {
    name: '/docs:init',
    description: 'Phân tích codebase và tạo documentation ban đầu',
    kit: 'both',
    category: 'Documentation',
    agents: ['scout', 'docs-manager'],
    skills: ['repomix'],
    workflow: 'Scan codebase → Parallel scouting → Merge reports → Generate docs',
    example: '/docs:init'
  },
  {
    name: '/docs:update',
    description: 'Cập nhật documentation theo code changes',
    kit: 'both',
    category: 'Documentation',
    agents: ['docs-manager'],
    skills: [],
    workflow: 'Detect changes → Update relevant docs → Sync',
    example: '/docs:update'
  },
  {
    name: '/docs:summarize',
    description: 'Tóm tắt documentation',
    kit: 'both',
    category: 'Documentation',
    agents: ['docs-manager'],
    skills: ['repomix'],
    workflow: 'Read docs → Summarize → Output',
    example: '/docs:summarize'
  },

  // === EXPLORATION ===
  {
    name: '/scout',
    description: 'Tìm kiếm files trong codebase với AI agents song song',
    kit: 'both',
    category: 'Exploration',
    agents: ['scout', 'Explore'],
    skills: [],
    workflow: 'Spawn parallel scouts → Search codebase → Report kết quả',
    subcommands: ['/scout:ext'],
    example: '/scout "payment integration files"'
  },
  {
    name: '/ask',
    description: 'Hỏi đáp về kiến trúc và kỹ thuật',
    kit: 'both',
    category: 'Exploration',
    agents: ['systems-designer', 'technology-strategist', 'scalability-consultant', 'risk-analyst'],
    skills: ['research', 'sequential-thinking'],
    workflow: 'Hiểu vấn đề → Tham vấn experts → Tổng hợp → Validate',
    example: '/ask "should I use Redis or Memcached?"'
  },
  {
    name: '/brainstorm',
    description: 'Brainstorm giải pháp với quy trình 5 giai đoạn',
    kit: 'both',
    category: 'Exploration',
    agents: [],
    skills: ['brainstorming'],
    workflow: '5-phase brainstorming: Define → Explore → Evaluate → Select → Plan',
    example: '/brainstorm "reduce page load time"'
  },

  // === MARKETING SPECIFIC ===
  {
    name: '/campaign',
    description: 'Tạo và quản lý chiến dịch marketing',
    kit: 'marketing',
    category: 'Marketing',
    agents: ['campaign-manager', 'funnel-architect', 'analytics-analyst', 'campaign-debugger'],
    skills: ['campaign-management', 'creativity', 'assets-organizing'],
    workflow: 'Parse action → Create/Status/Analyze campaigns',
    subcommands: ['/campaign:create', '/campaign:status', '/campaign:analyze', '/campaign:email'],
    example: '/campaign:create "Black Friday Sale"'
  },
  {
    name: '/email',
    description: 'Tạo nội dung email marketing',
    kit: 'marketing',
    category: 'Marketing',
    agents: ['email-wizard', 'copywriter'],
    skills: ['email-marketing', 'creativity', 'copywriting', 'assets-organizing'],
    workflow: 'Parse type → Gather context → Create email → Optimize',
    subcommands: ['/email:flow', '/email:sequence'],
    example: '/email newsletter "January product updates"'
  },
  {
    name: '/social',
    description: 'Tạo nội dung social media',
    kit: 'marketing',
    category: 'Marketing',
    agents: ['social-media-manager', 'content-creator', 'copywriter'],
    skills: ['social-media', 'creativity', 'copywriting', 'assets-organizing'],
    workflow: 'Parse platform → Chiến lược → Tạo nội dung → Tối ưu',
    example: '/social twitter "product launch announcement"'
  },
  {
    name: '/seo',
    description: 'Audit và tối ưu SEO',
    kit: 'marketing',
    category: 'Marketing',
    agents: ['seo-specialist', 'attraction-specialist'],
    skills: ['seo-optimization', 'assets-organizing'],
    workflow: 'Audit/Keywords/Optimize workflows',
    subcommands: ['/seo:audit', '/seo:keywords', '/seo:optimize', '/seo:pseo'],
    example: '/seo:audit https://example.com'
  },
  {
    name: '/funnel',
    description: 'Thiết kế và tối ưu sales funnel',
    kit: 'marketing',
    category: 'Marketing',
    agents: ['funnel-architect', 'sale-enabler', 'analytics-analyst'],
    skills: ['campaign-management', 'analytics', 'assets-organizing'],
    workflow: 'Design/Analyze/Optimize funnels',
    subcommands: ['/funnel:design', '/funnel:analyze', '/funnel:optimize'],
    example: '/funnel:design lead-magnet'
  },
  {
    name: '/competitor',
    description: 'Phân tích đối thủ cạnh tranh',
    kit: 'marketing',
    category: 'Marketing',
    agents: ['researcher', 'attraction-specialist', 'seo-specialist'],
    skills: ['seo-optimization', 'content-marketing', 'assets-organizing'],
    workflow: 'Parse action → Analyze/Content gap/SEO comparison',
    subcommands: ['/competitor:analyze', '/competitor:content', '/competitor:seo', '/competitor:list'],
    example: '/competitor:analyze https://competitor.com'
  },
  {
    name: '/persona',
    description: 'Quản lý customer persona',
    kit: 'marketing',
    category: 'Marketing',
    agents: ['lead-qualifier', 'researcher', 'analytics-analyst'],
    skills: ['content-marketing', 'assets-organizing'],
    workflow: 'Create/Analyze/Update/List personas',
    example: '/persona create "Tech Startup Founder"'
  },
  {
    name: '/analyze',
    description: 'Phân tích và báo cáo hiệu suất',
    kit: 'marketing',
    category: 'Marketing',
    agents: ['analytics-analyst', 'funnel-architect'],
    skills: ['analytics'],
    workflow: 'Data gathering → Analysis → Insights → Report',
    subcommands: ['/analyze:report'],
    example: '/analyze traffic'
  },

  // === DESIGN ===
  {
    name: '/design',
    description: 'Entry point cho các tác vụ design',
    kit: 'both',
    category: 'Design',
    agents: ['ui-ux-designer'],
    skills: ['design', 'brand-guidelines', 'design-system', 'ui-styling'],
    workflow: 'Route đến brand-guidelines, design-system, hoặc ui-styling',
    subcommands: ['/design:generate', '/design:screenshot', '/design:describe', '/design:fast', '/design:good', '/design:3d', '/design:video'],
    example: '/design:generate "hero section illustration"'
  },
  {
    name: '/copy:formula',
    description: 'Tạo copy với formulas copywriting đã được chứng minh',
    kit: 'marketing',
    category: 'Design',
    agents: ['copywriter'],
    skills: ['copywriting', 'brand-guidelines', 'assets-organizing'],
    workflow: 'Select formula → Apply formula → Generate copy',
    example: '/copy:formula AIDA "product launch email"'
  },
  {
    name: '/brand:update',
    description: 'Cập nhật brand identity và sync design systems',
    kit: 'marketing',
    category: 'Design',
    agents: [],
    skills: ['brand-guidelines', 'design-system'],
    workflow: 'Gather input → Update guidelines → Sync tokens → Verify',
    example: '/brand:update'
  },

  // === UTILITIES ===
  {
    name: '/watzup',
    description: 'Kiểm tra trạng thái dự án nhanh',
    kit: 'both',
    category: 'Utilities',
    agents: ['project-manager'],
    skills: [],
    workflow: 'Summary trạng thái project hiện tại',
    example: '/watzup'
  },
  {
    name: '/journal',
    description: 'Viết journal entries từ memories',
    kit: 'both',
    category: 'Utilities',
    agents: ['journal-writer'],
    skills: [],
    workflow: 'Explore memories → Write concise entries',
    example: '/journal'
  },
  {
    name: '/kanban',
    description: 'Xem plans dưới dạng Kanban board',
    kit: 'both',
    category: 'Utilities',
    agents: [],
    skills: ['plans-kanban'],
    workflow: 'Visualize plans với progress bars và timeline',
    example: '/kanban'
  },
  {
    name: '/preview',
    description: 'Xem file markdown trong viewer',
    kit: 'both',
    category: 'Utilities',
    agents: [],
    skills: ['markdown-novel-viewer'],
    workflow: 'Start viewer → Display markdown',
    example: '/preview ./plans/current-plan/'
  },
  {
    name: '/hub',
    description: 'Mở Content Hub + Marketing Dashboard',
    kit: 'marketing',
    category: 'Utilities',
    agents: [],
    skills: ['content-hub', 'marketing-dashboard'],
    workflow: 'Start servers → Auto-open interfaces',
    example: '/hub'
  },
  {
    name: '/dashboard',
    description: 'Khởi động Marketing Dashboard',
    kit: 'marketing',
    category: 'Utilities',
    agents: [],
    skills: ['marketing-dashboard'],
    workflow: 'Dev mode (HMR) → Prod mode → Build/Stop',
    example: '/dashboard dev'
  },
  {
    name: '/ck-help',
    description: 'Hướng dẫn sử dụng ClaudeKit',
    kit: 'both',
    category: 'Utilities',
    agents: [],
    skills: [],
    workflow: 'Display help content',
    example: '/ck-help'
  },
  {
    name: '/coding-level',
    description: 'Đặt mức độ kinh nghiệm coding (0-5)',
    kit: 'both',
    category: 'Utilities',
    agents: [],
    skills: [],
    workflow: 'Set level trong .claude/.ck.json',
    example: '/coding-level 3'
  },

  // === SKILL & COMMAND MANAGEMENT ===
  {
    name: '/skill:create',
    description: 'Tạo skill mới',
    kit: 'both',
    category: 'Management',
    agents: ['researcher', 'Explore'],
    skills: ['skill-creator', 'claude-code', 'docs-seeker'],
    workflow: 'Clarify → Research → Create SKILL.md → Create references',
    subcommands: ['/skill:add', '/skill:update', '/skill:plan', '/skill:optimize', '/skill:fix-logs'],
    example: '/skill:create "stripe-integration" "Payment integration skill"'
  },
  {
    name: '/command:create',
    description: 'Tạo slash command mới',
    kit: 'both',
    category: 'Management',
    agents: [],
    skills: ['claude-code', 'docs-seeker'],
    workflow: 'Define command → Create .md file → Register',
    example: '/command:create "deploy" "Deploy to production"'
  },

  // === STORAGE ===
  {
    name: '/storage:upload',
    description: 'Upload file lên S3-compatible storage',
    kit: 'marketing',
    category: 'Storage',
    agents: [],
    skills: ['s3-client'],
    workflow: 'Check config → Upload file → Return URL',
    subcommands: ['/storage:sync', '/storage:list', '/storage:url'],
    example: '/storage:upload ./assets/hero.png'
  },

  // === INTEGRATION ===
  {
    name: '/integrate:polar',
    description: 'Tích hợp Polar payment',
    kit: 'marketing',
    category: 'Integration',
    agents: [],
    skills: ['payment-integration'],
    workflow: 'Setup Polar → Configure webhooks → Test',
    example: '/integrate:polar'
  },
  {
    name: '/integrate:sepay',
    description: 'Tích hợp Sepay payment',
    kit: 'marketing',
    category: 'Integration',
    agents: [],
    skills: ['payment-integration'],
    workflow: 'Setup Sepay → Configure webhooks → Test',
    example: '/integrate:sepay'
  },

  // === WRITE COMMANDS (Marketing) ===
  {
    name: '/write:fast',
    description: 'Tạo copy nhanh',
    kit: 'marketing',
    category: 'Content',
    agents: ['copywriter'],
    skills: ['copywriting', 'creativity'],
    workflow: 'Quick copy generation',
    example: '/write:fast "product tagline"'
  },
  {
    name: '/write:good',
    description: 'Tạo copy chất lượng cao',
    kit: 'marketing',
    category: 'Content',
    agents: ['copywriter'],
    skills: ['copywriting', 'creativity'],
    workflow: 'Quality copy với quality gates',
    example: '/write:good "landing page hero"'
  },
  {
    name: '/write:blog',
    description: 'Viết blog SEO-optimized',
    kit: 'marketing',
    category: 'Content',
    agents: ['seo-specialist', 'content-creator', 'copywriter'],
    skills: ['seo-optimization', 'copywriting', 'content-marketing'],
    workflow: 'Research → Write → Audit (score ≥8.0) → Publish',
    example: '/write:blog "10 productivity tips for developers"'
  },
  {
    name: '/write:audit',
    description: 'Audit chất lượng content',
    kit: 'marketing',
    category: 'Content',
    agents: [],
    skills: ['copywriting', 'seo-optimization'],
    workflow: 'Analyze content → Score → Recommendations',
    example: '/write:audit ./content/blog-post.md'
  },
];

export const categories = [
  { id: 'Planning', name: 'Lập kế hoạch & Triển khai', icon: '📋', color: 'cyan' },
  { id: 'Debugging', name: 'Debug & Sửa lỗi', icon: '🔧', color: 'red' },
  { id: 'Testing', name: 'Testing', icon: '🧪', color: 'green' },
  { id: 'Git', name: 'Git & Version Control', icon: '📦', color: 'orange' },
  { id: 'Documentation', name: 'Documentation', icon: '📚', color: 'blue' },
  { id: 'Exploration', name: 'Khám phá & Nghiên cứu', icon: '🔍', color: 'purple' },
  { id: 'Marketing', name: 'Marketing', icon: '📣', color: 'pink' },
  { id: 'Design', name: 'Design', icon: '🎨', color: 'violet' },
  { id: 'Content', name: 'Content', icon: '✍️', color: 'yellow' },
  { id: 'Utilities', name: 'Tiện ích', icon: '🛠️', color: 'gray' },
  { id: 'Management', name: 'Quản lý', icon: '⚙️', color: 'slate' },
  { id: 'Storage', name: 'Storage', icon: '💾', color: 'indigo' },
  { id: 'Integration', name: 'Tích hợp', icon: '🔌', color: 'teal' },
];
