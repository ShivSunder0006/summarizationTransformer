from fastapi import APIRouter
from services.agent import summarize_docs

router = APIRouter()

@router.get("/")
async def summarize():
    """
    Summarizes all currently stored documents.
    """
    summary = summarize_docs()
    return {"summary": summary}
