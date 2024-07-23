import { BaseEdge, EdgeText, getBezierPath, getSimpleBezierPath, getSmoothStepPath, getStraightPath } from '@xyflow/react';
 
export function CustomEdgeLabel({ label ,sourceX,
  sourceY,
  targetX,
  targetY
  , ...props}) {
  // const [edgePath] = getStraightPath({
  //   sourceX: props.sourceX,
  //   sourceY: props.sourceY,
  //   targetX: props.targetX,
  //   targetY:  props.targetY,
  // })
  const [path, labelX, labelY, offsetX, offsetY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition: 'bottom',
    targetX,
    targetY,
    targetPosition: 'top',
    borderRadius:0,
  
  });
  // console.log(edgePath)
  return (
    <>
    <BaseEdge path={path} offsetX={offsetX} offsetY={offsetY} {...props} />
    <EdgeText
      x={labelX}
      y={labelY}
      label={label}
      labelStyle={{ fill: 'white' }}
      labelShowBg
      labelBgStyle={{ fill: 'lightgreen' }}
      labelBgPadding={[2, 4]}
      labelBgBorderRadius={2}
    />
    </>
  );
}