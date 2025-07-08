import { ReactNode } from 'react';

export interface TimelineItemData {
  period: string;
  periodInfo: ReactNode;
  title: ReactNode;
  description: ReactNode;
}

export default function TimelineItem({ data }: { data: TimelineItemData }) {
  return (
    <div className="timeline-item clearfix">
      <div className="left-part">
        <h5 className="item-period">{data.period}</h5>
        <span className="item-company">{data.periodInfo}</span>
      </div>
      <div className="divider"></div>
      <div className="right-part">
        <h4 className="item-title">{data.title}</h4>
        <div className="item-decription pb-4 ps-2">{data.description}</div>
      </div>
    </div>
  );
}
