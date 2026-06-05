# 🚀 Deploy ARALU Website to Vercel

## Quick Deploy (Recommended)

### Option 1: GitHub + Vercel (Easiest)

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `aralu-sarees`
   - Make it Public or Private
   - Click "Create repository"

2. **Push your code to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/aralu-sarees.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository `aralu-sarees`
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Done! 🎉

### Option 2: Direct Vercel CLI Deploy

1. **Install Vercel CLI globally**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd aralu-sarees
   vercel
   ```
   - Follow the prompts
   - Select your Vercel account
   - Answer "yes" to setup and deploy
   - Your site will be live!

---

## ✅ After Deployment

Your site will be live at:
- **Preview URL**: `aralu-sarees-xxx.vercel.app`
- **Production URL**: Add custom domain later

### Add Custom Domain (Optional)

1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Add your custom domain (e.g., `aralu.com`)
5. Update DNS records as shown by Vercel

---

## 🔧 Environment Variables (If needed later)

If you add a database or other services:
1. Go to Vercel dashboard → Your Project
2. Settings → Environment Variables
3. Add variables like:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_API_URL`

---

## 📝 Important Notes

✅ **What's included in deployment:**
- All saree images in `/public/sareeimages`
- Brand assets (logo, hero image)
- All 3 category sliders
- Contact section with WhatsApp integration
- Floating WhatsApp button
- Mobile responsive design

✅ **Automatic features:**
- Auto-deploy on every git push (if using GitHub)
- HTTPS by default
- Global CDN for fast loading
- Automatic image optimization

---

## 🆘 Troubleshooting

**Build fails?**
- Check `package.json` has all dependencies
- Make sure Node.js version is compatible (18.x or newer)

**Images not loading?**
- Images are in `/public` - they'll work automatically
- Vercel optimizes them automatically

**Need help?**
- Vercel docs: https://vercel.com/docs
- Next.js deployment: https://nextjs.org/docs/deployment
