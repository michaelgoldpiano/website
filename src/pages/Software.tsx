import React from "react";
import Keyboard from "../keyboard/Keyboard";
import Card from "../components/Card";


export default function Software(): JSX.Element {
    return (
        <div className="page">
            <Card
                title={"Keyboard"}
                subtitle={
                    <a href="https://github.com/michaelgoldpiano/keyboard">
                        Code
                    </a>
                }
                description={
                    <p>
                        Enjoy this keyboard created using
                        React/TypeScript.  After deep-diving into the
                        Web Audio API I've learned a lot about how
                        audio waves work and how to generate clean sounds.
                        I'm always on the look-out for ways to merge my
                        experiences in Piano and in Software.  Regardless
                        of Whether it is digital or acoustic, I hope that
                        more people come to find the joy in piano.
                    </p>
                }
                media={ <Keyboard /> }
            />
            <Card
                title={"PBench: RedHat Benchmarking and Performance Analysis Framework"}
                subtitle={
                    <a href="https://github.com/michaelgoldpiano/pbench">
                        Code
                    </a>
                }
                description={
                    <p>
                        Pbench Dashboard is a web-based platform for
                        consuming indexed performance benchmark
                        data. The platform provides a consolidated
                        view of benchmark data within tables, charts,
                        and other powerful visualizations. Users are
                        able to quickly navigate through benchmark
                        data and tune analytics through comparison
                        tools for in-depth analysis.
                    </p>
                }
                media={ null }
            />
            <Card
                title={"Compiler in Python for Python"}
                subtitle={
                    <a href="https://github.com/michaelgoldpiano/python_compiler">
                        Code
                    </a>
                }
                description={
                    <p>
                        This is a personal project for compiling Python
                        code into Assembly code. The project is written
                        in Python, leveraging the new Python feature of
                        structural pattern matching. This does not compile
                        all of Python, as Python is enormous and beyond
                        the scope of a personal project. I have named
                        the generalized subset of Python that is compiled
                        here "Snake."
                    </p>
                }
                media={ null }
            />
            <Card
                title={"Personal Website and Server"}
                subtitle={
                    <a href="https://github.com/michaelgoldpiano/website">
                        Code
                    </a>
                }
                description={
                    <p>
                        Created using React/TypeScript.  Since I was young,
                        it has been a long-standing goal to build my own
                        website and server.  The initial version was written
                        in vanilla JavaScript, and since then I have
                        tried my hand using a variety of different languages
                        before settling now on React/TypeScript.
                    </p>
                }
                media={ null }
            />
        </div>
    );
}