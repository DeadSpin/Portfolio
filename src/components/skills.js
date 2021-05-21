import React from 'react';
import { Progress } from 'react-sweet-progress';

class Skills extends React.Component {
    render() {
        return (
            <section id="skill" className="skills section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row skills-content">
                        <div className="col-lg-6">
                            <div className="progress">
                                <span className="skill">HTML <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <Progress percent={80} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">CSS <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                    <Progress percent={75} />
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <Progress percent={80} />
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Github <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <Progress percent={100} />
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">ReactJs <i className="val">25%</i></span>
                                <div className="progress-bar-wrap">
                                    <Progress percent={25} />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="progress">
                                <span className="skill">PHP <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <Progress percent={80} />
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Laravel <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <Progress percent={90} />
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Angular <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                    <Progress percent={75} />
                                </div>
                            </div>
                            
                            <div className="progress">
                                <span className="skill">Ms Office <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <Progress percent={80} />
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">NodeJs <i className="val">25%</i></span>
                                <div className="progress-bar-wrap">
                                    <Progress percent={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;