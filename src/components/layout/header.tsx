import {Container, Flex, Group, Image, Text, Title} from "@mantine/core";
import {useUserStore} from "../../hooks/store/use-user-store.ts";

const Header = () => {
    const user = useUserStore(state => state.data)

    return (
        <Container size={'md'} px={'md'} h={'100%'}>
            <Flex justify={'space-between'} align={'center'} h={'100%'}>
                <Title>Notes</Title>
                {!!user&& (
                    <Group gap={10}>
                        <Image h={40} radius={'100%'} src={user.photoUrl}/>
                        <Text fw={'bold'}>{user.name}</Text>
                    </Group>
                )}
            </Flex>
        </Container>
    );
};

export default Header;