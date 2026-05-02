# Contributing to Glow Dome

Thank you for your interest in contributing to Glow Dome! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful and constructive in all interactions.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in Issues
2. If not, create a new issue with:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (Node version, OS, etc.)

### Suggesting Enhancements

1. Check existing issues and discussions
2. Create an issue with the `enhancement` label
3. Describe the feature and why it would be useful
4. Provide examples or mockups if applicable

### Making Changes

1. **Fork the repository** and create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Set up development environment**:
   ```bash
   npm install
   npm run dev
   ```

3. **Make your changes**:
   - Keep commits atomic and well-described
   - Follow the existing code style
   - Write meaningful commit messages
   - Reference issues in commit messages (e.g., "Fixes #123")

4. **Run quality checks**:
   ```bash
   npm run type-check
   npm run lint
   npm run format
   npm run build
   ```

5. **Create a Pull Request**:
   - Describe what changes were made and why
   - Link related issues
   - Include screenshots for UI changes
   - Ensure CI passes

## Development Guidelines

### Code Style

- Follow existing code patterns and conventions
- Use TypeScript for type safety
- Write self-documenting code with clear variable names
- Add comments for complex logic

### Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useFormData.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **CSS Classes**: Tailwind conventions with kebab-case

### File Structure

Keep files organized by feature/section:
```
src/
├── components/section-name/
│   ├── ComponentName.tsx
│   ├── useHook.ts
│   └── index.ts
```

### Component Guidelines

- One component per file (unless closely related)
- Export components as default exports
- Use functional components with hooks
- Add proper TypeScript types
- Keep components focused and reusable

### Git Workflow

1. Keep your branch up to date with `main`:
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. Push changes:
   ```bash
   git push origin feature/your-feature-name
   ```

3. Create a Pull Request on GitHub

## Testing

While automated tests aren't currently required:
- Test your changes manually before submitting PR
- Test on different screen sizes (responsive)
- Test in different browsers if possible
- Verify forms and interactions work properly

## Documentation

- Update README.md if adding new features
- Add JSDoc comments for exported functions
- Update this guide if changing development process
- Keep comments up to date with code changes

## Questions?

- Open a discussion in the Issues
- Reference relevant documentation
- Ask for clarification on unclear guidelines

Thank you for contributing! 🎉
