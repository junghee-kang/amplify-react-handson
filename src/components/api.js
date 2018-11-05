import React, { Component } from 'react';

import { Container, Icon, Header, Segment, Button, Message, Placeholder } from 'semantic-ui-react'
import { APIInstruction } from './instruction';
/* Uncomment a line below */
//import { API } from 'aws-amplify';

class APICard extends Component {
    state = { apiResponse: null }
    /* Uncomment a line below */
    /*    
    getSample = async () => {
        const path = "/items"; // you can specify the path
        const apiResponse = await API.get("sampleCloudApi", path); //replace the API name
        console.log('response:' + apiResponse);
        this.setState({ apiResponse });
    }
    */

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
                    {/* Optional : Remove the lines below (Placeholder) */}
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line length='medium' />
                            <Placeholder.Line length='short' />
                        </Placeholder.Paragraph>
                    </Placeholder>

                    {/* Uncomment a line below */}
                    
                    {/* 
                    <Button content="Send Request" onClick={this.getSample.bind(this)} />
                    <Message>
                        <Message.Header>Response</Message.Header>
                        <p>
                            {this.state.apiResponse && JSON.stringify(this.state.apiResponse)}
                        </p>
                    </Message>
                    */}

                    {/* 실습 영역 - 끝 */}
                </Segment>
                {/* 도움말 영역 */}
                <APIInstruction />
                {/* 도움말 영역 - 끝*/}
            </Container>
        );
    }
}
export default APICard;
