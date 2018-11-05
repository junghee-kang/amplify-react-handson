import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { Container, Divider, Message, Grid, Icon, Header, Image, Label, List, Button, Segment, Placeholder } from 'semantic-ui-react'


export class HostingInstruction extends Component {
    render() {

        const str_command = [
            `$ npm install -g @aws-amplify/cli
$ amplify configure`,
            `$  amplify add hosting`,
            `$ yarn start`,
            `$ amplify publish`,

        ];
        const str_code = [];
        const git_url = 'https://github.com/junghee-kang/amplify-react-handson';

        return (
            <div>
                <Segment style={{ marginTop: '6em' }} >
                    <Header color='orange' as='h2'>데모 소개</Header>

                    <p>React를 이용하여 <a href="https://en.wikipedia.org/wiki/Single-page_application">SPA(Single Page Application)</a>형태로 제작된 간단한 Web application 입니다. </p>
                    <p>본 실습의 목표는 아래 파일들을 수정하여 현재 UI만 구현되어 있는 정적인 React 웹 페이지에, Web Application 개발에 사용되는 대표적인 기술들을 손쉽게 추가하는 방법을 학습하는 것입니다. </p>
                    <p>주요 파일들은 아래와 같은 형태로 구성되어 있습니다. </p>
                    <a href={git_url}>
                        <Button icon labelPosition='left' compact >
                            <Icon name='github' />Source code on Github</Button>
                    </a>
                    <Segment >
                        <List>
                            <List.Item>
                                <List.Icon name='folder' />
                                <List.Content>
                                    <List.Header>src</List.Header>
                                    <List.Description>...</List.Description>
                                    <List.List>
                                        <List.Item>
                                            <List.Icon name='file' />
                                            <List.Content>
                                                <List.Header>App.js</List.Header>
                                                <List.Description>이 Web App의 Entry Point입니다.</List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name='folder' />
                                            <List.Content>
                                                <List.Header>componenets</List.Header>
                                                <List.Description>다섯가지 실습 내용과 대응대는 탭 페이지와 각 도움말이 파일별로 구분되어있습니다.</List.Description>
                                                <List.List>
                                                    <List.Item>
                                                        <List.Icon name='file' />
                                                        <List.Content>
                                                            <List.Header>hosting.js</List.Header>
                                                            <List.Description>보고 계시는 페이지입니다. 웹 호스팅 절차를 소개합니다.</List.Description>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='file' />
                                                        <List.Content>
                                                            <List.Header>authentication.js</List.Header>
                                                            <List.Description>인증을 추가 방법을 소개 하는 페이지입니다. 실제 실습은 진입점인 App.js를 수정합니다.</List.Description>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='file' />
                                                        <List.Content>
                                                            <List.Header>storage.js</List.Header>
                                                            <List.Description>S3상에 이미지를 저장하고, 앨범형태로 확인하는 실습 및 가이드를 제공하는 페이지 입니다.</List.Description>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='file' />
                                                        <List.Content>
                                                            <List.Header>api.js</List.Header>
                                                            <List.Description>간단한 REST API를 생성하여 호출하는 실습 페이지입니다.</List.Description>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='file' />
                                                        <List.Content>
                                                            <List.Header>analytics.js</List.Header>
                                                            <List.Description>웹 페이지 방문자 행동을 분석을 간단히 적용하는 예제입니다.</List.Description>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='file' />
                                                        <List.Content>
                                                            <List.Header>instruction.js</List.Header>
                                                            <List.Description>각 페이지에 이해를 돕기위해 삽입되는 도움말입니다.</List.Description>
                                                        </List.Content>
                                                    </List.Item>
                                                </List.List>
                                            </List.Content>
                                        </List.Item>

                                    </List.List>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Segment>
                    <Divider section />
                    <Header color='orange' as='h2'>현재까지 진행방법</Header>
                    <p>지금 이 페이지를 보고 계시면 Amplify 초기 구성과 동시에 Web hosting 기능을 추가하여, S3상에 초기 Application 버전을 배포가 완료된 상태입니다.</p>
                    <p> 세부 절차는 다음과 같습니다.</p>

                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>Amplify CLI 설치 및 구성</Header>
                    <p> Amplify CLI를 설치 및 구성합니다. 최초 Amplify CLI 구성 시 사용 할 IAM User등을 설정해야 합니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[0]}
                        </code></pre>
                    </Message>
                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>Git Clone</Header>
                    <p> 실습용 코드를 준비합니다.</p>
                    <Message color="black">
                        <pre><code>
                            {`$ git clone ` + git_url}
                        </code></pre>
                        <pre><code>
                            {`$ cd amplify-react-handson`}
                        </code></pre>
                        <pre><code>
                            {`$ yarn install`}
                        </code></pre>
                    </Message>
                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>프로젝트 생성</Header>
                    <p>복제한 Application 경로에서 Amplify 프로젝트를 생성합니다.</p>
                    <Message color="black">
                        <pre><code>{`$ amplify init`}
                        </code></pre>

                    </Message>
                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>Web Hosting 설정</Header>
                    <p> 자바스크립트 기반 웹 어플리케이션을 Amazon S3 및 Amazon CloudFront 상에서 정적 웹 호스팅 하도록 구성해주는 명령입니다.</p>
                    <p> PROD와 DEV 환경을 선택 할 수 있으며 S3가 Default인 <Label color='red' compact content='DEV' /> 환경을 이용하겠습니다.</p>
                    <Message info>
                        <Message.Header>PROD 옵션을 사용할 때 CDN 설정 및 내용 복제에 15-20 분의 지연이 있을 수 있습니다.</Message.Header> <p>DEV 환경에서 개발 후 프로덕션 준비가 완료되면 amplify update hosting 명령을 통해 Amazon CloudFront (CDN 서비스)에 앱을 게시 하도록 변경할수 있습니다 .</p></Message>

                    <Message color="black">
                        <pre><code>{`$ amplify add hosting`}
                        </code></pre>
                    </Message>

                    <p>
                        Hosting 모듈의 보다 다양한 API 및 UI 활용 예제는 <a href="https://aws-amplify.github.io/docs/cli/hosting">여기</a>를 참조하십시오.
                    </p>
                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>기능 확인 및 배포 </Header>
                    <p> 배포 전 로컬에서 어플리케이션을 확인 해보려면 아래 명령을 수행합니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[2]}
                        </code></pre>
                    </Message>
                    <p> Web App을 배포합니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[3]}
                        </code></pre>
                    </Message>
                    <p>확인이 끝났으면 상단 메뉴의 <Label color='black' content='Authentication' />를 눌러 다음 실습을 진행합니다.</p>
                </Segment>
            </div>
        );
    }
}

export class AuthenticationInstruction extends Component {
    render() {

        const str_command = [
            `$ amplify add auth`,
            `$ yarn add aws-amplify aws-amplify-react`,
            `$ yarn start`,
            `$ amplify publish`,

        ];
        const str_code = [
            `import Amplify, {Auth} from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
`,
            `class App extends Component {

    logout=() => {
    Auth.signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
`,
`    return (
        <Router>
        <div>
        <Segment inverted color='grey'>
        <Menu stackable style={{ border: '0px' }} inverted size='large' pointing secondary color='grey' >
            <Menu.Item as='a' header><Image size='mini' src={logo} style={{ marginRight: '1.5em' }} /></Menu.Item>
            ...

            <Menu.Item position='right'>
                <Button as='a' onClick={this.logout} inverted>
                Log Out
                </Button>
            </Menu.Item> `,
`// export default App; 를 대체 
export default withAuthenticator(App, true);`
        ];

        return (
            <div>
                <Segment style={{ marginTop: '6em' }} >
                    <Header color='orange' as='h2'>진행 방법</Header>
                    <p> Authentication 모듈을 이용하면 Amazon Cognito User Pool이 자동으로 구성되어 사용자 인증을 위한 백엔드를 직접 구현 할 필요 없어 바로 사용할 수 있도록 도와주며, Amplify가 제공하는 React HOC인 <Label size='slim' color='grey' content='withAuthenticator' />를 활용하면 큰 코드 변경없이 UI를 구성할 수 있습니다.
                    </p>

                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>Amplify CLI로 백엔드 구성</Header>
                    <p> 다시 프로젝트 root 폴더의 명령창으로 돌아가서, 아래 명령을 통해 사용자 인증을 구성합니다. 세부설정은 Default configuration을 선택하겠습니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[0]}
                        </code></pre>
                    </Message>
                    <p> 로컬에서 진행된 구성 변경을 클라우드에 반영합니다. 필요한 리소스가 실제 생성되는 과정입니다.</p>
                    <Message color="black">
                        <pre><code>{`$ amplify push`}
                        </code></pre>

                    </Message>
                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>코드 수정</Header>

                    <p> 먼저 소스 수정에 앞서 AWS Amplify 라이브러리를 어플리케이션에 추가합니다. </p>
                    <Message color="black">
                        <pre><code>{str_command[1]}
                        </code></pre>

                    </Message>
                    <p>
                        앞서 CLI로 생성된 리소스와 앞으로 생성될 리소스는 ./src/aws-exports.js 파일에 모두 적용됩니다.
                    </p>
                    <p>
                        인증은 사이트 전반에 걸쳐 적용할 예정이기 때문에, 이 Web App의 진입점(Entry Point)인 src/App.js 파일을 수정합니다. 모두 4개 항목을 수정해야 합니다.
                    </p>
                    <p>
                        먼저 필요한 라이브러리와 모듈을 설치하고, CLI를 통해 생성된 리소스를 코드에 반영해 주는 작업을 수행합니다.
                    </p>
                    <Message color="black">
                        <Label attached='top'>src/App.js</Label>
                        <pre><code>
                            {str_code[0]}
                        </code></pre>
                    </Message>
                    <p>
                        App class 내부에 버튼 클릭 시 로그아웃 할 수 있도록 function을 추가합니다.
                    </p>
                    <Message color="black">
                        <Label attached='top'>src/App.js</Label>
                        <pre><code>
                            {str_code[1]}
                        </code></pre>
                    </Message>
                    <p>
                        로그아웃을 위한 버튼을 추가합니다. 아래 {`<Menu.Item>`} 항목(마지막 항목)을 주석({`{/* */}`})을 해제하시면 됩니다.
                    </p>
                    <Message color="black">
                        <Label attached='top'>src/App.js</Label>
                        <pre><code>
                            {str_code[2]}
                        </code></pre>
                    </Message>
                    <p>
                        최하단에 App class를 인증을 위한 UI를 제공하는 React HOC인 withAuthenticator로 감싸줍니다.
                    </p>
                    <Message color="black">
                        <Label attached='top'>src/App.js</Label>
                        <pre><code>
                            {str_code[3]}
                        </code></pre>
                    </Message>

                    <p>
                        Authentication 모듈의 보다 다양한 API 및 UI 활용 예제는 <a href="https://aws-amplify.github.io/docs/js/authentication">여기</a>를 참조하십시오.
                    </p>
                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>기능 확인 및 배포 </Header>
                    <p> 아래 명령을 통해 로컬에서 변경사항을 확인합니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[2]}
                        </code></pre>
                    </Message>
                    <p> 확인 후 업데이트된 Web App을 배포합니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[3]}
                        </code></pre>
                    </Message>
                    <p>확인이 끝났으면 상단 메뉴의 <Link to="/storage"><Label color='black' content='Storage' /></Link> 를 눌러 다음 실습을 진행합니다.</p>
                </Segment>
            </div>
        );
    }
}

export class StorageInstruction extends Component {
    render() {

        const str_command = [
            `$ amplify add storage`,
            `? Please select from one of the below mentioned services (Use arrow keys)
❯ Content (Images, audio, video, etc.)
    NoSQL Database`,
            `$ yarn start`,
            `$ amplify publish`,

        ];
        const str_code = [
            `import Amplify, { Storage } from 'aws-amplify';
import { S3Album } from 'aws-amplify-react';

// ... 
// render 함수 선언 바로 전에, 아래 코드를 추가합니다.

uploadFile = (evt) => {
    const file = evt.target.files[0];
    const name = file.name;

    Storage.put(name, file).then(() => {
        this.setState({ file: name });
    })
    }

render() {
// 아래 코드를 추가합니다.
Storage.configure({ level: 'private' });

// ... 
// 실습 영역 내부를 아래 코드를 대체합니다.

{/* 실습 영역 */}
    <div className="App">
    <p> Pick a file</p>
    <input type="file" onChange={this.uploadFile} />
    <S3Album level="private" path='' />
    </div>
{/* 실습 영역 - 끝 */}`
        ];

        return (
            <div>
                <Segment style={{ marginTop: '6em' }} >
                    <Header color='orange' as='h2'>진행 방법</Header>
                    <p> 인증된 사용자가 손쉽게 본인의 파일을 클라우드에 보관하고, Amplify가 제공하는 React Component인 <Label size='slim' color='grey' content='S3Album' />를 활용하여 보관된 파일을 확인하는 UI를 구성하는 예제입니다.
                    </p>
                    <Message info>
                        <Message.Header>Storage 모듈의 기본 파일 액세스 수준은 public(모든 파일이 모든 사용자에게 공개)입니다.</Message.Header> <p>public 옵션 외에도 <b>protected</b> 와 <b>private</b> 액세스 레벨을 추가적으로 제공하여 인증된 사용자가 안전하게 파일을 활용 및 관리 할 수 ​​있습니다. </p></Message>

                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>Amplify CLI로 백엔드 구성</Header>
                    <p> 다시 프로젝트 root 폴더의 명령창으로 돌아가서, 아래 명령을 통해 스토리지를 구성합니다. 이름과 버킷명은 디폴트를 사용하겠습니다. 서비스 형태는 파일을 저장하기 위해 'Contents'를 선택합니다. 접근 권한은 Auth users only에게 read/write를 선택합니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[0]}
                        </code></pre>
                        <pre><code>
                            {str_command[1]}
                        </code></pre>
                    </Message>
                    <p> 로컬에서 진행된 스토리지 구성 변경을 클라우드에 반영합니다. 필요한 리소스가 실제 생성되는 과정입니다.</p>
                    <Message color="black">
                        <pre><code>{`$ amplify push`}
                        </code></pre>

                    </Message>
                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>코드 수정</Header>
                    <p>
                        src/components/storage.js 파일을 다음과 같이 수정합니다.
                    </p>
                    <Message color="black">
                        <Label attached='top'>src/components/storage.js</Label>
                        <pre><code>
                            {str_code[0]}
                        </code></pre>
                    </Message>
                    <p>
                        Storage 모듈의 보다 다양한 API 및 UI 활용 예제는 <a href="https://aws-amplify.github.io/docs/js/storage">여기</a>를 참조하십시오.
                    </p>
                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>기능 확인 및 배포 </Header>
                    <p> 아래 명령을 통해 로컬에서 변경사항을 확인합니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[2]}
                        </code></pre>
                    </Message>
                    <p> 확인 후 업데이트된 Web App을 배포합니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[3]}
                        </code></pre>
                    </Message>
                    <p>확인이 끝났으면 상단 메뉴의 <Label color='black' content='API' />를 눌러 다음 실습을 진행합니다.</p>
                </Segment>
            </div>
        );
    }
}

export class APIInstruction extends Component {
    render() {

        const str_command = [
`$ amplify add api`,
`? Please select from one of the below mentioned services REST
? Provide a friendly name for your resource to be used as a label for this category in the project: sampleCloudApi
? Provide a path (e.g., /items) /items
? Choose a Lambda source Create a new Lambda function
? Provide the AWS Lambda function name: sampleCloudApi
? Choose the function template that you want to use: Serverless express function (Integration with Amazon API Gateway)
? Do you want to edit the local lambda function now? true
Please edit the file in your editor: PROJECT_FOLDER/amplify/backend/function/sampleCloudApi/src/app.js
Succesfully added the Lambda function locally
? Restrict API access Yes
? Who should have access? Authenticated users only
? What kind of access do you want for Authenticated users read/write
? Do you want to add another path? No`,
`$ yarn start`,
`$ amplify publish`,
        ];
        const str_code = [
            `/* Uncomment a line below */
import { API } from 'aws-amplify';

class APICard extends Component {
    state = { apiResponse: null }
    /* Uncomment a line below */
    getSample = async () => {
        const path = "/items"; // you can specify the path
        const apiResponse = await API.get("sampleCloudApi", path); //replace the API name
        console.log('response:' + apiResponse);
        this.setState({ apiResponse });
    }

    render() {
        return (
            <Container text style={{ marginTop: '4em', marginBottom: '4em' }}>
                <Header color='orange' as='h2'>
                    <Icon name='cloud' />
                    <Header.Content>
                        API
                        <Header.Subheader>App에서 필요한 백엔드 로직을 손쉽게 생성하거나 연결할 수 있습니다. REST 및 GraphQL를 지원합니다.</Header.Subheader>
                    </Header.Content>
                </Header>
                <Segment raised>
                    {/* 실습 영역 */}
                    <Header color='grey' as='h2'>실습 영역</Header>
                    {/* Uncomment a line below */}
                    <Button content="Send Request" onClick={this.getSample.bind(this)} />
                    <Message>
                        <Message.Header>Response</Message.Header>
                        <p>
                            {this.state.apiResponse && JSON.stringify(this.state.apiResponse)}
                        </p>
                    </Message>
                    {/* 실습 영역 - 끝 */}`
        ];

        return (
            <div>
                <Segment style={{ marginTop: '6em' }} >
                    <Header color='orange' as='h2'>진행 방법</Header>
                    <p> {`<Button>`}을 클릭하면 getSample 함수가 호출되어 생성한 REST API를 GET 호출하며, 그 결과를 {`<Message>`}에 표시하는 간단한 예제입니다.
                    </p>
                    <Message info>
                        <Message.Header>AWS Amplify API 카테고리에서 AWS AppSync GraphQL API 백엔드를 만들거나 기존의 GraphQL 서버를 연결할 수 있습니다.</Message.Header> 
                        <p>이번 실습에서는 REST을 사용하며 Appsync 사용 방법은 <a href="https://docs.aws.amazon.com/appsync/latest/devguide/welcome.html">여기</a>를 참조하십시오. </p></Message>


                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>Amplify CLI로 백엔드 구성</Header>
                    <p> 다시 프로젝트 root 폴더의 명령창으로 돌아가서, 아래 명령을 통해 API를 구성합니다. 'REST'를 선택합니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[0]}
                        </code></pre>
                        <pre><code>
                            {str_command[1]}
                        </code></pre>
                    </Message>
                    <p> 로컬에서 진행된 API 구성 변경을 클라우드에 반영합니다. 필요한 리소스가 실제 생성되는 과정입니다.</p>
                    <Message color="black">
                        <pre><code>{`$ amplify push`}
                        </code></pre>

                    </Message>
                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>코드 수정</Header>
                    <p>
                        src/components/api.js 파일을 다음과 같이 수정합니다. 
                    </p>
                    <Message color="black" style={{ overflow: 'auto',}}>
                        <Label attached='top'>src/components/api.js</Label>
                        <pre><code>
                            {str_code[0]}
                        </code></pre>
                    </Message>
                    <p>
                        API 모듈의 보다 다양한 API 및 UI 활용 예제는 <a href="https://aws-amplify.github.io/docs/js/api">여기</a>를 참조하십시오.
                    </p>
                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>기능 확인 및 배포 </Header>
                    <p> 아래 명령을 통해 로컬에서 변경사항을 확인합니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[2]}
                        </code></pre>
                    </Message>
                    <p> 확인 후 업데이트된 Web App을 배포합니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[3]}
                        </code></pre>
                    </Message>
                    <p>확인이 끝났으면 상단 메뉴의 <Label color='black' content='Analytics' />를 눌러 다음 실습을 진행합니다.</p>
                </Segment>
            </div>
        );
    }
}

export class AnalyticsInstruction extends Component {
    render() {

        const str_command = [
            `$ amplify add analytics`,
            `$ yarn start`,
            `$ amplify publish`,

        ];
        const str_code = [
            `import React, { Component } from 'react';
import { Container, Icon, Header, Segment, Placeholder, Card, Image, Button } from 'semantic-ui-react'
import { AnalyticsInstruction } from './instruction';
import dog_img from '../images/dog.jpg';
import cat_img from '../images/cat.gif';
// Uncomment a line below
import Amplify, { Analytics } from 'aws-amplify';

class AnalyticsCard extends Component {

    tracking_click_stream_manually = (item) =>{
        // Uncomment a line below
        Analytics.record(item);
        ...
    }`
        ];

        return (
            <div>
                <Segment style={{ marginTop: '6em' }} >
                    <Header color='orange' as='h2'>진행 방법</Header>
                    <p>
                        앱 사용자의 활동(여기서는 개, 고양이 사진에 좋아요를 누르는 행동)을 간단하게 추적, 분석용 데이터를 수집하는 예제입니다.
                    </p>
                    <Message info>
                        <Message.Header> Analytics 카테고리 사용 시 분석을 비활성화하지 않은 경우 사용자 세션 데이터가 자동으로 수집됩니다. </Message.Header> <p>결과를 보려면 <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint 콘솔</a>을 방문하십시오 .</p></Message>

                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>Amplify CLI로 백엔드 구성</Header>
                    <p> 다시 프로젝트 root 폴더의 명령창으로 돌아가서, 아래 명령을 통해 Analytics를 구성합니다. 생성될 Pinpoint 리소스 이름 등을 선택합니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[0]}
                        </code></pre>
                    </Message>
                    <p> 로컬에서 진행된 구성 변경을 클라우드에 반영합니다. 필요한 리소스(Amazon Pinpoint)가 실제 생성되는 과정입니다.</p>
                    <Message color="black">
                        <pre><code>{`$ amplify push`}
                        </code></pre>

                    </Message>
                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>코드 수정</Header>
                    <p>
                        src/components/analytics.js 파일을 다음과 같이 수정합니다.
                    </p>
                    <Message color="black">
                        <Label attached='top'>src/components/analytics.js</Label>
                        <pre><code>
                            {str_code[0]}
                        </code></pre>
                    </Message>
                    <p>
                        Analytics 모듈의 보다 다양한 API 및 UI 활용 예제는 <a href="https://aws-amplify.github.io/docs/js/analytics">여기</a>를 참조하십시오.
                    </p>
                    <Header color='grey' as='h3' style={{ marginTop: '3em' }}>기능 확인 및 배포 </Header>
                    <p> 아래 명령을 통해 로컬에서 변경사항을 확인합니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[1]}
                        </code></pre>
                    </Message>
                    <p> 확인 후 업데이트된 Web App을 배포합니다.</p>
                    <Message color="black">
                        <pre><code>{str_command[2]}
                        </code></pre>
                    </Message>
                    <p>이것으로 모든 실습을 완료했습니다.</p>
                </Segment>
            </div>
        );
    }
}