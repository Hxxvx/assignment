import Link from 'next/link';

export default function FirstPost() {
    return (
        <>

            <h1><center>My Hobbies</center></h1>
            <p><center>I like to read comics and web novels.</center></p>
            <h2>
                <Link href="/">
                    <a><center>Back to home</center></a>
                </Link>
            </h2>
        </>
    );
} 