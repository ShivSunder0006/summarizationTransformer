from fastapi import FastAPI, UploadFile, File
from routes import chat, upload

app = FastAPI(title="AI Research Assistant")

# Register routes
app.include_router(upload.router, prefix="/upload", tags=["Upload"])
app.include_router(chat.router, prefix="/chat", tags=["Chat"])

@app.get("/")
def root():
    return {"message": "AI Research Assistant is running!"}
