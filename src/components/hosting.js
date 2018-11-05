import React, { Component } from 'react';

import { Container, Icon, Header, Segment, Placeholder } from 'semantic-ui-react'
import { HostingInstruction } from './instruction';

class HostingCard extends Component {

    render() {
        return (
            <Container text style={{ marginTop: '4em', marginBottom: '4em' }}>
                <Header color='orange' as='h2'>
                    <Icon name='home' />
                    <Header.Content>
                        Web Hosting
                        <Header.Subheader>기존 React Web Page를 손쉽게 호스팅 할 수 있습니다.</Header.Subheader>
                    </Header.Content>
                </Header>
                {/* 도움말 영역 */}
                <HostingInstruction />
                
                {/* 도움말 영역 - 끝*/}
            </Container>
        );
    }
}
export default HostingCard;
