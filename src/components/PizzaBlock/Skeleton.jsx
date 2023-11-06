import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="140" cy="140" r="110" />
    <rect x="0" y="270" rx="5" ry="5" width="280" height="27" />
    <rect x="0" y="317" rx="5" ry="5" width="280" height="76" />
    <rect x="128" y="413" rx="20" ry="20" width="152" height="45" />
    <rect x="0" y="422" rx="5" ry="5" width="91" height="27" />
  </ContentLoader>
);

export default Skeleton;
