import Link from 'next/link'

const Index = () => (
    <div>
        <h1>SSR MAGICIAN</h1>
        {/* <a href="./about">About</a> */}
        <Link href="/about">
            <button>About</button>
        </Link>
        <Link href="/robots">
            <button>robots</button>
        </Link>
    </div>
)

export default Index