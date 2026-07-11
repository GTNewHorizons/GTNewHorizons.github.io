# GregTech: New Horizons (GT:NH) 网站

如果你正在贡献翻译或 FAQ 内容，通过开发服务器（`yarn dev`）进行编辑会比直接编辑文本文件更方便——详见下方各章节。

---

<p align="center">
  <img src="../src/assets/logo.svg" width="256" height="256" alt="GregTech: New Horizons">
</p>

<div align="center">
  Translations:

  <a href="../README.md">English</a> |
  <a>简体中文</a>
</div>

## 快速开始

1. 确保系统已安装 NodeJS。推荐版本为当前 LTS（24），但更新的版本也应可以正常工作。
2. 确保已安装 Yarn 包管理器：`npm install --global yarn`
3. 现在导航至项目根目录，使用 `yarn install` 安装依赖。
4. 一切就绪！只需运行 `yarn dev`，然后在浏览器中访问 <http://localhost:4321> 即可。

在开发模式下，HMR（模块热替换）将被启用，保存任何文件时都能即时看到所有更改。

## 所有命令

所有命令均在项目根目录下通过终端执行：

| 命令                   | 说明                                         |
|------------------------|----------------------------------------------|
| `yarn install`         | 安装依赖                                     |
| `yarn dev`             | 在 `localhost:4321` 启动本地开发服务器       |
| `yarn build`           | 将生产站点构建至 `./dist/`                   |
| `yarn preview`         | 在部署前本地预览构建结果                     |
| `yarn astro ...`       | 运行 CLI 命令，如 `astro add`、`astro check` |
| `yarn astro -- --help` | 获取 Astro CLI 使用帮助                      |

## 翻译（i18n）

### I18n 目录结构

```text
src/i18n/
├── <module-name>/
│   ├── en.ts          # 英文翻译（权威版本）
│   └── zh-CN.ts       # 中文翻译
├── en.ts              # 自动生成的桶文件（请勿编辑）
├── keys.ts            # 从 en.ts 派生的 TypeScript 类型
├── flatten.ts         # 将嵌套对象展平为点号表示法
└── index.ts           # 运行时：useTranslations()、locales 等
```

### I18n 规则

- **每个模块**是 `src/i18n/` 下的子目录。模块包括：`common`、`home`、`faq`、`downloads`、`versionHistory`。
- **`en.ts` 是权威版本**。翻译键从其结构自动派生。
- **翻译文件**（`zh-CN.ts`）必须与 `en.ts` 保持相同的对象结构。
- **值为纯字符串**（不使用 JSX 或组件）。允许使用 `<b>` 和 `<i>` 等 HTML 标签，通过 `set:html` 渲染。
- **动态参数**使用模板语法：`{key}` ——详见 `index.ts` 中的 `useTranslations`。

### 添加新模块

1. 创建 `src/i18n/<name>/en.ts` 和 `src/i18n/<name>/zh-CN.ts`。
2. 运行 `yarn dev` ——桶文件 `src/i18n/en.ts` 将自动重新生成。
3. 在页面/组件中使用 `t("<name>.<key>")`。

### 在开发模式下编辑翻译

1. 在任意页面 URL 后追加 `?edit_i18n=1`（例如 `http://localhost:4321/zh-CN/downloads?edit_i18n=1`）。
2. 页面右下角会出现一个蓝色浮动 `✎` 按钮。
3. 点击页面上任意可翻译的文本，即可打开内联编辑器。
4. 编辑后按 Enter 保存——页面将自动刷新。
5. 点击 `EN` 按钮可与英文版本进行对比。

### I18n 开发 API 端点

| 端点                                       | 方法 | 用途                                                 |
|--------------------------------------------|------|------------------------------------------------------|
| `GET /__API__/i18n/en-dict`                | GET  | 以 JSON 格式返回完整的英文词典                       |
| `GET /__API__/i18n/raw?locale=...&key=...` | GET  | 返回指定键的原始翻译值                               |
| `POST /__API__/i18n/save`                  | POST | 保存翻译值（`{ locale, key, value }`）               |

## FAQ

### FAQ 目录结构

```text
src/content/faq/
├── en/
│   ├── launcher.md            # title: What launcher should I use?
│   ├── java-version.md
│   └── region-specific.nt.md  # 仅限英文（无需翻译）
└── zh-CN/
    ├── launcher.md             # en/launcher.md 的翻译
    ├── java-version.md
    └── china-specific.nt.md    # 仅限中文（无需翻译）
```

### FAQ 规则

- **每个 `.md` 文件为一条问答**。`title` frontmatter 为问题，正文为答案。
- **语言目录中相同文件名** = 互相翻译的关系（例如 `en/launcher.md` ↔ `zh-CN/launcher.md`）。
- **`.nt.md` 后缀** = "不翻译"。该文件为特定语言专属，仅对该语言显示。其他语言既不显示也不会回退使用。
- **回退机制**：如果 `en/` 中存在某个非 `.nt.md` 文件但当前语言目录中没有，则显示英文版本作为回退。
- **排序**：项目按文件名字母顺序排列。

### 在开发模式下编辑 FAQ

在开发模式（`yarn dev`）下，FAQ 页面显示内联编辑控件：

- **每个 FAQ 项目**标题右侧有 `✎`（编辑）和 `✕`（删除）按钮。
- **列表顶部有 `+ Add FAQ` 按钮**。
- **编辑弹窗**：可更改文件名、切换 `.nt.md`、编辑标题和 Markdown 正文。
- **删除**：会提示确认。非 `.nt.md` 文件将从**所有语言**中删除（并显示警告）。

要编辑翻译，请导航至对应语言的 FAQ 页面（例如 `/zh-CN/faq`）并使用相同的控件。每个语言的文件是独立的。

### FAQ 开发 API 端点

| 端点                               | 方法 | 用途                                                                       |
|------------------------------------|------|----------------------------------------------------------------------------|
| `GET /__API__/faq/list?locale=...` | GET  | 列出指定语言的所有 FAQ 文件                                                |
| `POST /__API__/faq/save`           | POST | 创建或更新 FAQ 文件（`{ locale, filename, title, content, isNt }`）        |
| `POST /__API__/faq/delete`         | POST | 从单个语言中删除 FAQ 文件（`{ locale, filename }`）                        |
| `POST /__API__/faq/delete-all`     | POST | 从所有语言中删除 FAQ 文件（`{ filename }`）                                |

### 通过文件系统添加新 FAQ

1. 创建 `src/content/faq/<locale>/<filename>.md`。
2. 格式：

   ```markdown
   ---
   title: 在此填写问题
   ---
   在此填写 **Markdown** 格式的答案。
   ```

3. 如需添加仅特定语言的 FAQ，请使用 `.nt.md` 扩展名：

   ```markdown
   ---
   title: 仅限英文的问题
   ---
   仅对英文访客显示的答案。
   ```

4. 在开发模式下站点会自动重建（HMR）。生产环境请运行 `yarn build`。

## 开发 API 约定

所有开发模式下的 API 端点均以 `/__API__/` 为前缀，仅在开发模式（`yarn dev`）下可用。它们不会被打包到生产构建中。

## 想了解更多？

欢迎查阅：

- [Astro 文档](https://docs.astro.build) ——构建本站所使用的框架；
- [TailwindCSS 文档](https://tailwindcss.com/docs) ——用于样式设计的 CSS 框架；
- [TypeScript 文档](https://www.typescriptlang.org/docs/) ——TypeScript 和类型定义；
- [Mozilla 开发者网络（MDN）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) ——JavaScript 和 Web API。
