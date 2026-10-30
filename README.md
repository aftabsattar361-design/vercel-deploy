# FastAPI + HTML/CSS Frontend on Vercel

Is project ko direct Vercel par deploy kia ja sakta hai.

## Folder Structure
- `api/index.py`: FastAPI backend
- `public/`: HTML, CSS, JavaScript frontend
- `requirements.txt`: Python packages
- `vercel.json`: Vercel routing aur serverless config

## Local Setup & Test
1. Virtual environment banayein aur dependencies install karein:
   ```bash
   pip install -r requirements.txt
   ```
2. FastAPI ko locally run karein:
   ```bash
   uvicorn api.index:app --reload
   ```

## Deployment Steps
1. Push this project folder to GitHub.
2. Go to Vercel Dashboard -> **New Project** -> Import GitHub Repo.
3. Click **Deploy**.
