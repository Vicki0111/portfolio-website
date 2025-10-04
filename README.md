# Personal Portfolio Website

A modern, responsive single-page personal portfolio application built with React and Node.js, featuring GitHub API integration, dark mode, smooth animations, and a functional contact form.

## 🌟 Features

### Frontend
- **Modern React App** - Built with React 18 and modern hooks
- **Responsive Design** - Fully responsive with mobile-first approach
- **Dark Mode Toggle** - System preference detection with manual toggle
- **Smooth Animations** - Framer Motion animations and micro-interactions
- **GitHub API Integration** - Dynamically pulls your latest repositories
- **Project Showcase** - Interactive project cards with detailed modals
- **Contact Form** - Full validation with success/error states
- **Performance Optimized** - Lazy loading and code splitting ready

### Backend
- **Express.js Server** - RESTful API for contact form handling
- **Email Integration** - Nodemailer with SMTP/Gmail support
- **Form Validation** - Server-side validation with express-validator
- **Rate Limiting** - Protection against spam submissions
- **Security** - Helmet.js, CORS, and other security measures
- **Auto-Reply** - Optional automated response emails

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/Vicki0111/portfolio-website.git
cd portfolio-website
```

### 2. Frontend Setup
```bash
# Install frontend dependencies
npm install

# Start development server
npm start
```
The app will open at http://localhost:3000

### 3. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install backend dependencies
npm install

# Copy environment file and configure
cp .env.example .env
# Edit .env with your email settings

# Start backend server
npm run dev
```
The API will run at http://localhost:5000

## 📧 Email Configuration

### Option 1: Gmail (Recommended)
1. Enable 2-Factor Authentication on your Google Account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → App passwords
   - Generate password for "Mail"
3. Update `.env` file:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your.email@gmail.com
EMAIL_TO=your.email@gmail.com
```

### Option 2: Custom SMTP
```env
EMAIL_SERVICE=custom
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your.email@example.com
SMTP_PASS=your-password
EMAIL_FROM=your.email@example.com
EMAIL_TO=your.email@example.com
```

## 🎨 Customization

### 1. Personal Information
Update these files with your information:

**Frontend (`src/components/`):**
- `Hero.js` - Name, bio, social links, profile photo
- `About.js` - Bio, skills, achievements
- `Header.js` - Logo/name
- `Contact.js` - Contact information

**GitHub Integration:**
- `src/services/github.js` - Replace `'your-github-username'` with your GitHub username

### 2. Styling
- Global variables in `src/styles/index.css`
- Component-specific styles in `src/styles/`
- Colors, fonts, spacing all customizable via CSS variables

### 3. Content
- Add your profile photo to `public/` folder
- Update favicon and manifest files
- Add your resume PDF to `public/resume.pdf`

## 🚀 Deployment

### Frontend Deployment (Vercel)
1. Push your code to GitHub
2. Connect Vercel to your repository
3. Set build command: `npm run build`
4. Set output directory: `build`
5. Add environment variable: `REACT_APP_API_URL=https://your-backend-url.com`

### Backend Deployment (Railway)
1. Push backend code to separate repository or subdirectory
2. Connect Railway to your repository
3. Set start command: `npm start`
4. Add environment variables from `.env`

### Alternative Deployment Options
- **Frontend**: Netlify, GitHub Pages, Firebase Hosting
- **Backend**: Heroku, DigitalOcean, AWS, Google Cloud Platform

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static files
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/         # React components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Modal.js
│   ├── hooks/              # Custom hooks
│   │   └── useTheme.js
│   ├── services/           # API services
│   │   └── github.js
│   ├── styles/             # CSS files
│   │   ├── index.css
│   │   ├── App.css
│   │   └── [Component].css
│   ├── App.js
│   └── index.js
├── backend/
│   ├── server.js           # Express server
│   ├── package.json
│   └── .env.example
├── package.json
└── README.md
```

## 🛠 Technologies Used

### Frontend
- React 18
- Framer Motion (animations)
- React Icons
- CSS Variables (theming)

### Backend
- Node.js & Express
- Nodemailer (email)
- Express Validator
- Helmet.js (security)
- CORS
- Rate limiting

## 📱 Responsive Breakpoints

- **Desktop**: 1280px+
- **Tablet**: 768px - 1279px
- **Mobile**: < 768px

## ✨ Performance Features

- Responsive images with proper sizing
- Smooth scrolling and animations
- Optimized CSS with CSS variables
- Component-based architecture
- Error boundaries and loading states

## 🔧 Available Scripts

### Frontend
- `npm start` - Run development server
- `npm build` - Create production build
- `npm test` - Run tests

### Backend
- `npm start` - Run production server
- `npm run dev` - Run development server with nodemon

## 🐛 Troubleshooting

### Common Issues

1. **GitHub API not loading projects**
   - Update username in `src/services/github.js`
   - Check API rate limits
   - Ensure repositories are public

2. **Contact form not working**
   - Verify backend is running on port 5000
   - Check email configuration in `.env`
   - Review browser console for errors

3. **Styling issues**
   - Clear browser cache
   - Check CSS variable definitions
   - Verify import paths

### Getting Help
- Check browser developer console for errors
- Verify all environment variables are set
- Ensure Node.js version compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Typography using [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

---

**Made with ❤️ using React and Node.js**

For questions or support, please open an issue or contact [your.email@example.com](mailto:your.email@example.com).
