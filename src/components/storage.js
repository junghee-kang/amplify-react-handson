import React, { Component } from 'react';

import { Container, Icon, Header, Segment, Placeholder } from 'semantic-ui-react'
import { StorageInstruction } from './instruction';
/* Uncomment a line below */
/*
import Amplify, { Storage } from 'aws-amplify';
import { S3Album } from 'aws-amplify-react';
*/

class StorageCard extends Component {
/* Uncomment a line below */
/*
    uploadFile = (evt) => {
        const file = evt.target.files[0];
        const name = file.name;

        Storage.put(name, file).then(() => {
            this.setState({ file: name });
        })
    }
*/
    render() {
        /* Uncomment a line below */
        //Storage.configure({ level: 'private' });
        return (
            <Container text style={{ marginTop: '4em', marginBottom: '4em' }}>
                <Header color='orange' as='h2'>
                    <Icon name='cloud upload' />
                    <Header.Content>
                        Storage
                        <Header.Subheader>App 사용자의 파일을 클라우드 상에 손쉽게 보관 할 수 있는 간단한 매커니즘을 제공합니다.</Header.Subheader>
                    </Header.Content>
                </Header>
                <Segment raised>
                    {/* 실습 영역 */}
                    <Header color='grey' as='h2'>실습 영역</Header>
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
                    {/* 실습 영역 - 끝 */}
                </Segment>
                {/* 도움말 영역 */}
                <StorageInstruction />
                {/* 도움말 영역 - 끝*/}
            </Container>
        );
    }
}
export default StorageCard;
