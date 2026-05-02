# Deployment Guide

This guide covers deploying Glow Dome to production environments.

## Pre-Deployment Checklist

- [ ] All code reviewed and merged to main
- [ ] Tests passing in CI
- [ ] No linting errors: `npm run lint`
- [ ] TypeScript types checking: `npm run type-check`
- [ ] Production build tested locally: `npm run build && npm run preview`
- [ ] Environment variables configured in production system
- [ ] Analytics configured (if applicable)
- [ ] Error tracking configured (Sentry, etc.)
- [ ] Performance monitoring setup
- [ ] SEO meta tags in index.html updated
- [ ] Favicon and assets prepared
- [ ] Security audit completed: `npm audit`

## Environment Configuration

### Production Environment Variables

Set these in your production environment:

```env
# Keep default for standard deployment
PORT=5173
BASE_PATH=/

# Set your API endpoints for production
VITE_API_URL=https://api.yourdomain.com
VITE_API_KEY=your_production_api_key

# Optional feature flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_NOTIFICATIONS=true
```

## Deployment Platforms

### Vercel (Recommended)

1. **Connect Repository**:
   - Go to vercel.com
   - Import your GitHub repository
   - Select the correct branch (main)

2. **Configure Settings**:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm ci`

3. **Add Environment Variables**:
   - Add all variables from `.env.example`
   - Set production-specific values

4. **Deploy**:
   - Automatic deployment on push to main
   - Automatic Preview deployments on PRs
   - Monitor deployments on Vercel dashboard

### Netlify

1. **Connect Repository**:
   - Go to netlify.com
   - Connect your GitHub account
   - Select your repository

2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: Use .nvmrc (18.x)

3. **Add Environment Variables**:
   - Go to Site settings > Build & deploy > Environment
   - Add production variables

4. **Deploy**:
   - Automatic deployment on push to main
   - Preview deployments on pull requests

### AWS S3 + CloudFront

1. **Build the Project**:
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**:
   ```bash
   aws s3 mb s3://glow-dome-prod
   ```

3. **Upload Files**:
   ```bash
   aws s3 sync dist/ s3://glow-dome-prod --delete
   ```

4. **Configure CloudFront**:
   - Create CloudFront distribution
   - Set S3 bucket as origin
   - Configure cache behaviors
   - Enable HTTPS

5. **Setup Automatic Deployments**:
   - Use GitHub Actions (example in `.github/workflows/deploy.yml`)
   - Or use CodePipeline for CI/CD

### Docker

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine as builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   FROM node:18-alpine
   WORKDIR /app
   RUN npm install -g serve
   COPY --from=builder /app/dist ./dist
   EXPOSE 5173
   CMD ["serve", "-s", "dist", "-l", "5173"]
   ```

2. **Build & Run**:
   ```bash
   docker build -t glow-dome:latest .
   docker run -p 5173:5173 glow-dome:latest
   ```

3. **Push to Registry**:
   ```bash
   docker tag glow-dome:latest yourregistry/glow-dome:latest
   docker push yourregistry/glow-dome:latest
   ```

## Performance Optimization

### Before Deployment

1. **Analyze Bundle**:
   ```bash
   npm run build -- --analyze
   ```

2. **Optimize Images**:
   - Compress images in `public/`
   - Use WebP format where possible
   - Optimize SVGs

3. **Code Splitting**:
   - Already configured in vite.config.ts
   - Monitor bundle size in production

### Production Best Practices

- Enable gzip compression on server
- Setup CDN for static assets
- Configure caching headers
- Minify CSS and JavaScript (automatic with Vite)
- Enable HTTP/2
- Use service workers for offline support (optional)

## Monitoring & Maintenance

### Monitoring Tools

- **Performance**: Google Lighthouse, WebPageTest
- **Errors**: Sentry, LogRocket
- **Analytics**: Google Analytics, Mixpanel
- **Uptime**: Uptime Robot, Pingdom

### Regular Maintenance

1. **Weekly**:
   - Check error logs
   - Monitor performance metrics
   - Review user feedback

2. **Monthly**:
   - Update dependencies: `npm outdated`
   - Run security audit: `npm audit`
   - Review analytics data
   - Check logs for anomalies

3. **Quarterly**:
   - Major dependency updates
   - Performance optimization review
   - Security review
   - User experience review

## Rollback Procedures

### Vercel
- Automatic rollback available in deployments dashboard
- Select previous successful deployment

### Netlify
- Deploy previews prevent production issues
- Rollback through deployment history

### AWS S3
```bash
aws s3 sync s3://glow-dome-prod-backup dist/
```

### Docker
```bash
docker run -p 5173:5173 yourregistry/glow-dome:previous-tag
```

## Security Checklist

- [ ] HTTPS enabled (mandatory)
- [ ] Security headers configured:
  - Content-Security-Policy
  - X-Frame-Options
  - X-Content-Type-Options
  - Strict-Transport-Security
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] API key rotation schedule
- [ ] Input validation on server
- [ ] Sensitive data not in environment variables files
- [ ] Regular security audits
- [ ] Dependency vulnerability monitoring

## Troubleshooting

### Build Failures
```bash
# Clear cache and rebuild
rm -rf node_modules .vite dist
npm ci
npm run build
```

### 404 Errors on Routing
- Ensure SPA fallback is configured
- For Vercel: automatic
- For Netlify: add `_redirects` file with:
  ```
  /* /index.html 200
  ```
- For S3: configure error document to index.html

### Environment Variables Not Loading
- Verify variable names match code
- Check deployment platform's env var settings
- Ensure VITE_ prefix for client-side variables
- Rebuild after changing env vars

### Performance Issues
- Check bundle size: `npm run build`
- Analyze with webpack-bundle-analyzer
- Optimize images
- Enable compression on server
- Check API response times

## Support

For deployment issues:
1. Check logs in deployment platform
2. Review this guide's troubleshooting section
3. Consult platform-specific documentation
4. Open an issue in the repository

---

Happy deploying! 🚀
