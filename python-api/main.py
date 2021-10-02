from fastapi import FastAPI
from pydantic import BaseModel

class AnonimizeRequest(BaseModel):
    text: str

class AnonimizeResponse(BaseModel):
    entity: str
    anonymization: str
    anon_type: str

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello from python!"}


@app.get("/anonymize")
async def root(item: AnonimizeRequest):
    print(item.text)
    return {"message": "Python api is working!"}
