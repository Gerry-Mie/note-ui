import {Note} from "../../../types/notes.ts";
import {Paper, Text, Title} from "@mantine/core";

type Props = {
    note: Note
}
const NoteItem = ({note}: Props) => {
    return (
        <Paper shadow={'md'} p={10} key={note._id}>
            <Title order={4}>{note.title}</Title>
            <Text>{note.content}</Text>
        </Paper>
    );
};

export default NoteItem;