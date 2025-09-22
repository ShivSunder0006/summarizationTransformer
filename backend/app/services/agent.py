from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.chat_models import ChatOpenAI
from services.retrieval import get_vectorstore

def summarize_docs() -> str:
    """
    Retrieve all chunks from the vector store and summarize them into key sections.
    """
    vectorstore = get_vectorstore()
    # Retrieve all stored texts (or use retriever.search with a broad query)
    all_texts = vectorstore.docstore._dict.values()
    combined_text = "\n".join([t.page_content for t in all_texts])

    template = """
    Summarize the following content into structured sections:
    - Background
    - Key Methods
    - Results / Findings
    - Limitations
    - Conclusion

    Content:
    {content}
    """
    prompt = PromptTemplate(template=template, input_variables=["content"])
    llm = ChatOpenAI(temperature=0, model_name="gpt-4")

    chain = LLMChain(llm=llm, prompt=prompt)
    return chain.run(content=combined_text)
