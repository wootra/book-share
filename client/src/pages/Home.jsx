import { Card, Grid } from 'semantic-ui-react';
import MarketingCarousel from '../components/Home/MarketingCarousel';
import { useBooks } from '../contexts/BookContext';

const Home = () => {
    const { books } = useBooks();

    return (
        <>
            <MarketingCarousel />
            <Grid>
                <Grid.Row columns={16}>
                    {books.map(book => (
                        <Grid.Column
                            key={book.id}
                            mobile='16'
                            tablet='8'
                            computer={4}
                            largeScreen={3}
                        >
                            <Card fluid>
                                <Card.Header>header</Card.Header>
                                <Card.Content>
                                    <Card.Header>Featured</Card.Header>
                                    <Card.Description>
                                        {books[0].title}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </>
    );
};

export default Home;
