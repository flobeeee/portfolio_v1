// DB에 넣을 데이터 (통신 없이 화면에서 사용)
const KEYWORDS = {
  "nodejs": "Node.js",
  "adonisjs": "AdonisJS",
  "mysql": "MySQL",
  "typescript": "TypeScript",
  "exceljs": "ExcelJS",
  "minizipasmjs": "minizip-asm.js",
  "s3": "S3",
  "googleadsapi": "Google Ads API",
  "instagramgraphapi": "Instagram Graph API",
  "serverless": "Serverless",
  "lambda": "Lambda",
  "docker": "Docker",
  "vuejs": "Vue.js",
  "echarts": "ECharts",
  "vueecharts": "Vue ECharts",
}

const COMPANY = {
  "mediance": "미디언스",
}

const SERVICE_NAME = {
  "mediance": "미디언스",
  "stylemate": "스타일메이트",
  "mediancelap": "미디언스 랩",
  "mediancebiz": "미디언스 비즈센터",
  "medianceadmin": "미디언스 관리자",
}

const DATABASE = {
  "portfolioTable": [
    {
      "idx": 1,
      "title": "엑셀 데이터 가공 및 다운로드",
      "company": COMPANY.mediance,
      "serviceName": SERVICE_NAME.mediance,
      "startMonth": "202108",
      "endMonth": "202108",
      "keywords": [
        KEYWORDS.nodejs, 
        KEYWORDS.adonisjs, 
        KEYWORDS.mysql, 
        KEYWORDS.typescript, 
        KEYWORDS.exceljs, 
        KEYWORDS.minizipasmjs,
      ],
      "content": `
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
`
    },
    {
      "idx": 2,
      "title": "광고 문의 개편 및 이벤트 발생",
      "company": COMPANY.mediance,
      "serviceName": SERVICE_NAME.mediance,
      "startMonth": "202109",
      "endMonth": "202109",
      "keywords": [
        KEYWORDS.nodejs, 
        KEYWORDS.adonisjs, 
        KEYWORDS.mysql, 
        KEYWORDS.typescript, 
      ],
      "content": `
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

`
    },
    {
      "idx": 3,
      "title": "회원가입 프로세스 개편 / 마이그레이션",
      "company": COMPANY.mediance,
      "serviceName": SERVICE_NAME.mediance,
      "startMonth": "202110",
      "endMonth": "202110",
      "keywords": [
        KEYWORDS.nodejs, 
        KEYWORDS.adonisjs, 
        KEYWORDS.mysql, 
        KEYWORDS.typescript, 
      ],
      "content": `
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
`
    },
    {
      "idx": 4,
      "title": "캠페인 참여 포스트 평가 API",
      "company": COMPANY.mediance,
      "serviceName": SERVICE_NAME.mediance,
      "startMonth": "202111",
      "endMonth": "202111",
      "keywords": [
        KEYWORDS.nodejs, 
        KEYWORDS.adonisjs, 
        KEYWORDS.mysql, 
        KEYWORDS.typescript, 
      ],
      "content": `
<개요>
협찬캠페인 참여자들이 올린 인스타그램 포스트를 평가하는 기능

<고민사항>
1. 캠페인 관리 컨트롤러 vs 포스트 컨트롤러
캠페인 관리를 위한 목적보다 인플루언서에 대한 평가를 내리기 위함이므로 포스트 컨트롤러로 진행함.
2. 채널 통계 테이블 vs 인플루언서 통계 테이블
평가에 대한 통계를 어느 테이블에 넣을 건지 고려함.
한 인플루언서가 채널이 여러 개 있는 경우도 있고, 정보가 인플루언서 단위라서 인플루언서 통계 테이블에 데이터 넣음.
추후에 채널별 포스트 평가 파악을 위해 채널 통계 테이블에도 추가함.
`
    },
    {
      "idx": 5,
      "title": "인플루언서 단가 파일 업로드 / 다운로드",
      "company": COMPANY.mediance,
      "serviceName": SERVICE_NAME.mediance,
      "startMonth": "202112",
      "endMonth": "202112",
      "keywords": [
        KEYWORDS.nodejs, 
        KEYWORDS.adonisjs, 
        KEYWORDS.mysql, 
        KEYWORDS.typescript,
        KEYWORDS.s3,
      ],
      "content": `
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
`
    },
    {
      "idx": 6,
      "title": "신규서비스 작업",
      "company": "미디언스",
      "serviceName": SERVICE_NAME.stylemate,
      "startMonth": "202201",
      "endMonth": "202202",
      "keywords": [
        KEYWORDS.nodejs, 
        KEYWORDS.adonisjs, 
        KEYWORDS.mysql, 
        KEYWORDS.typescript,
      ],
      "content": `
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
`
    },
    {
  "idx": 7,
  "title": "알림톡",
  "company": COMPANY.mediance,
  "serviceName": SERVICE_NAME.mediance,
  "startMonth": "202203",
  "endMonth": "202204",
  "keywords": [
    KEYWORDS.nodejs, 
    KEYWORDS.adonisjs, 
    KEYWORDS.mysql, 
    KEYWORDS.typescript,
  ],
  "content": `
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
`
    },
    {
      "idx": 8,
      "title": "통계서비스 리뉴얼",
      "company": COMPANY.mediance,
      "serviceName": SERVICE_NAME.mediancelap,
      "startMonth": "202206",
      "endMonth": "202207",
      "keywords": [
        KEYWORDS.nodejs, 
        KEYWORDS.adonisjs, 
        KEYWORDS.mysql, 
        KEYWORDS.typescript,
      ],
      "content": `
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
`
    },
    {
      "idx": 9,
      "title": "컨텐츠 광고 / Google Ads API 및 커맨드",
      "company": COMPANY.mediance,
      "serviceName": SERVICE_NAME.mediancebiz,
      "startMonth": "202207",
      "endMonth": "202209",
      "keywords": [
        KEYWORDS.nodejs, 
        KEYWORDS.adonisjs, 
        KEYWORDS.mysql, 
        KEYWORDS.typescript,
        KEYWORDS.googleadsapi,
      ],
      "content": `
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
`
    },
    {
      "idx": 10,
      "title": "인스타그램 그래프 API 활용 및 커맨드",
      "company": COMPANY.mediance,
      "serviceName": SERVICE_NAME.mediancelap,
      "startMonth": "202212",
      "endMonth": "202212",
      "keywords": [
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
      "content": `
<개요>
미디언스 회원의 인스타그램 메타데이터 및 지표 가져오기

<관련 커맨드 생성>
1. 가져올 인플루언서 선정
2. 외부 API 호출에 필요한 데이터 가공
3. 응답받은 메타데이터 및 지표 파일로 S3에 저장
4. 파일 읽어서 데이터베이스에 가공
5. 미디언스 회원 데이터에 반영
6. API 호출 에러 발생 시 예외처리
`
    },
    {
      "idx": 11,
      "title": "크롤링분석 시스템 모니터링",
      "company": COMPANY.mediance,
      "serviceName": SERVICE_NAME.medianceadmin,
      "startMonth": "202212",
      "endMonth": "202212",
      "keywords": [
        KEYWORDS.nodejs, 
        KEYWORDS.adonisjs, 
        KEYWORDS.mysql, 
        KEYWORDS.typescript,
        KEYWORDS.vuejs,
        KEYWORDS.echarts,
        KEYWORDS.vueecharts,
        KEYWORDS.docker,
      ],  
      "content": `
<개요>
미디언스 회원 크롤링 시스템 모니터링 API 및 화면 생성

<작업 사항>
1. 모니터링 admin 페이지에 통합로그인 연결
2. 홈 화면 차트, 다른 메뉴는 테이블로 그리기
3. 분석 결과 통계 커맨드
4. Worker 통계 커맨드 및 화면
5. 크롤링 타겟 목록 API 및 화면
6. 인스타그램 계정 상태 통계 화면
`
    }]
};
