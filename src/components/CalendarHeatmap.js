import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface IProps {
    data?: number[];
}

/* Component */
export const CalendarHeatmap = (props: IProps) => {


    return (
        <svg
            className="d3-component"
            width={400}
            height={200}
            ref={d3Container}
        />
    );
}
