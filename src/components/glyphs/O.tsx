import React from 'react';

export const O = (props: React.SVGProps<SVGCircleElement>) => (
    <g>
        <circle cx="50" cy="50" r="50" {...props} />
        <circle cx="50" cy="50" r="32" fill="#ffffff" />
    </g>
);
