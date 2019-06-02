import React, { Component } from 'react';
import { Box, Heading } from 'grommet';
import { WithUserProps, withUser } from '../../user/withUser';
import { Api } from '../../api/Api';
import { MainContent, Main } from '../../styles/Layout';
import Card from '../../items/Card';

interface StateProps {
    isLoggedIn: boolean;
}

interface ProfileProps extends StateProps, WithUserProps { }

const api = new Api();

class CurrentItems extends Component<ProfileProps> {
    public state: any = {
        userNew: this.props.user.userDetails,
        myItems: [{
            id: 1,
            title: 'Top Technology Item',
            shortDescription: 'a very nice item',
            imgSrc: 'http://lorempixel.com/300/300/technics',
            category: 'Techology'
        }]
    };


    public componentDidMount() {
        api.getMyItems().then((value) => {
            this.setState({
                myItems: value
            });
        })

        const {
            // user: { userDetails }
        } = this.props;


        console.log(this.state.myItems);


        // for (let item in Items) {
        //     item
        // }
    }


    public render() {
        const itemsList = this.state.myItems.map((item: any) => <Box>
            <Heading level="1" alignSelf="center">
                {item ? item.title : 'View item'}
            </Heading>
            {item && <Card {...item} />}
        </Box>);

        const tempStyle = { width: '400px' }
        return (
            <Box direction="column" align="center">
                <Heading level="1">{this.state.userNew.displayName}'s Items</Heading>
                <Main>
                    <MainContent>
                        <div style={tempStyle}>
                            {itemsList}
                        </div>
                    </MainContent>
                </Main>
            </Box>

        );
    }
}

export default withUser(CurrentItems);
