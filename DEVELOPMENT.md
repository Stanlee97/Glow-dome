# Development Setup Guide

Complete guide for setting up and developing Glow Dome locally.

## System Requirements

- **Node.js**: 18.x or higher (check `.nvmrc`)
- **npm**: 8.x or higher (included with Node.js)
- **npm**: 8.x or higher
- **Git**: For version control
- **Code Editor**: VS Code recommended

## Initial Setup

### 1. Clone Repository

```bash
git clone https://github.com/yourname/glow-dome.git
cd glow-dome
```

### 2. Install Node Version Manager (Optional but Recommended)

Using nvm (macOS/Linux):
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm use
```

Using nvm-windows:
- Download and install from https://github.com/coreybutler/nvm-windows

### 3. Install Dependencies

```bash
npm install
```

This installs all dependencies listed in `package.json`.

### 4. Setup Environment Configuration

```bash
cp .env.example .env
```

Edit `.env` if needed for local development (defaults work for most cases).

### 5. Start Development Server

```bash
npm run dev
```

Server will start at `http://localhost:5173` by default.

## Development Workflow

### Daily Workflow

1. **Pull latest changes**:
   ```bash
   git pull origin main
   ```

2. **Install any new dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Make changes** in your code editor

5. **Test your changes** in the browser (auto-refreshes via HMR)

### Creating a Feature Branch

```bash
git checkout -b feature/feature-name
# or
git checkout -b fix/bug-name
# or
git checkout -b docs/documentation-update
```

### Code Quality Checks

Before committing, run:

```bash
# Check TypeScript types
npm run type-check

# Run linter
npm run lint

# Format code
npm run format

# Check formatting
npm run format:check
```

### Committing Changes

```bash
git add .
git commit -m "feat: add new feature description"
```

Use conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `style:` for formatting
- `refactor:` for code restructuring
- `perf:` for performance improvements
- `test:` for tests
- `chore:` for maintenance

### Push and Create Pull Request

```bash
git push origin feature/feature-name
```

1. Go to GitHub
2. Create Pull Request
3. Describe your changes
4. Wait for CI checks to pass
5. Request review from team members

## VS Code Setup (Recommended)

### Essential Extensions

1. **ES7+ React/Redux/React-Native snippets**: dsznajder.es7-react-js-snippets
2. **Tailwind CSS IntelliSense**: bradlc.vscode-tailwindcss
3. **TypeScript Vue Plugin**: Vue.vscode-typescript-vue-plugin
4. **ESLint**: dbaeumer.vscode-eslint
5. **Prettier**: esbenp.prettier-vscode
6. **Thunder Client**: rangav.vscode-thunder-client (for API testing)

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "search.exclude": {
    "node_modules": true,
    "dist": true,
    ".vite": true
  }
}
```

## Project Structure Explained

```
glow-dome/
├── src/
│   ├── components/              # React components
│   │   ├── layout/             # Layout components (Navbar, Footer)
│   │   ├── sections/           # Page sections
│   │   ├── ui/                 # Reusable UI components
│   │   └── WhatsAppFloating.tsx
│   ├── pages/                   # Page components (routing)
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # React DOM entry point
│   └── index.css                # Global styles
├── public/                       # Static assets
│   └── images/
├── .github/workflows/           # CI/CD workflows
├── .vscode/                     # VS Code settings
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── vite.config.ts              # Vite config
├── .eslintrc.json              # ESLint config
├── .prettierrc.json            # Prettier config
├── .editorconfig                # Editor config
├── README.md                    # Project documentation
├── CONTRIBUTING.md              # Contribution guide
├── DEPLOYMENT.md                # Deployment guide
└── LICENSE                      # MIT License
```

## Common Development Tasks

### Adding a New Component

1. Create file in appropriate location:
   ```bash
   touch src/components/MyComponent.tsx
   ```

2. Use TypeScript template:
   ```tsx
   import React from 'react';

   interface MyComponentProps {
     // Define props here
   }

   export const MyComponent: React.FC<MyComponentProps> = (props) => {
     return (
       <div>
         {/* Component JSX */}
       </div>
     );
   };
   ```

3. Export from `index.ts` for cleaner imports

4. Use in other components:
   ```tsx
   import { MyComponent } from '@/components/MyComponent';
   ```

### Adding a New Page

1. Create component in `src/pages/`:
   ```tsx
   export default function MyPage() {
     return <div>Page content</div>;
   }
   ```

2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/my-page" component={MyPage} />
   ```

3. Add navigation link in Navbar component

### Using Tailwind CSS

```tsx
<div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-900">
  <h1 className="text-2xl font-bold">Title</h1>
</div>
```

Documentation: https://tailwindcss.com/docs

### Form Handling with React Hook Form

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";

const schema = z.object({
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

export function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Input {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Debugging

### Browser DevTools

1. Open DevTools: F12 or Cmd+Option+I
2. Use Console tab for logs
3. Use Network tab to monitor API calls
4. Use React Developer Tools extension

### VS Code Debugging

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src",
      "sourceMaps": true
    }
  ]
}
```

### Console Logging

```tsx
console.log('Debug message:', value);
console.warn('Warning message');
console.error('Error message', error);
```

## Testing

While automated tests aren't configured yet, you can:

1. **Manual Testing**:
   - Test all user interactions
   - Test responsive design
   - Test form validation
   - Test on different browsers

2. **Visual Testing**:
   - Check against design mockups
   - Verify colors and spacing
   - Check typography

3. **Performance Testing**:
   - Use Chrome DevTools Lighthouse
   - Check bundle size: `npm run build`

## Troubleshooting

### Port Already in Use

```bash
# Use different port
PORT=3000 npm run dev

# Or kill process using port 5173
# On macOS/Linux:
lsof -ti:5173 | xargs kill -9

# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### Module Not Found Errors

```bash
# Clear cache and reinstall
rm -rf node_modules .vite
npm install
```

### HMR Not Working

- Check firewall settings
- Try restarting vite dev server
- Check network configuration

### TypeScript Errors

```bash
# Run type check
npm run type-check

# Check tsconfig.json configuration
```

### Dependency Issues

```bash
# Check for outdated packages
npm outdated

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## Performance Tips

1. **Code Splitting**: Lazy load routes
   ```tsx
   const Page = React.lazy(() => import('./Page'));
   ```

2. **ImageOptimization**: Use appropriate formats and sizes

3. **State Management**: Use React Query for server state

4. **Memoization**: Use React.memo for expensive components

5. **Bundle Analysis**: Check bundle size regularly

## Resources

- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org
- **Vite**: https://vitejs.dev
- **Tailwind**: https://tailwindcss.com
- **shadcn/ui**: https://ui.shadcn.com
- **React Hook Form**: https://react-hook-form.com
- **Zod**: https://zod.dev

## Getting Help

1. Check existing documentation
2. Search GitHub issues
3. Ask team members
4. Open a new issue with detailed info

---

Happy coding! 🎉
