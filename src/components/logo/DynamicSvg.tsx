import React, { useRef, useEffect, useState } from "react";

type DynamicSVGComponentProps = {
  children?: React.ReactNode;
};
const DynamicSVGComponent = ({ children }: DynamicSVGComponentProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [viewBox, setViewBox] = useState("0 0 100 100"); // Initial viewBox, adjust as needed
  const [svgWidth, setSvgWidth] = useState(100);
  const [svgHeight, setSvgHeight] = useState(100);

  // // Calculate and set viewBox based on actual SVG content dimensions
  // useEffect(() => {
  //   const svgElement = svgRef.current;
  //   if (svgElement) {
  //     const boundingBox = svgElement.getBBox();
  //     const newViewBox = `${boundingBox.x} ${boundingBox.y} ${boundingBox.width} ${boundingBox.height}`;
  //     setViewBox(newViewBox);
  //   }
  // }, []);

  const updateViewBox = () => {
    if (svgRef.current) {
      const bbox = svgRef.current.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
      setSvgWidth(bbox.width);
      setSvgHeight(bbox.height);
    }
  };

  useEffect(() => {
    if (!svgRef.current) return;
    updateViewBox(); // Initial update
    // If the SVG changes are based on user interactions or animations:
    const observer = new ResizeObserver(updateViewBox);
    observer.observe(svgRef.current);

    return () => observer.disconnect(); // Clean up observer on component unmount
  }, [children]); // Update on changes in children

  return (
    <svg ref={svgRef} width={svgWidth} height={svgHeight} viewBox={viewBox}>
      {children}
    </svg>
  );
};

export default DynamicSVGComponent;
