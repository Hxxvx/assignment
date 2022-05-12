import Link from 'next/link';

export default function FirstPost() {
    return (
        <>

            <h1><center>TMI</center></h1>
            <p><center>I ate pizza for lunch yesterday.</center></p>
            <h2>
                <Link href="/">
                    <a><center>Back to home</center></a>
                </Link>
            </h2>
        </>
    );
} 