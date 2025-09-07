# 个人简历
这是一个使用 Next.js 和 Tailwind CSS 构建的个人简历项目。  
example


## 项目概述
本项目旨在创建一个现代化、响应式的在线简历，展示个人信息、技能、工作经历、项目经验和教育背景。


## 主要特性
- 响应式设计，适配各种设备
- 清晰的布局结构，包括个人信息、技能介绍、工作经历、项目经验和教育背景
- 使用 Tailwind CSS 实现的现代化 UI 设计
- 支持打印优化，便于生成 PDF 版本


## 技术栈
- Next.js
- React
- TypeScript
- Tailwind CSS


## 开始使用
1. **克隆仓库**：
   ```bash
   git clone https://github.com/XiaomingX/simple-resume-online.git
   cd simple-resume-online
   ```

2. **安装依赖（使用 pnpm）**：
   ```bash
   pnpm install
   ```

3. **运行开发服务器**：
   ```bash
   pnpm dev
   ```

4. 在浏览器中打开 `http://localhost:3000` 查看结果。


## 项目结构
- `src/components/`：包含所有的 React 组件
- `src/app/`：包含主页面组件
- `public/`：存放静态资源，如图片


## 自定义简历内容
只需要修改 `config/config.tsx` 中的配置内容即可。


## 简历模块
- `src/components/personal-info.tsx`：个人信息
- `src/components/skills-and-certificates.tsx`：技术栈和证书
- `src/components/skill-introduction.tsx`：技能介绍
- `src/components/work-experience.tsx`：工作经历
- `src/components/project-experience.tsx`：项目经验
- `src/components/education-experience.tsx`：教育背景


## 构建和部署
1. **构建生产版本**，运行：
   ```bash
   pnpm build
   ```

2. 构建完成后，使用以下命令**启动生产服务器**：
   ```bash
   pnpm start
   ```


## 贡献
欢迎提出问题和贡献代码。请确保遵循项目的代码风格和贡献指南。


## 许可证
本项目采用 Apache License 2.0 许可证。详情请参阅 LICENSE 文件。


## 仓库地址
仓库地址：[https://github.com/XiaomingX/simple-resume-online](https://github.com/XiaomingX/simple-resume-online)