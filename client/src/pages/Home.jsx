import { Grid, Item } from 'semantic-ui-react';
import MarketingCarousel from '../components/Home/MarketingCarousel';
import { useBooks } from '../contexts/BookContext';

const Home = () => {
    const { books } = useBooks();

    return (
        <>
            <MarketingCarousel />
            <Grid divided className='p-4 gap-4'>
                <Grid.Row columns={16}>
                    {books.map(book => (
                        <Grid.Column
                            key={book.id}
                            mobile='16'
                            tablet='8'
                            computer='4'
                            largeScreen='4'
                            className='p-2'
                        >
                            <Item.Group className='border-gray-100 shadow-md p-4 bg-slate-100 min-h-full'>
                                <Item>
                                    {book.image ? (
                                        <Item.Image
                                            size='small'
                                            src={book.image}
                                        />
                                    ) : (
                                        <i className='ui image file image outline' />
                                    )}

                                    <Item.Content>
                                        <Item.Header>{book.title}</Item.Header>
                                        <Item.Meta>
                                            <span className='cinema'>
                                                {book.author}
                                            </span>
                                        </Item.Meta>
                                        <Item.Description className='max-h-32 overflow-clip text-ellipsis'>
                                            {book.description?.length > 100
                                                ? book.description.slice(
                                                      0,
                                                      100
                                                  ) + '...'
                                                : book.description}
                                        </Item.Description>
                                        <Item.Extra>
                                            Additional Details
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </>
    );
};

export default Home;
