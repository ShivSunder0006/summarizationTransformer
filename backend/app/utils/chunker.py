def chunk_text(text: str, chunk_size: int = 1000, overlap: int = 100) -> list:
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])
        start += chunk_size - overlap
    return chunks
