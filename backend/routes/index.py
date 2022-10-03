from fastapi import APIRouter

# 자체 라이브러리
from utils.conn import DB

router = APIRouter()

@router.get("/", tags=["root"])
def root():
    return {"message": "Hello World!"}


# --- Ajax Post test --- #
'''
    let body = {
        testWord : 'Hello Cookie!'
    };
    axios.post("http://localhost:8000/AjaxTest", body)
        .then((res)=>{console.log(res.data)});
'''
@router.post("/AjaxTest", tags=["AjaxTest"])
async def get_postgres(var: dict) -> dict:
    sql = f'''
select '{var['testWord']}' as testWord
    '''
    df = DB.readSQL2DF(sql)
    data = df.to_dict('records')
    print(sql)
    return { "data": data }
# ------------------------- #
