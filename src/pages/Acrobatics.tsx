import React from "react";
import Gallery from "../components/Gallery";
import Card from "../components/Card";
import Video, { Orientation } from "../components/Video";


export default function Acrobatics(): JSX.Element {
    return (
        <div className="page">
            <Gallery
                title="Fundamentals"
                cards={[
                    <Card
                        title="H2H Bumps WW W WW WW W WW"
                        recordingDate="Recorded 2023.02.08"
                        description=""
                        media={
                            <Video
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/h2h_bumps.mp4")}
                                // type="video/mp4"
                            />
                        }
                    />,
                    <Card
                        title="F2H Bumps"
                        recordingDate="Recorded 2023.02.05"
                        description=""
                        media={
                            <Video
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/f2h_bumps.mp4")}
                                // type="video/mp4"
                            />
                        }
                    />,
                    <Card
                        title="F2H Bumps (Slow)"
                        recordingDate="Recorded 2023.02.05"
                        description="And now for the slooow version"
                        media={
                            <Video
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/f2h_bumps_slow.mp4")}
                            />
                        }
                    />,
                //     <div className="card">
                //     <h1> F2H Bumps (Slow)</h1>
                //     <h3>Recorded 2023.02.05</h3>
                //     <p>
                //         And now for the slooow version...
                //     </p>
                //     <video controls className="portrait">
                //         <source
                //             src={require("../assets/acrobatics/f2h_bumps_slow.mp4")}
                //             type="video/mp4"
                //         />
                //     </video>
                // </div>

            //     <div className="card">
            //         <h1>H2H Extended</h1>
            //         <h3>Recorded 2023.02.05</h3>
            //         <video controls className="portrait">
            //             <source
            //                 src={require("../assets/acrobatics/h2h_extended.mp4")}
            //                 type="video/mp4"
            //             />
            //         </video>
            //     </div>

            //     <div className="card">
            //         <h1>RH2H and Relocate</h1>
            //         <h3>Recorded 2023.02.05</h3>
            //         <video controls className="portrait">
            //             <source
            //                 src={require("../assets/acrobatics/rh2h_relocate.mp4")}
            //                 type="video/mp4"
            //             />
            //         </video>
            //     </div>

            //     <div className="card">
            //         <h1>H2H Walking</h1>
            //         <h3>Recorded 2023.02.05</h3>
            //         <video controls className="portrait">
            //             <source
            //                 src={require("../assets/acrobatics/h2h_walking.mp4")}
            //                 type="video/mp4"
            //             />
            //         </video>
            //     </div>

            //     <div className="card">
            //         <h1>Tuck and Straddle Walking</h1>
            //         <h3>Recorded 2023.02.05</h3>
            //         <video controls className="portrait">
            //             <source
            //                 src={require("../assets/acrobatics/tuck_straddle_walking.mp4")}
            //                 type="video/mp4"
            //             />
            //         </video>
            //     </div>
                ]}
            />

            <h1>Fundamentals</h1>
            <div className="gallery">
                {/* <div className="card">
                    <h1>H2H Bumps</h1>
                    <h3>Recorded 2023.02.08</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/h2h_bumps.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div> */}

                {/* <div className="card">
                    <h1>F2H Bumps</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/f2h_bumps.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div> */}
                
                {/* <div className="card">
                    <h1> F2H Bumps (Slow)</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <p>
                        And now for the slooow version...
                    </p>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/f2h_bumps_slow.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="card">
                    <h1>H2H Extended</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/h2h_extended.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="card">
                    <h1>RH2H and Relocate</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/rh2h_relocate.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="card">
                    <h1>H2H Walking</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/h2h_walking.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="card">
                    <h1>Tuck and Straddle Walking</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/tuck_straddle_walking.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div> */}
            </div>

            <h1>Competency Skills</h1>
            <div className="gallery">
                <div className="card">
                    <h1>Toe Pitch to RF2H</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/pitch_rf2h.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="card">
                    <h1>Knot</h1>
                    <h3>Recorded 2023.02.11</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/knot.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="card">
                    <h1>Inlocate and Shoot Through</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/inlocate_h2h_shootthrough.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="card">
                    <h1>F2H Bum Down</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/f2h_bumdown.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>

            <h1>Bonus Skills</h1>
            <div className="gallery">
                <div className="card">
                    <h1>Boom Boom</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/boomboom_h2h.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="card">
                    <h1>Tam Pam</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/tampam_h2h.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="card">
                    <h1>Cartwheel to H2H</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/cartwheel_h2h.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="card">
                    <h1>Pitch to Handstand on Shoulders</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/pitch_handstandshoulders.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="card">
                    <h1>Standing Shoulder Stand</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/highshoulderstand.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>

            <h1>Group Work</h1>
            <div className="gallery">
                <div className="card">
                    <h1>3-High</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/3high.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="card">
                    <h1>Swing to H2h</h1>
                    <h3>Recorded 2023.02.13</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/swing_h2h.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div>

                {/* <div className="card">
                    <h1>Banquine</h1>
                    <h3>Recorded 2023.02.05</h3>
                    <video controls className="portrait">
                        <source
                            src={require("../assets/acrobatics/banquine.mp4")}
                            type="video/mp4"
                        />
                    </video>
                </div> */}
            </div>
        </div>
    );
}