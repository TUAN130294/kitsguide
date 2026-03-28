export interface Subcommand {
  name: string;
  description: string;
}

export interface Command {
  name: string;
  description: string;
  kit: 'engineer' | 'marketing' | 'both';
  category: string;
  agents: string[];
  skills: string[];
  workflow: string;
  subcommands?: Subcommand[];
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
    subcommands: [
      { name: '/plan:fast', description: 'Dùng cho task đơn giản, rõ ràng (fix bug nhỏ, thêm field). Tạo plan ngắn gọn 3-5 bước, không cần research sâu. Thời gian: vài phút.' },
      { name: '/plan:hard', description: 'Dùng cho task phức tạp, nhiều ẩn số (refactor lớn, tính năng mới). Research kỹ, phân tích dependencies, tạo plan 10-20 bước với checkpoints. Thời gian: 15-30 phút.' },
      { name: '/plan:validate', description: 'Kiểm tra plan hiện tại có khả thi không. Phân tích risks, dependencies, estimates. Đề xuất điều chỉnh nếu cần.' },
      { name: '/plan:ci', description: 'Tạo plan cho CI/CD: GitHub Actions, testing pipeline, deployment flow. Bao gồm rollback strategy.' },
      { name: '/plan:archive', description: 'Lưu plan đã hoàn thành vào ./plans/archive/ với metadata (duration, lessons learned) để reference sau.' }
    ],
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
    subcommands: [
      { name: '/cook:auto', description: 'Chạy toàn bộ workflow tự động: research → plan → code → test → review → docs. Không dừng hỏi ý kiến, chỉ báo cáo khi xong hoặc gặp lỗi blocking.' },
      { name: '/cook:auto:fast', description: 'Auto mode nhưng skip các bước optional: bỏ qua docs generation, giảm test coverage xuống critical paths only. Phù hợp cho prototype/MVP.' },
      { name: '/cook:auto:parallel', description: 'Auto mode + spawn multiple agents làm việc song song (test trong khi code, docs trong khi review). Nhanh nhất nhưng tốn nhiều tokens hơn.' }
    ],
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
    subcommands: [
      { name: '/code:auto', description: 'Implement toàn bộ plan tự động, không dừng confirm từng file. Tự chạy test sau mỗi module, fix lỗi nếu có. Báo cáo tổng hợp khi hoàn thành.' },
      { name: '/code:no-test', description: 'Chỉ code implementation, skip hoàn toàn test phase. Dùng khi đã có test riêng hoặc đang prototype nhanh. Cảnh báo: có thể tạo technical debt.' },
      { name: '/code:parallel', description: 'Spawn nhiều coding agents xử lý các files/modules độc lập cùng lúc. Tự merge và resolve conflicts. Phù hợp cho task có nhiều files không phụ thuộc nhau.' }
    ],
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
    subcommands: [
      { name: '/bootstrap:auto', description: 'Tự động setup từ A-Z: git init, install deps, config files, folder structure, base components. Không hỏi confirm, chỉ báo cáo khi xong.' },
      { name: '/bootstrap:auto:fast', description: 'Dùng template có sẵn phù hợp với tech stack (Next.js, Astro, Express...). Skip research phase, chỉ customize theo requirements. Nhanh hơn 3-5x.' },
      { name: '/bootstrap:auto:parallel', description: 'Setup nhiều phần cùng lúc: frontend + backend + database + CI/CD. Các agents làm việc độc lập rồi integrate. Phù hợp cho monorepo hoặc microservices.' }
    ],
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
    subcommands: [
      { name: '/fix:fast', description: 'Cho lỗi rõ nguyên nhân (typo, missing import, wrong variable). Sửa trực tiếp không cần phân tích sâu. Thời gian: dưới 5 phút.' },
      { name: '/fix:hard', description: 'Cho lỗi phức tạp, không rõ nguyên nhân. Chạy full debugging: reproduce → isolate → root cause analysis → fix → verify. Thời gian: 15-60 phút.' },
      { name: '/fix:types', description: 'Chuyên sửa TypeScript errors: type mismatches, missing types, generic issues. Tự generate types nếu cần, update tsconfig.json.' },
      { name: '/fix:ui', description: 'Sửa vấn đề UI/UX: layout broken, responsive issues, CSS conflicts, z-index wars. Có thể chụp screenshot để so sánh before/after.' },
      { name: '/fix:test', description: 'Sửa test cases fail: update assertions, fix mocks, handle async issues. Phân tích xem test sai hay code sai.' },
      { name: '/fix:logs', description: 'Paste error logs, agent sẽ parse và trace ngược tìm root cause. Hỗ trợ logs từ: console, server, CI/CD, crash reports.' },
      { name: '/fix:ci', description: 'Sửa lỗi CI/CD: GitHub Actions fail, Docker build issues, deployment errors. Tự đọc workflow files và suggest fixes.' },
      { name: '/fix:parallel', description: 'Khi có nhiều lỗi độc lập (VD: 5 type errors ở 5 files khác nhau). Spawn nhiều agents sửa song song, merge kết quả.' }
    ],
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
    subcommands: [
      { name: '/scout:ext', description: 'Mở rộng scope tìm kiếm ra ngoài codebase: npm packages docs, GitHub issues, Stack Overflow, official documentation. Hữu ích khi cần hiểu external dependencies.' }
    ],
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
    subcommands: [
      { name: '/campaign:create', description: 'Tạo chiến dịch mới từ đầu: định nghĩa mục tiêu, target audience, channels, timeline, budget. Output: campaign brief + content calendar + assets checklist.' },
      { name: '/campaign:status', description: 'Dashboard tổng quan các campaign đang chạy: progress, metrics (reach, engagement, conversion), budget spent, upcoming tasks.' },
      { name: '/campaign:analyze', description: 'Phân tích hiệu quả campaign đã kết thúc: ROI, best/worst performing content, audience insights, recommendations cho campaign tiếp theo.' },
      { name: '/campaign:email', description: 'Tạo email sequence cho campaign: welcome series, nurture flow, promo sequence. Bao gồm subject lines, body copy, CTAs, timing.' }
    ],
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
    subcommands: [
      { name: '/email:flow', description: 'Thiết kế email automation flow với triggers và conditions: onboarding flow, cart abandonment, re-engagement. Output: flow diagram + email templates + trigger rules.' },
      { name: '/email:sequence', description: 'Tạo drip campaign có timeline cố định: 7-day welcome series, 30-day nurture. Mỗi email có mục đích rõ ràng, đo lường riêng.' }
    ],
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
    subcommands: [
      { name: '/seo:audit', description: 'Audit toàn diện website: technical SEO (speed, mobile, crawlability), on-page (meta, headings, content), off-page (backlinks). Output: báo cáo với priority score cho từng issue.' },
      { name: '/seo:keywords', description: 'Research từ khóa: seed keywords → related terms → search volume → difficulty → SERP analysis. Output: keyword clusters với content recommendations.' },
      { name: '/seo:optimize', description: 'Tối ưu content cụ thể: rewrite meta tags, improve headings, add internal links, optimize images. Đo keyword density và readability score.' },
      { name: '/seo:pseo', description: 'Programmatic SEO: tạo hàng loạt landing pages từ data (locations, products, comparisons). Template-based generation với unique content cho mỗi page.' }
    ],
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
    subcommands: [
      { name: '/funnel:design', description: 'Thiết kế funnel từ đầu: xác định stages (awareness → interest → decision → action), touchpoints, content cho mỗi stage, metrics cần track.' },
      { name: '/funnel:analyze', description: 'Phân tích funnel hiện tại: drop-off rates ở từng stage, bottlenecks, time-to-convert. So sánh với benchmarks ngành.' },
      { name: '/funnel:optimize', description: 'Đề xuất cải tiến: A/B test ideas, copy changes, UX improvements. Ưu tiên theo potential impact và implementation effort.' }
    ],
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
    subcommands: [
      { name: '/competitor:analyze', description: 'Phân tích tổng quan đối thủ: products/services, pricing, positioning, strengths/weaknesses, market share. Output: competitor profile card.' },
      { name: '/competitor:content', description: 'So sánh content strategy: topics covered, content formats, publishing frequency, engagement rates. Tìm content gaps bạn có thể khai thác.' },
      { name: '/competitor:seo', description: 'So sánh SEO: domain authority, top keywords, backlink profile, technical SEO score. Tìm keyword opportunities đối thủ đang rank mà bạn chưa.' },
      { name: '/competitor:list', description: 'Xem danh sách đối thủ đang track, cập nhật lần cuối, key metrics. Thêm/xóa competitors khỏi watchlist.' }
    ],
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
    subcommands: [
      { name: '/analyze:report', description: 'Tạo báo cáo chi tiết: executive summary, key metrics, trends over time, actionable insights, next steps. Format: PDF/Markdown với charts và tables.' }
    ],
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
    subcommands: [
      { name: '/design:generate', description: 'Tạo hình ảnh với AI (DALL-E/Midjourney): illustrations, icons, backgrounds. Input: mô tả chi tiết + style reference. Output: multiple variations để chọn.' },
      { name: '/design:screenshot', description: 'Chụp screenshot website/app, phân tích UI/UX: layout issues, accessibility problems, improvement suggestions. Có thể compare với competitor.' },
      { name: '/design:describe', description: 'Upload hình ảnh design, AI sẽ mô tả chi tiết: colors, typography, spacing, components. Hữu ích để document existing designs.' },
      { name: '/design:fast', description: 'Tạo design nhanh cho MVPs/prototypes: basic layouts, placeholder graphics, standard components. Thời gian: 5-15 phút.' },
      { name: '/design:good', description: 'Tạo design chất lượng cao: multiple iterations, pixel-perfect details, responsive variants. Bao gồm design rationale và specifications.' },
      { name: '/design:3d', description: 'Tạo 3D assets: product mockups, icons, illustrations. Formats: PNG, SVG, GLTF. Có thể render từ nhiều góc.' },
      { name: '/design:video', description: 'Tạo video/animation: motion graphics, explainer videos, social media clips. Output: MP4 với các sizes phổ biến.' }
    ],
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
    subcommands: [
      { name: '/skill:add', description: 'Thêm skill từ registry vào project: copy files, update SETTINGS.md, verify dependencies. Tự động detect conflicts với skills hiện có.' },
      { name: '/skill:update', description: 'Cập nhật skill lên version mới: backup current → pull changes → merge configs → test. Giữ lại customizations của bạn.' },
      { name: '/skill:plan', description: 'Lên kế hoạch tạo skill mới: define capabilities, list required tools/APIs, design SKILL.md structure, estimate effort.' },
      { name: '/skill:optimize', description: 'Tối ưu performance: reduce token usage, improve prompts, cache responses, parallelize operations. Benchmark before/after.' },
      { name: '/skill:fix-logs', description: 'Debug skill từ error logs: parse logs → identify issues → suggest fixes → test. Hỗ trợ logs từ Claude Code terminal.' }
    ],
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
    subcommands: [
      { name: '/storage:sync', description: 'Đồng bộ 2 chiều folder local ↔ cloud: detect changes, upload new files, download updates, handle conflicts. Có thể set ignore patterns.' },
      { name: '/storage:list', description: 'Liệt kê files trong bucket: name, size, last modified, public URL. Filter theo prefix/extension. Output: table hoặc JSON.' },
      { name: '/storage:url', description: 'Lấy public/signed URL cho file: permanent public URL hoặc temporary signed URL (1h-7d). Copy to clipboard.' }
    ],
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
