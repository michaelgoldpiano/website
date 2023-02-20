import React from "react";
import Keyboard from "../keyboard/Keyboard";
import Card from "../components/Card";


export default function Software(): JSX.Element {
    return (
        <div className="page">
            <Card
                title="Keyboard"
                subtitle=""
                description={
                    <div>
                        <p>
                            Enjoy this keyboard created using React/TypeScript.
                        </p>
                        <p>
                            <a href="https://github.com/michaelgoldpiano/keyboard">
                                Code
                            </a>
                        </p>
                    </div>
                }
                media={ <Keyboard /> }
            />
            <Card
                title="PBench: RedHat Benchmarking and Performance Analysis Framework"
                subtitle=""
                description={
                    <div>
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
                        <p>
                            <a href="https://github.com/michaelgoldpiano/pbench">
                                Code
                            </a>
                        </p>
                    </div>
                }
                media={ null }
            />
            <Card
                title="Compiler in Python for Python"
                subtitle=""
                description={
                    <div>
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
                        <p>
                            <a href="https://github.com/michaelgoldpiano/python_compiler">
                                Code
                            </a>
                        </p>
                    </div>
                }
                media={ null }
            />
            <Card
                title="This Website"
                subtitle=""
                description={
                    <div>
                        <p>
                            Created using React/Typescript.
                        </p>
                        <a href="https://github.com/michaelgoldpiano/website">
                            Code
                        </a>
                    </div>
                }
                media={ null }
            />
        </div>
    );
}