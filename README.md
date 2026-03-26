# Om Gita Vaani

Life guidance rooted in the Bhagavad Gita — in Hinglish, Hindi & English.
A spiritually grounded AI advisor that responds like a wise Indian elder, not a chatbot.

## Features
- 54 curated authentic shlokas mapped to real emotional states
- Wise elder tone in Hinglish / Hindi / English
- Save & revisit guidance (localStorage)
- Text-to-speech in Indian English or Hindi
- Daily rotating shloka
- Browser push notifications

## Local Setup (5 minutes)

### 1. Prerequisites
- Node.js 18+ installed (https://nodejs.org)
- Anthropic API key (https://console.anthropic.com)

### 2. Clone & Install
  git clone https://github.com/YOUR_USERNAME/gita-vaani.git
  cd gita-vaani
  npm install

### 3. Add your API key
  cp .env.example .env.local
  # Open .env.local and set VITE_ANTHROPIC_API_KEY=sk-ant-...

### 4. Run
  npm run dev
  # Open http://localhost:5173

## Deploy to Vercel (Free)

  npm install -g vercel
  vercel
  # Add VITE_ANTHROPIC_API_KEY when prompted

Or connect GitHub repo at vercel.com for auto-deploy on every push.

## Push to GitHub (First time)

  git init
  git add .
  git commit -m "feat: Gita Vaani launch"
  git remote add origin https://github.com/YOUR_USERNAME/gita-vaani.git
  git branch -M main
  git push -u origin main

## Project Structure

  src/
    components/
      SeekScreen.jsx       Main guidance UI
      GuidanceCard.jsx     Response display
      SavedScreen.jsx      Saved guidance
      DailyScreen.jsx      Daily shloka
    data/
      verses.js            54 curated shlokas + matching logic
    hooks/
      useGitaAI.js         Anthropic API
      useSaved.js          localStorage persistence
      useSpeech.js         Text-to-speech
    utils/
      prompt.js            AI system prompt (the soul of the app)

## Roadmap
- User accounts with Supabase
- WhatsApp daily shloka bot
- PWA — installable on phone
- Anonymous community sharing

"Yoga is skill in action." BG 2.50
