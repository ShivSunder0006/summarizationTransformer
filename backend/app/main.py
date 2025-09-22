from routes import chat, upload, summarize

app.include_router(upload.router, prefix="/upload", tags=["Upload"])
app.include_router(chat.router, prefix="/chat", tags=["Chat"])
app.include_router(summarize.router, prefix="/summarize", tags=["Summarize"])
