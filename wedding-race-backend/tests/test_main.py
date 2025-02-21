from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_wedding_date():
    response = client.get("/api/weddingdate")
    assert response.status_code == 200
    assert response.headers["content-type"] == "application/json"
    data = response.json()
    assert data["wedding_date"] == "2025-04-01"

def test_get_wedding_date_invalid_method():
    response = client.post("/api/weddingdate")
    assert response.status_code == 405
