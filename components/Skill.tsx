export interface SkillData {
  title: string;
  value: string;
}

interface SkillProps {
  data: SkillData;
}

export default function Skill({ data }: SkillProps) {
  return (
    <div className="skill">
      <div className="skill-info clearfix">
        <div className="skill-title">{data.title}</div>
        <div className="skill-value">{data.value}</div>
      </div>
      <div className="skill-progress-bar">
        <div className="skill-percentage" style={{ width: data.value }}></div>
      </div>
    </div>
  );
}
