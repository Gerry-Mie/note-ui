import {Button, Modal, Stack, Textarea, TextInput} from "@mantine/core";
import {usePost} from "../../../hooks/react-query.ts";
import {useForm} from "@mantine/form";
import {useState} from "react";
import {showNotification} from "@mantine/notifications";

type Props = {
    onSaved: () => void
}

const CreateNote = ({onSaved}: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const mutation = usePost('/api/note', {
        onSuccess: () => {
            showNotification({message: 'Saved', color: 'green'})
            onSaved()
            setIsOpen(false)
        },
        onError: ()=> {
            showNotification({message: 'Error', color: 'red'})
        }
    })

    const f = useForm({
        initialValues: {
            title: '',
            content: ''
        }
    })

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>New Note</Button>
            <Modal title={'Note'} opened={isOpen} onClose={() => setIsOpen(false)}>
                <form onSubmit={f.onSubmit(v => mutation.mutate(v))}>
                    <Stack gap={10}>
                        <TextInput label={'Title'} {...f.getInputProps('title')}/>
                        <Textarea label={'Content'} {...f.getInputProps('content')}/>
                        <Button type={'submit'} loading={mutation.isPending}>Save</Button>
                    </Stack>
                </form>
            </Modal>
        </>
    );
};

export default CreateNote;