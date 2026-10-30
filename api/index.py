from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="FastAPI Vercel App")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/python")
def hello_world():
    return {
        "status": "success",
        "message": "Hello from FastAPI on Vercel!",
        "data": {
            "framework": "FastAPI",
            "platform": "Vercel Serverless"
        }
    }
