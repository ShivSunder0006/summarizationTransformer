from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory
from services.retrieval import get_vectorstore
from langchain.chat_models import ChatOpenAI

memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

def ask_agent(question: str) -> str:
    vectorstore = get_vectorstore()
    qa_chain = ConversationalRetrievalChain.from_llm(
        llm=ChatOpenAI(temperature=0, model_name="gpt-4"),
        retriever=vectorstore.as_retriever(),
        memory=memory
    )
    response = qa_chain.run(question)
    return response
