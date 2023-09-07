import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { useEffect, useState } from 'react';

export default function Home() {
    const [reloadCount, setReloadCount] = useState(0);

    useEffect(() => {
        // This effect will run when the component mounts and each time reloadCount changes.
        // To make it run twice, increment reloadCount and set it to 2.
        if (reloadCount < 2) {
            setReloadCount(reloadCount + 1);
        }
    }, [reloadCount]); // Add reloadCount as a dependency

    return (
        <div>
            <Head>
                <title>Mukul | Software Engineer</title>
                <meta
                    name="description"
                    content="I’m a software engineer, doing my Physics major/CS-Math minor minor at Drexel University."
                />
                <link rel="icon" href="/fav.png" />
            </Head>
            <Main />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}
