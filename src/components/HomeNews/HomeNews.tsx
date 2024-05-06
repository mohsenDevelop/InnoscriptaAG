import { useNewsListQuery } from '@api';
import { Skeleton, Card, Image, Text, SimpleGrid } from '@uiKits';
import { HomePagination } from '../HomePagination';

export const HomeNews = () => {

    const { data, isFetching } = useNewsListQuery(
        { page: 1, pageSize: 21 },
    );

    console.log({ data });

    if (isFetching) {
        Array(15)
            .fill(0)
            .map((_, index) => (
                <Skeleton key={index} h={28} mt='sm' animate={false} />
            ));
    }

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
