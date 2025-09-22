from fastapi import APIRouter, UploadFile, File
from services.retrieval import store_embeddings
from utils.pdf_parser import extract_text
from utils.chunker import chunk_text

router = APIRouter()

@router.post("/")
async def upload_file(file: UploadFile = File(...)):
    text = await file.read()
    extracted = extract_text(text)
    chunks = chunk_text(extracted)
    store_embeddings(chunks)
    return {"status": "success", "chunks": len(chunks)}
