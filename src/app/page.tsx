import PersonalInfo from "@/components/personal-info";
import SkillIntroduction from "@/components/skill-introduction";
import WorkExperience from "@/components/work-experience";
import ProjectExperience from "@/components/project-experience";
import EducationExperience from "@/components/education-experience";
import SkillsAndCertificates from "@/components/skills-and-certificates";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white font-sans shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <PersonalInfo />
      <EducationExperience />
      <SkillsAndCertificates />
      <SkillIntroduction />
      <WorkExperience />
      <ProjectExperience />
    </div>
  );
}
