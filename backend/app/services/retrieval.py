import faiss
from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings

_index = None

def store_embeddings(chunks):
    global _index
    embeddings = OpenAIEmbeddings()
    _index = FAISS.from_texts(chunks, embeddings)

def get_vectorstore():
    if _index is None:
        raise ValueError("No documents indexed yet!")
    return _index
