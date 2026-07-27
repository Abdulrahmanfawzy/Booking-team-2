# Doctor Appointment Booking Platform

A full-featured, bilingual (English / Arabic) web app that lets patients find the right specialist, explore doctor profiles and reviews, and book appointments end-to-end — from search to confirmation. Built with React 19, TypeScript, and a feature-based architecture.

> Built as part of the **Huma Volve** program.

---

## ✨ Features

- **🔎 Find a Specialist** — search and filter doctors, browse profiles, specialties, and patient reviews.
- **📅 Booking** — reserve appointments end-to-end with live availability, from search to confirmation.
- **📆 Appointments** — view, manage, and track appointment history.
- **🗺️ Location-aware** — interactive maps (Leaflet + Google Maps) to discover nearby doctors.
- **👤 Profile** — manage personal information and account security (password change).
- **📊 Dashboard** — overview of activity with interactive charts.
- **📬 Contact Us** — validated contact form.
- **🌍 Internationalization** — full English & Arabic support with RTL, powered by i18next.
- **🔐 Authentication** — registration, login, OTP verification, password reset flow, Google Sign-In, and protected routes.

---

## 🛠️ Tech Stack

| Area | Tools |
| --- | --- |
| Core | React 19, TypeScript, Vite |
| Data & State | TanStack Query, Axios |
| Forms & Validation | React Hook Form, Zod |
| Styling & UI | Tailwind CSS v4, Radix UI / shadcn, Lucide, tw-animate-css |
| Routing | React Router v7 |
| Maps | Leaflet / React-Leaflet, Google Maps API |
| Charts | Recharts |
| i18n | i18next, react-i18next |
| Auth | @react-oauth/google, OTP (input-otp) |
| Carousels / Misc | Embla, Swiper, date-fns, Sonner (toasts) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20 or 22)
- npm (a `package-lock.json` is included)

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Create your environment file (see below)
#    then fill in the values

# 3. Start the dev server
npm run dev
```

The app runs at **http://localhost:5173** by default.

### Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_API_URL=https://your-api-base-url/api
VITE_DISABLE_AUTH=false
VITE_GOOGLE_CLIENT_ID=your-google-oauth-client-id.apps.googleusercontent.com
```

> **Note:** For Google Sign-In to render, your dev origin (`http://localhost:5173`) must be added to **Authorized JavaScript origins** in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) for the client ID above.

---

## 📜 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

The codebase follows a **feature-based architecture** — each feature owns its API calls, components, hooks, types, and schemas.

```
src/
├── app/                # App shell: router, providers
│   ├── providers/      # Global providers (React Query, Google OAuth, ...)
│   └── routes/         # Route-level pages & ProtectedRoute
├── features/           # Feature modules
│   ├── appointment/
│   ├── auth/           # login, register, OTP, password reset, Google login
│   ├── booking/
│   ├── chooseSpecialist/
│   ├── contactUs/
│   ├── dashboard/
│   ├── home/
│   └── profile/
├── components/         # Shared UI (ui/, shared/, layout/)
├── i18n/               # Config + locales (en.json, ar.json)
├── lib/                # Utilities & configured clients
├── services/           # Cross-cutting services
├── constants/
├── types/
└── assets/
```

---

## 🌍 Internationalization

Translations live in `src/i18n/locales/` (`en.json`, `ar.json`). The UI adapts direction (LTR / RTL) based on the selected language.

---

## 📄 License

This project is for educational / portfolio purposes.
