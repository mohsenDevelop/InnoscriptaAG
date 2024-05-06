import { Skeleton, SimpleGrid, Card } from '@uiKits';

export const HomeSkeleton = () => {
    return (
        <SimpleGrid
            cols={3}
            spacing='lg'
            verticalSpacing='lg'
        >
            {
                Array(21)
                    .fill(0)
                    .map((_, index) => (
                        <Card
                            key={index}
                            shadow='sm'
                            padding='xl'
                            component='a'
                        >
                            <Card.Section>

                                <Skeleton
                                    key={index}
                                    h={200}
                                    mt='sm'
                                />
                            </Card.Section>

                            <Skeleton
                                key={index}
                                h={28}
                                mt='sm'
                            />

                            <Skeleton
                                key={index}
                                h={30}
                                mt='sm'
                            />
                        </Card>
                    ))

            }
        </SimpleGrid>
    );
};
