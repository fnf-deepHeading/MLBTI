'''
    환경별 변수
    ( 로컬서버 / 개발서버 / 스테이징 서버 / 운영 서버 )
'''

from dataclasses import dataclass, asdict
from os import path, environ

base_dir = path.dirname(path.dirname(path.dirname(path.abspath(__file__))))

@dataclass
class Config :
    BASE_DIR = base_dir
    DB_POLL_RECYCLE: int = 900
    DB_ECHO: bool = True

@dataclass
class CookieMacPostgresConfig(Config) :
    HOST:str = 'localhost'
    PORT:int = 5432
    DB_NAME:str = 'postgres'
    USER:str = 'miseon'
    PASSWORD:str = 'Taya3023'

'''
@dataclass
class ProdConfig(Config) :
    PROJ_RELOAD: bool = False
'''

def conf() :
	  # DB 여러개 세팅해놓고 return 에서 원하는 것으로 바꿔주면 됩니다
    # config = dict(dev=LocalPostgresConfig(), local=LocalConfig())
    config = dict(CookieMac=CookieMacPostgresConfig())
    return config.get(environ.get("API_ENV", "CookieMac")) # <- DB aliasd