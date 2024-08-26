import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import '@mantine/notifications/styles.css';
import {Notifications} from "@mantine/notifications";

const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider>
            <Notifications />
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </MantineProvider>
    </StrictMode>,
)
