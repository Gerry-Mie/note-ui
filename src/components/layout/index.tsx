import {AppShell, Container} from "@mantine/core";
import {ReactNode} from "react";
import Header from "./header.tsx";

type Props = {
    children?: ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <AppShell
            header={{ height: 60 }}
            padding="md"
        >
            <AppShell.Header>
               <Header/>
            </AppShell.Header>

            <AppShell.Main bg={'#f1f1f1'}>
                <Container size={'md'} p={'md'}>
                {children}
                </Container>
            </AppShell.Main>
        </AppShell>
    );
};

export default Layout;