import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


function App() {

    const users = [
        {
            userName: "mikasounds",
            name: "Mika",
            initialIsFollowing: false
        },
        {
            userName: "midudev",
            name: "Miguel Duran",
            initialIsFollowing: false
        },
        {
            userName: "mouredev",
            name: "Brais Moure",
            initialIsFollowing: true
        },
        {
            userName: "BeeGees",
            name: "Bee Gees",
            initialIsFollowing: true
        }
    ]

    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        name={name}
                    />
                ))
            }
        </section>
    )
}

export default App



