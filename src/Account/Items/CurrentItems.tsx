import React, { Component } from 'react';
import { Box, Heading } from 'grommet';
import { WithUserProps, withUser } from '../../user/withUser';
import { Api } from '../../api/Api';
import Items, { Item } from '../../items/Items';
import Layout from '../../components/Layout';
import { MainContent, Main } from '../../styles/Layout';
import Card from '../../items/Card';

interface StateProps {
    isLoggedIn: boolean;
}

interface ProfileProps extends StateProps, WithUserProps { }

const api = new Api();
const newItems: Item[] = [
    {
        id: 1,
        title: 'Top Technology Item',
        shortDescription: 'a very nice item',
        imgSrc: 'http://lorempixel.com/300/300/technics',
        category: 'Techology'
    },
    {
        id: 2,
        title: 'Top Transportation Item',
        shortDescription: 'somewhat better item',
        imgSrc: 'http://lorempixel.com/300/300/transport',
        category: 'Techology'
    },
    {
        id: 3,
        title: 'top Fashion Item',
        shortDescription: 'some other item',
        imgSrc: 'http://lorempixel.com/300/300/fashion',
        category: 'Fashion'
    }
];

class CurrentItems extends Component<ProfileProps> {
    public state: any = {
        userNew: this.props.user.userDetails
    };


    public componentDidMount() {
        const leden = api.getItems()
        const {
            user: { userDetails }
        } = this.props;

        this.setState({
            userDetails
        });

        // for (let item in Items) {
        //     item
        // }
    }


    public render() {
        const itemsList = newItems.map((item) => <Card {...item}></Card>);

        return (
            <Box direction="column" align="center">
                <Heading level="1">{this.state.userNew.displayName}'s Items</Heading>
                <Main>
                 {itemsList}
                </Main>
            </Box>

        );
    }
}

export default withUser(CurrentItems);
