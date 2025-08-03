import React from 'react';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  toc: TocItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ toc }) => {
  return (
    <nav className="toc-fixed">
      <div className="toc-title">Table of Contents</div>
      <ul className="toc-list">
        {toc.map((item) => (
          <li key={item.id} className={`toc-item toc-level-${item.level}`}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (el) {
                  const y = el.getBoundingClientRect().top + window.pageYOffset - 74;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                  // Update URL hash without jumping
                  window.history.replaceState(null, '', `#${item.id}`);
                }
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
