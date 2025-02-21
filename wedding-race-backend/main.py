from fastapi import FastAPI
from datetime import date

app = FastAPI()

@app.get("/api/weddingdate")
async def get_wedding_date():
    wedding_date = date(2025, 4, 1).strftime("%Y-%m-%d")
    return {"wedding_date": wedding_date}