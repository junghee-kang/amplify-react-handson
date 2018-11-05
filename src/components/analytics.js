import React, { Component } from 'react';

import { Container, Icon, Header, Segment, Placeholder, Card, Image, Button } from 'semantic-ui-react'
import { AnalyticsInstruction } from './instruction';
import dog_img from '../images/dog.jpg';
import cat_img from '../images/cat.gif';
// Uncomment a line below
//import Amplify, { Analytics } from 'aws-amplify';

class AnalyticsCard extends Component {

    tracking_click_stream_manually = (item) =>{
        // Uncomment a line below
        //Analytics.record(item);
        console.log(`someone liked ${item}` )
    }

    render() {
        return (
            <Container text style={{ marginTop: '4em', marginBottom: '4em' }}>
                <Header color='orange' as='h2'>
                    <Icon name='chart bar outline ' />
                    <Header.Content>
                        Analytics
                        <Header.Subheader>Analytics 카테고리를 사용하면 앱의 분석용 데이터를 간편하게 수집 할 수 있습니다. Amazon Pinpoint와 Amazon Kinesis가 기본적으로 지원됩니다 .</Header.Subheader>
                    </Header.Content>
                </Header>
                <Segment raised>

                    {/* 실습 영역 */}
                    <Header color='grey' as='h2'>실습 영역</Header>
                    <Card.Group>
                        <Card>
                            <Image src={cat_img} />
                            <Card.Content>

                                <Button color='red' name='cat' fluid onClick={this.tracking_click_stream_manually.bind(this,'cat')}><Icon name='heart' />
                                    Like
                            </Button>

                            </Card.Content>
                        </Card>
                        <Card>
                            <Image src={dog_img} />
                            <Card.Content>

                                <Button color='red' name='dog' fluid onClick={this.tracking_click_stream_manually.bind(this,'dog')} ><Icon name='heart' />
                                    Like
                            </Button>

                            </Card.Content>
                        </Card>
                    </Card.Group>
                    {/* 실습 영역 - 끝 */}
                </Segment>
                {/* 도움말 영역 */}
                <AnalyticsInstruction />
                {/* 도움말 영역 - 끝*/}
            </Container>
        );
    }
}
export default AnalyticsCard;
