from fastapi import FastAPI
from datetime import datetime

app = FastAPI()


@app.get("/api/weddingdate")
async def get_wedding_date():
    wedding_date = datetime(2025, 4, 1, 13, 0, 0).strftime("%Y-%m-%dT%H:%M:%SZ")
    return {"wedding_date": wedding_date}
