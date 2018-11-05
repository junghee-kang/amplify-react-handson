import React, { Component } from 'react';

import { Container, Icon, Header, Segment, Placeholder } from 'semantic-ui-react'
import {AuthenticationInstruction} from './instruction';


class AuthenticationCard extends Component {
    render() {
        return (

            <Container text style={{ marginTop: '4em', marginBottom: '4em' }}>
                <Header color='orange' as='h2'>
                    <Icon name='user plus' />
                    <Header.Content>
                        Authencation
                        <Header.Subheader>기존 Web App에 사용자 인증 기능을 추가 할 수 있습니다.</Header.Subheader>
                    </Header.Content>
                </Header>

                {/* 도움말 영역 */}
                <AuthenticationInstruction />
                {/* 도움말 영역 - 끝*/}
            </Container>
        );
    }
}
export default AuthenticationCard;
