from fastapi import FastAPI
from pydantic import BaseModel
import anonymizer.agent as ai

class AnonimizeRequest(BaseModel):
    text: str

class AnonimizeResponse(BaseModel):
    entity: str
    anonymization: str
    anon_type: str

app = FastAPI()

agent = ai.DocumentAnonymizer('pl_core_news_md')

@app.get("/")
async def root():
    return {"message": "Hello from python!"}


@app.get("/anonymize")
async def anonymize(item: AnonimizeRequest):
    collection = agent.anonymize(item.text)
    response = [AnonimizeResponse(  entity=elem.entity,
                                    anonymization=elem.anonymization,
                                    anon_type=elem.anon_type)
                                    for elem in collection]
    return {"response": response}
