import { Card, Image, Text, SimpleGrid, } from '@uiKits';
import { HomePagination } from '../HomePagination';
import { useHomeNews } from './HomeNews.hooks';
import { HomeSkeleton } from '../HomeSkeleton';

export const HomeNews = () => {

    const { data, isLoading } = useHomeNews();

    if (isLoading) { return <HomeSkeleton />; }

    return (
        <>
            <SimpleGrid
                cols={3}
                spacing='lg'
                verticalSpacing='lg'
            >
                {
                    data?.articles?.map((article) => (
                        <Card
                            key={article.author}
                            shadow='sm'
                            padding='xl'
                            component='a'
                        >
                            <Card.Section>
                                <Image
                                    src={article?.urlToImage}
                                    h={160}
                                    alt={article.author ?? ''}
                                />
                            </Card.Section>

                            <Text fw={500} size='lg' mt='md'>
                                {article?.title}
                            </Text>

                            <Text mt='xs' c='dimmed' size='sm'>
                                {article?.description}
                            </Text>
                        </Card>
                    ))
                }
            </SimpleGrid>

            <HomePagination total={data?.totalResults ?? 20} />
        </>
    );
};
