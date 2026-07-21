# Daily Website Health Report

Fully automated Datadog → PDF → Email pipeline for **https://piyushprasad.in**.

## What it does

1. **07:00 PM IST every day** (13:30 UTC), GitHub Actions runs `generate-report.mjs`.
2. The script pulls the last 24h from Datadog:
   - Synthetics: uptime %, response time (min/avg/max + trend), failed checks, SSL days-to-expiry
   - RUM: sessions, unique visitors, top browsers/devices/countries, JS errors, session replays, LCP/INP/CLS
3. Renders a corporate PDF `reports/Daily-Website-Report-YYYY-MM-DD.pdf` with:
   - Navy header band, cobalt **PP** monogram, brand tagline
   - **Overall Health Score** hero card (0–100 + grade: Excellent / Healthy / Fair / At Risk / Critical)
   - Meta table (domain, hosting = Vercel, monitoring = Datadog, generated-at)
   - Executive Summary (auto-written from the metrics)
   - Availability, Performance (with response-time sparkline chart), Security, Traffic, Application Health sections
   - Zebra-striped tables, top-N lists with %, page numbering, timestamped footer
4. Emails the PDF to `hello@piyushprasad.in` via SMTP.
   - **Subject:** `Daily Website Health Report - YYYY-MM-DD`
   - **Body:** the exact text below
   - **Attachment:** the daily PDF
5. If anything fails (Datadog outage, SMTP error, etc.) the script sends a **failure alert email** with the stack trace to `ALERT_TO` (or `REPORT_TO` as fallback) and exits non-zero so the GitHub Actions run is marked failed.
6. Every PDF is also uploaded as a **workflow artifact** (30-day retention) so historical reports can be re-downloaded from the Actions run page.

## Email body

```
Hello Piyush,

Please find attached today's Website Health Report for https://piyushprasad.in.

This report contains uptime, response time, SSL status, homepage availability, visitor analytics, and overall website health.

Overall Health Score: XX/100 (Grade)

Regards,
Automated Monitoring System
```

## Required GitHub Secrets

Set under **Settings → Secrets and variables → Actions**:

| Secret | Example | Purpose |
| --- | --- | --- |
| `DD_API_KEY` | Datadog API key | Auth |
| `DD_APP_KEY` | Datadog App key with `synthetics_read`, `rum_apps_read`, `metrics_read` | Auth |
| `DD_SITE` | `us5.datadoghq.com` | Datadog site |
| `DD_RUM_APPLICATION_ID` | `69dd9dd6-…` | Enables Traffic + App Health sections |
| `SITE_DOMAIN` | `piyushprasad.in` | Filters synthetic tests |
| `SMTP_HOST` | `smtp.gmail.com` | SMTP server |
| `SMTP_PORT` | `465` | 465 (SSL) or 587 (STARTTLS) |
| `SMTP_USER` | `you@gmail.com` | SMTP username / sender |
| `SMTP_PASS` | *(app password)* | Gmail app password or provider secret |
| `REPORT_TO` | `hello@piyushprasad.in` | *(optional, defaults to `hello@piyushprasad.in`)* |
| `REPORT_FROM` | *(optional)* | Custom From, defaults to `SMTP_USER` |
| `ALERT_TO` | *(optional)* | Where failure alerts go; falls back to `REPORT_TO` |

> **Gmail users:** create an App Password at https://myaccount.google.com/apppasswords and use it for `SMTP_PASS`. Never use your account password.

## Schedule

Configured in `.github/workflows/daily-report.yml`:

```yaml
- cron: "30 13 * * *"   # 13:30 UTC = 19:00 IST
```

Also triggerable manually from **Actions → Daily Website Health Report → Run workflow**.

## Run locally

```bash
cd scripts
npm install
DD_API_KEY=... DD_APP_KEY=... DD_SITE=us5.datadoghq.com \
DD_RUM_APPLICATION_ID=... SITE_DOMAIN=piyushprasad.in \
SKIP_EMAIL=1 node generate-report.mjs
```

The PDF is written to `../reports/`. `SKIP_EMAIL=1` skips both the report email and the failure alert.

## Notes

- Any missing data source (e.g. SSL synthetic not yet created) renders as `N/A` — the report never fails hard on a single failed query.
- All Datadog and SMTP credentials live only in GitHub Secrets; they never touch the browser bundle or the Vercel runtime.
- The Health Score algorithm: starts at 100, subtracts penalties for uptime below 99.9%, failed checks, avg response time above 500 ms, SSL under 30 days, and JS errors. Clamped to 0–100.
