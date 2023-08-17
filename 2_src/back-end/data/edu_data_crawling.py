import requests
import pymysql
import pandas as pd
import xml.etree.ElementTree as ET

# 경로
# job_api_path = r"edu_api_key.txt"
edu_api_path = r"C:\SH\gpt\edu_api_key.txt"
# edu_api_path ="/Users/sehyun/Desktop/edu_api_key.txt"

# api key
with open(edu_api_path, "r") as f:
    api_key = f.read()

# db connection
conn = pymysql.connect(host = "i9a801.p.ssafy.io",port=3306,
                       user = "ssafy",
                       password = "jinajjang1128!",
                       database = "test",
                       charset = "utf8")

# 데이터 집어넣을 곳
edu_df = pd.DataFrame(columns=["id", # 고유번호 trprId
                               "title", # 교육 제목 TITLE
                               "title_link", # 교육 링크 TITLE_LINK
                               "company", # 교육기관 SUB_TITLE
                               "company_link", # 교육기관 링크 SUB_TITLE_LINK
                               "address", # 교육 장소 ADDRESS
                               "tel", # 전화번호 TEL_NO
                               "period", # 교육 기간 TRA_END_DATE + TRA_START_DATE
                               "onoff", # 온/오프라인 srchTraGbn
                                    # 'M1001' : 일반과정
                                    # 'M1005' : 인터넷과정
                                    # 'M1010' : 혼합과정(BL)
                                    # 'M1014' : 스마트혼합훈련
                               "expense", # 교육비 COURSE_MAN
                               "real_expense", # 실제 훈련비 REAL_MAN
                               "content", # 교육 내용 CONTENTS
                               "detail", # 디테일 
                               "man", # 정원 YARD_MAN
                               "end_date" # 모집 마감일
                               ])

page_size = 100

edu_data = [] 
for page in range(1,1000):
    cnt = 0
    print(f"page {page} crawling...")

    api_url = f"https://www.hrd.go.kr/jsp/HRDP/HRDPO00/HRDPOA60/HRDPOA60_1.jsp?returnType=XML&authKey={api_key}&pageNum={page}&pageSize={page_size}&srchTraStDt=20230809&srchTraEndDt=20231109&outType=1&sort=ASC&sortCol=TRNG_BGDE&srchTraArea1=00&srchNcs1=20"
    xml_data = requests.get(api_url).text

    root = ET.fromstring(xml_data)
    for i in root.findall('.//scn_list'): 
        cnt += 1
        edu = {}

        # 고유 id
        try:
            edu["id"] = i.find("trprId").text
        except:
            edu["id"] = ""
        
        # 교육 제목
        try:
            edu["title"] = i.find("title").text
        except:
            edu["title"] = ""
        
        # 교육 제목 링크
        try:
            edu["title_link"] = i.find("titleLink").text
        except:
            edu["title_link"]= ""
        
        # 교육 기관
        try:
            edu["company"] = i.find("subTitle").text
        except:
            edu["company"] = ""
        
        # 교육 기관 링크
        try:
            edu["company_link"] = i.find("subTitleLink").text
        except:
            edu["company_link"] = ""

        # 교육 장소
        try:
            edu["address"] = i.find("address").text
        except:
            edu["address"] = ""

        # 전화번호
        try:
            edu["tel"] = i.find("telNo").text
        except:
            edu["tel"]  = ""

        # 교육 기간
        try:
            tra_start = i.find("traStartDate").text
        except:
            tra_start  = ""
        try:
            tra_end = i.find("traEndDate").text
        except:
            tra_end  = ""
        edu["period"] = tra_start + "~" + tra_end

        # 온/오프
        try:
            edu["onoff"] = i.find("trainTargetCd").text
        except:
            edu["onoff"]  = ""
            
        # 교육비
        try:
            edu["expense"] = i.find("courseMan").text
        except:
            edu["expense"]  = ""

        # 실제 교육비
        try:
            edu["real_expense"] = i.find("realMan").text
        except:
            edu["real_expense"]  = ""

        # 교육 내용
        try:
            edu["content"] = i.find("contents").text
        except:
            edu["content"]  = ""

        # 디테일
        edu["detail"] = ""

        # 정원
        try:
            edu["man"] = i.find("yardMan").text
        except:
            edu["man"]  = ""

        edu_data.append(edu)
    if cnt == 0:
        break

edu_df = pd.DataFrame(edu_data)
print(edu_df)

# db 저장
curs = conn.cursor()

for i in range(len(edu_df)):
    id = edu_df.id.loc[i]
    title = edu_df.title.loc[i]
    title_link = edu_df.title_link.loc[i]
    company = edu_df.company.loc[i]
    company_link = edu_df.company_link.loc[i]
    tel = edu_df.tel.loc[i]
    address = edu_df.address.loc[i]
    period = edu_df.period.loc[i]
    onoff = edu_df.onoff.loc[i]
    expense = edu_df.expense.loc[i]
    real_expense = edu_df.real_expense.loc[i]
    detail = edu_df.detail.loc[i]
    content = edu_df.content.loc[i]
    man = edu_df.man.loc[i]


    sql2 = f"insert into edu (edu_id,title,title_link,company,company_link,address,tel,period,onoff,expense,real_expense,content,detail,man)  values('{id}','{title}','{title_link}','{company}','{company_link}','{address}','{tel}','{period}','{onoff}','{expense}','{real_expense}','{content}','{detail}','{man}')"

    try:
        curs.execute(sql2)
    except:
        pass

conn.commit()
