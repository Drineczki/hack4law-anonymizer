from fastapi import FastAPI
from pydantic import BaseModel


app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello from python!"}


@app.get("/test-python-route")
async def root():
    return {"message": "Python api is working!"}
