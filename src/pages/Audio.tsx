import React from "react";


export default function Audio(): JSX.Element {
    return (
        <div className="page">
            <div className="card">
                <h1>Scriabin - Piano Sonata No.2 in G-sharp minor, Op.19 "Sonata-Fantasy"</h1>
                <h3>Recorded 2017.10.21</h3>
                <p>
                    This video recording came out of a performance lecture
                    for students and parents from when I worked as a piano
                    instructor at Music 101 in Melrose, MA.  This is one of
                    Scriabin's most popular and well known pieces, modeled after
                    Beethoven's "Moonlight Sonata."  The ocean's turbulent moods
                    is the metaphor for the psyche's tumultuous inner life.
                </p>
                <p>
                    From Scriabin's notes:
                </p>
                <blockquote cite="https://www.hyperion-records.co.uk/dw.asp?dc=W8636_67131">
                    "The first section represents the quiet of a southern night
                    on the seashore; the development is the dark agitation of
                    the deep, deep sea. The E major middle section shows
                    caressing moonlight coming up after the first darkness
                    of night."
                </blockquote>
                <p>
                    Enjoy passage on the SS Scriabin.
                </p>
                <iframe
                    className="youtube"
                    src="https://www.youtube-nocookie.com/embed/D5CuRF1oIcA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>

            <div className="card">
                <h1>Montsalvatge - Sonatine para Yvette, Mvt.1 "Vivo e spiritoso"</h1>
                <h3>Recorded 2015.12.01</h3>
                <p>
                    I recently rediscovered some recordings from during my time
                    at Longy.  I've selected a few of my favorites, including this
                    spirited work of Xavier Montsalvatge.  His daughter
                    Yvette came home humming newfound music from the genie of
                    her childhood imagination, which he transformed into works of
                    modernist splendor for piano.
                </p>
                <video controls className="landscape">
                    <source
                        src={require("../assets/piano/Xavier Montsalvatge - Sonatine para Yvette - 1 Vivo e spiritoso.mp4")}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="card">
                <h1> Montsalvatge - Sonatine para Yvette, Mvt.3 "Allegretto"</h1>
                <h3>Recorded 2015.12.01</h3>
                <p>
                    Please enjoy a favorite childhood tune woven into this
                    "serious" classical work.
                </p>
                <video controls className="landscape">
                    <source
                        src={require("../assets/piano/Xavier Montsalvatge - Sonatine para Yvette - 3 Allegretto.mp4")}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="card">
                <h1>Beethoven - Sonata 18, Op.31 No.3 Mvt.1 Allegro "The Hunt"</h1>
                <h3>Recorded 2015.12.01</h3>
                <p>
                    This playful work is based around a theme that mimics
                    a horn call.  Beethoven crafted this work in his early
                    period of his life, evident in this sonata's exuberance,
                    comedy, and endlessly cheerful brightness.  Moments of
                    spurious depth hint at the diagnosis of deafness
                    that he was becoming acutely aware of.
                </p>
                <video controls className="landscape">
                    <source
                        src={require("../assets/piano/Ludwig van Beethoven - Sonata 31-3 - 1 Allegro.mp4")}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="card">
                <h1>Ravel - Le Tombeau de Couperin, Mvt.1 Prélude</h1>
                <h3>Recorded 2015.12.01</h3>
                <p>
                    During WW1, Ravel was inspired by the
                    classical works of Couperin from hundreds of years
                    earlier, and from the immediately tragic events at
                    the forefront of his experience.  Each movement
                    is in the form of a Baroque dance suite, and each
                    movement is also dedicated to various friends lost
                    in combat.
                </p>
                <p>
                    This movement, the Prélude, is perpetually in motion, as
                    though to be played on a harpsichord that Couperin or
                    Scarlatti used.  The harmonies are of Ravel's time, with
                    chromaticism and influences of jazz.  The flurry at the
                    finish dispels any seriousness that the piece may have
                    built up.  Ravel noted:
                </p>
                <blockquote>
                    "The dead are sad enough, in their eternal silence."
                </blockquote>
                <p>
                    Please enjoy this light-hearted piece, one of my all-time
                    favorites.
                </p>
                <video controls className="landscape">
                    <source
                        src={require("../assets/piano/Maurice Ravel - Le Tombeau de Couperin - 1 Prelude.mp4")}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="card">
                <h1>Scarlatti - Keyboard Sonata, K141</h1>
                <h3>Recorded 2015.12.01</h3>
                <p>
                    Written for harpsichord, this virtuosic piece is filled
                    with all the brilliant pyrotechnical antics common in
                    Domenico Scarlatti's literature.  Spanish influence is
                    evident - the repeated notes, arpeggios, syncopations,
                    ornamentations, surprising dissonances, and strums of
                    the left hand are all techniques commonly used in
                    Spanish classical guitar works.  Note that this
                    "sonata" is not in sonata form, and instead uses binary
                    form (like most of his works), as it was written before
                    the sonata took on its current meaning.
                </p>
                <video controls className="landscape">
                    <source
                        src={require("../assets/piano/Domenico Scarlatti - Keyboard Sonata K141 - Allegro.mp4")}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="card">
                <h1>Granados - Goyescas, Mvt.4 Quejas o la maja y el ruiseñor</h1>
                <h3>Recorded 2015.11.30</h3>
                <p>
                    The Goyescas are like an opera for piano, a journey
                    in romance and death reminiscent of the passion
                    behind the paintings of Goya.
                </p>
                <p>
                    Granados on the Goyescas:
                </p>
                <blockquote>
                    “I am enamored with the psychology of Goya,
                    with his palette, with him, with his muse the
                    Duchess of Alba, with his quarrels with his
                    models, his loves and flatteries. That rose-white
                    of the cheeks, contrasting with the blend
                    of black velvet; those supple waists,
                    subterranean creatures, hands of mother-of-pearl
                    and jasmine resting on black marble—they intrigue
                    me. I would like to combine the sentimental,
                    the amorous, the passionate, the dramatic, and
                    the tragic, as Goya did.
                </blockquote>
                <p>
                    This movement, "The maiden and the nightingale,"
                    evokes the scene of a maiden, alone, singing a
                    heartrending nocturne on the turmoils of her love.  In
                    the end, an eavesdropping nightingale gives an elegant,
                    fluttering response.
                </p>
                <video controls className="landscape">
                    <source
                        src={require("../assets/piano/Enrique Granados - Quejas o la maja y el ruisenor.mp4")}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="card">
                <h1>4 Impromptus</h1>
                <h3>Recorded 2014.12.16</h3>
                <p>
                    These are four structured improvisations of different,
                    complementary moods.  They are distinct in what they
                    say yet come together as a whole.  Each piece has a
                    theme that repeatedly drifts away with shifting expressive
                    inclinations.  Inspiration comes from architecture: highly
                    structured, yet varying in infinite iterations.  Like a
                    vine grows from its roots with consistent rules, yet curls
                    and weaves in exploratory directions and divine forms.
                </p>
                <audio controls>
                    <source
                        src={require("../assets/piano/2014.12.16 (Tuesday) 10,30AM Michael Gold.wav")}
                        type="audio/wav"
                    />
                    Your browser does not support the audio tag.
                </audio>
            </div>
        </div>
    );
}