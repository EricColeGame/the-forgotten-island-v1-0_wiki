/**
 * 导航配置：本阶段已清空（内容导航将在后续阶段按新游戏内容重建）。
 * 消费者（src/components/site.tsx 的 SiteHeader、src/lib/content.ts）依赖
 * item.key / item.path 字段，保留字段契约。
 */
type NavItem = {
  key: string;
  path: string;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [] as NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
