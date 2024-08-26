import {useGet} from "../hooks/react-query.ts";
import {Box, Button, Group, Loader, Pagination, Stack} from "@mantine/core";
import {ApiResponse} from "../types/response.ts";
import {Note} from "../types/notes.ts";
import CreateNote from "../components/pages/note/create-note.tsx";
import {useState} from "react";
import {getFirebaseToken} from "../config/firebase.ts";
import {showNotification} from "@mantine/notifications";
import NoteItem from "../components/pages/note/note-item.tsx";

const Notes = () => {
    const [page, setPage] = useState(1)
    const notes = useGet<ApiResponse<Note>>(`/api/note?page=${page}&limit=2`,{
        queryKey: ['notes', page]
    })

    if (notes.isPending) return <Loader type={'dots'}/>
    if (notes.isError) return <p>something went wrong</p>

    const copyToken = async () => {
        const token = await getFirebaseToken();
        if (token) {
            await navigator.clipboard.writeText(token);
            showNotification({message: 'Copied to clipboard', color: 'green'})
        }
    }

    return (
        <Box>
            <Group justify={'space-between'}>
                <CreateNote onSaved={notes.refetch}/>
                <Button onClick={copyToken}>Copy Token</Button>
            </Group>
            <Stack gap={10} mt={10}>
                {
                    !notes.data?.docs?.length ? (
                        <p>Empty</p>
                    ) : (
                        <>
                            {notes.data.docs.map((note) => (<NoteItem key={note._id} note={note}/>))}
                            <Pagination total={ Math.ceil(notes.data.totalDocs/2)} value={page} onChange={setPage}/>
                        </>
                    )
                }
            </Stack>

        </Box>
    );
};

export default Notes;
