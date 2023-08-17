# package import
import requests
from bs4 import BeautifulSoup
import pandas as pd
from collections import deque
import pymysql

# api key 경로 설정
#job_api_path =
job_api_path = r"C:\SH\gpt\job_api_key.txt"
# job_api_path = "/Users/sehyun/Desktop/job_api_key.txt"
# db 연결
# db connection
conn = pymysql.connect(host = "i9a801.p.ssafy.io",port=3306,
                       user = "ssafy",
                       password = "jinajjang1128!",
                       database = "test",
                       charset = "utf8")

# 데이터 저장할 리스트
auth_no_list = deque()
job_df = pd.DataFrame(columns=["id", # 공고 아이디
                               "wanted_title", # 공고 제목 wantedTitle
                               "company_name", # 회사 이름 corpNm
                               "company_url", # 회사 링크 homePg
                               "degree", # 채용시 필요한 학력 eduNm
                               "major", # 전공 major
                               "address", # 근무지 위치 corpAddr
                               "work_address", # 근무 예정지 workRegion
                               "preference", # 우대 조건 pfCond, etcPfCond
                               "career", # 신입 / 경력 enterTpNm
                               "certificate", # 필요 자격증 certificate
                               "job_content", # 상세내용 jobCont
                               "sal", # 급여 salTpNm
                               "employment_form", # 고용 형태 workdayWorkhrCont
                               "end_date" # 접수 마감일 receiptCloseDt
                               ])

occupation = ['023', # 컴퓨터시스템
              '024', # 소프트웨어
              '025', # 데이터·네트워크 및 시스템 운영
              '026', # 정보 보안 및 통신·방송 송출
              '033', # 컴퓨터·기술·기능계 강사
              '056', # 미디어콘텐츠·UX/UI 디자이너
              ]


# api key
with open(job_api_path, "r") as f:
    api_key = f.read()

# 채용공고 아이디 리스트 받아오기
for ocp in occupation:
    for page in range(1,1000):
        print(f"page {page} crawling...")
        api_url = f"http://openapi.work.go.kr/opi/opi/opia/wantedApi.do?authKey={api_key}&callTp=L&returnType=XML&startPage={page}&display=100&occupation={ocp}"
        cnt = 0
        req = requests.get(api_url)
        soup = BeautifulSoup(req.text, 'xml')
        for i in soup.find_all("wanted"):
            cnt += 1
            wanted_auth_no = i.find("wantedAuthNo").get_text()
            auth_no_list.append(wanted_auth_no)
        if cnt == 0:
            break

# 상세정보 출력
def get_job_data(url):
    req = requests.get(api_url_detail)
    soup = BeautifulSoup(req.text, 'xml')

    id = wanted_auth_no

    # 공고 제목
    try:
        company_name = soup.find("wantedTitle").text
    except:
        company_name = ""
    
    # 회사 이름
    try:
        wanted_title = soup.find("corpNm").text
    except:
        wanted_title = ""

    # 회사 링크
    try:
        company_url = soup.find("homePg").text
    except:
        company_url = ""

    # 채용시 필요한 학력
    try:
        degree = soup.find("eduNm").text
    except:
        degree = ""

    # 전공
    try:
        major = soup.find("major").text
    except:
        major = ""

    # 회사 주소
    try:
        address = soup.find("corpAddr").text
    except:
        address = ""

    # 근무 예정지
    try:
        work_address = soup.find("workRegion").text
    except:
        work_address = ""

    # 우대조건
    try:
        pfCond = soup.find("pfCond").text
    except:
        pfCond = ""
    try:
        etcPfCond = soup.find("etcPfCond").text
    except:
        etcPfCond = ""
    preference = pfCond + "," + etcPfCond


    # 신입 / 경력
    try:
        career = soup.find("enterTpNm").text
    except:
        career = ""
    
    # 신입 / 경력
    try:
        certificate = soup.find("certificate").text
    except:
        certificate = ""

    # 상세 내용
    try:
        job_content = soup.find("jobCont").text
    except:
        job_content = ""

    # 급여
    try:
        sal = soup.find("salTpNm").text
    except:
        sal = ""
    
    # 고용 형태
    try:
        employment_form = soup.find("workdayWorkhrCont").text
    except:
        employment_form = ""

    # 접수 마감일
    try:
        end_date = soup.find("receiptCloseDt").text
    except:
        end_date = ""
    
    
    job_data_list = [id, company_name, wanted_title, company_url, degree,major,
                     address, work_address, preference, career, certificate, job_content, 
                     sal, employment_form, end_date]

    return job_data_list

for wanted_auth_no in auth_no_list:
    api_url_detail = f'http://openapi.work.go.kr/opi/opi/opia/wantedApi.do?authKey={api_key}&callTp=D&returnType=XML&wantedAuthNo={wanted_auth_no}&infoSvc=VALIDATION'
    job_data_list = get_job_data(api_url_detail)

    idx = len(job_df)
    job_df.loc[idx] = job_data_list

# csv로 저장
# job_df.to_json("job_data2.json")


curs = conn.cursor()

print("데이터 수집 완료")

# db insert
for i in range(len(job_df)):
    id = job_df.id.loc[i]
    company_name = job_df.company_name.loc[i]
    wanted_title = job_df.wanted_title.loc[i]
    company_url = job_df.company_url.loc[i]
    degree = job_df.degree.loc[i]
    major = job_df.major.loc[i]
    address = job_df.address.loc[i]
    work_address = job_df.work_address.loc[i]
    preference = job_df.preference.loc[i]
    career = job_df.career.loc[i]
    certificate = job_df.certificate.loc[i]
    job_content = job_df.job_content.loc[i]
    sal = job_df.sal.loc[i]
    employment_form = job_df.employment_form.loc[i]
    end_date = job_df.end_date.loc[i]

    sql = f"insert into job_post(job_id,company_name,wanted_title,company_url,degree,major,address,work_address,preference,career,certificate,job_content,sal,employment_form,end_date) values('{id}','{company_name}','{wanted_title}','{company_url}','{degree}','{major}','{address}','{work_address}','{preference}','{career}','{certificate}','{job_content}','{sal}','{employment_form}','{end_date}')"

    try:
        curs.execute(sql)
    except:
        pass

conn.commit()
