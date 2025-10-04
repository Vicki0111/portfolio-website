# Deployment Guide

This guide will walk you through deploying your React portfolio frontend and Node.js backend to production.

## 📋 Pre-Deployment Checklist

### 1. Customize Your Portfolio
- [ ] Update personal information in all components
- [ ] Replace GitHub username in `src/services/github.js`
- [ ] Add your profile photo to `public/` folder
- [ ] Update contact information
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Test everything locally

### 2. Prepare for Deployment
- [ ] Commit all changes to Git
- [ ] Create GitHub repository
- [ ] Set up email service (Gmail App Password recommended)
- [ ] Choose deployment platforms

## 🚀 Frontend Deployment

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Create React App
     - Build Command: `npm run build`
     - Output Directory: `build`
     - Install Command: `npm install`

3. **Environment Variables**
   Add these in Vercel dashboard:
   ```
   REACT_APP_API_URL=https://your-backend-url.com
   ```

4. **Deploy**
   - Click Deploy
   - Your site will be available at `https://your-project.vercel.app`

### Option 2: Netlify

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `build` folder
   - Or connect your GitHub repo for automatic deployments

3. **Configure Redirects**
   Create `public/_redirects`:
   ```
   /*    /index.html   200
   ```

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🖥 Backend Deployment

### Option 1: Railway (Recommended)

1. **Prepare Backend**
   ```bash
   cd backend
   # Ensure package.json has correct start script
   ```

2. **Deploy to Railway**
   - Go to [railway.app](https://railway.app)
   - Create new project
   - Connect GitHub repository
   - Select the backend folder (if in subdirectory)

3. **Environment Variables**
   Set these in Railway dashboard:
   ```
   NODE_ENV=production
   PORT=5000
   FRONTEND_URL=https://your-frontend-url.com
   EMAIL_SERVICE=gmail
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=your.email@gmail.com
   EMAIL_TO=your.email@gmail.com
   SEND_AUTO_REPLY=true
   ```

4. **Domain**
   - Railway provides automatic HTTPS domain
   - Custom domain available on paid plans

### Option 2: Heroku

1. **Install Heroku CLI**
   - Download from [heroku.com](https://heroku.com)

2. **Deploy**
   ```bash
   cd backend
   heroku create your-portfolio-api
   heroku config:set NODE_ENV=production
   heroku config:set EMAIL_USER=your.email@gmail.com
   heroku config:set EMAIL_PASS=your-app-password
   # Add other environment variables
   
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

### Option 3: DigitalOcean App Platform

1. **Create App**
   - Go to DigitalOcean
   - Create new app
   - Connect GitHub repository

2. **Configure**
   - Runtime: Node.js
   - Build Command: `npm install`
   - Run Command: `npm start`
   - Port: 5000

3. **Environment Variables**
   Add all required variables in the settings

## 🔧 Configuration Updates

### Update API URLs

1. **Frontend**
   Create `.env.production`:
   ```
   REACT_APP_API_URL=https://your-backend-url.com
   ```

2. **Backend**
   Update CORS origins:
   ```javascript
   app.use(cors({
     origin: [
       'http://localhost:3000',
       'https://your-frontend-url.com'
     ]
   }))
   ```

### SSL/HTTPS Setup

Most platforms provide automatic HTTPS. For custom domains:
- Vercel: Automatic SSL
- Netlify: Automatic SSL
- Railway: Automatic SSL
- Heroku: Automatic SSL

## 📧 Email Setup for Production

### Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication**
   - Go to Google Account settings
   - Security → 2-Step Verification

2. **Generate App Password**
   - Security → App passwords
   - Select "Mail" and generate password
   - Use this password in EMAIL_PASS

3. **Test Email**
   - Send test email through deployed backend
   - Check spam folder if not received

### Alternative Email Services

#### SendGrid
```env
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your-sendgrid-api-key
```

#### AWS SES
```env
EMAIL_SERVICE=ses
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1
```

## 🛠 Post-Deployment

### 1. Test Everything
- [ ] All pages load correctly
- [ ] Dark mode toggle works
- [ ] GitHub API loads projects
- [ ] Contact form submits successfully
- [ ] Emails are received
- [ ] Mobile responsiveness
- [ ] Performance (run Lighthouse audit)

### 2. Set Up Monitoring
- Enable error tracking
- Set up uptime monitoring
- Configure email notifications for downtime

### 3. Custom Domain (Optional)
- Purchase domain from registrar
- Configure DNS settings
- Update CORS origins
- Test SSL certificate

## 🔄 Continuous Deployment

### Automatic Deployments

1. **Frontend (Vercel/Netlify)**
   - Automatically deploys on push to main branch
   - Preview deployments for pull requests

2. **Backend (Railway/Heroku)**
   - Automatic deployments on push
   - Environment-specific deployments

### GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
```

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Check FRONTEND_URL in backend environment
   - Verify CORS configuration

2. **Email Not Working**
   - Test email credentials locally
   - Check spam folder
   - Verify environment variables

3. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are in package.json
   - Review build logs

4. **GitHub API Rate Limiting**
   - Use personal access token (optional)
   - Implement caching for production

### Environment-Specific Issues

#### Vercel
- Build Command: `npm run build`
- Output Directory: `build`
- Node.js Version: Auto-detected

#### Railway
- Start Command: `npm start`
- Port: Automatically assigned
- Health checks: Automatic

#### Heroku
- Procfile may be needed: `web: npm start`
- Port from process.env.PORT

## 📈 Performance Optimization

### Frontend
- Optimize images (use WebP format)
- Implement lazy loading
- Enable gzip compression
- Use CDN for static assets

### Backend
- Implement caching for GitHub API
- Use compression middleware
- Optimize database queries (if applicable)
- Rate limiting for production

## 🔒 Security Considerations

### Environment Variables
- Never commit .env files
- Use strong passwords
- Rotate API keys regularly

### Backend Security
- Implement rate limiting
- Validate all inputs
- Use HTTPS only
- Set proper CORS origins

---

## 🎉 You're Live!

Once deployed:

1. **Share Your Portfolio**
   - Add to LinkedIn profile
   - Share on social media
   - Include in resume/CV

2. **SEO Optimization**
   - Update meta tags
   - Add Open Graph images
   - Submit to Google Search Console

3. **Analytics** (Optional)
   - Google Analytics
   - Vercel Analytics
   - Track visitor engagement

Congratulations! Your portfolio is now live and accessible to the world! 🚀