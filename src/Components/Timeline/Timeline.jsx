import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool, MdCheckCircle, MdAssessment, MdHandshake } from "react-icons/md";

function Timeline() {
    return (
        <div style={{ marginTop: '95px', backgroundColor: "#3a3a3a" }}>
            <VerticalTimeline lineColor="#fff">
                <VerticalTimelineElement
                    contentStyle={{ backgroundColor: "#34495e", color: "#fff" }}
                    icon={<MdWork />}
                    iconStyle={{ backgroundColor: "#2c3e50", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "5px solid #2c3e50" }}
                >
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2  style={{ color: 'aqua', fontWeight: 'bold', textDecoration: 'underline' }} className="text-center font-bold underline text-2xl text-gray-900">Job Posting</h2>
                        <p className="text-center">This is the first step where we post the job and wait for potential candidates to apply.</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ backgroundColor: "#34495e", color: "#fff" }}
                    icon={<MdSchool />}
                    iconStyle={{ backgroundColor: "#2c3e50", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "5px solid #2c3e50" }}
                >
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2  style={{ color: 'aqua', fontWeight: 'bold', textDecoration: 'underline' }} className="text-center font-bold underline text-2xl text-gray-900">Screening Applications</h2>
                        <p className="text-center">In this step, we review all the applications and shortlist candidates for the interview round.</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ backgroundColor: "#34495e", color: "#fff" }}
                    icon={<MdAssessment />}
                    iconStyle={{ backgroundColor: "#2c3e50", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "5px solid #2c3e50" }}
                >
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2  style={{ color: 'aqua', fontWeight: 'bold', textDecoration: 'underline' }} className="text-center font-bold underline text-2xl text-gray-900">Assessments</h2>
                        <p className="text-center">This is the step where we conduct assessments to evaluate the skills and abilities of the candidates.</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ backgroundColor: "#34495e", color: "#fff" }}
                    icon={<MdCheckCircle />}
                    iconStyle={{ backgroundColor: "#2c3e50", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "5px solid #2c3e50" }}
                >
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2  style={{ color: 'aqua', fontWeight: 'bold', textDecoration: 'underline' }} className="text-center font-bold underline text-2xl text-gray-900">Interview & Selection</h2>
                        <p className="text-center">The final step involves interviewing the shortlisted candidates and selecting the best fit for the job.</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ backgroundColor: "#34495e", color: "#fff" }}
                    icon={<MdHandshake />}
                    iconStyle={{ backgroundColor: "#2c3e50", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "5px solid #2c3e50" }}
                >
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2  style={{ color: 'aqua', fontWeight: 'bold', textDecoration: 'underline' }} className="text-center font-bold underline text-2xl text-gray-900">Onboarding</h2>
                        <p className="text-center">This is the step where we welcome the selected candidate to our team and provide them with the necessary resources and information to start their journey with us.</p>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;
