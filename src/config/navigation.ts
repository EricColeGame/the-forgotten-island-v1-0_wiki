/**
 * 导航配置：分类 slug 与 content/<locale>/ 下的文章子目录一一对应，
 * 同时对齐 src/lib/content.ts 的 GROUP_TITLES / GROUP_ORDER 与 src/locales/en.json 的 nav。
 * 消费者（src/components/site.tsx 的 SiteHeader、src/lib/content.ts）依赖
 * item.key / item.path 字段，保留字段契约。
 */
type NavigationItem = {
  /** 翻译键，也是分类 slug（对应 content/<locale>/<key>/ 目录） */
  key: string;
  /** URL 路径，必须指向真实存在的分类列表页 */
  path: `/${string}`;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "maps", path: "/maps", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
