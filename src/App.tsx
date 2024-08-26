import useAuthStateChanged from "./hooks/use-auth-state-changed.ts";
import SignIn from "./pages/sign-in.tsx";
import Loading from "./pages/loading.tsx";
import Layout from "./components/layout";
import Notes from "./pages/notes.tsx";


function App() {
    const authState = useAuthStateChanged()

    if (authState === 'loading') return <Loading/>
    if (authState === 'null') return <SignIn/>

    return (
        <Layout>
            <Notes/>
        </Layout>
    )
}

export default App
