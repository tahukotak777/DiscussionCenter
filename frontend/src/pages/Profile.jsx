import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import NavBar from '../components/NavBar'

export default function Profil () {
    const authUser = useAuthUser()
    return (
        <>
        <NavBar />
        <section cla>
            <h1>{authUser.user}</h1>
            huuuu
        </section>
        </>
    )
}