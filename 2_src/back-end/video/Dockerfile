FROM node:18

# 이미지 내에서 작업 디렉토리 생성
WORKDIR /usr/src/app

# package.json 및 package-lock.json 복사
COPY package.json .
COPY package-lock.json .

# 패키지 설치
RUN npm install --no-cache
RUN npm install nodemon

# 나머지 소스 코드 복사
COPY . .

# 작업 디렉토리 변경
WORKDIR /usr/src/app

# 서버 실행 명령
CMD ["nodemon", "server"]

# 포트 열기
EXPOSE 8091
