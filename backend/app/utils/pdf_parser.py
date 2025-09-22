from PyPDF2 import PdfReader
from io import BytesIO

def extract_text(pdf_bytes: bytes) -> str:
    reader = PdfReader(BytesIO(pdf_bytes))
    return " ".join([page.extract_text() for page in reader.pages if page.extract_text()])
