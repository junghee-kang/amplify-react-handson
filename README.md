# AWS Amplify - React Demo

본 실습의 목표는 AWS Amplify를 이용하여 현재 UI만 구현되어 있는 정적인 React 웹 페이지에, Web Application 개발에 사용되는 대표적인 기술들을 손쉽게 추가하는 방법을 학습하는 것입니다.

데모용 Web App은 React를 이용하여 SPA(Single Page Application)형태로 제작된 간단한 Web application 입니다.

주요 파일들은 아래와 같은 형태로 구성되어 있습니다.

	
* src
  
  + App.js
    - 이 Web App의 Entry Point입니다.
  + componenets
    * **다섯가지 실습 내용과 대응대는 탭 페이지와 각 도움말이 파일별로 구분되어있습니다.**
    * hosting.js : 웹 호스팅 절차를 소개합니다.
    * authentication.js : 인증을 추가 방법을 소개 하는 페이지입니다. 실제 실습은 진입점인 App.js를 수정합니다.
    * storage.js : S3상에 이미지를 저장하고, 앨범형태로 확인하는 실습 및 가이드를 제공하는 페이지 입니다.
    * api.js : 간단한 REST API를 생성하여 호출하는 실습 페이지입니다.
    * analytics.js : 웹 페이지 방문자 행동을 분석을 간단히 적용하는 예제입니다.
    * instruction.js : 각 페이지에 이해를 돕기위해 삽입되는 도움말입니다.

## 진행방법
먼저 Amplify 초기 구성과 동시에 Web hosting 기능을 추가하여, S3상에 초기 Application 버전을 배포합니다. 
이후 절차는 호스팅된 Web App상의 도움말을 참조하시기 바랍니다.

세부 절차는 다음과 같습니다.

### Amplify CLI 설치 및 구성
Amplify CLI를 설치 및 구성합니다. 최초 Amplify CLI 구성 시 사용 할 IAM User등을 설정해야 합니다.

```
$ npm install -g @aws-amplify/cli
$ amplify configure
```


### Git Clone
실습용 코드를 준비합니다.

```
$ git clone https://github.com/junghee-kang/amplify-react-handson
$ cd amplify-react-handson
```

### 프로젝트 생성
복제한 Application 경로에서 Amplify 프로젝트를 생성합니다.

```
$ amplify init
```

### Web Hosting 설정
자바스크립트 기반 웹 어플리케이션을 Amazon S3 및 Amazon CloudFront 상에서 정적 웹 호스팅 하도록 구성해주는 명령입니다.

PROD와 DEV 환경을 선택 할 수 있으며 S3가 Default인 **DEV** 환경을 이용하겠습니다.


> PROD 옵션을 사용할 때 CDN 설정 및 내용 복제에 **15-20 분의 지연**이 있을 수 있습니다.
DEV 환경에서 개발 후 프로덕션 준비가 완료되면 amplify update hosting 명령을 통해 Amazon CloudFront (CDN 서비스)에 앱을 게시 하도록 변경할수 있습니다.

```
$ amplify add hosting
```
Hosting 모듈의 보다 다양한 API 및 UI 활용 예제는 여기를 참조하십시오.

### 기능 확인 및 배포
배포 전 로컬에서 어플리케이션을 확인 해보려면 아래 명령을 수행합니다.
```
$ yarn start
```
Web App을 배포합니다.
```
$ amplify publish
```

이후 절차는 호스팅된 Web App의 endpoint로 접속하여 Web App 상의 도움말을 참조하시기 바랍니다.