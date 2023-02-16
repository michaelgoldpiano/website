import React from "react";
// import "../css/style.css";


export default function About(): JSX.Element {
    return (
        <div className="page">
            <div className="page">
                <h1>Michael Gold</h1>
                <h2>Software Engineer, Pianist, Acrobat</h2>
            </div>
            <div className="img">
                <img src={require("../assets/images/headshot_02.jpg")} alt="headshot" />
                <p>
                    Originally from Chicago, Michael Gold studied at Lawrence
                    University in Appleton Wisconsin with Catherine Kautsky,
                    receiving his Bachelor's in piano performance there in 2014.
                    He went on to receive a Masters in piano performance in 2016
                    while studying with Hugh Hinton at The Longy School of Music
                    in Cambridge, Massachusetts.  Michael has advanced in numerous
                    piano competitions, including receiving first place honors in
                    the MTNA Young Artist competition in Wisconsin and winning the
                    annual Longy Honors Competition.  Since graduating from Longy,
                    Michael has been a teacher, performer, and accompanist in the
                    Boston area.
                </p>
            </div>
            <p>
                Michael has particular passion towards French and Spanish
                music, having pursued these national styles with zeal for
                much of his time at the piano.  In taking this spirit to
                performances and competitions, he has received accolades
                from teachers and judges on his interpretations of the music
                of Ravel and Granados, particularly for the Miroirs and
                Goyescas.  Michael also plays jazz and has studied under
                Patty Darling and Peter Cassino.
            </p>

            {/* <p>
                Beyond performances, Michael has interest in both everyday
                discipline and overarching intuition, keeping a running
                thread of simplicity and consistency in piano's complexity.
                To this end he has studied his way through the music of Bach
                daily, seeking through immersion to create an intuitive
                understanding for one of keyboard literature's most
                thoughtful, mathematical, and complex creators.
            </p> */}

            <p>
                Yet studying the creations of others isn't the whole of what
                the piano has to offer.  Through these influences Michael
                finds inspiration to create his own content.  The counterpoint
                of early music, the harmonies of jazz, and the dynamic
                intimacy of the French and Spanish composers meet in a vortex,
                blending to inspire improvisation and composition.  Though
                inspiration may come from what has been done before, life
                seems incomplete without taking what one has experienced
                and blossoming anew.
            </p>
            <p>
                Michael has also participated in FAWM for several consecutive
                years, which is a challenge to create 14 compositions in the
                28 days of February.
            </p>

            <h3>On Teaching</h3>

            <p>
                Michael believes private teaching is the ideal outlet to share
                the intricacy and intimacy of piano with others.  He is
                invigorated by the challenge of communicating ideas concisely
                and thoroughly, bringing ordered yet creative understanding
                to piano.  Michael believes in meeting students where they
                are, setting goals, and moving students toward their
                potential.  Ultimately, Michael guides students towards
                independent thought and decision-making, so that students
                become confident musicians in their own right.
            </p>
            <p>
                A strong believer in mastering the basics, he primarily focuses
                on strengthening note-reading and listening skills.  This means
                that lessons are often about sight-reading, sheet music
                comprehension, exactness of rhythm, the articulation of each
                note, and how to listen to performances.  Through solidifying
                the basics, the natural strengths that students bring with
                them shine through more readily.
            </p>
            <p>
                Michael thoroughly touches on all aspects of piano playing with
                detailed insight, giving a whole picture of important facets to
                focus on.  Michael finds new ways to contextualize what one
                understands in order to connect all aspects of piano into a
                holistic understanding.  Studying piano connects to rewards
                beyond sound: It is his conviction that our everyday experience
                inspires our growth in music, and growing musically likewise
                inspires our everyday lives.
            </p>

            <div>
                <p>
                    Today you can find Michael teaching piano privately,
                    performing with collaborators, singing early music with
                    choirs, biking, climbing, practicing handstands and
                    acrobatics, and working in the field of computer science
                    (another passion).
                </p>
            </div>
        </div>
    );
}