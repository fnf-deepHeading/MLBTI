import pandas as pd
import psycopg2 as pg

from dataclasses import asdict

# 자체 모듈
from common.config import conf

class PostgresqlDatabase():
    def __init__(self, host, port, dbname, user, password):
        self.conn = pg.connect(
            host = host,
            port = port,
            dbname = dbname,
            user = user,
            password = password
        )
        self.cursor = self.conn.cursor()
    
    def __del__(self):
        self.conn.close()

		# select 쿼리 결과를 dataframe 으로 받는 함수
    def readSQL2DF(self, query):
        df = pd.read_sql(query, self.conn)
        return df
    
		# 단순 쿼리 실행
    def executeSQL(self, query):
        self.cursor.execute(query)
        try:
            row = self.cursor.fetchall()
            return row
        except:     # insert, update 문은 return 값이 없음
            pass
    
    def commit(self):
        self.conn.commit()


# 공통 config 설정
config = conf()

# DB initialize
c = asdict(config)
DB = PostgresqlDatabase(
    host=c['HOST'],
    port=c['PORT'],
    dbname=c['DB_NAME'],
    user=c['USER'],
    password=c['PASSWORD']
)