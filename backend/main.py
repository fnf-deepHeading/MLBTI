import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from dataclasses import asdict

# 자체 모듈
from common.config import conf
from utils.conn import PostgresqlDatabase
from routes import index


app = FastAPI()

# allow cross-origin requests from our frontend domain and port which will run at localhost:3000
origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# static 파일 설정
# app.mount("/static", StaticFiles(directory="static"), name="static")

# router 설정
app.include_router(index.router)


if __name__ == "__main__" :
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)