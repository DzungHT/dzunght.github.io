import TimelineItem, { TimelineItemData } from './TimelineItem';

export interface TimelineProps {
  items: TimelineItemData[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item, idx) => {
        return <TimelineItem data={item} key={idx} />;
      })}
    </div>
  );
}
