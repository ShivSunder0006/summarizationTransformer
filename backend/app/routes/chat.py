from fastapi import APIRouter
from pydantic import BaseModel
from services.agent import ask_agent

router = APIRouter()

class Query(BaseModel):
    question: str

@router.post("/")
async def chat_endpoint(query: Query):
    response = ask_agent(query.question)
    return {"answer": response}
