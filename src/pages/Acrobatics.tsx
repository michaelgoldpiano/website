import React from "react";
import Gallery from "../components/Gallery";
import Card from "../components/Card";
import VideoElement, { Orientation } from "../components/Video";


export default function Acrobatics(): JSX.Element {
    return (
        <div className="page">
            <Gallery
                title="Fundamentals"
                cards={[
                    <Card
                        title="H2H Bumps"
                        subtitle="Recorded 2023.02.08"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/h2h_bumps.mp4")}
                            />
                        }
                    />,
                    <Card
                        title="F2H Bumps"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/f2h_bumps.mp4")}
                            />
                        }
                    />,
                    <Card
                        title="F2H Bumps (Slow)"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/f2h_bumps_slow.mp4")}
                            />
                        }
                    />,
                    <Card
                        title="H2H Extended"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/h2h_extended.mp4")}
                            />
                        }
                    />,
                    <Card
                        title="RH2H and Relocate"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/rh2h_relocate.mp4")}
                            />
                        }
                    />,
                    <Card
                        title="H2H Walking"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/h2h_walking.mp4")}
                            />
                        }
                    />,
                    <Card
                        title="Tuck and Straddle Walking"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/tuck_straddle_walking.mp4")}
                            />
                        }
                    />,
                ]}
            />
            <Gallery
                title="Competency Skills"
                cards={[
                    <Card
                        title="Toe Pitch to RF2H"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/pitch_rf2h.mp4")}
                            />
                        }
                    />,
                    <Card
                        title="Knot"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/knot.mp4")}
                            />
                        }
                    />,
                    <Card
                        title="Inlocate and Shoot Through"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/inlocate_h2h_shootthrough.mp4")}
                            />
                        }
                    />,
                    <Card
                        title="F2H Bum Down"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/f2h_bumdown.mp4")}
                            />
                        }
                    />,
                ]}
            />
            <Gallery
                title="Bonus Skills"
                cards={[
                    <Card
                        title="Boom Boom to H2H"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/boomboom_h2h.mp4")}
                            />
                        }
                    />,
                    <Card
                        title="Tam Pam to H2H"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/tampam_h2h.mp4")}
                            />
                        }
                    />,
                    <Card
                        title="Cartwheel to H2h"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/cartwheel_h2h.mp4")}
                            />
                        }
                    />,
                    <Card
                        title="Pitch to Handstand on Shoulders"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/pitch_handstandshoulders.mp4")}
                            />
                        }
                    />,
                    <Card
                        title="Standing Shoulder Stand"
                        subtitle="Recorded 2023.02.15"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/highshoulderstand.mp4")}
                            />
                        }
                    />,
                ]}
            />
            <Gallery
                title="Group Work"
                cards={[
                    <Card
                        title="3-High"
                        subtitle="Recorded 2023.02.05"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/3high.mp4")}
                            />
                        }
                    />,
                    <Card
                        title="Swing to H2H"
                        subtitle="Recorded 2023.02.013"
                        description={ null }
                        media={
                            <VideoElement
                                orientation={Orientation.PORTRAIT}
                                src={require("../assets/acrobatics/swing_h2h.mp4")}
                            />
                            // <iframe
                            //     src="https://drive.google.com/file/d/1crZpDUbZMa_3JjqpjRU3SGey8Uh_1uqU/preview"
                            //     title="Google Drive Video"
                            //     width="640"
                            //     height="480"
                            //     allow="autoplay">
                            // </iframe>
                        }
                    />,
                    // <Card
                    //     title="Banquine"
                    //     subtitle="Recorded 2023.02.05"
                    //     description={ null }
                    //     media={
                    //         <Video
                    //             orientation={Orientation.PORTRAIT}
                    //             src={require("../assets/acrobatics/banquine.mp4")}
                    //         />
                    //     }
                    // />,
                ]}
            />
        </div>
    );
}