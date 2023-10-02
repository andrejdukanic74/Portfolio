import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { HomeBanner } from "@components/Banner";
import { MotionBTTContainer } from "@components/Motion";

import { Experience } from "src/experience/Experience";
import { Projects } from "src/projects/Projects";
import { Education } from "src/education/Education";
import { Skill } from "src/skills/Skill";
import { Reference } from "src/reference/Reference";
import { Contact } from "src/contact/Contact";

import {
    profile,
    experiences,
    projects,
    educations,
    skills,
    references,
    contact
} from "Database/Database";



export const Dashboard = () => {
    return (
        <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
            {/* { Page Banner } */}
            <HomeBanner children={profile} />
            {/* Components Container */}
            <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                {/* Experience */}
                <MotionBTTContainer
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <SectionContainer id="experience" className="Experience">
                        <BadgeGroup alignment="center">
                            <BadgeMessage>Experience</BadgeMessage>
                            <BadgeIcon icon="material-symbols:deployed-code-history-outline" />
                        </BadgeGroup>
                        <Experience children={experiences} />
                    </SectionContainer>
                </MotionBTTContainer>
                {/* Projects */}
                <MotionBTTContainer
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <SectionContainer
                        id="projects"
                        className="projects"
                    >
                        <BadgeGroup alignment="center">
                            <BadgeMessage>Projects</BadgeMessage>
                            <BadgeIcon icon="iconoir:developer" />
                        </BadgeGroup>
                        <Projects children={projects} />
                    </SectionContainer>
                </MotionBTTContainer>
                {/* Education */}
                <MotionBTTContainer
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <SectionContainer
                        id="education"
                        className="education"
                    >
                        <BadgeGroup alignment="center">
                            <BadgeMessage>Education</BadgeMessage>
                            <BadgeIcon icon="cil:education" />
                        </BadgeGroup>
                        <Education children={educations} />
                    </SectionContainer>
                </MotionBTTContainer>
                {/* Skills */}
                <MotionBTTContainer
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <SectionContainer id="skills" className="Skills">
                        <BadgeGroup alignment="center">
                            <BadgeMessage>Skills</BadgeMessage>
                            <BadgeIcon icon="ph:stack-simple-light" />
                        </BadgeGroup>
                        <Skill children={skills} />
                    </SectionContainer>
                </MotionBTTContainer>
                <MotionBTTContainer
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <SectionContainer id="references" className="References">
                        <BadgeGroup alignment="center">
                            <BadgeMessage>References</BadgeMessage>
                            <BadgeIcon icon="carbon:recommend" />
                        </BadgeGroup>
                        <Reference children={references} />
                    </SectionContainer>
                </MotionBTTContainer>
                <MotionBTTContainer
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <SectionContainer id="contact" className="Contact">
                        <BadgeGroup alignment="center">
                            <BadgeMessage>Contact Me</BadgeMessage>
                            <BadgeIcon icon="fluent-mdl2:edit-contact" />
                        </BadgeGroup>
                        <Contact children={contact} />
                    </SectionContainer>
                </MotionBTTContainer>
            </SectionContainer>
        </div>
    )
}


