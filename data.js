// DB에 넣을 데이터 (통신 없이 화면에서 사용)
const KEYWORDS = {
  // Backend
  nodejs: "Node.js",
  adonisjs: "AdonisJS",
  nestjs: "NestJS",
  typescript: "TypeScript",
  expressjs: "Express.js",
  nodeschedule: "node-schedule",
  cron: "Cron",
  sql: "SQL",
  ejs: "EJS", // 서버사이드 템플릿
  // DB
  mysql: "MySQL",
  mssql: "MsSQL",
  mongodb: "MongoDB",
  typeorm: "TypeORM",
  mybatis: "MyBatis",
  // API
  googleadsapi: "Google Ads API",
  instagramgraphapi: "Instagram Graph API",
  // Frontend
  vuejs: "Vue.js",
  echarts: "ECharts",
  vueecharts: "Vue ECharts",
  chartjs: "Chart.js",
  firebaseadmin: "Firebase Admin",
  // File
  s3: "S3",
  exceljs: "ExcelJS",
  minizipasmjs: "minizip-asm.js",
  // etc
  serverless: "Serverless", // Serverless
  lambda: "Lambda", // AWS
  docker: "Docker", // Docker
  externalapi: "외부업체 API",
  webhook: "Webhook",
};

const COMPANY = {
  mediance: "미디언스",
  qed: "큐이디",
  H2BIZ: "H2BIZ",
};

const SERVICE_NAME = {
  mediance: "미디언스",
  stylemate: "스타일메이트",
  mediancelap: "미디언스 랩",
  mediancebiz: "미디언스 비즈센터",
  medianceadmin: "미디언스 관리자",
  qed: "큐이디",
  esaro: "이사로",
  bomulsun: "보물선",
};

const DATABASE = {
  portfolioTable: [
    {
      idx: 1,
      title: "엑셀 데이터 가공 및 다운로드",
      company: COMPANY.mediance,
      serviceName: SERVICE_NAME.mediance,
      startMonth: "202108",
      endMonth: "202108",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.adonisjs,
        KEYWORDS.mysql,
        KEYWORDS.typescript,
        KEYWORDS.exceljs,
        KEYWORDS.minizipasmjs,
      ],
      content: `
<개요>
네이버 인플루언서 리스트 엑셀 파일을 이용하여,
새로운 엑셀을 생성하여 미디언스 회원인지 확인.
미디언스 회원이 경우 미디언스 통계 데이터를 산입한다.
<시행착오>
처음 짠 로직으로 배포했을 때, 2000개 까지만 변환이 됐다. 시간도 45초 가량 소요됐다.
속도 향상을 위해 다양한 방법을 적용했다.
1. for문 → promise.all 로 변경
2. 변수에 네이버 엑셀 데이터를 할당해서 처리했다.
(기존에는 네이버 엑셀 한 줄 읽고, 하나의 데이터를 변환해서 새로운 엑셀에 집어넣었다.)
3. DB 테이블에서 유저정보를 검색할 때 쓰는 컬럼에 index를 추가했다.
4. where 문을 where in 문으로 변경했다.
(기존에는 where 문으로 데이터 1개씩 가져왔다.)
⇒ 결과 : 3초 만에 다운로드 성공
`,
    },
    {
      idx: 2,
      title: "광고 문의 개편 및 이벤트 발생",
      company: COMPANY.mediance,
      serviceName: SERVICE_NAME.mediance,
      startMonth: "202109",
      endMonth: "202109",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.adonisjs,
        KEYWORDS.mysql,
        KEYWORDS.typescript,
      ],
      content: `
<개요>
상담 요청, 견적요청, 제작사 추천 이 3가지 문의를 한 테이블에서 처리
생성, 조회, 업데이트, 삭제 API 생성 (CRUD)
문의 등록, 답변 등록 시 메일 이벤트 발생

<작업사항>
하나의 기능을 위한 모든 과정을 경험했다.

1. 테이블 생성
2. 라우터 생성
3. 컨트롤러 생성
4. 모델 생성
5. 서비스 로직 만들기
6. 유효성 검사 추가
7. 스웨거 적용
8. 테스트 데이터 생성
9. 테스트 코드 작성
10. 메일 이벤트 추가 (문의 등록 시, 답변 등록 시)

`,
    },
    {
      idx: 3,
      title: "회원가입 프로세스 개편 / 마이그레이션",
      company: COMPANY.mediance,
      serviceName: SERVICE_NAME.mediance,
      startMonth: "202110",
      endMonth: "202110",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.adonisjs,
        KEYWORDS.mysql,
        KEYWORDS.typescript,
      ],
      content: `
<개요>
미디언스 회원가입 프로세스 개편 (핸드폰 인증, 마케팅 동의, 약관)
인플루언서 테이블에 있는 연락처 관련 데이터를 유저 테이블로 옮기는 작업 (커맨드)

<작업 사항>

[ 회원가입 프로세스 개편 ]
1. 회원가입 시 핸드폰 인증 추가
2. 관리자 게시판 추가
- 제3자 정보제공 게시판
- 마케팅 활용 게시판
3. 마케팅 관련 동의 여부 컬럼 추가

[ 연락처 관련 데이터 마이그레이션 ]
1. AdonisJS에서 제공하는 커맨드기능을 활용했다.
2. 데이터가 너무 많아서 부분을 나누는 로직으로 진행했다.
sql limit 문을 반복문으로 실행
3. 해당 컬럼 쓰던 모든 로직 점검
`,
    },
    {
      idx: 4,
      title: "캠페인 참여 포스트 평가 API",
      company: COMPANY.mediance,
      serviceName: SERVICE_NAME.mediance,
      startMonth: "202111",
      endMonth: "202111",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.adonisjs,
        KEYWORDS.mysql,
        KEYWORDS.typescript,
      ],
      content: `
<개요>
협찬캠페인 참여자들이 올린 인스타그램 포스트를 평가하는 기능

<고민사항>
1. 캠페인 관리 컨트롤러 vs 포스트 컨트롤러
캠페인 관리를 위한 목적보다 인플루언서에 대한 평가를 내리기 위함이므로 포스트 컨트롤러로 진행함.
2. 채널 통계 테이블 vs 인플루언서 통계 테이블
평가에 대한 통계를 어느 테이블에 넣을 건지 고려함.
한 인플루언서가 채널이 여러 개 있는 경우도 있고, 정보가 인플루언서 단위라서 인플루언서 통계 테이블에 데이터 넣음.
추후에 채널별 포스트 평가 파악을 위해 채널 통계 테이블에도 추가함.
`,
    },
    {
      idx: 5,
      title: "인플루언서 단가 파일 업로드 / 다운로드",
      company: COMPANY.mediance,
      serviceName: SERVICE_NAME.mediance,
      startMonth: "202112",
      endMonth: "202112",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.adonisjs,
        KEYWORDS.mysql,
        KEYWORDS.typescript,
        KEYWORDS.s3,
      ],
      content: `
<개요>
광고를 위한 지불 비용 관리 (소속사별로 파일 형태로 들어옴)

<이슈>
auto increment가 적용되지 않는 primary key를 사용하는 경우, 
DB에 저장하는 순간 pk 값이 0으로 바뀜

- 해결 방법 1
옵션을 추가해야 했다. 
public static selfAssignPrimaryKey = true
관련 내용과 해결 방법을 블로깅했다. (아래 url 참고)
https://velog.io/@flobeeee/adonis-custom-primary-key

- 해결 방법 2
일반적인 pk를 사용하고, custom primary key를 쓰려던 컬럼을 일반 컬럼으로 변환하면 된다.
- 기존에 custom primary key를 쓰지만 1번 옵션이 없는 모델이 많아서 모두 적용시켰다. 
(프로젝트 내 모든 모델 검토)

<특이사항>
파일을 저장할 때, 파일명을 unique하게 저장하기 위해 타임스탬프로 변경했다.
기존 파일명은 DB 컬럼에 저장해두고, 응답시 타임스탭프 파일명과 기존 파일명 둘 다 리턴했다.
`,
    },
    {
      idx: 6,
      title: "신규서비스 작업",
      company: "미디언스",
      serviceName: SERVICE_NAME.stylemate,
      startMonth: "202201",
      endMonth: "202202",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.adonisjs,
        KEYWORDS.mysql,
        KEYWORDS.typescript,
      ],
      content: `
<개요>
기존 통합 캠페인에서 패션 캠페인을 분리하여 신규 서비스 론칭

<내 작업 항목 (API)>

[admin]
1. 스타일메이트 캠페인 등록
2. 브랜드 관리
3. 프론트 관리 (배너, 신규 제품, 신규 브랜드, 콘텐츠)
4. 카테고리 관리 (2 depth)
5. 고객센터 게시판 관리 (1:1문의, 공지사항, FAQ)
6. 비즈니스 - 브랜드 연결 및 해제 (다대다 관계)
7. 좋아요 목록
8. 인플루언서, 채널 확장 검색 (신규 서비스 관련 항목)
9. 캠페인 수동 종료 기능

[app]
1. 브랜드 목록 (좋아요 유무 데이터 포함)
2. 제품 목록 (좋아요 유무 데이터 포함)
3. 배너 목록
4. 카테고리 목록
`,
    },
    {
      idx: 7,
      title: "알림톡",
      company: COMPANY.mediance,
      serviceName: SERVICE_NAME.mediance,
      startMonth: "202203",
      endMonth: "202204",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.adonisjs,
        KEYWORDS.mysql,
        KEYWORDS.typescript,
      ],
      content: `
<개요>
기존 메일로 나가던 이벤트를 카카오톡 알림톡으로 변경

<프로세스>
1. 비즈뿌리오에서 직접 템플릿 등록 
2. 검수 완료된 템플릿을 admin에 등록
3. 외부 API 담당하는 내부 시스템에 발송 요청
4. 비즈뿌리오에서 결과에 따른 코드 수신해서 내역 기록

<작업 사항>
1. 메시지 타입 구분
- 즉시 발송 (회원가입, 핸드폰 인증 문자 등)
- 시스템 발송 (admin에서 행위 발생 시 이벤트 발생. 1:1문의 답변, 캠페인 선정 등)
- 수동 발송 (커스텀 메세지로 원하는 시간에 특정 유저에게 발송)
2. 치환 키워드 관리
알림톡 사용 시 치환해야 하는 키워드 관리 및 치환 데이터 로직 생성 (유저 이름, 연락처, 캠페인명 등)
3. 알림톡 에러 발생 시 슬랙 채널에 알림
`,
    },
    {
      idx: 8,
      title: "통계서비스 리뉴얼",
      company: COMPANY.mediance,
      serviceName: SERVICE_NAME.mediancelap,
      startMonth: "202206",
      endMonth: "202207",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.adonisjs,
        KEYWORDS.mysql,
        KEYWORDS.typescript,
      ],
      content: `
<개요>
회원 유형에 따라 서비스 이용 제한
미디언스랩 서비스 개편에 따른 기존 API 보완 및 추가 API 개발

<작업 사항>
1. 비회원, 일반회원, 비즈센터 회원, 미디언스 관리자에 따른 검색 횟수, 결과 데이터 차등 제한
2. 인기 / 반응 좋은 채널 목록 API
3. 월별 최근 데이터 API
4. 채널 비교 분석 API
5. 채널, 태그 분석 요청 API
6. 인스타그램 태그 검색순위 API
7. 북마크 API 
8. 태그 검색 시 상위 포스트 API
`,
    },
    {
      idx: 9,
      title: "컨텐츠 광고 / Google Ads API 및 커맨드",
      company: COMPANY.mediance,
      serviceName: SERVICE_NAME.mediancebiz,
      startMonth: "202207",
      endMonth: "202209",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.adonisjs,
        KEYWORDS.mysql,
        KEYWORDS.typescript,
        KEYWORDS.googleadsapi,
      ],
      content: `
<개요>
미디언스 비즈센터 구축
미디언스 비즈센터를 통한 구글 광고 진행 
(내부에 데이터 적재하고 해당 데이터 기반으로 구글 API 호출)
미디언스 캠페인을 통해 생성된 포스트를 통해 미디어 광고(페이스북, 구글) 진행

<작업 사항>
[ site ]
1. 컨텐츠 광고 캠페인 API
2. 소재 관련 API

[ admin ]
1. 구글 카테고리 API
2. 구글 소셜 로그인 구현

[ google ]
1. 구글 API 활용 위한 환경설정 세팅
2. 캠페인 관련 API 활용 (작업 50% 기여)
3. 미디언스 데이터와 구글 데이터 동기화 커맨드 (작업 70% 기여)
4. 구글 광고 통계 리포트 생성 커맨드 (작업 50% 기여)

<사용한 google ads API>
'계정 목록': '/customers:listAccessibleCustomers'
'목록 조회': '/customers/{customer_id}/googleAds:search'
'카테고리 조회': '/customers/<customer_id>/googleAds:search'

'예산 생성': '/customers/<customer_id>/campaignBudgets:mutate'
'예산 조회': '/customers/<customer_id>/googleAds:search'
'일 예산 변경': '/customers/<customer_id>/campaignBudgets:mutate'

'캠페인 생성': '/customers/<customer_id>/campaigns:mutate'
'캠페인 중복 조회': '/customers/<customer_id>/googleAds:search'
'캠페인 상세 조회': '/customers/<customer_id>/googleAds:search'
'캠페인 삭제': '/customers/<customer_id>/campaigns:mutate'
'캠페인 상태 변경': '/customers/<customer_id>/campaigns:mutate'
'캠페인 일정 변경': '/customers/<customer_id>/campaigns:mutate'
'캠페인 세부조건 생성': '/customers/<customer_id>/campaigns:mutate'

'광고 그룹 생성': '/customers/<customer_id>/adGroups:mutate'
'광고 그룹 중단': '/customers/<customer_id>/adGroups:mutate'
'광고 그룹 중복 조회': '/customers/<customer_id>/googleAds:search'
'광고 그룹 세부조건 생성': '/customers/<customer_id>/adGroupCriteria:mutate'
'광고 그룹 카테고리 생성': '/customers/<customer_id>/adGroupCriteria:mutate'
'광고 생성': '/customers/<customer_id>/adGroupAds:mutate'
'이미지 생성': '/customers/<customer_id>/assets:mutate'

'광고 리포트 가져오기': '/customers/<customer_id>/googleAds:searchStream'
'캠페인 리포트 가져오기': '/customers/<customer_id>/googleAds:searchStream'
`,
    },
    {
      idx: 10,
      title: "인스타그램 그래프 API 활용 및 커맨드",
      company: COMPANY.mediance,
      serviceName: SERVICE_NAME.mediancelap,
      startMonth: "202212",
      endMonth: "202212",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.adonisjs,
        KEYWORDS.mysql,
        KEYWORDS.typescript,
        KEYWORDS.instagramgraphapi,
        KEYWORDS.serverless,
        KEYWORDS.lambda,
        KEYWORDS.docker,
        KEYWORDS.s3,
      ],
      content: `
<개요>
미디언스 회원의 인스타그램 메타데이터 및 지표 가져오기

<관련 커맨드 생성>
1. 가져올 인플루언서 선정
2. 외부 API 호출에 필요한 데이터 가공
3. 응답받은 메타데이터 및 지표 파일로 S3에 저장
4. 파일 읽어서 데이터베이스에 가공
5. 미디언스 회원 데이터에 반영
6. API 호출 에러 발생 시 예외처리
`,
    },
    {
      idx: 11,
      title: "크롤링분석 시스템 모니터링",
      company: COMPANY.mediance,
      serviceName: SERVICE_NAME.medianceadmin,
      startMonth: "202212",
      endMonth: "202212",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.adonisjs,
        KEYWORDS.mysql,
        KEYWORDS.typescript,
        KEYWORDS.vuejs,
        KEYWORDS.echarts,
        KEYWORDS.vueecharts,
        KEYWORDS.docker,
      ],
      content: `
<개요>
미디언스 회원 크롤링 시스템 모니터링 API 및 화면 생성

<작업 사항>
1. 모니터링 admin 페이지에 통합로그인 연결
2. 홈 화면 차트, 다른 메뉴는 테이블로 그리기
3. 분석 결과 통계 커맨드
4. Worker 통계 커맨드 및 화면
5. 크롤링 타겟 목록 API 및 화면
6. 인스타그램 계정 상태 통계 화면
`,
    },
    {
      idx: 12,
      title: "평가모드 리포트 개발",
      company: COMPANY.qed,
      serviceName: SERVICE_NAME.qed,
      startMonth: "202303",
      endMonth: "202303",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.expressjs,
        KEYWORDS.mssql,
        KEYWORDS.chartjs,
        KEYWORDS.ejs,
      ],
      content: `
<개요>
골프테스트를 진행한 후 데이터를 바탕으로 통계를 보여줌
(인바디측정후 상담받듯이 인쇄해서 프로들이 골프상담에 활용)

<작업사항>
API 생성
ejs로 화면 생성
css 작업 
→ 빠른완성을 위해 백엔드 서버에서 모두 진행

<작업 순서>
1. 데이터파악 및 기준 정리
2. API 만들기
-전체, 성별, 나이, 매장 랭킹관련 쿼리 생성
3. 화면 만들기
-차트 그리기
-테이블 그리기
4. 데이터 뿌리기
-차트와 데이터 연결
-데이터 다듬기 (화살표 이미지 적용 등)
5. 피드백 받아서 유지보수
-회원의 거리, 속도 단위 설정(미터, 야드 등)에 따라 데이터 표시 수정
6. css 적용
-인쇄 A4 2장
`,
    },
    {
      idx: 13,
      title: "마이데이터",
      company: COMPANY.qed,
      serviceName: SERVICE_NAME.qed,
      startMonth: "202304",
      endMonth: "202304",
      keywords: [KEYWORDS.nodejs, KEYWORDS.expressjs, KEYWORDS.mssql],
      content: `
<작업사항>
1. 연습량(성별 구분 X)
2. 평가모드
3. 비거리랭킹(성별 구분 O)

<특이사항>
1. 앱개발자와 첫 작업
앱은 한 화면 기준으로 API 만듬(프론트는 기능별로 API 만듬)
헤더로 언어정보를 받아서, 언어에 따라 데이터 변환 후 res 보내줌
2. 게임종료 → 커맨드 발생 → 연습량 반영
3. 새벽마다 커맨드가 돌아서 비거리 랭킹반영됨
회원정보에서 사용자가 성별을 바꿀 수 있음
비거리랭킹의 경우, 커맨드가 도는 순간의 사용자 성별 확인해서 랭킹 산출함

<속도개선 (전국 비거리 랭킹)>
1. 0.297 sec
매장별 내 순위를 뽑고,LEFT JOIN  매장별 1등 기록 가져옴    
2. 0.078 sec
WITH AS 로 임시테이블(해당 주차 랭킹)을 만들고
내 기록을 가져오고 LEFT JOIN 매장별 1등 기록 가져옴
3. 0.015 sec
WITH AS 로 임시테이블(해당 주차 랭킹)을 만들고
내 기록을 가져오고 sub query 로 매장별 1등 기록 가져옴

<이슈사항>
1. 쿼리 syntax 에러 (rank가 실행어로 인식돼서 에러남)
IFNULL(rank, CONVERT(0, UNSIGNED)) AS rank
→ IFNULL(rd.rank, CONVERT(0, UNSIGNED)) AS \\'rank'\\
2. replaceAll is not function에러 (replaceAll은 node 15버전 이상에서만 가능)
str.replaceAll('\\n', ' ')
→ str.replace(/\\n/g,' ')
→ join, split쓰는 방법도 있음
`,
    },
    {
      idx: 14,
      title: "앱 리뉴얼",
      company: COMPANY.qed,
      serviceName: SERVICE_NAME.qed,
      startMonth: "202306",
      endMonth: "202310",
      keywords: [KEYWORDS.nodejs, KEYWORDS.expressjs, KEYWORDS.mssql],
      content: `
<개요>
TGX매장과 QED매장 앱 서버 분리 목적
기존서버와 동일하게 쓰는 API 옮기기 작업
QED매장 앱 리뉴얼로 신규 API 생성

<작업 사항>
1. 로그인, 예약 등 83개 API 수정 및 생성

<신규 서버에서 고려한 것>
1. 응답 res 형식 통일
    - 예시
  // 응답 성공
  {
    "result": true,
    "resultCode": 1,
    "resultMsg": "조회하였습니다.",
    "data": []
  }
  // 응답 실패
  {
    "result": false,
    "resultCode": 9999,
    "resultMsg": "매장 운영시간을 확인하세요.",
    "data": []
  }        
2. 예약관련 res data 형식 통일
3. 기능별로 키워드를 나눠서 라우터, 서비스, 모듈 폴더명, 파일명 통일
4. ticket, voucher 등 혼용되어 쓰는 param 값 통일
5. DELETE 메소드 모두 POST 메소드로 변경 (보안을 위해 body에 삭제할 데이터 받음)
6. 유효성검사 메시지, admin 페이지에서 관리할 수 있게 데이터 연동 (기존에 하드코딩)
7. 필수 param,query 확인하는 로직 생성
8. 앱단에서 쓰는 데이터만 내려주기 (기존에는 DB에서 가져온 모든 데이터 보냄)
9. SQL문에서 실행어는 대문자 그 외에는 소문자로 작성

<이슈 사항>
1. 디자이너 부재로 인해 기획자가 만든 figma로만 기능파악.
→ 화면단위로 API를 만들어서, 화면확인 후 기능에 대한 내용 기획자와 논의 후 진행
2. figma 잦은 수정으로, API 수정 발생
→ figma 작업 끝났다고 확정받은 기능을 우선적으로 작업 진행
3. 백엔드, 앱 동시 개발 진행
→ API 작업이 오래 걸릴 거 같은 기능은 res 앱개발자에게 미리 샘플 res 공유
`,
    },
    {
      idx: 15,
      title: "어프로치/퍼팅 레인지",
      company: COMPANY.qed,
      serviceName: SERVICE_NAME.qed,
      startMonth: "202311",
      endMonth: "202311",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.expressjs,
        KEYWORDS.mssql,
        KEYWORDS.mongodb,
      ],
      content: `
<개요>
기존에는 앱에 드라이빙레인지 관련 화면만 존재.
드라이빙레인지 화면 + 드라이빙/어프로치/퍼팅 데이터 반영
어프로치 레인지, 퍼팅 레인지 화면이 새로 만들어지면서 DB에서 데이터 분리 및 신규 API 생성 필요
단, TGX앱은 기존처럼 드라이빙레인지 화면 + 드라이빙/어프로치/퍼팅 레인지 데이터 반영
QED앱 이전버전은 드라이빙레인지 화면 + 드라이빙 데이터만 반영 (문의오면 앱 업그레이드 안내)

<드라이빙레인지와 다른점>
1. 드라이빙레인지는 비거리 위주로 데이터 구성되어 있음
어프로치/퍼팅레인지는 목표거리 기준 정확도 위주로 구성되어 있음
2. 드라이빙레인지는 골프클럽 필터로 데이터를 확인할 수 있음
어프로치/퍼팅레인지는 목표거리 필터로 데이터를 확인할 수 있음 

<특이사항>
1. 어프로치레인지 화면 첫 진입시, 가장 최근에 친 샷의 목표거리를 조회해서 해당 데이터 리턴
(퍼팅레인지 동일)
2. DB 분리에 따라 연습량 화면에서 기존에 드라이빙레인지 샷 수만 표기됨
 어프로치/퍼팅레인지 샷은 반영 안됨. (사이드 이펙트)
→ 어프로치/퍼팅레인지 테이블에서 샷 수 가져오기
`,
    },
    {
      idx: 16,
      title: "익일운영",
      company: COMPANY.qed,
      serviceName: SERVICE_NAME.qed,
      startMonth: "202312",
      endMonth: "202312",
      keywords: [KEYWORDS.nodejs, KEYWORDS.expressjs, KEYWORDS.mssql],
      content: `
<개요>
기존에는 당일운영 방식으로 매장을 운영해서 시간데이터를 00:00 ~ 23:59 방식으로 운영함
익일운영 수요에 따라 08:00 ~ 다음날 07:59방식도 가능하게 변경 필요

<작업 사항>
1. DB에 익일컬럼을 추가해서, 매장 정보를 가져와서 유효성검사에 활용
2. 예약할때 선택할 수 있는 타임테이블 수정
오늘 익일 운영하면 다음날 새벽시간 타임테이블도 선택할 수 있어야함
3. 매장시간, 이용권시간 둘 다 익일운영인지 유효성검사 필요
기본적으로 매장, 이용권 시간 중 start time이 늦은 시간 기준으로 로직 진행

매장(익일O), 이용권(익일O) → 매장과 이용권 시간 중 end time이 빠른 시간 기준으로 로직진행
매장(익일O), 이용권(익일X) → 이용권 시간으로 로직진행
매장(익일X), 이용권(익일O) → 매장 시간으로 로직진행
매장(익일X), 이용권(익일X) → 기존과 동일

<특이 사항>
1. 서버시간은 UTC +0:00 이여서, 로컬(UTC +9:00)과 다름
2. 매장시간은 한국시간(UTC +9:00) 기준으로 DB에 저장되어 있음
3. 예약시간은 UTC +0:00 기준으로 DB에 저장되어 있음
4. 예약시간은 클라이언트에서 unix 형식으로 보냄
5. 레슨예약의 경우, 프로의 근무시간/정기휴일/비정기휴일 확인필요

<아쉬운 점>
- 수요예측에 실패하여, 실제 해당 옵션 사용하는 매장 없음
`,
    },
    {
      idx: 17,
      title: "APP PUSH 시스템 구축 및 운영",
      company: COMPANY.qed,
      serviceName: SERVICE_NAME.qed,
      startMonth: "202401",
      endMonth: "202402",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.expressjs,
        KEYWORDS.mssql,
        KEYWORDS.nodeschedule,
        KEYWORDS.firebaseadmin,
      ],
      content: `
<개요>
회원에게 푸시알림
1. 큐이디 어플 실행 목적
2. 매장 방문 독려 목적

<프로세스>
1. 특정 시간에 커맨드를 돌려서 DB에 앱푸시할 데이터 쌓음(ready 상태)
2. 2분마다 앱푸시 예약시간 확인하는 커맨드 존재. 예약시간에 맞는 앱푸시 큐에 넣기
3. 파이어베이스에 발송 요청
---
1. 앱에 푸시 발송됨
2. 푸시 결과상태 받아서 DB에 업데이트 처리(success, fail 상태)
단 success의 경우 성공적으로 알림이 울린 게 아닌, 전송이 수락되었다는 의미

<특이사항>
1. 라이브서버의 경우 2개의 클러스터가 존재.
스테이지서버는 1개의 클러스터가 존재.
스테이지서버에서 라이브 DB를 바라보고 있어서
스테이지서버에서 커맨드 실행하는 걸로 처리
(클러스터를 구분해서 커맨드 실행하는 방법도 있지만
기존에 존재하지 않는 pm2 설정파일을 생성해서 서버를 시작해야 해서
스테이지에서 실행하는 차선책 선택)
2. 파이어베이스의 경우 1분당 400개까지 푸시 요청 가능해서
2분 단위로 400개의 요청을 함.
3. 정책적으로 메시지 타입에 따른 푸시동의(기본알림, 마케팅알림 등)를 한 회원에게만 발송
4. 앱버전에 따라 알림을 누르면 새로운 페이지로 이동해서 
특정 앱버전 이상 회원에게만 앱푸시 발송
5. 앱에 로그인 시 유저의 fcm token 업데이트함. 
한 기기에 하나의 fcm token 관계 관리
같은 기기에 다른 회원 로그인 시 기존 회원의 fcm token 삭제처리 필요
6. 중복으로 처리하지 않기 위해 큐에 데이터 없는 경우에만 데이터 넣음.
7. admin 서버와 app 서버가 따로 있어서 큐도 분리해서 만듬

<성능개선>
꾸준한 쿼리튜닝으로 24.03.22에 CPU 안정화
기존 5분동안 CPU 사용 → 2분 30초로 축소
기존 CPU 54% → 8%로 절감
`,
    },
    {
      idx: 18,
      title: "회원조회 쿼리튜닝(8초 → 0.6초)",
      company: COMPANY.qed,
      serviceName: SERVICE_NAME.qed,
      startMonth: "202401",
      endMonth: "202402",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.expressjs,
        KEYWORDS.mssql,
        KEYWORDS.sql,
      ],
      content: `
<개요>
마지막 방문이 3일 전인 유저 리스트를 조회 하는 쿼리가 8초가량 소요
마케팅용 앱푸시 목적
오늘이 4일이고, 1일이 마지막 방문일인 경우 조건에 해당

- 8초 소요(NOT IN 문에서 소요 큼)
1) 2024.01.01 이용기록이 있는 경우
2) 2024.01.01 이후에 이용기록이 없는 경우
SELECT *
FROM 이용내역
  WHERE 이용내역.사용일자 = '20240101'
    AND 이용내역.매장유저아이디 NOT IN (
      SELECT 이용내역.매장유저아이디
      FROM 이용내역
      WHERE 이용내역.사용일자 > '20240101'
    );

- 2.5초 소요(NOT IN 문에서 소요 큼)
1) 임시테이블 2개 사용
WITH use_user AS (
	SELECT 이용내역.매장유저아이디 AS 매장유저아이디
	FROM 이용내역
	WHERE 이용내역.사용일자 = '20240101'
), recent_use_user AS (
	SELECT 이용내역.매장유저아이디 AS 매장유저아이디
	FROM 이용내역
	WHERE 이용내역.사용일자 > '20240101'
)
SELECT *
FROM 매장유저
INNER JOIN use_user ON 매장유저.매장유저아이디 = use_user.매장유저아이디 
WHERE 
		매장유저.매장유저아이디  NOT IN (
			SELECT 매장유저아이디 
      FROM recent_use_user
    );

- 2.3초 소요(NOT IN 문에서 소요 큼)
1) 임시테이블에서 NOT IN 절 사용
WITH use_user AS (
	SELECT 이용내역.매장유저아이디 AS 매장유저아이디
	FROM 이용내역
	WHERE 이용내역.사용일자 = '20240101'
    AND 매장유저아이디 NOT IN (
		  SELECT 이용내역.매장유저아이디 AS 매장유저아이디
	    FROM 이용내역
	    WHERE 이용내역.사용일자 > '20240101'
    )
)
SELECT *
FROM 매장유저
INNER JOIN use_user ON 매장유저.매장유저아이디 = use_user.매장유저아이디;

- 0.6초 소요
1) > 기호를 = 기호로 변경
 WITH use_user AS (
	SELECT 이용내역.매장유저아이디 AS 매장유저아이디
	FROM 이용내역
	WHERE 이용내역.사용일자 = '20240101'
	AND 매장유저아이디 NOT IN (
		SELECT 이용내역.매장유저아이디 AS 매장유저아이디
	  FROM 이용내역
		WHERE 사용일자 = DATE_FORMAT(DATE_ADD( '20240101', INTERVAL 1 DAY), '%Y%m%d')
	)
	AND 매장유저아이디 NOT IN (
		SELECT 이용내역.매장유저아이디 AS 매장유저아이디
	  FROM 이용내역
		WHERE 사용일자 = DATE_FORMAT(DATE_ADD( '20240101', INTERVAL 2 DAY), '%Y%m%d')
	)
	AND 매장유저아이디 NOT IN (
	  SELECT 이용내역.매장유저아이디 AS 매장유저아이디
	  FROM 이용내역
		WHERE 사용일자 = DATE_FORMAT(DATE_ADD( '20240101', INTERVAL 3 DAY), '%Y%m%d')
	)
)
SELECT *
FROM 매장유저
INNER JOIN use_user ON 매장유저.매장유저아이디 = use_user.매장유저아이디;
`,
    },
    {
      idx: 19,
      title: "라운드 데이터 저장",
      company: COMPANY.qed,
      serviceName: SERVICE_NAME.qed,
      startMonth: "202404",
      endMonth: "202404",
      keywords: [KEYWORDS.nodejs, KEYWORDS.expressjs, KEYWORDS.mssql],
      content: `
<개요>
1. 기존에 게임 내에서 라운드 모드가 있었지만, DB에 데이터가 저장되지 않았음
2. 연습관련 기능 개편이 마무리 되어, 라운드 기록을 저장하는 기능 개발 진행

<작업사항>
1. 라운드 홈 조회 API
2. 라운드 목록 조회 API
3. 라운드 상세 조회 API

<작업시 유의점>
1. 큐이디는 9홀이 기본임. 
라운드 홈화면 진입시 9홀 데이터만 있는 경우, 9홀 화면으로 진입.
그 외에는 18홀 화면으로 진입
2. 오각형 그래프상 숫자가 적어야 좋은 경우 존재
min, max 값 주의해서 res 리턴
3. 라운드 메인 테이블에 shot_count 가 null이면 게임이 마무리 되지 않았다는 의미
리스트 조회 쿼리에서 shot_count IS NOT NULL 조건문 필수
4. 라운드 상세 조회 API에서 ‘내 기록’이 맨 위에 위치
그 밑으로 팀원 기록은 점수순으로 정렬
`,
    },
    {
      idx: 20,
      title: "리뉴얼(1차) - 메인로직 개편",
      company: COMPANY.H2BIZ,
      serviceName: SERVICE_NAME.esaro,
      startMonth: "202408",
      endMonth: "202504",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.nestjs,
        KEYWORDS.typeorm,
        KEYWORDS.mssql,
      ],
      content: `
<개요>
앱 리뉴얼에 따라 모든 API 로직 및 res 수정
서비스 메인로직 수정
쿠폰 기능 개발
알림톡 메세지, 로직 전면 개편

<주요 작업사항>
1. 전반적인 타임라인 변경에 따라 메인로직 관련 배치 전면 수정 ⭐⭐⭐⭐⭐
- 긴급오더의 경우, 계약금을 받지 않는 프로세스로 변경
- 알림톡 템플릿 재검수 후 관련 로직 생성/수정 (총 12건)

<프로세스>
1. 고객이 이사관련 정보 등록
2. 기사가 대략적인 견적 넣음
3. 고객이 여러 견적 중 하나를 선택
4. 기사가 최종 수락
5. 고객이 계약금 지불
6. 이사 후 기사가 잔금결제 요청
7. 고객이 잔금결제
8. 고객이 리뷰작성
⇒ 긴급오더의 경우, 3번 4번 순서 건너뜀 (고객이 견적보고 바로 계약금 지불)

<어려웠던 점>
1. 프로세스마다 오더와 견적에 정의된 상태값이 있음
2. 순서가 건너뛴다고 상태를 건너뛰는 게 아닌, 해당 프로세스 로직을 다 태워야함
3. 일반적인 경우, '계약금대기'상태가 되면 더이상의 견적을 받지 못하게  처리함
4. 긴급오더의 경우, 견적을 받는 즉시 계약금대기상태가 되기 때문에 예외처리 필요
5. 고객이 계약금 입금 하면, 나머지 견적 '선택안됨' 상태 처리
`,
    },
    {
      idx: 21,
      title: "리뉴얼(1차) - 쿠폰 기능 개발",
      company: COMPANY.H2BIZ,
      serviceName: SERVICE_NAME.esaro,
      startMonth: "202408",
      endMonth: "202504",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.nestjs,
        KEYWORDS.typeorm,
        KEYWORDS.mssql,
      ],
      content: `
<개요>
- 개요
앱 리뉴얼에 따라 모든 API 로직 및 res 수정
서비스 메인로직 수정
쿠폰 기능 개발

<고려한 사항>
- 쿠폰상태(발급대기 발급중 기한만료 발급중지)
1-1. 배치로 처리
1-1-1. 발급대기 → 발급중
1-1-2. 발급중 → 기한만료
1-2. API로 처리
1-2-1. 발급중지

- 제한이 없는 경우
2-1. 사용기간에 제한이 없는 경우, 9999-12-31 만료일자로 저장
2-2. 발급수량에 제한이 없는 경우, -1로 저장

- 쿠폰종류
3-1. 목록에서 버튼클릭을 통해 다운받는 쿠폰
3-2. 특정 코드 입력을 통해 등록하는 쿠폰
3-3. 정률할인/정액할인 ⭐⭐⭐⭐⭐

- 쿠폰적용에 따라 관리한 금액
4-1. 총 금액: 쿠폰 적용 후의 최종 결제 금액
4-2. 할인된 계약금: 할인 적용 후의 계약금
4-3. 할인된 잔금: 할인 적용 후의 잔금
4-4. 계약금에 적용한 할인 금액: 계약금에 대해 적용된 할인 금액
4-5. 총 금액에 적용한 할인 금액: 총 금액에 대해 적용된 할인 금액
⇒ a = b + c + e

<어려웠던 점>
이사서비스의 경우, 결제가 2번 이루어짐(계약금, 잔금)    
10% 쿠폰이 적용되는 경우, 결제금 계약할때 10% 할인이 적용됨
그 후 이사를 진행하면서 이사금액이 바뀌는 경우가 있음
이 경우, 잔금결제에 변경분을 계산해서 할인받는 금액을 계산해야함
`,
    },
    {
      idx: 22,
      title: "아파트아이-커넥트파이 연동(외부업체)",
      company: COMPANY.H2BIZ,
      serviceName: SERVICE_NAME.esaro,
      startMonth: "202503",
      endMonth: "202503",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.nestjs,
        KEYWORDS.typeorm,
        KEYWORDS.mssql,
        KEYWORDS.externalapi,
        KEYWORDS.webhook,
      ],
      content: `
<목적>
1. 이사로 서비스를 외부 플랫폼에 노출 (고객전용 앱)
2. 아파트아이 어플 내에 입점한 커넥트파이 업체와 서비스 연동

<기본사항>
1. 외부업체에서 오더 들어오는 경우, 
해당 회원정보로 이사로 내 강제 회원가입 (최소한의 개인정보로)
2. 이사로와 동일한 프로세스로 진행이 최우선이나 외부업체 로직과 다른점 존재
3. 웹훅과 API 연동 및 히스토리 저장

<고려한 사항>
1. 오더 생성 웹훅 받은 후, 오더 조회하면 에러 뜸
→ 딜레이 걸고 오더 조회 진행
2. 외부업체와 로직이 다른 경우 존재
외부업체가 여러서비스를 연동해두어서, 공통로직을 타는 부분이 존재하여
가능한 선에서 협의 필요
ex. 사진 depth,기한만료, 최소 금액 등

<중요사항>⭐⭐⭐
1. 이사로의 경우 견적금액 수정이 가능/ 커넥트 측은 불가능
견적금액 외 추가금을 등록할 수 있는 기능 존재
- 이사로의 견적 금액을 수정하는 경우 → 커넥트 추가금 생성 API 호출
- 이사로 추가금액 등록하는 경우 → 커넥트 추가금 생성 API 호출
2. 이사로의 경우 차량수, 작업인원 수정 가능/ 커넥트 측은 불가능
커넥트측의 경우 견적에 대한 title 컬럼이 있음/ 이사로는 없음
- 이사로의 차량수, 작업인원 수정하는 경우 → 커넥트 견적 title 수정 API 호출
3. 커넥트 측의 경우 n시간동안 견적이 1건도 들어오지 않으면 오더 만료됨
이사로의 경우 이사일 기준 -n시간에 오더 만료함
- 커넥트 측에서 오더 만료시키는 경우, 이사로 오더도 만료시키는 걸로 협의
- 기사 화면에서는 만료된 오더는 노출되지 않음
⇒ 커넥트파이를 이용하는 회원에게만 짧은 만료기한
4. 견적만료의 경우, 이사로가 만료시간을 커넥트측에 전달하면 그 시간에 만료로 진행

<아쉬운 점>
2025.10.28 커넥트파이 사업종료
`,
    },
    {
      idx: 23,
      title: "리뉴얼(2차) - 이벤트에 쿠폰 연동",
      company: COMPANY.H2BIZ,
      serviceName: SERVICE_NAME.esaro,
      startMonth: "202504",
      endMonth: "202506",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.nestjs,
        KEYWORDS.typeorm,
        KEYWORDS.mssql,
      ],
      content: `
<개요>
1차 리뉴얼에 만든 쿠폰 기능을 이벤트에 연결
정산관련 기능에 쿠폰관련 로직, 데이터 추가 ⭐⭐⭐⭐⭐

<이벤트 관련 API 생성>
1. 이벤트 생성
2. 이벤트 수정
3. 이벤트 목록 조회 (관리자용)
4. 이벤트 목록 조회 (고객용)
5. 이벤트 조회 상세 (고객용) - 조회수 올라가야함
6. 배너 목록 등록 API
7. 배너 목록 조회 API

<수정한 정산관련 API>
1. 정산 캘린더 - 매출리스트
2. 정산 캘린더 - 예정, 확정 리스트
3. 정산 통합 리스트/예정 리스트/확정 리스트
4. 정산 상세
5. 기사별 누적 정산

<어려웠던점>
쿠폰 적용 후 정산내역 계산식이 복잡함
→ QA기간동안 테스트 함께 하는 인원에게 다양한 경우의수를 납득시켜야 함
    1. 일정금액 할인
    2. 일정금액 할인 + 추가금 생기는 경우
    3. 퍼센트 할인
    4. 퍼센트 할인 + 추가금 생기는 경우
    5. 퍼센트 할인 + 추가금 생기는 경우 + 최대할인금액을 넘는 경우
`,
    },
    {
      idx: 24,
      title: "견적조회 쿼리튜닝(3초 → 0.5초)",
      company: COMPANY.H2BIZ,
      serviceName: SERVICE_NAME.esaro,
      startMonth: "202504",
      endMonth: "202506",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.nestjs,
        KEYWORDS.typeorm,
        KEYWORDS.mssql,
        KEYWORDS.sql,
      ],
      content: `
<개요>
견적 상세 조회하는 API가 3초가량 소요

- 3초 소요(운반하는차량 항목에서 시간소모 큼)
이 쿼리에서 vehicles를 포함하는 경우에만 local기준 3초가량 시간이 소요됐다.
Index 가 잘 걸려있는지 확인했고, 문제 없었다.
혹시 leftJoin이 많이 걸려서 그런가 하고 순서 바꿨는데, 소요시간에 변화가 없었다.
저 데이터가 필수로 필요해서 무조건 가지고 와야했다.
따로 쿼리를 한번 더 날렸다.
const 견적 = await this.createQueryBuilder('견적')
      .leftJoinAndSelect('견적.프로모션', '프로모션')
      .leftJoinAndSelect('프로모션.프로모션지역', '프로모션지역')
      .leftJoinAndSelect('견적.금액', '금액')
      .leftJoinAndSelect('견적.타임라인', '타임라인')
      .leftJoinAndSelect('견적.운반차', '운반차')
      .leftJoinAndSelect('견적.직원', '직원')
      .leftJoinAndSelect('견적.기사', '기사')
      .leftJoinAndSelect('견적.주문', '주문')
      .leftJoinAndSelect('기사.운반차조인테이블', '운반차조인테이블')
      .leftJoinAndSelect('기사.리뷰', '리뷰', '리뷰.isHided = true')
      .leftJoinAndSelect('기사.지역', '지역')
      .leftJoinAndSelect('견적.쿠폰조인테이블', '쿠폰조인테이블')
      .leftJoinAndSelect('쿠폰조인테이블.쿠폰', '쿠폰')
      .leftJoinAndSelect('견적.결제', '결제')
      .leftJoinAndSelect('견적.리뷰', '리뷰')
      .andWhere('견적.id = :견적Id', { 견적Id })
      .getOneOrFail();

- 0.5초 소요 (변경후)
const 견적운반차 = await this.createQueryBuilder('견적')
      .leftJoinAndSelect('견적.운반차', '운반차')
      .where('견적.id = :견적Id', { 견적Id })
      .getOneOrFail();
      
let 견적 = await this.createQueryBuilder('견적')
      .leftJoinAndSelect('견적.프로모션', '프로모션')
      .leftJoinAndSelect('프로모션.프로모션지역', '프로모션지역')
      .leftJoinAndSelect('견적.금액', '금액')
      .leftJoinAndSelect('견적.타임라인', '타임라인')
   // .leftJoinAndSelect('견적.운반차', '운반차')
      .leftJoinAndSelect('견적.직원', '직원')
      .leftJoinAndSelect('견적.기사', '기사')
      .leftJoinAndSelect('견적.주문', '주문')
      .leftJoinAndSelect('기사.운반차조인테이블', '운반차조인테이블')
      .leftJoinAndSelect('기사.리뷰', '리뷰', '리뷰.isHided = true')
      .leftJoinAndSelect('기사.지역', '지역')
      .leftJoinAndSelect('견적.쿠폰조인테이블', '쿠폰조인테이블')
      .leftJoinAndSelect('쿠폰조인테이블.쿠폰', '쿠폰')
      .leftJoinAndSelect('견적.결제', '결제')
      .leftJoinAndSelect('견적.리뷰', '리뷰')
      .andWhere('견적.id = :견적Id', { 견적Id });

견적.운반차 = 견적운반차.운반차; // 기존과 똑같은 데이터 형식으로 말기
`,
    },
    {
      idx: 25,
      title: "리뉴얼(3차) - 앱푸시",
      company: COMPANY.H2BIZ,
      serviceName: SERVICE_NAME.esaro,
      startMonth: "202507",
      endMonth: "202508",
      keywords: [
        KEYWORDS.nodejs,
        KEYWORDS.nestjs,
        KEYWORDS.typeorm,
        KEYWORDS.cron,
      ],
      content: `
<개요>
앱푸시 항목 23가지 신규생성 ⭐⭐⭐
항목에 따라 이동해야하는 앱 페이지 다름

<특이사항>
1. 앱푸시 광고/서비스알림 등 속성에 따라 확인해야 하는 알림 컬럼 다름
2. 이벤트 발생 지점에 따라 1)API 호출 2)배치 로 나뉨
3. 개발서버/운영서버 앱푸시관련 배치주기 다르게 처리 필요


<어려웠던점>

n시간마다 도는 배치, n시간 이후 조건으로 앱푸시 발생인 경우 현실시간으로 테스트 어려움
→ 1분단위로 배치 실행시켜서 로직 타는지 확인
→ 수동으로 DB 컬럼을 변경하여 테스트 진행
앱푸시마다 이동해야하는 화면과 필요한 데이터가 달라서 꼼꼼한 작업 필요
`,
    },
    {
      idx: 26,
      title: "1월 에르메스 랜덤드롭 이벤트",
      company: COMPANY.H2BIZ,
      serviceName: SERVICE_NAME.bomulsun,
      startMonth: "202512",
      endMonth: "202512",
      keywords: [KEYWORDS.nodejs, KEYWORDS.expressjs, KEYWORDS.mybatis],
      content: `
<개요>
1. 골드상자 오픈시 일정확률로 티켓을 획득한다
2. 티켓의 총 개수 100개, 상품의 총 개수 100개
3. 명시된 비율에 따라 티켓으로 상품을 뽑을 수 있다

<이슈>
이벤트 관리 화면이 없어서 초기 데이터 입력 어려움
-> 수동으로 DB에 데이터 입력(휴먼에러 발생 가능성 있음)
-> 운영테스트시 데이터 잘못 입력되어 테스트진행 불가
-> 활성화된 이벤트 조회 API로 데이터 확인해서 진행
`,
    },
    {
      idx: 27,
      title: "3월 주사위 게임 이벤트",
      company: COMPANY.H2BIZ,
      serviceName: SERVICE_NAME.bomulsun,
      startMonth: "202601",
      endMonth: "202602",
      keywords: [KEYWORDS.nodejs, KEYWORDS.expressjs, KEYWORDS.mybatis],
      content: `
<개요>
1. 골드상자 오픈시 확률에 따라 주사위 지급(티켓과 동일)
2. 주사위는 수량제한 없음
3. 주사위 보드판 위에 있는 상품을 뽑을 수 있다

- 주사위사용
1. 회원의 위치, 주사위 개수 조회 API호출
2. Go 버튼을 누르면
-주사위 차감
-게임 API호출 1~6중에 랜덤숫자 뽑아서, 위치 + 지급상품 return
3. 지급상품
포인트: 회원의 포인트 증가, 이력 생성
골드상자: 골드상자 개수 증가, 이력 생성
배송쿠폰: 배송쿠폰 개수 증가, 이력 생성
보너스: 보너스 상품 지급, 이력 생성
`,
    },
    {
      idx: 28,
      title: "4월 첫결제 이벤트",
      company: COMPANY.H2BIZ,
      serviceName: SERVICE_NAME.bomulsun,
      startMonth: "202602",
      endMonth: "202603",
      keywords: [KEYWORDS.nodejs, KEYWORDS.expressjs, KEYWORDS.mybatis],
      content: `
<개요>
1. 골드상자 첫 결제시(현금 5000원 이상)
2. 배송비 무료쿠폰 즉시 지급(유효기간 7일)

<고려한 사항>
- 방법1: 결제요청 API 호출시, 해당 API에서 첫결제 확인
- 방법2: 앱단에서 첫결제 확인 API 호출 후, 그 값에 따라 결제요청 API 호출
- 결론: 방법2 선택. 화면 팝업 등 표시가 필요하고 이벤트 활성화 유무까지 확인하기 위해서, 결제API 수정 최소화
`,
    },
    {
      idx: 29,
      title: "4월 딱지치기 이벤트",
      company: COMPANY.H2BIZ,
      serviceName: SERVICE_NAME.bomulsun,
      startMonth: "202603",
      endMonth: "202603",
      keywords: [KEYWORDS.nodejs, KEYWORDS.expressjs, KEYWORDS.mybatis],
      content: `
<개요>
1. 골드상자 오픈시 확률에 따라 딱지 지급(티켓과 동일)
2. 딱지 종류 3가지
3. 딱지 종류별로 획득상품 상이

<주의사항>
1. 상자 1개에서 획득할 수 있는 딱지 수 최대 1개
2. 기존 이벤트는 티켓종류가 1개였으나 3개로 증가되어 티켓 조회하는 쿼리 수정 필요(1건 -> 다건)
`,
    },
    {
      idx: 30,
      title: "5월 주간랭킹전 이벤트",
      company: COMPANY.H2BIZ,
      serviceName: SERVICE_NAME.bomulsun,
      startMonth: "202604",
      endMonth: "202604",
      keywords: [KEYWORDS.nodejs, KEYWORDS.expressjs, KEYWORDS.mybatis],
      content: `
<개요>
1. 4주차까지 진행, 진행 시작요일/마감요일 다름
2. 마감요일 다음 날 10:30 보상지급 + 푸시, 팝업
3. 상자 오픈 횟수 랭킹 TOP5 (동일한 경우 먼저 오픈한 순)
4. 실시간 조회 가능

<주의사항>
1. 개발서버에서 앱푸시 테스트가 불가한 환경이라 운영테스트에서 확인
2. 스케줄러서버가 운영에만 세팅되어 있어서, 개발에서는 API 호출해서 보상지급 테스트 진행
`,
    },
    {
      idx: 31,
      title: "6월 룰렛 이벤트",
      company: COMPANY.H2BIZ,
      serviceName: SERVICE_NAME.bomulsun,
      startMonth: "202604",
      endMonth: "202604",
      keywords: [KEYWORDS.nodejs, KEYWORDS.expressjs, KEYWORDS.mybatis],
      content: `
<개요>
1. 상자 1회 오픈시 상자 오픈 개수에 따라 룰렛 티켓 획득
2. 룰렛을 돌려서 보상 획득
3. 티켓 사용시 10개이하인 경우 한번에 1~10개까지 돌리기 가능
`,
    },
    {
      idx: 32,
      title: "관리자 리뉴얼",
      company: COMPANY.H2BIZ,
      serviceName: SERVICE_NAME.bomulsun,
      startMonth: "202604",
      endMonth: "202608",
      keywords: [KEYWORDS.nodejs, KEYWORDS.nestjs],
      content: `
<개요>
관리자 페이지 expressJS -> nestJS 로 기술스택 변경
데이터베이스 구조 전면 개편
관리자 모든 기능 신규개발
사용자앱은 외주업체에서 리뉴얼 진행

<주요 작업사항>
1. 데이터베이스 설계관련 피드백/정리
2. 사용자앱 관련 외주업체 소통
3. 관리자 기능개발(클로드AI 활용)
`,
    },
  ],
};
