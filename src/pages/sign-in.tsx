import {IconBrandGoogleFilled} from "@tabler/icons-react";
import {Button, Center} from "@mantine/core";
import {auth} from "../config/firebase.ts";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);

const SignIn = () => {
    return (
        <Center h={'100vh'}>
            <Button
                leftSection={<IconBrandGoogleFilled />}
                variant='outline'
                onClick={signInWithGoogle}>
                Login with Google
            </Button>
        </Center>

    );
};

export default SignIn;