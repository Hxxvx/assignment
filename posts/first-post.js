import Link from 'next/link';

export default function FirstPost() {
    return (
        <>

            <h1><center>My Personal infomration</center></h1>
            <p><center>Name : Ayoung Kim</center></p>
            <p><center>Age : 21</center></p>
            <p><center>Birthday : 2002. 03. 05</center></p>
            <h2>
                <Link href="/">
                    <a><center>Back to home</center></a>
                </Link>
            </h2>
        </>
    );
} 